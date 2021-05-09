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
            Flaticon set provides a large set of web font icons with line, solid, bold styles.
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
                            <code>Flaticon</code> icons can be used as through class names as shown below.
                        </p>
                        <div class="example-preview">
                            <i class="flaticon2-bell-4 mr-5"></i>
                            <i class="flaticon2-gear mr-5"></i>
                            <i class="flaticon2-pen mr-5"></i>
                            <i class="flaticon2-open-box mr-5"></i>
                            <i class="flaticon2-hourglass-1 mr-5"></i>
                            <i class="flaticon2-graph-1"></i>
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
                            <i class="flaticon2-bell-4 text-success mr-5"></i>
                            <i class="flaticon2-gear text-primary mr-5"></i>
                            <i class="flaticon2-pen text-danger mr-5"></i>
                            <i class="flaticon2-open-box text-warning mr-5"></i>
                            <i class="flaticon2-hourglass-1 text-info mr-5"></i>
                            <i class="flaticon2-graph-1 text-dark"></i>
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
                            <i class="flaticon2-hourglass-1 icon-xs mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-sm mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-nm mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-md mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-lg mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-xl mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-2x mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-3x mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-4x mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-5x mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-6x mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-7x mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-8x mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-9x mr-5"></i>
                            <i class="flaticon2-hourglass-1 icon-10x mr-5"></i>
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
                            You can use Flaticons literally with any element within Metronic.
                        </p>
                        <div class="example-preview">
                            <a href="#" class="btn btn-success font-weight-bold mr-2">
                                <i class="flaticon2-bell-4"></i> Button
                            </a>

                            <a href="#" class="btn btn-light-danger font-weight-bold mr-2">
                                <i class="flaticon2-open-box"></i> Button 2
                            </a>

                            <div class="dropdown dropdown-inline">
                                <a href="#" class="btn btn-light-primary font-weight-bold dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <i class="flaticon2-graph-1"></i> Dropdown
                                </a>
                                <div class="dropdown-menu dropdown-menu-md py-5" style="">
                                    <ul class="navi navi-hover">
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><i class="flaticon2-analytics text-danger"></i></span>
                                                <span class="navi-text">Messages</span>
                                                <span class="label label-light-danger font-weight-bold label-inline">new</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><i class="flaticon2-pie-chart-2  text-warning"></i></span>
                                                <span class="navi-text">Settings</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><i class="flaticon2-box-1  text-success"></i></span>
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
