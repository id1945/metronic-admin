import React from "react";
import { Route } from "react-router-dom";
import { ProductsLoadingDialog } from "./products-loading-dialog/ProductsLoadingDialog";
import { ProductDeleteDialog } from "./product-delete-dialog/ProductDeleteDialog";
import { ProductsDeleteDialog } from "./products-delete-dialog/ProductsDeleteDialog";
import { ProductsFetchDialog } from "./products-fetch-dialog/ProductsFetchDialog";
import { ProductsUpdateStatusDialog } from "./products-update-status-dialog/ProductsUpdateStatusDialog";
import { ProductsCard } from "./ProductsCard";
import { ProductsUIProvider } from "./ProductsUIContext";

export function ProductsPage({ history }) {
  const productsUIEvents = {
    newProductButtonClick: () => {
      history.push("/e-commerce/products/new");
    },
    openEditProductPage: (id) => {
      history.push(`/e-commerce/products/${id}/edit`);
    },
    openDeleteProductDialog: (id) => {
      history.push(`/e-commerce/products/${id}/delete`);
    },
    openDeleteProductsDialog: () => {
      history.push(`/e-commerce/products/deleteProducts`);
    },
    openFetchProductsDialog: () => {
      history.push(`/e-commerce/products/fetch`);
    },
    openUpdateProductsStatusDialog: () => {
      history.push("/e-commerce/products/updateStatus");
    },
  };

  return (
    <ProductsUIProvider productsUIEvents={productsUIEvents}>
      <ProductsLoadingDialog />
      <Route path="/e-commerce/products/deleteProducts">
        {({ history, match }) => (
          <ProductsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/e-commerce/products");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/products/:id/delete">
        {({ history, match }) => (
          <ProductDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/e-commerce/products");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/products/fetch">
        {({ history, match }) => (
          <ProductsFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/e-commerce/products");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/products/updateStatus">
        {({ history, match }) => (
          <ProductsUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/e-commerce/products");
            }}
          />
        )}
      </Route>
      <ProductsCard />
    </ProductsUIProvider>
  );
}
