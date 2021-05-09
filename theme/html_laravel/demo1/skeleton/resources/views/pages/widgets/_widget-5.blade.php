{{-- List Widget 1 --}}

<div class="card card-custom {{ @$class }}">
    {{-- Header --}}
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label font-weight-bolder text-dark">Tasks Overview</span>
            <span class="text-muted mt-3 font-weight-bold font-size-sm">Pending 10 tasks</span>
        </h3>
        <div class="card-toolbar">
            <div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
                <a href="#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ki ki-bold-more-ver"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
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
    </div>

    {{-- Body --}}
    <div class="card-body pt-8">
        {{-- Item --}}
        <div class="d-flex align-items-center mb-10">
            {{-- Symbol --}}
            <div class="symbol symbol-40 symbol-light-primary mr-5">
                <span class="symbol-label">
                    {{ Metronic::getSVG("media/svg/icons/Home/Library.svg", "svg-icon-lg svg-icon-primary") }}
                </span>
            </div>

            {{-- Text --}}
            <div class="d-flex flex-column font-weight-bold">
                <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">Project Briefing</a>
                <span class="text-muted">Project Manager</span>
            </div>
        </div>

        {{-- Item --}}
        <div class="d-flex align-items-center mb-10">
            {{-- Symbol --}}
            <div class="symbol symbol-40 symbol-light-warning mr-5">
                <span class="symbol-label">
                    {{ Metronic::getSVG("media/svg/icons/Communication/Write.svg", "svg-icon-lg svg-icon-warning") }}
                </span>
            </div>

            {{-- Text --}}
            <div class="d-flex flex-column font-weight-bold">
                <a href="#" class="text-dark-75 text-hover-primary mb-1 font-size-lg">Concept Design</a>
                <span class="text-muted">Art Director</span>
            </div>
        </div>

        {{-- Item --}}
        <div class="d-flex align-items-center mb-10">
            {{-- Symbol --}}
            <div class="symbol symbol-40 symbol-light-success mr-5">
                <span class="symbol-label">
                    {{ Metronic::getSVG("media/svg/icons/Communication/Group-chat.svg", "svg-icon-lg svg-icon-success") }}
                </span>
            </div>

            {{-- Text --}}
            <div class="d-flex flex-column font-weight-bold">
                <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">Functional Logics</a>
                <span class="text-muted">Lead Developer</span>
            </div>
        </div>

        {{-- Item --}}
        <div class="d-flex align-items-center mb-10">
            {{-- Symbol --}}
            <div class="symbol symbol-40 symbol-light-danger mr-5">
                <span class="symbol-label">
                    {{ Metronic::getSVG("media/svg/icons/General/Attachment2.svg", "svg-icon-lg svg-icon-danger") }}
                </span>
            </div>

            {{-- Text --}}
            <div class="d-flex flex-column font-weight-bold">
                <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">Development</a>
                <span class="text-muted">DevOps</span>
            </div>
        </div>

        {{-- Item --}}
        <div class="d-flex align-items-center mb-2">
            {{-- Symbol --}}
            <div class="symbol symbol-40 symbol-light-info mr-5">
                <span class="symbol-label">
                    {{ Metronic::getSVG("media/svg/icons/Communication/Shield-user.svg", "svg-icon-lg  svg-icon-info") }}
                </span>
            </div>

            {{-- Text --}}
            <div class="d-flex flex-column font-weight-bold">
                <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">Testing</a>
                <span class="text-muted">QA Managers</span>
            </div>
        </div>
    </div>
</div>
