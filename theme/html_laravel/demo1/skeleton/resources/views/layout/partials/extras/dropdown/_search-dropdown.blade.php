<div class="quick-search quick-search-dropdown" id="kt_quick_search_dropdown">
    {{-- Form --}}
    <form method="get" class="quick-search-form">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    {{ Metronic::getSVG("media/svg/icons/General/Search.svg", "svg-icon-lg") }}
                </span>
            </div>
            <input type="text" class="form-control" placeholder="Search..."/>
            <div class="input-group-append">
                <span class="input-group-text">
                    <i class="quick-search-close ki ki-close icon-sm text-muted"></i>
                </span>
            </div>
       	</div>
    </form>

    {{-- Scroll --}}
    <div class="quick-search-wrapper scroll" data-scroll="true" data-height="325" data-mobile-height="200">
    </div>
</div>
