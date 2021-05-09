{{-- List Widget 3 --}}

<div class="card card-custom {{ @$class }}">
    {{-- Header --}}
    <div class="card-header border-0">
        <h3 class="card-title font-weight-bolder text-dark">Authors</h3>
        <div class="card-toolbar">
            <div class="dropdown dropdown-inline">
                <a href="#" class="btn btn-light-primary btn-sm font-weight-bolder dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Create
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
    <div class="card-body pt-2">
        {{-- Item --}}
        <div class="d-flex align-items-center mb-10">
            {{-- Symbol --}}
            <div class="symbol symbol-40 symbol-light-success mr-5">
                <span class="symbol-label">
                    <img src="{{ asset('media/svg/avatars/009-boy-4.svg') }}" class="h-75 align-self-end"/>
                </span>
            </div>

            {{-- Text --}}
            <div class="d-flex flex-column flex-grow-1 font-weight-bold">
                <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">Ricky Hunt</a>
                <span class="text-muted">PHP, SQLite, Artisan CLI</span>
            </div>

            {{-- Dropdown --}}
            <div class="dropdown dropdown-inline ml-2" data-toggle="tooltip" title="Quick actions" data-placement="left">
                <a href="#" class="btn btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ki ki-bold-more-hor"></i>
                </a>
                <div class="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                    {{-- Navigation--}}
                    <ul class="navi navi-hover">
                        <li class="navi-header font-weight-bold">
                            Jump to:
                            <i class="flaticon2-information" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
                        </li>
                        <li class="navi-separator mb-3"></li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-drop"></i></span>
                                <span class="navi-text">Recent Orders</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-calendar-8"></i></span>
                                <span class="navi-text">Support Cases</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-telegram-logo"></i></span>
                                <span class="navi-text">Projects</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-new-email"></i></span>
                                <span class="navi-text">Messages</span>
                                <span class="navi-label">
                                    <span class="label label-success label-rounded">5</span>
                                </span>
                            </a>
                        </li>
                        <li class="navi-separator mt-3"></li>
                        <li class="navi-footer">
                            <a class="btn btn-light-primary font-weight-bolder btn-sm" href="#">Upgrade plan</a>
                            <a class="btn btn-clean font-weight-bold btn-sm" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {{-- Item --}}
        <div class="d-flex align-items-center mb-10">
            {{-- Symbol --}}
            <div class="symbol symbol-40 symbol-light-success mr-5">
                <span class="symbol-label">
                    <img src="{{ asset('media/svg/avatars/006-girl-3.svg') }}" class="h-75 align-self-end"/>
                </span>
            </div>

            {{-- Text --}}
            <div class="d-flex flex-column flex-grow-1 font-weight-bold">
                <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">Anne Clarc</a>
                <span class="text-muted">PHP, SQLite, Artisan CLI</span>
            </div>

            {{-- Dropdown --}}
            <div class="dropdown dropdown-inline ml-2" data-toggle="tooltip" title="Quick actions" data-placement="left">
                <a href="#" class="btn btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ki ki-bold-more-hor"></i>
                </a>
                <div class="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                    {{-- Navigation--}}
                    <ul class="navi navi-hover">
                        <li class="navi-header font-weight-bold">
                            Jump to:
                            <i class="flaticon2-information" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
                        </li>
                        <li class="navi-separator mb-3"></li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-drop"></i></span>
                                <span class="navi-text">Recent Orders</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-calendar-8"></i></span>
                                <span class="navi-text">Support Cases</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-telegram-logo"></i></span>
                                <span class="navi-text">Projects</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-new-email"></i></span>
                                <span class="navi-text">Messages</span>
                                <span class="navi-label">
                                    <span class="label label-success label-rounded">5</span>
                                </span>
                            </a>
                        </li>
                        <li class="navi-separator mt-3"></li>
                        <li class="navi-footer">
                            <a class="btn btn-light-primary font-weight-bolder btn-sm" href="#">Upgrade plan</a>
                            <a class="btn btn-clean font-weight-bold btn-sm" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {{-- Item --}}
        <div class="d-flex align-items-center mb-10">
            {{-- Symbol --}}
            <div class="symbol symbol-40 symbol-light-success mr-5">
                <span class="symbol-label">
                    <img src="{{ asset('media/svg/avatars/011-boy-5.svg') }}" class="h-75 align-self-end"/>
                </span>
            </div>

            {{-- Text --}}
            <div class="d-flex flex-column flex-grow-1 font-weight-bold">
                <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">Kristaps Zumman</a>
                <span class="text-muted">PHP, SQLite, Artisan CLI</span>
            </div>

            {{-- Dropdown --}}
            <div class="dropdown dropdown-inline ml-2" data-toggle="tooltip" title="Quick actions" data-placement="left">
                <a href="#" class="btn btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ki ki-bold-more-hor"></i>
                </a>
                <div class="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                    {{-- Navigation--}}
                    <ul class="navi navi-hover">
                        <li class="navi-header font-weight-bold">
                            Jump to:
                            <i class="flaticon2-information" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
                        </li>
                        <li class="navi-separator mb-3"></li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-drop"></i></span>
                                <span class="navi-text">Recent Orders</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-calendar-8"></i></span>
                                <span class="navi-text">Support Cases</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-telegram-logo"></i></span>
                                <span class="navi-text">Projects</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-new-email"></i></span>
                                <span class="navi-text">Messages</span>
                                <span class="navi-label">
                                    <span class="label label-success label-rounded">5</span>
                                </span>
                            </a>
                        </li>
                        <li class="navi-separator mt-3"></li>
                        <li class="navi-footer">
                            <a class="btn btn-light-primary font-weight-bolder btn-sm" href="#">Upgrade plan</a>
                            <a class="btn btn-clean font-weight-bold btn-sm" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {{-- Item --}}
        <div class="d-flex align-items-center mb-10">
            {{-- Symbol --}}
            <div class="symbol symbol-40 symbol-light-success mr-5">
                <span class="symbol-label">
                    <img src="{{ asset('media/svg/avatars/015-boy-6.svg') }}" class="h-75 align-self-end"/>
                </span>
            </div>

            {{-- Text --}}
            <div class="d-flex flex-column flex-grow-1 font-weight-bold">
                <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">Ricky Hunt</a>
                <span class="text-muted">PHP, SQLite, Artisan CLI</span>
            </div>

            {{-- Dropdown --}}
            <div class="dropdown dropdown-inline ml-2" data-toggle="tooltip" title="Quick actions" data-placement="left">
                <a href="#" class="btn btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ki ki-bold-more-hor"></i>
                </a>
                <div class="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                    {{-- Navigation--}}
                    <ul class="navi navi-hover">
                        <li class="navi-header font-weight-bold">
                            Jump to:
                            <i class="flaticon2-information" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
                        </li>
                        <li class="navi-separator mb-3"></li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-drop"></i></span>
                                <span class="navi-text">Recent Orders</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-calendar-8"></i></span>
                                <span class="navi-text">Support Cases</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-telegram-logo"></i></span>
                                <span class="navi-text">Projects</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-new-email"></i></span>
                                <span class="navi-text">Messages</span>
                                <span class="navi-label">
                                    <span class="label label-success label-rounded">5</span>
                                </span>
                            </a>
                        </li>
                        <li class="navi-separator mt-3"></li>
                        <li class="navi-footer">
                            <a class="btn btn-light-primary font-weight-bolder btn-sm" href="#">Upgrade plan</a>
                            <a class="btn btn-clean font-weight-bold btn-sm" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {{-- Item --}}
        <div class="d-flex align-items-center mb-2">
            {{-- Symbol --}}
            <div class="symbol symbol-40 symbol-light-success mr-5">
                <span class="symbol-label">
                    <img src="{{ asset('media/svg/avatars/016-boy-7.svg') }}" class="h-75 align-self-end"/>
                </span>
            </div>

            {{-- Text --}}
            <div class="d-flex flex-column flex-grow-1 font-weight-bold">
                <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">Carles Puyol</a>
                <span class="text-muted">PHP, SQLite, Artisan CLI</span>
            </div>

            {{-- Dropdown --}}
            <div class="dropdown dropdown-inline ml-2" data-toggle="tooltip" title="Quick actions" data-placement="left">
                <a href="#" class="btn btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ki ki-bold-more-hor"></i>
                </a>
                <div class="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                    {{-- Navigation--}}
                    <ul class="navi navi-hover">
                        <li class="navi-header font-weight-bold">
                            Jump to:
                            <i class="flaticon2-information" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
                        </li>
                        <li class="navi-separator mb-3"></li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-drop"></i></span>
                                <span class="navi-text">Recent Orders</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-calendar-8"></i></span>
                                <span class="navi-text">Support Cases</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-telegram-logo"></i></span>
                                <span class="navi-text">Projects</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-new-email"></i></span>
                                <span class="navi-text">Messages</span>
                                <span class="navi-label">
                                    <span class="label label-success label-rounded">5</span>
                                </span>
                            </a>
                        </li>
                        <li class="navi-separator mt-3"></li>
                        <li class="navi-footer">
                            <a class="btn btn-light-primary font-weight-bolder btn-sm" href="#">Upgrade plan</a>
                            <a class="btn btn-clean font-weight-bold btn-sm" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
