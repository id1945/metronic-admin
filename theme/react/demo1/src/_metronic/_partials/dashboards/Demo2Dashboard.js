import React from "react";
import {ListsWidget10, ListsWidget11, AdvanceTablesWidget1, MixedWidget6, MixedWidget10, MixedWidget11, MixedWidget12, TilesWidget1, TilesWidget3, TilesWidget10, TilesWidget11, TilesWidget12, TilesWidget13, TilesWidget14} from "../widgets";

export function Demo2Dashboard() {
    return <>
        {/* begin::Dashboard */}
        
        {/* begin::Row */}
        <div className="row">
            <div className="col-xl-4">
                <TilesWidget1 className="gutter-b card-stretch" chartColor="danger" />
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-xl-3">
                        <TilesWidget3 className="gutter-b" widgetHeight="150px" />
                    </div>
                    <div className="col-xl-9">
                        <TilesWidget10  className="gutter-b" widgetHeight="150px"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6">
                        <TilesWidget13 className="gutter-b" widgetHeight="175px" />
                        <div className="row">
                            <div className="col-xl-6">
                                <TilesWidget11 className="gutter-b" baseColor="primary" widgetHeight="150px" />
                            </div>
                            <div className="col-xl-6">
                                <TilesWidget12 className="gutter-b" iconColor="success" widgetHeight="150px" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <TilesWidget14 className="gutter-b card-stretch" />
                    </div>

                </div>

            </div>
        </div>
        {/* end::Row */}

        {/* begin::Row */}
        <div className="row">
            <div className="col-lg-6 col-xxl-4">
                <MixedWidget6 className="gutter-b card-stretch" chartColor="danger" />
            </div>

            <div className="col-lg-6 col-xxl-8">
                <AdvanceTablesWidget1 className="card-stretch gutter-b" />
            </div>
        </div>
        {/* end::Row */}

        {/* begin::Row */}
        <div className="row">
            <div className="col-xl-4">
                <MixedWidget10 className="card-stretch gutter-b" />
            </div>

            <div className="col-xl-4">
                <MixedWidget11 className="card-stretch gutter-b" />
            </div>

            <div className="col-xl-4">
                <MixedWidget12 className="card-stretch gutter-b" />
            </div>
        </div>
        {/* end::Row */}

        {/* begin::Row */}
        <div className="row">
            <div className="col-lg-6">
                <ListsWidget10 className="card-stretch gutter-b" />
            </div>
            <div className="col-lg-6">
                <ListsWidget11 className="card-stretch gutter-b" />
            </div>
        </div>
        {/* end::Row */}

        {/* end::Dashboard */}
    </>;
}
