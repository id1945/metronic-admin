{{-- Chat --}}

<div class="modal modal-sticky modal-sticky-bottom-right" id="kt_chat_modal" role="dialog" data-backdrop="false">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            {{-- Card --}}
            <div class="card card-custom">
                {{-- Header --}}
                <div class="card-header align-items-center px-4 py-3">
                    <div class="text-left flex-grow-1">
                        {{-- Dropdown Menu  --}}
                        <div class="dropdown dropdown-inline">
                            <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{ Metronic::getSVG("media/svg/icons/Communication/Add-user.svg", "svg-icon-lg") }}
                            </button>
                            <div class="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-md">
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
                    <div class="text-center flex-grow-1">
                        <div class="text-dark-75 font-weight-bold font-size-h5">Matt Pears</div>
                        <div>
                            <span class="label label-dot label-success"></span>
                            <span class="font-weight-bold text-muted font-size-sm">Active</span>
                        </div>
                    </div>
                    <div class="text-right flex-grow-1">
                        <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md"  data-dismiss="modal">
                            <i class="ki ki-close icon-1x"></i>
                        </button>
                    </div>
                </div>

                {{-- Body --}}
                <div class="card-body">
                    {{-- Scroll --}}
                    <div class="scroll scroll-pull" data-height="400" data-mobile-height="350">
                        {{-- Messages --}}
                        <div class="messages">
                            {{-- Message In --}}
                            <div class="d-flex flex-column mb-5 align-items-start">
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-circle symbol-40 mr-3">
                                        <img alt="Pic" src="{{ asset('media/users/300_12.jpg') }}"/>
                                    </div>
                                    <div>
                                        <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                        <span class="text-muted font-size-sm">2 Hours</span>
                                    </div>
                                </div>
                                <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold text-left max-w-400px">
                                    How likely are you to recommend our company
                                    to your friends and family?
                                </div>
                            </div>

                            {{-- Message Out --}}
                            <div class="d-flex flex-column mb-5 align-items-end">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <span class="text-muted font-size-sm">3 minutes</span>
                                        <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                    </div>
                                    <div class="symbol symbol-circle symbol-40 ml-3">
                                        <img alt="Pic" src="{{ asset('media/users/300_21.jpg') }}"/>
                                    </div>
                                </div>
                                <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold text-right max-w-400px">
                                    Hey there, we’re just writing to let you know
                                    that you’ve been subscribed to a repository on GitHub.
                                </div>
                            </div>

                            {{-- Message In --}}
                            <div class="d-flex flex-column mb-5 align-items-start">
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-circle symbol-40 mr-3">
                                        <img alt="Pic" src="{{ asset('media/users/300_21.jpg') }}"/>
                                    </div>
                                    <div>
                                        <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                        <span class="text-muted font-size-sm">40 seconds</span>
                                    </div>
                                </div>
                                <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold text-left max-w-400px">
                                    Ok, Understood!
                                </div>
                            </div>

                            {{-- Message Out --}}
                            <div class="d-flex flex-column mb-5 align-items-end">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <span class="text-muted font-size-sm">Just now</span>
                                        <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                    </div>
                                    <div class="symbol symbol-circle symbol-40 ml-3">
                                        <img alt="Pic" src="{{ asset('media/users/300_21.jpg') }}"/>
                                    </div>
                                </div>
                                <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold text-right max-w-400px">
                                    You’ll receive notifications for all issues, pull requests!
                                </div>
                            </div>

                            {{-- Message In --}}
                            <div class="d-flex flex-column mb-5 align-items-start">
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-circle symbol-40 mr-3">
                                        <img alt="Pic" src="{{ asset('media/users/300_12.jpg') }}"/>
                                    </div>
                                    <div>
                                        <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                        <span class="text-muted font-size-sm">40 seconds</span>
                                    </div>
                                </div>
                                <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold text-left max-w-400px">
                                    You can unwatch this repository immediately by clicking here: <a href="#">https://github.com</a>
                                </div>
                            </div>

                            {{-- Message Out --}}
                            <div class="d-flex flex-column mb-5 align-items-end">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <span class="text-muted font-size-sm">Just now</span>
                                        <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                    </div>
                                    <div class="symbol symbol-circle symbol-40 ml-3">
                                        <img alt="Pic" src="{{ asset('media/users/300_21.jpg') }}"/>
                                    </div>
                                </div>
                                <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold text-right max-w-400px">
                                    Discover what students who viewed Learn Figma - UI/UX Design. Essential Training also viewed
                                </div>
                            </div>

                            {{-- Message In --}}
                            <div class="d-flex flex-column mb-5 align-items-start">
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-circle symbol-40 mr-3">
                                        <img alt="Pic" src="{{ asset('media/users/300_12.jpg') }}"/>
                                    </div>
                                    <div>
                                        <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                        <span class="text-muted font-size-sm">40 seconds</span>
                                    </div>
                                </div>
                                <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold text-left max-w-400px">
                                    Most purchased Business courses during this sale!
                                </div>
                            </div>

                            {{-- Message Out --}}
                            <div class="d-flex flex-column mb-5 align-items-end">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <span class="text-muted font-size-sm">Just now</span>
                                        <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                    </div>
                                    <div class="symbol symbol-circle symbol-40 ml-3">
                                        <img alt="Pic" src="{{ asset('media/users/300_21.jpg') }}"/>
                                    </div>
                                </div>
                                <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold text-right max-w-400px">
                                    Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Footer --}}
                <div class="card-footer align-items-center">
                    {{-- Compose --}}
                    <textarea class="form-control border-0 p-0" rows="2" placeholder="Type a message"></textarea>
                    <div class="d-flex align-items-center justify-content-between mt-5">
                        <div class="mr-3">
                            <a href="#" class="btn btn-clean btn-icon btn-md mr-1"><i class="flaticon2-photograph icon-lg"></i></a>
                            <a href="#" class="btn btn-clean btn-icon btn-md"><i class="flaticon2-photo-camera  icon-lg"></i></a>
                        </div>
                        <div>
                            <button type="button" class="btn btn-primary btn-md text-uppercase font-weight-bold chat-send py-2 px-6">Send</button>
                        </div>
                    </div>
                    {{-- Compose --}}
                </div>
            </div>
        </div>
    </div>
</div>
