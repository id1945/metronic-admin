import specificationTableMock from "./specificationTableMock";
import MockUtils from "./mock.utils";

export default function mockSpecifications(mock) {
  mock.onPost("api/specifications").reply(({ data }) => {
    const { specification } = JSON.parse(data);
    const { carId, value = "", specId } = specification;
    const id = generateSpecificationId();
    const newSpecification = {
      id,
      carId: +carId,
      value,
      specId: +specId
    };
    specificationTableMock.push(newSpecification);
    return [200, { specification: newSpecification }];
  });

  mock.onPost(/api\/specificationsfind\/\d+/).reply(config => {
    const urls = config.url.split("/");
    const id = urls[2];
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const specifications = specificationTableMock.filter(
      el => el.carId === +id
    );
    const result = [];
    specifications.forEach(el => result.push(wrapSpecification(el)));
    const filterdSpecifications = mockUtils.baseFilter(result, queryParams);

    return [200, filterdSpecifications];
  });

  mock.onPost("api/specifications/deleteSpecifications").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = specificationTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        specificationTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onGet(/api\/specifications\/\d+/).reply(config => {
    const id = config.url.match(/api\/specifications\/(\d+)/)[1];
    const spec = specificationTableMock.find(el => el.id === +id);
    if (!spec) {
      return [400];
    }

    const specification = wrapSpecification(spec);

    return [200, specification];
  });

  mock.onPut(/api\/specifications\/\d+/).reply(config => {
    const id = config.url.match(/api\/specifications\/(\d+)/)[1];
    const { specification } = JSON.parse(config.data);
    const index = specificationTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    specificationTableMock[index] = { ...specification };
    return [200];
  });

  mock.onDelete(/api\/specifications\/\d+/).reply(config => {
    const id = config.url.match(/api\/specifications\/(\d+)/)[1];
    const index = specificationTableMock.findIndex(el => el.id === +id);
    specificationTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateSpecificationId() {
  const ids = specificationTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}

function wrapSpecification(specification) {
  const newSpec = { ...specification };
  newSpec.name = getSpecNameById(newSpec.specId);
  return newSpec;
}

function getSpecNameById(specId) {
  const specs = [
    "Seats",
    "Fuel Type",
    "Stock",
    "Door count",
    "Engine",
    "Transmission",
    "Drivetrain",
    "Combined MPG",
    "Warranty",
    "Wheels"
  ];
  return specs[specId];
}
