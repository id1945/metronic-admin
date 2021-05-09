export const defaultSorted = [{ dataField: "id", order: "asc" }];
export const sizePerPageList = [
  { text: "1", value: 1 },
  { text: "3", value: 3 },
  { text: "5", value: 5 },
];
export const initialFilter = {
  filter: {
    value: "",
  },
  sortOrder: "asc", // asc||desc
  sortField: "name",
  pageNumber: 1,
  pageSize: 5,
};

export const SPECIFICATIONS_DICTIONARY = [
  { id: 0, name: "Seats" },
  { id: 1, name: "Fuel Type" },
  { id: 2, name: "Stock" },
  { id: 3, name: "Door count" },
  { id: 4, name: "Engine" },
  { id: 5, name: "Transmission" },
  { id: 6, name: "Drivetrain" },
  { id: 7, name: "Combined MPG" },
  { id: 8, name: "Warranty" },
  { id: 9, name: "Wheels" },
];
