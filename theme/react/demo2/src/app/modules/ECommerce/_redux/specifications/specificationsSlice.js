import {createSlice} from "@reduxjs/toolkit";

const initialSpecificationsState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  specificationForEdit: undefined,
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const specificationsSlice = createSlice({
  name: "specifications",
  initialState: initialSpecificationsState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    // getSpecificationById
    specificationFetched: (state, action) => {
      state.actionsLoading = false;
      state.specificationForEdit = action.payload.specificationForEdit;
      state.error = null;
    },
    // findSpecifications
    specificationsFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createSpecification
    specificationCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.specification);
    },
    // updateSpecification
    specificationUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.specification.id) {
          return action.payload.specification;
        }
        return entity;
      });
    },
    // deleteSpecification
    specificationDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.id);
    },
    // deleteSpecifications
    specificationsDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.id)
      );
    }
  }
});
