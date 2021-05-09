{{-- Advance Table Widget 2 --}}

<div class="card card-custom {{ @$class }}">
    {{-- Header --}}
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label font-weight-bolder text-dark">New Arrivals</span>
            <span class="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new members</span>
        </h3>
        <div class="card-toolbar">
            <ul class="nav nav-pills nav-pills-sm nav-dark-75">
                <li class="nav-item">
                    <a class="nav-link py-2 px-4" data-toggle="tab" href="#kt_tab_pane_1_1">Month</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link py-2 px-4" data-toggle="tab" href="#kt_tab_pane_1_2">Week</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link py-2 px-4 active" data-toggle="tab" href="#kt_tab_pane_1_3">Day</a>
                </li>
            </ul>
        </div>
    </div>

    {{-- Body --}}
    <div class="card-body pt-3 pb-0">
        {{-- Table --}}
        <div class="table-responsive">
            <table class="table table-borderless table-vertical-center">
                <thead>
                    <tr>
                        <th class="p-0" style="width: 50px"></th>
                        <th class="p-0" style="min-width: 200px"></th>
                        <th class="p-0" style="min-width: 100px"></th>
                        <th class="p-0" style="min-width: 125px"></th>
                        <th class="p-0" style="min-width: 110px"></th>
                        <th class="p-0" style="min-width: 150px"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="pl-0 py-4">
                            <div class="symbol symbol-50 symbol-light mr-1">
                                <span class="symbol-label">
                                    <img src="{{ asset('media/svg/misc/006-plurk.svg') }}" class="h-50 align-self-center"/>
                                </span>
                            </div>
                        </td>
                        <td class="pl-0">
                            <a href="#" class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Sant Outstanding</a>
                            <div>
                                <span class="font-weight-bolder">Email:</span>
                                <a class="text-muted font-weight-bold text-hover-primary" href="#">bprow@bnc.cc</a>
                            </div>
                        </td>
                        <td class="text-right">
                            <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                                $2,000,000
                            </span>
                            <span class="text-muted font-weight-bold">
                                Paid
                            </span>
                        </td>
                        <td class="text-right">
                            <span class="text-muted font-weight-500">
                            ReactJs, HTML
                            </span>
                        </td>
                        <td class="text-right">
                            <span class="label label-lg label-light-primary label-inline">Approved</span>
                        </td>
                        <td class="text-right pr-0">
                            <a href="#" class="btn btn-icon btn-light btn-sm">
                                {{ Metronic::getSVG("media/svg/icons/General/Settings-1.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                            <a href="#" class="btn btn-icon btn-light btn-sm mx-3">
                                {{ Metronic::getSVG("media/svg/icons/Communication/Write.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                            <a href="#" class="btn btn-icon btn-light btn-sm">
                                {{ Metronic::getSVG("media/svg/icons/General/Trash.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="pl-0 py-4">
                            <div class="symbol symbol-50 symbol-light">
                                <span class="symbol-label">
                                    <img src="{{ asset('media/svg/misc/015-telegram.svg') }}" class="h-50 align-self-center"/>
                                </span>
                            </div>
                        </td>
                        <td class="pl-0">
                            <a href="#" class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Application Development</a>
                            <div>
                                <span class="font-weight-bolder">Email:</span>
                                <a class="text-muted font-weight-bold text-hover-primary" href="#">app@dev.com</a>
                            </div>
                        </td>
                        <td class="text-right">
                            <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                                $4,600,000
                            </span>
                            <span class="text-muted font-weight-bold">
                                Paid
                            </span>
                        </td>
                        <td class="text-right">
                            <span class="text-muted font-weight-500">
                                Python, MySQL
                            </span>
                        </td>
                        <td class="text-right">
                            <span class="label label-lg label-light-warning label-inline">In Progress</span>
                        </td>
                        <td class="text-right pr-0">
                            <a href="#" class="btn btn-icon btn-light btn-sm">
                                {{ Metronic::getSVG("media/svg/icons/General/Settings-1.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                            <a href="#" class="btn btn-icon btn-light btn-sm mx-3">
                                {{ Metronic::getSVG("media/svg/icons/Communication/Write.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                            <a href="#" class="btn btn-icon btn-light btn-sm">
                                {{ Metronic::getSVG("media/svg/icons/General/Trash.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="pl-0 py-4">
                            <div class="symbol symbol-50 symbol-light">
                                <span class="symbol-label">
                                    <img src="{{ asset('media/svg/misc/003-puzzle.svg') }}" class="h-50 align-self-center"/>
                                </span>
                            </div>
                        </td>
                        <td class="pl-0">
                            <a href="#" class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Payrol Application</a>
                            <div>
                                <span class="font-weight-bolder">Email:</span>
                                <a class="text-muted font-weight-bold text-hover-primary" href="#">company@dev.com</a>
                            </div>
                        </td>
                        <td class="text-right">
                            <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                                $560,000
                            </span>
                            <span class="text-muted font-weight-bold">
                                Paid
                            </span>
                        </td>
                        <td class="text-right">
                            <span class="text-muted font-weight-500">
                                Laravel, Metronic
                            </span>
                        </td>
                        <td class="text-right">
                            <span class="label label-lg label-light-success label-inline">Success</span>
                        </td>
                        <td class="text-right pr-0">
                            <a href="#" class="btn btn-icon btn-light btn-sm">
                                {{ Metronic::getSVG("media/svg/icons/General/Settings-1.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                            <a href="#" class="btn btn-icon btn-light btn-sm mx-3">
                                {{ Metronic::getSVG("media/svg/icons/Communication/Write.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                            <a href="#" class="btn btn-icon btn-light btn-sm">
                                {{ Metronic::getSVG("media/svg/icons/General/Trash.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="pl-0 py-4">
                            <div class="symbol symbol-50 symbol-light">
                                <span class="symbol-label">
                                    <img src="{{ asset('media/svg/misc/005-bebo.svg') }}" class="h-50 align-self-center"/>
                                </span>
                            </div>
                        </td>
                        <td class="pl-0">
                            <a href="#" class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">HR Management System</a>
                            <div>
                                <span class="font-weight-bolder">Email:</span>
                                <a class="text-muted font-weight-bold text-hover-primary" href="#">hr@demo.com</a>
                            </div>
                        </td>
                        <td class="text-right">
                            <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                                $57,000
                            </span>
                            <span class="text-muted font-weight-bold">
                                Paid
                            </span>
                        </td>
                        <td class="text-right">
                            <span class="text-muted font-weight-bold">
                                AngularJS, C#
                            </span>
                        </td>
                        <td class="text-right">
                            <span class="label label-lg label-light-danger label-inline">Rejected</span>
                        </td>
                        <td class="text-right pr-0">
                            <a href="#" class="btn btn-icon btn-light btn-sm">
                                {{ Metronic::getSVG("media/svg/icons/General/Settings-1.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                            <a href="#" class="btn btn-icon btn-light btn-sm mx-3">
                                {{ Metronic::getSVG("media/svg/icons/Communication/Write.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                            <a href="#" class="btn btn-icon btn-light btn-sm">
                                {{ Metronic::getSVG("media/svg/icons/General/Trash.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="pl-0 py-4">
                            <div class="symbol symbol-50 symbol-light">
                                <span class="symbol-label">
                                    <img src="{{ asset('media/svg/misc/014-kickstarter.svg') }}" class="h-50 align-self-center"/>
                                </span>
                            </div>
                        </td>
                        <td class="pl-0">
                            <a href="#" class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">KTR Mobile Application</a>
                            <div>
                                <span class="font-weight-bolder">Email:</span>
                                <a class="text-muted font-weight-bold text-hover-primary" href="#">ktr@demo.com</a>
                            </div>
                        </td>
                        <td class="text-right">
                            <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                                $45,200,000
                            </span>
                            <span class="text-muted font-weight-bold">
                                Paid
                            </span>
                        </td>
                        <td class="text-right">
                            <span class="text-muted font-weight-500">
                                ReactJS, Ruby
                            </span>
                        </td>
                        <td class="text-right">
                            <span class="label label-lg label-light-warning label-inline">In Progress</span>
                        </td>
                        <td class="text-right pr-0">
                            <a href="#" class="btn btn-icon btn-light btn-sm">
                                {{ Metronic::getSVG("media/svg/icons/General/Settings-1.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                            <a href="#" class="btn btn-icon btn-light btn-sm mx-3">
                                {{ Metronic::getSVG("media/svg/icons/Communication/Write.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                            <a href="#" class="btn btn-icon btn-light btn-sm">
                                {{ Metronic::getSVG("media/svg/icons/General/Trash.svg", "svg-icon-md svg-icon-primary") }}
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
