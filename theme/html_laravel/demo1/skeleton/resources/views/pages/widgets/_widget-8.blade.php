{{-- List Widget 4 --}}

<div class="card card-custom {{ @$class }}">
    {{-- Header --}}
    <div class="card-header border-0">
        <h3 class="card-title font-weight-bolder text-dark">Todo</h3>
        <div class="card-toolbar">
            <div class="dropdown dropdown-inline">
                <a href="#" class="btn btn-light btn-sm font-size-sm font-weight-bolder dropdown-toggle text-dark-75" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
            {{-- Bullet --}}
            <span class="bullet bullet-bar bg-success align-self-stretch"></span>

            {{-- Checkbox --}}
            <label class="checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 m-0 mx-4">
                <input type="checkbox" name="" value="1"/>
                <span></span>
            </label>

            {{-- Text --}}
            <div class="d-flex flex-column flex-grow-1">
                <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1">
                    Create FireStone Logo
                </a>
                <span class="text-muted font-weight-bold">
                    Due in 2 Days
                </span>
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
            {{-- Bullet --}}
            <span class="bullet bullet-bar bg-primary align-self-stretch"></span>

            {{-- Checkbox --}}
            <label class="checkbox checkbox-lg checkbox-light-primary checkbox-single flex-shrink-0 m-0 mx-4">
                <input type="checkbox" value="1"/>
                <span></span>
            </label>

            {{-- Text --}}
            <div class="d-flex flex-column flex-grow-1">
                <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1">
                    Stakeholder Meeting
                </a>
                <span class="text-muted font-weight-bold">
                    Due in 3 Days
                </span>
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
            {{-- Bullet --}}
            <span class="bullet bullet-bar bg-warning align-self-stretch"></span>

            {{-- Checkbox --}}
            <label class="checkbox checkbox-lg checkbox-light-warning checkbox-single flex-shrink-0 m-0 mx-4">
                <input type="checkbox" value="1"/>
                <span></span>
            </label>

            {{-- Text --}}
            <div class="d-flex flex-column flex-grow-1">
                <a href="#" class="text-dark-75 text-hover-primary font-size-sm font-weight-bold font-size-lg mb-1">
                    Scoping & Estimations
                </a>
                <span class="text-muted font-weight-bold">
                    Due in 5 Days
                </span>
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
            {{-- Bullet --}}
            <span class="bullet bullet-bar bg-info align-self-stretch"></span>

            {{-- Checkbox --}}
            <label class="checkbox checkbox-lg checkbox-light-info checkbox-single flex-shrink-0 m-0 mx-4">
                <input type="checkbox" value="1"/>
                <span></span>
            </label>

            {{-- Text --}}
            <div class="d-flex flex-column flex-grow-1">
                <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1">
                    Sprint Showcase
                </a>
                <span class="text-muted font-weight-bold">
                    Due in 1 Day
                </span>
            </div>

            {{-- Dropdown --}}
            <div class="dropdown dropdown-inline ml-2" data-toggle="tooltip" title="Quick actions" data-placement="left">
                <a href="#" class="btn btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ki ki-bold-more-hor"></i>
                </a>
                <div class="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                    {{-- Navigation--}}
                    <ul class="navi navi-hover py-5">
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="navi-icon flaticon2-group"></i></span>
                                <span class="navi-text">New Group</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="flaticon2-open-text-book"></i></span>
                                <span class="navi-text">Contacts</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="navi-icon flaticon2-rocket-1"></i></span>
                                <span class="navi-text">Groups</span>
                                <span class="navi-link-badge">
                                    <span class="label label-primary label-inline">new</span>
                                </span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="navi-icon flaticon2-bell-2"></i></span>
                                <span class="navi-text">Calls</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="navi-icon flaticon2-dashboard"></i></span>
                                <span class="navi-text">Settings</span>
                            </a>
                        </li>

                        <li class="navi-separator my-3"></li>

                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="navi-icon flaticon2-protected"></i></span>
                                <span class="navi-text">Help</span>
                            </a>
                        </li>
                        <li class="navi-item">
                            <a href="#" class="navi-link">
                                <span class="navi-icon"><i class="navi-icon flaticon2-bell-2"></i></span>
                                <span class="navi-text">Privacy</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {{-- Item --}}
        <div class="d-flex align-items-center mb-2">
            {{-- Bullet --}}
            <span class="bullet bullet-bar bg-danger align-self-stretch"></span>

            {{-- Checkbox --}}
            <label class="checkbox checkbox-lg checkbox-light-danger checkbox-single flex-shrink-0 m-0 mx-4">
                <input type="checkbox" value="1"/>
                <span></span>
            </label>

            {{-- Title --}}
            <div class="d-flex flex-column flex-grow-1">
                <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1">
                    Project Retro
                </a>
                <span class="text-muted font-weight-bold">
                    Due in 12 Days
                </span>
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
