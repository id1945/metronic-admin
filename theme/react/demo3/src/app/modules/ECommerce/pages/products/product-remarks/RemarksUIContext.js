/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, createContext, useState, useCallback } from "react";
import {isEqual, isFunction} from "lodash";
import {initialFilter} from "./RemarksUIHelper";

const RemarksUIContext = createContext();

export function useRemarksUIContext() {
  return useContext(RemarksUIContext);
}

export const RemarksUIConsumer = RemarksUIContext.Consumer;

export function RemarksUIProvider({ currentProductId, children }) {
  const [productId, setProductId] = useState(currentProductId);
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const setQueryParams = useCallback(nextQueryParams => {
    setQueryParamsBase(prevQueryParams => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);
  const [selectedId, setSelectedId] = useState(null);
  const [showEditRemarkDialog, setShowEditRemarkDialog] = useState(false);
  const initRemark = {
    id: undefined,
    text: "",
    type: 0,
    dueDate: "01/07/2020",
    carId: productId
  };
  useEffect(()=> {
    initRemark.productId = currentProductId;
    initRemark.carId = currentProductId;
    setProductId(currentProductId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProductId]);
  const openNewRemarkDialog = () => {
    setSelectedId(undefined);
    setShowEditRemarkDialog(true);
  };
  const openEditRemarkDialog = id => {
    setSelectedId(id);
    setShowEditRemarkDialog(true);
  };
  const closeEditRemarkDialog = () => {
    setSelectedId(undefined);
    setShowEditRemarkDialog(false);
  };
  const [showDeleteRemarkDialog, setShowDeleteRemarkDialog] = useState(false);
  const openDeleteRemarkDialog = id => {
    setSelectedId(id);
    setShowDeleteRemarkDialog(true);
  };
  const closeDeleteRemarkDialog = () => {
    setSelectedId(undefined);
    setShowDeleteRemarkDialog(false);
  };

  const [showDeleteRemarksDialog, setShowDeleteRemarksDialog] = useState(false);
  const openDeleteRemarksDialog = () => {
    setShowDeleteRemarksDialog(true);
  };
  const closeDeleteRemarksDialog = () => {
    setShowDeleteRemarksDialog(false);
  };

  const [showFetchRemarksDialog, setShowFetchRemarksDialog] = useState(false);
  const openFetchRemarksDialog = () => {
    setShowFetchRemarksDialog(true);
  };
  const closeFetchRemarksDialog = () => {
    setShowFetchRemarksDialog(false);
  };

  const value = {
    ids,
    setIds,
    productId,
    setProductId,
    queryParams,
    setQueryParams,
    initRemark,
    selectedId,
    showEditRemarkDialog,
    openNewRemarkDialog,    
    openEditRemarkDialog,
    closeEditRemarkDialog,
    showDeleteRemarkDialog,
    openDeleteRemarkDialog,
    closeDeleteRemarkDialog,
    showDeleteRemarksDialog,
    openDeleteRemarksDialog,
    closeDeleteRemarksDialog,
    openFetchRemarksDialog,
    closeFetchRemarksDialog,
    showFetchRemarksDialog
  };
  
  return (
    <RemarksUIContext.Provider value={value}>
      {children}
    </RemarksUIContext.Provider>
  );
}
