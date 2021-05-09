export const defaultSorted = [{ dataField: "id", order: "asc" }];
export const sizePerPageList = [
  { text: "1", value: 1 },
  { text: "3", value: 3 },
  { text: "5", value: 5 }
];
export const initialFilter = {
  filter: {
    text: ""
  },
  sortOrder: "asc", // asc||desc
  sortField: "id",
  pageNumber: 1,
  pageSize: 5
};
