{{-- Mixed Widget 1 --}}

<div class="card card-custom bg-gray-100 {{ @$class }}">
    {{-- Header --}}
    <div class="card-header border-0 bg-danger py-5">
        <h3 class="card-title font-weight-bolder text-white">Sales Stat</h3>
        <div class="card-toolbar">
            <div class="dropdown dropdown-inline">
                <a href="#" class="btn btn-transparent-white btn-sm font-weight-bolder dropdown-toggle px-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Export
                </a>
                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                    {{-- Navigation --}}
                    <ul class="navi navi-hover">
                        <li class="navi-header">
                            <span class="text-primary text-uppercase font-weight-bold">Add new:</span>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <i class="navi-icon flaticon2-graph-1"></i>
                                <span class="navi-text">Order</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <i class="navi-icon flaticon2-calendar-4"></i>
                                <span class="navi-text">Event</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <i class="navi-icon flaticon2-layers-1"></i>
                                <span class="navi-text">Report</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <i class="navi-icon flaticon2-calendar-4"></i>
                                <span class="navi-text">Post</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <i class="navi-icon flaticon2-file-1"></i>
                                <span class="navi-text">File</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {{-- Body --}}
    <div class="card-body p-0 position-relative overflow-hidden">
        {{-- Chart --}}
        <div id="kt_mixed_widget_1_chart" class="card-rounded-bottom bg-danger" style="height: 200px"></div>

        {{-- Stats --}}
        <div class="card-spacer mt-n25">
            {{-- Row --}}
            <div class="row m-0">
                <div class="col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7">
                    {{ Metronic::getSVG("media/svg/icons/Media/Equalizer.svg", "svg-icon-3x svg-icon-warning d-block my-2") }}
                    <a href="#" class="text-warning font-weight-bold font-size-h6">
                        Weekly Sales
                    </a>
                </div>
                <div class="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                    {{ Metronic::getSVG("media/svg/icons/Communication/Add-user.svg", "svg-icon-3x svg-icon-primary d-block my-2") }}
                    <a href="#" class="text-primary font-weight-bold font-size-h6 mt-2">
                        New Users
                    </a>
                </div>
            </div>
            {{-- Row --}}
            <div class="row m-0">
                <div class="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                    {{ Metronic::getSVG("media/svg/icons/Design/Layers.svg", "svg-icon-3x svg-icon-danger d-block my-2") }}
                    <a href="#" class="text-danger font-weight-bold font-size-h6 mt-2">
                        Item Orders
                    </a>
                </div>
                <div class="col bg-light-success px-6 py-8 rounded-xl">
                    {{ Metronic::getSVG("media/svg/icons/Communication/Urgent-mail.svg", "svg-icon-3x svg-icon-success d-block my-2") }}
                    <a href="#" class="text-success font-weight-bold font-size-h6 mt-2">
                        Bug Reports
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
