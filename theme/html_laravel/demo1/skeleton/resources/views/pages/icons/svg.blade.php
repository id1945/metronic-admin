{{-- Extends layout --}}
@extends('layout.default')

{{-- Content --}}
@section('content')

    <!--begin::Notice-->
    <div class="alert alert-custom alert-white alert-shadow fade show gutter-b" role="alert">
        <div class="alert-icon">
            <?php echo Metronic::getSVG("media/svg/icons/Tools/Compass.svg",
                "svg-icon-primary svg-icon-xl"); ?>
        </div>
        <div class="alert-text">
            Over 640 high quality vector duotone SVG icons. Use as image or inline SVG code with any Metronic element.
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
                    <div class="example mb-10">
                        <p>
                            In order to customize svg icon colors use inline svg code inside
                            <code>.svg-icon</code> container.
                        </p>
                        <div class="example-preview">
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Address-card.svg",
                                "mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Design/Component.svg", "mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Design/Substract.svg", "mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/General/Settings-2.svg"); ?>
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
                    <div class="example mb-10">
                        <p>
                            Use <code>.svg-icon-{color}</code> to set color for SVG icons.
                        </p>
                        <div class="example-preview">
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Address-card.svg",
                                "svg-icon-success mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-danger mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Design/Component.svg",
                                "svg-icon-warning mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Design/Substract.svg",
                                "svg-icon-dark mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/General/Settings-2.svg",
                                "svg-icon-primary"); ?>
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
                    <div class="example mb-10">
                        <p>
                            Change icon size using <code>.svg-icon-{size}</code> classes.
                        </p>
                        <div class="example-preview">
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-sm mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-md mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-lg mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-xl mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-2x mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-3x mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-4x mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-5x mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-6x mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-7x mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-8x mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-9x mr-5"); ?>
                            <?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                "svg-icon-10x mr-5"); ?>
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
                    <div class="example mb-10">
                        <p>
                            Use SVG icons as image.
                        </p>
                        <div class="example-preview">
                            <img src="media/svg/icons/Clothes/Cap.svg" class="mr-5" alt=""/>
                            <img src="media/svg/icons/Communication/Chat-error.svg" class="mr-5" alt=""/>
                            <img src="media/svg/icons/Design/Bucket.svg" class="mr-5" alt=""/>
                            <img src="media/svg/icons/Design/Substract.svg" class="mr-5" alt=""/>
                            <img src="media/svg/icons/Design/Select.svg" class="mr-5" alt=""/>
                        </div>
                    </div>
                    <!--end::Example-->

                    <!--begin::Example-->
                    <div>
                        <p>
                            You can use SVG icons with any element within Metronic.
                        </p>
                        <div class="example-preview">
                            <a href="#" class="btn btn-success font-weight-bold mr-2">
                                <?php echo Metronic::getSVG("media/svg/icons/Communication/Address-card.svg"); ?> Button
                            </a>

                            <a href="#" class="btn btn-light-danger font-weight-bold mr-2">
                                <?php echo Metronic::getSVG("media/svg/icons/Design/Component.svg"); ?> Button 2
                            </a>

                            <div class="dropdown dropdown-inline">
                                <a href="#" class="btn btn-light-primary font-weight-bold dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <?php echo Metronic::getSVG("media/svg/icons/General/Settings-2.svg"); ?> Dropdown
                                </a>
                                <div class="dropdown-menu dropdown-menu-md py-5" style="">
                                    <ul class="navi navi-hover">
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><?php echo Metronic::getSVG("media/svg/icons/Communication/Address-card.svg",
                                                        "svg-icon-danger"); ?></span>
                                                <span class="navi-text">Messages</span>
                                                <span class="label label-light-danger font-weight-bold label-inline">new</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><?php echo Metronic::getSVG("media/svg/icons/Communication/Mail-heart.svg",
                                                        "svg-icon-warning"); ?></span>
                                                <span class="navi-text">Settings</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><?php echo Metronic::getSVG("media/svg/icons/Design/Component.svg",
                                                        "svg-icon-success"); ?></span>
                                                <span class="navi-text">Tasks</span>
                                                <span class="navi-label">
                                                <span class="label label-warning label-rounded">5</span>
                                            </span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a class="navi-link" href="#">
                                                <span class="navi-icon"><?php echo Metronic::getSVG("media/svg/icons/General/Settings-2.svg",
                                                        "svg-icon-primary"); ?></span>
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
