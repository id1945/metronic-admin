{{-- Search --}}
<div class="quick-search quick-search-inline ml-20 w-300px" id="kt_quick_search_inline">
    {{-- Form --}}
    <form method="get" class="quick-search-form">
        <div class="input-group rounded bg-light">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    {{ Metronic::getSVG("media/svg/icons/General/Search.svg", "svg-icon-lg") }}
                </span>
            </div>

            <input type="text" class="form-control h-40px" placeholder="Search..."/>

            <div class="input-group-append">
                <span class="input-group-text">
                    <i class="quick-search-close ki ki-close icon-sm text-muted"></i>
                </span>
            </div>
        </div>
    </form>

    {{-- Search Toggle --}}
    <div id="kt_quick_search_toggle" data-toggle="dropdown" data-offset="0px,1px"></div>

    {{-- Dropdown --}}
    <div class="dropdown-menu dropdown-menu-left dropdown-menu-lg dropdown-menu-anim-up">
        <div class="quick-search-wrapper scroll" data-scroll="true" data-height="350" data-mobile-height="200">
        </div>
    </div>
</div>
