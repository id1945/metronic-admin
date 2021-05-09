{{-- List Widget 8 --}}

<div class="card card-custom {{ @$class }}">
    {{-- Header --}}
    <div class="card-header border-0">
        <h3 class="card-title font-weight-bolder text-dark">Trends</h3>
        <div class="card-toolbar">
            <div class="dropdown dropdown-inline">
                <a href="#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ki ki-bold-more-ver"></i>
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
    <div class="card-body pt-0">
        {{-- Item --}}
        <div class="mb-10">
            {{-- Section --}}
            <div class="d-flex align-items-center">
                {{-- Symbol --}}
                <div class="symbol symbol-45 symbol-light mr-5">
                    <span class="symbol-label">
                        <img src="{{ asset('media/svg/misc/006-plurk.svg') }}" class="h-50 align-self-center" />
                    </span>
                </div>

                {{-- Text --}}
                <div class="d-flex flex-column flex-grow-1">
                    <a href="#" class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">Top Authors</a>
                    <span class="text-muted font-weight-bold">5 day ago</span>
                </div>
            </div>

            {{-- Desc --}}
            <p class="text-dark-50 m-0 pt-5 font-weight-normal">
                A brief write up about the top Authors that
                fits within this section
            </p>
        </div>

        {{-- Item --}}
        <div class="mb-10">
            {{-- Section --}}
            <div class="d-flex align-items-center">
                {{-- Symbol --}}
                <div class="symbol symbol-45 symbol-light mr-5">
                    <span class="symbol-label">
                        <img src="{{ asset('media/svg/misc/015-telegram.svg') }}" class="h-50 align-self-center" />
                    </span>
                </div>

                {{-- Text --}}
                <div class="d-flex flex-column flex-grow-1">
                    <a href="#" class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">Popular Authors</a>
                    <span class="text-muted font-weight-bold">5 day ago</span>
                </div>
            </div>

            {{-- Desc --}}
            <p class="text-dark-50 m-0 pt-5 font-weight-normal">
                A brief write up about the Popular Authors that
                fits within this section
            </p>
        </div>

        {{-- Item --}}
        <div class="">
            {{-- Section --}}
            <div class="d-flex align-items-center">
                {{-- Symbol --}}
                <div class="symbol symbol-45 symbol-light mr-5">
                    <span class="symbol-label">
                        <img src="{{ asset('media/svg/misc/014-kickstarter.svg') }}" class="h-50 align-self-center" />
                    </span>
                </div>

                {{-- Text --}}
                <div class="d-flex flex-column flex-grow-1">
                    <a href="#" class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">New Users</a>
                    <span class="text-muted font-weight-bold">5 day ago</span>
                </div>
            </div>

            {{-- Desc --}}
            <p class="text-dark-50 m-0 pt-5 font-weight-normal">
                A brief write up about the New Users that
                fits within this section
            </p>
        </div>
    </div>
</div>
