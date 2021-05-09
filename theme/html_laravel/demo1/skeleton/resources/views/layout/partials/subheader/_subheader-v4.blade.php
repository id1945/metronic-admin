{{-- Subheader --}}
<div class="subheader pt-2 pb-2 {{ Metronic::printClasses('subheader', false) }}" id="kt_subheader">
    <div class="{{ Metronic::printClasses('subheader-container', false) }} d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <div class="d-flex align-items-center flex-wrap mr-2">

            <a href="#" class="btn btn-light-danger font-weight-bolder btn-sm mr-2">
                Reports
            </a>

            <a href="#" class="btn btn-light-success font-weight-bolder btn-sm mr-2">
                Import
            </a>

            <div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                <input type="text" class="form-control pl-4" placeholder="Search..."/>
                <div class="input-group-append">
                    <span class="input-group-text">
                        {{ Metronic::getSVG("media/svg/icons/General/Search.svg", "svg-icon-md") }}
                    </span>
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center">
            @if (config('layout.subheader.displayDaterangepicker'))
                <a href="#" class="btn btn-light btn-sm font-weight-bold mr-2" id="kt_dashboard_daterangepicker" data-toggle="tooltip" title="Select dashboard daterange" data-placement="left">
                    <span class="text-muted font-weight-bold" id="kt_dashboard_daterangepicker_title">Today</span>&nbsp;
                    <span class="text-primary font-weight-bold" id="kt_dashboard_daterangepicker_date">Aug 16</span>
                    {{--<i class="flaticon2-calendar-1"></i>--}}
                    {{ Metronic::getSVG("media/svg/icons/Communication/Chat-check.svg", "svg-icon-sm svg-icon-primary ml-1") }}
                </a>
            @endif

            <a href="#" class="btn btn-light btn-hover-primary btn-sm btn-icon mr-2">
                <i class="flaticon2-file text-muted"></i>
            </a>

            <a href="#" class="btn btn-light btn-hover-primary btn-sm btn-icon mr-2">
                <i class="flaticon-download-1 text-muted"></i>
            </a>

            <a href="#" class="btn btn-light btn-hover-primary btn-sm btn-icon mr-2">
                <i class="flaticon2-fax text-muted"></i>
            </a>

            <a href="#" class="btn btn-light btn-hover-primary btn-sm btn-icon mr-2">
                <i class="flaticon2-settings text-muted"></i>
            </a>

            <div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
                <a href="#" class="btn btn-icon btn-light-primary btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ki ki-plus icon-1x"></i>
                </a>
                <div class="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                    <ul class="navi navi-hover">
                        <li class="navi-header pb-1">
                            <span class="text-primary text-uppercase font-weight-bold font-size-sm">Add new:</span>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-shopping-cart-1"></i></span>
                                <span class="navi-text">Order</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-calendar-8"></i></span>
                                <span class="navi-text">Event</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-graph-1"></i></span>
                                <span class="navi-text">Report</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-rocket-1"></i></span>
                                <span class="navi-text">Post</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-writing"></i></span>
                                <span class="navi-text">File</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
