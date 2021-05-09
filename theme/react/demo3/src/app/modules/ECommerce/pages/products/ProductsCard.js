import React, {useMemo} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { ProductsFilter } from "./products-filter/ProductsFilter";
import { ProductsTable } from "./products-table/ProductsTable";
import { ProductsGrouping } from "./products-grouping/ProductsGrouping";
import { useProductsUIContext } from "./ProductsUIContext";

export function ProductsCard() {
  const productsUIContext = useProductsUIContext();
  const productsUIProps = useMemo(() => {
    return {
      ids: productsUIContext.ids,
      queryParams: productsUIContext.queryParams,
      setQueryParams: productsUIContext.setQueryParams,
      newProductButtonClick: productsUIContext.newProductButtonClick,
      openDeleteProductsDialog: productsUIContext.openDeleteProductsDialog,
      openEditProductPage: productsUIContext.openEditProductPage,
      openUpdateProductsStatusDialog:
        productsUIContext.openUpdateProductsStatusDialog,
      openFetchProductsDialog: productsUIContext.openFetchProductsDialog,
    };
  }, [productsUIContext]);

  return (
    <Card>
      <CardHeader title="Products list">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={productsUIProps.newProductButtonClick}
          >
            New Product
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <ProductsFilter />
        {productsUIProps.ids.length > 0 && (
          <>
            <ProductsGrouping />
          </>
        )}
        <ProductsTable />
      </CardBody>
    </Card>
  );
}
