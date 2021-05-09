import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { useSpecificationsUIContext } from "./SpecificationsUIContext";

const selectedSpecifications = (entities, ids) => {
  const _specifications = [];
  ids.forEach((id) => {
    const specification = entities.find((el) => el.id === id);
    if (specification) {
      _specifications.push(specification);
    }
  });
  return _specifications;
};

export function SpecificationsFetchDialog() {
  // Specs UI Context
  const specsUIContext = useSpecificationsUIContext();
  const specsUIProps = useMemo(() => {
    return {
      ids: specsUIContext.ids,
      show: specsUIContext.showFetchSpecificationsDialog,
      onHide: specsUIContext.closeFetchSpecificationsDialog,
      queryParams: specsUIContext.queryParams,
    };
  }, [specsUIContext]);

  // Specs Redux state
  const { specifications } = useSelector(
    (state) => ({
      specifications: selectedSpecifications(
        state.specifications.entities,
        specsUIProps.ids
      ),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!specsUIProps.ids || specsUIProps.ids.length === 0) {
      specsUIProps.onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specsUIProps.ids]);

  return (
    <Modal
      show={specsUIProps.show}
      onHide={specsUIProps.onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Fetch selected elements
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {specifications.map((specification) => (
              <div className="list-timeline-item mb-3" key={specification.id}>
                <span className="list-timeline-text">
                  <span
                    className="label label-lg label-light-success label-inline"
                    style={{ width: "60px" }}
                  >
                    ID: {specification.id}
                  </span>{" "}
                  <span className="ml-5">
                    {specification.name}: {specification.value}{" "}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={specsUIProps.onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={specsUIProps.onHide}
            className="btn btn-primary btn-elevate"
          >
            Ok
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
