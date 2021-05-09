{{-- Subheader --}}
<div class="subheader py-2 {{ Metronic::printClasses('subheader', false) }}" id="kt_subheader">
    <div class="{{ Metronic::printClasses('subheader-container', false) }} d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        {{-- Info --}}
        <div class="d-flex align-items-center flex-wrap mr-2">

            {{-- Page Title --}}
            <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">
                {{ @$page_title }}

                @if (isset($page_description) && config('layout.subheader.displayDesc'))
                    <small>{{ @$page_description }}</small>
                @endif
            </h5>

            {{-- Action --}}
            <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4"></div>

            <span class="text-muted font-weight-bold mr-4">#XRS-45670</span>

            <a href="#" class="btn btn-light-primary font-weight-bolder btn-sm">
                Add New
            </a>
        </div>

        {{-- Toolbar --}}
        <div class="d-flex align-items-center">
            @if (config('layout.subheader.displayDaterangepicker'))
                <a href="#" class="btn btn-light btn-sm font-weight-bold mr-2" id="kt_dashboard_daterangepicker" data-toggle="tooltip" title="Select dashboard daterange" data-placement="left">
                    <span class="text-muted font-weight-bold" id="kt_dashboard_daterangepicker_title mr-2">Today</span>
                    <span class="text-primary font-weight-bold" id="kt_dashboard_daterangepicker_date">Aug 16</span>
                </a>
            @endif

            <a href="#" class="btn btn-light btn-hover-primary btn-sm btn-icon mr-2">
                <i class="flaticon2-file icon-md text-muted"></i>
            </a>

            <a href="#" class="btn btn-light btn-hover-primary btn-sm btn-icon mr-2">
                <i class="flaticon-download-1 icon-md text-muted"></i>
            </a>

            <a href="#" class="btn btn-light btn-hover-primary btn-sm btn-icon mr-2">
                <i class="flaticon2-fax icon-md text-muted"></i>
            </a>

            <a href="#" class="btn btn-light btn-hover-primary btn-sm btn-icon mr-2">
                <i class="flaticon2-settings icon-md text-muted"></i>
            </a>

            <div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
                <a href="#" class="btn btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{ Metronic::getSVG( "media/svg/icons/Files/File-plus.svg", "svg-icon-success svg-icon-2x") }}
                    {{-- <i class="flaticon2-plus"></i> --}}
                </a>
                <div class="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                    <ul class="navi navi-hover">
                        <li class="navi-header font-weight-bold py-4">
                            <span class="font-size-lg">Choose Label:</span>
                            <i class="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
                        </li>
                        <li class="navi-separator mb-3 opacity-70"></li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-text">
                                    <span class="label label-xl label-inline label-light-success">Customer</span>
                                </span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-text">
                                    <span class="label label-xl label-inline label-light-danger">Partner</span>
                                </span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-text">
                                    <span class="label label-xl label-inline label-light-warning">Suplier</span>
                                </span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-text">
                                    <span class="label label-xl label-inline label-light-primary">Member</span>
                                </span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-text">
                                    <span class="label label-xl label-inline label-light-dark">Staff</span>
                                </span>
                            </a>
                        </li>
                        <li class="navi-separator mt-3 opacity-70"></li>
                        <li class="navi-footer py-4">
                            <a class="btn btn-clean font-weight-bold btn-sm" href="#">
                                <i class="ki ki-plus icon-sm"></i>
                                Add new
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
