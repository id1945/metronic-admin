/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React, {useMemo, useState} from "react";
import {Formik} from "formik";
import {get, merge} from "lodash";
import {FormHelperText, Switch} from "@material-ui/core";
import clsx from "clsx";
// https://github.com/conorhastings/react-syntax-highlighter#prism
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
// See https://github.com/PrismJS/prism-themes
import {coy as highlightStyle} from "react-syntax-highlighter/dist/esm/styles/prism";
import {useHtmlClassService, setLayoutConfig, getInitLayoutConfig} from "../../layout";
import {Card, CardBody, CardHeader, Notice} from "../controls";

const localStorageActiveTabKey = "builderActiveTab";

export function Builder() {
    const activeTab = localStorage.getItem(localStorageActiveTabKey);
    const [key, setKey] = useState(activeTab ? +activeTab : 0);
    const [isLoading, setIsLoading] = useState(false);
    const htmlClassService = useHtmlClassService();
    const initialValues = useMemo(
        () =>
            merge(
                // Fulfill changeable fields.
                getInitLayoutConfig(),
                htmlClassService.config
            ),
        [htmlClassService.config]
    );

    const saveCurrentTab = (_tab) => {
        localStorage.setItem(localStorageActiveTabKey, _tab);
    }

    return (
        <>
            <Notice svg="/media/svg/icons/Tools/Compass.svg">
                <p>
                    The layout builder is to assist your set and configure your preferred project layout specifications
                    and preview it in real time.
                    The configured layout options will be saved until you change or reset them.
                    To use the layout builder, choose the layout options and click the <code>Preview</code> button to
                    preview the changes.
                </p>
            </Notice>
            {/*Formic off site: https://jaredpalmer.com/formik/docs/overview*/}
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    setIsLoading(true);
                    setLayoutConfig(values);
                }}
                onReset={() => {
                    setIsLoading(true);
                    setLayoutConfig(getInitLayoutConfig());
                }}
            >
                {({values, handleReset, handleSubmit, handleChange, handleBlur}) => (
                    <>
                        <div className="card card-custom">
                            {/*Header*/}
                            <div className="card-header card-header-tabs-line">
                                <ul
                                    className="nav nav-dark nav-bold nav-tabs nav-tabs-line"
                                    data-remember-tab="tab_id"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${key === 0 ? "active" : ""}`}
                                            data-toggle="tab"
                                            onClick={() => {
                                                setKey(0);
                                                saveCurrentTab(0);
                                            }}
                                        >
                                            Header
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${key === 1 ? "active" : ""}`}
                                            data-toggle="tab"
                                            onClick={() => {
                                                setKey(1);
                                                saveCurrentTab(1);
                                            }}
                                        >
                                            Subheader
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${key === 2 ? "active" : ""}`}
                                            data-toggle="tab"
                                            onClick={() => {
                                                setKey(2);
                                                saveCurrentTab(2);
                                            }}
                                        >
                                            Content
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${key === 3 ? "active" : ""}`}
                                            data-toggle="tab"
                                            onClick={() => {
                                                setKey(3);
                                                saveCurrentTab(3);
                                            }}
                                        >
                                            Aside
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${key === 4 ? "active" : ""}`}
                                            data-toggle="tab"
                                            onClick={() => {
                                                setKey(4);
                                                saveCurrentTab(4);
                                            }}
                                        >
                                            Footer
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="form">
                                <div className="card-body">
                                    <div className="tab-content pt-3">
                                        <div className={`tab-pane ${key === 0 ? "active" : ""}`}>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label text-lg-right">
                                                    Desktop Fixed Header:
                                                </label>
                                                <div className="col-lg-9 col-xl-4">
                                                    <Switch
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        name="header.self.fixed.desktop"
                                                        checked={!!get(values, "header.self.fixed.desktop")}
                                                    />
                                                    <FormHelperText>
                                                        Enable fixed header for desktop mode
                                                    </FormHelperText>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label text-lg-right">
                                                    Header Width:
                                                </label>
                                                <div className="col-lg-9 col-xl-4">
                                                    <select
                                                        className="form-control form-control-solid"
                                                        name="header.self.width"
                                                        onBlur={handleBlur}
                                                        value={get(values, "header.self.width")}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="fluid">Fluid</option>
                                                        <option value="fixed">Fixed</option>
                                                    </select>
                                                    <FormHelperText>
                                                        Select header width type
                                                    </FormHelperText>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label text-lg-right">
                                                    Header Menu Arrows:
                                                </label>
                                                <div className="col-lg-9 col-xl-4">
                                                    <Switch
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        name="header.menu.self.root-arrow"
                                                        checked={
                                                            !!get(values, "header.menu.self.root-arrow")
                                                        }
                                                    />
                                                    <FormHelperText>
                                                        Enable header menu root link arrows
                                                    </FormHelperText>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`tab-pane ${key === 1 ? "active" : ""}`}>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label text-lg-right">
                                                    Display Subheader:
                                                </label>
                                                <div className="col-lg-9 col-xl-4">
                                                    <Switch
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        name="subheader.display"
                                                        checked={!!get(values, "subheader.display")}
                                                    />
                                                    <FormHelperText>
                                                        Display subheader
                                                    </FormHelperText>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label text-lg-right">
                                                    Width:
                                                </label>
                                                <div className="col-lg-9 col-xl-4">
                                                    <select
                                                        className="form-control"
                                                        name="subheader.width"
                                                        onBlur={handleBlur}
                                                        value={get(values, "subheader.width")}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="fluid">Fluid</option>
                                                        <option value="fixed">Fixed</option>
                                                    </select>
                                                    <FormHelperText>
                                                        Select layout width type
                                                    </FormHelperText>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={`tab-pane ${key === 2 ? "active" : ""}`}>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label text-lg-right">
                                                    Width:
                                                </label>
                                                <div className="col-lg-9 col-xl-4">
                                                    <select
                                                        className="form-control"
                                                        name="content.width"
                                                        onBlur={handleBlur}
                                                        value={get(values, "content.width")}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="fluid">Fluid</option>
                                                        <option value="fixed">Fixed</option>
                                                    </select>
                                                    <FormHelperText>
                                                        Select layout width type
                                                    </FormHelperText>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`tab-pane ${key === 3 ? "active" : ""}`}>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label text-lg-right">
                                                    Display:
                                                </label>
                                                <div className="col-lg-9 col-xl-4">
                                                    <Switch
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        name="aside.self.display"
                                                        checked={!!get(values, "aside.self.display")}
                                                    />
                                                    <FormHelperText>Display aside</FormHelperText>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label
                                                    className="col-lg-3 col-form-label pt-4 text-lg-right">
                                                    Submenu Toggle:
                                                </label>
                                                <div className="col-lg-9 col-xl-4">
                                                    <Switch
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        name="aside.menu.dropdown"
                                                        checked={!!get(values, "aside.menu.dropdown")}
                                                    />
                                                    <FormHelperText>
                                                        Select submenu toggle mode (works only when{" "}
                                                        <code>Fixed Mode</code> is disabled)
                                                    </FormHelperText>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={`tab-pane ${key === 4 ? "active" : ""}`}>
                                        <div className="form-group row">
                                                <label className="col-lg-3 col-form-label text-lg-right">
                                                    Footer Layout:
                                                </label>
                                                <div className="col-lg-9 col-xl-4">
                                                    <select
                                                        className="form-control form-control-solid"
                                                        name="footer.layout"
                                                        onBlur={handleBlur}
                                                        value={get(values, "footer.layout")}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="compact">Compact</option>
                                                        <option value="extended">Extended</option>
                                                    </select>
                                                    <FormHelperText>
                                                    Select footer layout
                                                    </FormHelperText>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label text-lg-right">
                                                    Width:
                                                </label>
                                                <div className="col-lg-9 col-xl-4">
                                                    <select
                                                        className="form-control form-control-solid"
                                                        name="footer.width"
                                                        onBlur={handleBlur}
                                                        value={get(values, "footer.width")}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="fluid">Fluid</option>
                                                        <option value="fixed">Fixed</option>
                                                    </select>
                                                    <FormHelperText>
                                                        Select layout width type
                                                    </FormHelperText>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-9">
                                            <button
                                                type="button"
                                                onClick={handleSubmit}
                                                className={`btn btn-primary font-weight-bold mr-2`}
                                            >
                                                <i className="la la-eye"/> Preview
                                            </button>
                                            {" "}
                                            <button
                                                type="button"
                                                onClick={handleReset}
                                                className={`btn btn-clean font-weight-bold mr-2`}
                                            >
                                                <i className="la la-recycle"/> Reset
                                            </button>
                                            {" "}
                                            <span
                                                className={`ml-3 ${clsx({
                                                    spinner: isLoading
                                                })}`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Config*/}
                        <Card className="mt-4">
                            <CardHeader
                                title={
                                    <>
                                        Generated Config{" "}
                                        <small>
                                            can be used for layout config in{" "}
                                            <code>/src/_metronic/layout/LayoutConfig.js</code>
                                        </small>
                                    </>
                                }
                            />

                            <CardBody>
                                <SyntaxHighlighter
                                    language="json"
                                    style={highlightStyle}
                                    customStyle={{
                                        background: `none transparent !important`
                                    }}
                                >
                                    {JSON.stringify(values, null, 2)}
                                </SyntaxHighlighter>
                            </CardBody>
                        </Card>
                    </>
                )}
            </Formik>
        </>
    );
}
