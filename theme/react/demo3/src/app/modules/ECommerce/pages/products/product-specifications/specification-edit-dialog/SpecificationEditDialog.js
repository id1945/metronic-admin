import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../_redux/specifications/specificationsActions";
import { SpecificationEditDialogHeader } from "./SpecificationEditDialogHeader";
import { SpecificationEditForm } from "./SpecificationEditForm";
import { useSpecificationsUIContext } from "../SpecificationsUIContext";

export function SpecificationEditDialog() {
  // Specifications UI Context
  const specsUIContext = useSpecificationsUIContext();
  const specsUIProps = useMemo(() => {
    return {
      id: specsUIContext.selectedId,
      show: specsUIContext.showEditSpecificationDialog,
      onHide: specsUIContext.closeEditSpecificationDialog,
      productId: specsUIContext.productId,
      queryParams: specsUIContext.queryParams,
      initSpecification: specsUIContext.initSpecification,
    };
  }, [specsUIContext]);

  // Specifications Redux state
  const dispatch = useDispatch();
  const { actionsLoading, specificationForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.specifications.actionsLoading,
      specificationForEdit: state.specifications.specificationForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server request for getting spec by seleted id
    dispatch(actions.fetchSpecification(specsUIProps.id));
  }, [specsUIProps.id, dispatch]);

  const saveSpecification = (specification) => {
    if (!specsUIProps.id) {
      dispatch(actions.createSpecification(specification)).then(() => {
        dispatch(
          actions.fetchSpecifications(
            specsUIProps.queryParams,
            specsUIProps.productId
          )
        ).then(() => specsUIProps.onHide());
      });
    } else {
      dispatch(actions.updateSpecification(specification)).then(() => {
        dispatch(
          actions.fetchSpecifications(
            specsUIProps.queryParams,
            specsUIProps.productId
          )
        ).then(() => specsUIProps.onHide());
      });
    }
  };

  return (
    <Modal
      show={specsUIProps.show}
      onHide={specsUIProps.onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <SpecificationEditDialogHeader id={specsUIProps.id} />
      <SpecificationEditForm
        saveSpecification={saveSpecification}
        actionsLoading={actionsLoading}
        specification={specificationForEdit || specsUIProps.initSpecification}
        onHide={specsUIProps.onHide}
      />
    </Modal>
  );
}
