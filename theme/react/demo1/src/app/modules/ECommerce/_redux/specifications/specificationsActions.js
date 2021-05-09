import * as requestFromServer from "./specificationsCrud";
import {specificationsSlice, callTypes} from "./specificationsSlice";

const {actions} = specificationsSlice;

export const fetchSpecifications = (queryParams, productId) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  if (!productId) {
    return dispatch(
      actions.specificationsFetched({ totalCount: 0, entities: null })
    );
  }

  return requestFromServer
    .findSpecifications(queryParams, productId)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.specificationsFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find specifications";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchSpecification = id => dispatch => {
  if (!id) {
    return dispatch(
      actions.specificationFetched({ specificationForEdit: undefined })
    );
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getSpecificationById(id)
    .then(response => {
      const specification = response.data;
      dispatch(
        actions.specificationFetched({ specificationForEdit: specification })
      );
    })
    .catch(error => {
      error.clientMessage = "Can't find specification";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteSpecification = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteSpecification(id)
    .then(response => {
      dispatch(actions.specificationDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete specification";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createSpecification = specificationForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createSpecification(specificationForCreation)
    .then(response => {
      const { specification } = response.data;
      dispatch(actions.specificationCreated({ specification }));
    })
    .catch(error => {
      error.clientMessage = "Can't create specification";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateSpecification = specification => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateSpecification(specification)
    .then(() => {
      dispatch(actions.specificationUpdated({ specification }));
    })
    .catch(error => {
      error.clientMessage = "Can't update specification";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteSpecifications = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteSpecifications(ids)
    .then(() => {
      dispatch(actions.specificationsDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete specifications";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
