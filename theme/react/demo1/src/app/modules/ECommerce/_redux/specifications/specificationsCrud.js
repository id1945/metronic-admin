import axios from "axios";

export const SPECIFICATIONS_URL = "api/specifications";

// CREATE =>  POST: add a new specifications to the server
export function createSpecification(specification) {
  return axios.post(SPECIFICATIONS_URL, { specification });
}

// READ
// Server should return filtered specifications by productId
export function getAllProductSpecificationsByProductId(productId) {
  return axios.get(`${SPECIFICATIONS_URL}?productId=${productId}`);
}

export function getSpecificationById(specificationId) {
  return axios.get(`${SPECIFICATIONS_URL}/${specificationId}`);
}

// Server should return sorted/filtered specifications and merge with items from state
// TODO: Change your URL to REAL API, right now URL is 'api/specificationsfind/{productId}'. Should be 'api/specifications/find/{productId}'!!!
export function findSpecifications(queryParams, productId) {
  return axios.post(`${SPECIFICATIONS_URL}find/${productId}`, { queryParams });
}

// UPDATE => PUT: update the specification
export function updateSpecification(specification) {
  return axios.put(`${SPECIFICATIONS_URL}/${specification.id}`, {
    specification
  });
}

// DELETE => delete the specification
export function deleteSpecification(specificationId) {
  return axios.delete(`${SPECIFICATIONS_URL}/${specificationId}`);
}

// DELETE specifications by ids
export function deleteSpecifications(ids) {
  return axios.post(`${SPECIFICATIONS_URL}/deleteSpecifications`, { ids });
}
