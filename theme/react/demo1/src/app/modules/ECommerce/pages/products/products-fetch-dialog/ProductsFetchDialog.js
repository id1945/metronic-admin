import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { ProductStatusCssClasses } from "../ProductsUIHelpers";
import { useProductsUIContext } from "../ProductsUIContext";

const selectedProducts = (entities, ids) => {
  const _products = [];
  ids.forEach((id) => {
    const product = entities.find((el) => el.id === id);
    if (product) {
      _products.push(product);
    }
  });
  return _products;
};

export function ProductsFetchDialog({ show, onHide }) {
  // Products UI Context
  const productsUIContext = useProductsUIContext();
  const productsUIProps = useMemo(() => {
    return {
      ids: productsUIContext.ids,
      queryParams: productsUIContext.queryParams,
    };
  }, [productsUIContext]);

  // Products Redux state
  const { products } = useSelector(
    (state) => ({
      products: selectedProducts(state.products.entities, productsUIProps.ids),
    }),
    shallowEqual
  );

  // if there weren't selected ids we should close modal
  useEffect(() => {
    if (!productsUIProps.ids || productsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsUIProps.ids]);

  return (
    <Modal
      show={show}
      onHide={onHide}
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
            {products.map((product) => (
              <div className="list-timeline-item mb-3" key={product.id}>
                <span className="list-timeline-text">
                  <span
                    className={`label label-lg label-light-${
                      ProductStatusCssClasses[product.status]
                    } label-inline`}
                    style={{ width: "60px" }}
                  >
                    ID: {product.id}
                  </span>{" "}
                  <span className="ml-5">
                    {product.manufacture}, {product.model}
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
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-primary btn-elevate"
          >
            Ok
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
