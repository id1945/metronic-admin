import remarkTableMock from "./remarkTableMock";
import MockUtils from "./mock.utils";

export default function mockRemarks(mock) {
  mock.onPost("api/remarks").reply(({ data }) => {
    const { remark } = JSON.parse(data);
    const { carId, text = "", dueDate = "01/01/2019", type = 0 } = remark;
    const id = generateRemarkId();
    const newRemark = {
      id,
      carId: +carId,
      text,
      dueDate,
      type
    };
    remarkTableMock.push(newRemark);
    return [200, { remark: newRemark }];
  });

  mock.onPost(/api\/remarksfind\/\d+/).reply(config => {
    const urls = config.url.split("/");
    const id = urls[2];
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const productRemarks = remarkTableMock.filter(el => el.carId === +id);
    const filterdRemarks = mockUtils.baseFilter(productRemarks, queryParams);
    return [200, filterdRemarks];
  });

  mock.onPost("api/remarks/deleteRemarks").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = remarkTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        remarkTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onGet(/api\/remarks\/\d+/).reply(config => {
    const id = config.url.match(/api\/remarks\/(\d+)/)[1];
    const remark = remarkTableMock.find(el => el.id === +id);
    if (!remark) {
      return [400];
    }

    return [200, remark];
  });

  mock.onPut(/api\/remarks\/\d+/).reply(config => {
    const id = config.url.match(/api\/remarks\/(\d+)/)[1];
    const { remark } = JSON.parse(config.data);
    const index = remarkTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    remarkTableMock[index] = { ...remark };
    return [200];
  });

  mock.onDelete(/api\/remarks\/\d+/).reply(config => {
    const id = config.url.match(/api\/remarks\/(\d+)/)[1];
    const index = remarkTableMock.findIndex(el => el.id === +id);
    remarkTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateRemarkId() {
  const ids = remarkTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}
