{{-- Subheader V1 --}}

<div class="subheader py-2 {{ Metronic::printClasses('subheader', false) }}" id="kt_subheader">
    <div class="{{ Metronic::printClasses('subheader-container', false) }} d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">

		{{-- Info --}}
        <div class="d-flex align-items-center flex-wrap mr-1">

			{{-- Page Title --}}
            <h5 class="text-dark font-weight-bold my-2 mr-5">
                {{ @$page_title }}

                @if (isset($page_description) && config('layout.subheader.displayDesc'))
                    <small>{{ @$page_description }}</small>
                @endif
            </h5>

            @if (!empty($page_breadcrumbs))
				{{-- Separator --}}
                <div class="subheader-separator subheader-separator-ver my-2 mr-4 d-none"></div>

				{{-- Breadcrumb --}}
                <ul class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2">
                    <li class="breadcrumb-item"><a href="#"><i class="flaticon2-shelter text-muted icon-1x"></i></a></li>
                    @foreach ($page_breadcrumbs as $k => $item)
						<li class="breadcrumb-item">
                        	<a href="{{ url($item['page']) }}" class="text-muted">
                            	{{ $item['title'] }}
                        	</a>
						</li>
                    @endforeach
                </ul>
            @endif
        </div>

		{{-- Toolbar --}}
        <div class="d-flex align-items-center">

            @hasSection('page_toolbar')
                @section('page_toolbar')
            @endif

            <div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
                <a href="#" class="btn btn-icon"data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{ Metronic::getSVG("media/svg/icons/Files/File-plus.svg", "svg-icon-success svg-icon-2x") }}
                </a>
                <div class="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                    {{-- Navigation --}}
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
