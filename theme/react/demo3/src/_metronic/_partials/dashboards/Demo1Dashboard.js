import React from "react";
import {
  MixedWidget1,
  MixedWidget14,
  ListsWidget9,
  StatsWidget11,
  StatsWidget12,
  ListsWidget1,
  AdvanceTablesWidget2,
  AdvanceTablesWidget4,
  ListsWidget3,
  ListsWidget4,
  ListsWidget8,
} from "../widgets";
export function Demo1Dashboard() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-xxl-4">
          <MixedWidget1 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-6 col-xxl-4">
          <ListsWidget9 className="card-stretch gutter-b" />
        </div>

        <div className="col-lg-6 col-xxl-4">
          <StatsWidget11
            className="card-stretch card-stretch-half gutter-b"
            symbolShape="circle"
            baseColor="success"
          />
          <StatsWidget12 className="card-stretch card-stretch-half gutter-b" />
        </div>

        <div className="col-lg-6 col-xxl-4 order-1 order-xxl-1">
          <ListsWidget1 className="card-stretch gutter-b" />
        </div>
        <div className="col-xxl-8 order-2 order-xxl-1">
          <AdvanceTablesWidget2 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-6 col-xxl-4 order-1 order-xxl-2">
          <ListsWidget3 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-6 col-xxl-4 order-1 order-xxl-2">
          <ListsWidget4 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-12 col-xxl-4 order-1 order-xxl-2">
          <ListsWidget8 className="card-stretch gutter-b" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <MixedWidget14 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-8">
          <AdvanceTablesWidget4 className="card-stretch gutter-b" />
        </div>
      </div>
    </>
  );
}
