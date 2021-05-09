{{-- Extends layout --}}
@extends('layout.default')

{{-- Content --}}
@section('content')

    <!--begin::Notice-->
    <div class="alert alert-custom alert-white alert-shadow fade show gutter-b" role="alert">
        <div class="alert-icon">
            <?php echo Metronic::getSVG("media/svg/icons/Tools/Compass.svg",
                "svg-icon-primary svg-icon-xl");?>
        </div>
        <div class="alert-text">
            Keenthemes Custom Icon set provides a large set of web font icons with line, solid, bold styles.
        </div>
    </div>
    <!--end::Notice-->

    <!--begin::Row-->
    <div class="row">
        <div class="col-xl-6">
            <!--begin::Card-->
            <div class="card card-custom gutter-b card-stretch">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label">Base Examples</h3>
                    </div>
                </div>
                <div class="card-body">
                    <!--begin::Example-->
                    <div>
                        <p>
                            <code>Keenthemes Icons</code> icons can be used as through class names as shown below.
                        </p>
                        <div class="example-preview">
                            <i class="ki ki-plus mr-5"></i>
                            <i class="ki ki-arrow-up mr-5"></i>
                            <i class="ki ki-round mr-5"></i>
                            <i class="ki ki-reload mr-5"></i>
                            <i class="ki ki-refresh mr-5"></i>
                            <i class="ki ki-solid-plus mr-5"></i>
                        </div>
                    </div>
                    <!--end::Example-->
                </div>
            </div>
            <!--end::Card-->
        </div>
        <div class="col-xl-6">
            <!--begin::Card-->
            <div class="card card-custom gutter-b card-stretch">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label">Color Options</h3>
                    </div>
                </div>
                <div class="card-body">
                    <!--begin::Example-->
                    <div>
                        <p>
                            Use <code>.icon-{color}</code> class format to set different colors.
                        </p>
                        <div class="example-preview">
                            <i class="ki ki-plus text-success mr-5"></i>
                            <i class="ki ki-arrow-up text-primary mr-5"></i>
                            <i class="ki ki-round text-danger mr-5"></i>
                            <i class="ki ki-reload text-warning mr-5"></i>
                            <i class="ki ki-refresh text-info mr-5"></i>
                            <i class="ki ki-solid-plus text-dark mr-5"></i>
                        </div>
                    </div>
                    <!--end::Example-->
                </div>
            </div>
            <!--end::Card-->
        </div>
    </div>
    <!--end::Row-->

    <!--begin::Row-->
    <div class="row">
        <div class="col-xl-6">
            <!--begin::Card-->
            <div class="card card-custom gutter-b card-stretch">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label">Sizes</h3>
                    </div>
                </div>
                <div class="card-body">
                    <!--begin::Example-->
                    <div>
                        <p>
                            Use <code>.icon-{size}</code> class format to set different sizes.
                        </p>
                        <div class="example-preview">
                            <i class="ki ki-solid-plus icon-xs mr-5"></i>
                            <i class="ki ki-solid-plus icon-sm mr-5"></i>
                            <i class="ki ki-solid-plus icon-nm mr-5"></i>
                            <i class="ki ki-solid-plus icon-md mr-5"></i>
                            <i class="ki ki-solid-plus icon-lg mr-5"></i>
                            <i class="ki ki-solid-plus icon-xl mr-5"></i>
                            <i class="ki ki-solid-plus icon-2x mr-5"></i>
                            <i class="ki ki-solid-plus icon-3x mr-5"></i>
                            <i class="ki ki-solid-plus icon-4x mr-5"></i>
                            <i class="ki ki-solid-plus icon-5x mr-5"></i>
                            <i class="ki ki-solid-plus icon-6x mr-5"></i>
                            <i class="ki ki-solid-plus icon-7x mr-5"></i>
                            <i class="ki ki-solid-plus icon-8x mr-5"></i>
                            <i class="ki ki-solid-plus icon-9x mr-5"></i>
                            <i class="ki ki-solid-plus icon-10x mr-5"></i>
                        </div>
                    </div>
                    <!--end::Example-->
                </div>
            </div>
            <!--end::Card-->
        </div>
        <div class="col-xl-6">
            <!--begin::Card-->
            <div class="card card-custom gutter-b card-stretch">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label">Integration</h3>
                    </div>
                </div>
                <div class="card-body">
                    <!--begin::Example-->
                    <div>
                        <p>
                            You can use KeenthemesIcons literally with any element within Metronic.
                        </p>
                        <div class="example-preview">
                            <a href="#" class="btn btn-success font-weight-bold mr-2">
                                <i class="ki ki-plus icon-sm"></i> Button
                            </a>

                            <a href="#" class="btn btn-light-danger font-weight-bold mr-2">
                                <i class="ki ki-bold-close icon-sm"></i> Button 2
                            </a>

                            <div class="dropdown dropdown-inline">
                                <a href="#" class="btn btn-light-primary font-weight-bold dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <i class="ki ki-outline-info icon-md"></i> Dropdown
                                </a>
                                <div class="dropdown-menu dropdown-menu-md py-5" style="">
                                    <ul class="navi navi-hover">
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><i class="ki ki-gear text-danger"></i></span>
                                                <span class="navi-text">Messages</span>
                                                <span class="label label-light-danger font-weight-bold label-inline">new</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><i class="ki ki-info text-warning"></i></span>
                                                <span class="navi-text">Settings</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><i class="ki ki-wrench text-success"></i></span>
                                                <span class="navi-text">Tasks</span>
                                                <span class="navi-label">
                                                <span class="label label-warning label-rounded">5</span>
                                            </span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><i class="flaticon2-file  text-primary"></i></span>
                                                <span class="navi-text">Orders</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end::Example-->
                </div>
            </div>
            <!--end::Card-->
        </div>
    </div>
    <!--end::Row-->

@endsection
