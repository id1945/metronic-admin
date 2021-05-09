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
            Socicon is a social icons font with more than 170 icons from all major services. Socicon is free and easy to use.
            For more info please visit
            <a class="font-weight-bold" href="http://www.socicon.com" target="_blank">Socicon's Home</a>.
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
                            <code>Socicon</code> icons can be used as through class names as shown below.
                        </p>
                        <div class="example-preview">
                            <i class="socicon-vimeo mr-5"></i>
                            <i class="socicon-telegram mr-5"></i>
                            <i class="socicon-facebook mr-5"></i>
                            <i class="socicon-android mr-5"></i>
                            <i class="socicon-amazon mr-5"></i>
                            <i class="socicon-google"></i>
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
                            <i class="socicon-vimeo text-success mr-5"></i>
                            <i class="socicon-telegram text-primary mr-5"></i>
                            <i class="socicon-facebook text-danger mr-5"></i>
                            <i class="socicon-android text-warning mr-5"></i>
                            <i class="socicon-amazon text-info mr-5"></i>
                            <i class="socicon-google text-dark"></i>
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
                            <i class="socicon-android icon-xs mr-5"></i>
                            <i class="socicon-android icon-sm mr-5"></i>
                            <i class="socicon-android icon-nm mr-5"></i>
                            <i class="socicon-android icon-md mr-5"></i>
                            <i class="socicon-android icon-lg mr-5"></i>
                            <i class="socicon-android icon-xl mr-5"></i>
                            <i class="socicon-android icon-2x mr-5"></i>
                            <i class="socicon-android icon-3x mr-5"></i>
                            <i class="socicon-android icon-4x mr-5"></i>
                            <i class="socicon-android icon-5x mr-5"></i>
                            <i class="socicon-android icon-6x mr-5"></i>
                            <i class="socicon-android icon-7x mr-5"></i>
                            <i class="socicon-android icon-8x mr-5"></i>
                            <i class="socicon-android icon-9x mr-5"></i>
                            <i class="socicon-android icon-10x mr-5"></i>
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
                                <i class="socicon-foursquare"></i> Button
                            </a>

                            <a href="#" class="btn btn-light-danger font-weight-bold mr-2">
                                <i class="socicon-skype"></i> Button 2
                            </a>

                            <div class="dropdown dropdown-inline">
                                <a href="#" class="btn btn-light-primary font-weight-bold dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <i class="socicon-airbnb"></i> Dropdown
                                </a>
                                <div class="dropdown-menu dropdown-menu-md py-5" style="">
                                    <ul class="navi navi-hover">
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><i class="socicon-chrome text-danger"></i></span>
                                                <span class="navi-text">Messages</span>
                                                <span class="label label-light-danger font-weight-bold label-inline">new</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><i class="socicon-dribbble text-warning"></i></span>
                                                <span class="navi-text">Settings</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><i class="socicon-apple text-success"></i></span>
                                                <span class="navi-text">Tasks</span>
                                                <span class="navi-label">
                                                <span class="label label-warning label-rounded">5</span>
                                            </span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><i class="socicon-envato text-primary"></i></span>
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
