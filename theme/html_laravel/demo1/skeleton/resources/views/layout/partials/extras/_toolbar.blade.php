{{-- Sticky Toolbar --}}
<ul class="sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 mt-4">
    {{-- Item --}}
    <li class="nav-item mb-2" id="kt_demo_panel_toggle" data-toggle="tooltip"  title="Check out more demos" data-placement="right">
        <a class="btn btn-sm btn-icon btn-bg-light btn-text-success btn-hover-success" href="#">
            <i class="flaticon2-drop"></i>
        </a>
    </li>

    {{-- Item --}}
    <li class="nav-item mb-2" data-toggle="tooltip" title="Layout Builder" data-placement="left">
        <a class="btn btn-sm btn-icon btn-bg-light btn-text-primary btn-hover-primary" href="#">
            <i class="flaticon2-gear"></i>
        </a>
    </li>

    {{-- Item --}}
    <li class="nav-item mb-2" data-toggle="tooltip" title="Documentation" data-placement="left">
        <a class="btn btn-sm btn-icon btn-bg-light btn-text-warning btn-hover-warning" href="https://keenthemes.com/metronic/?page=docs" target="_blank">
            <i class="flaticon2-telegram-logo"></i>
        </a>
    </li>

    @if (config('layout.extras.chat.display') == true)
        {{-- Item --}}
        <li class="nav-item" id="kt_sticky_toolbar_chat_toggler" data-toggle="tooltip" title="Chat Example" data-placement="left">
            <a class="btn btn-sm btn-icon btn-bg-light btn-text-danger btn-hover-danger" href="#" data-toggle="modal" data-target="#kt_chat_modal">
                <i class="flaticon2-chat-1"></i>
            </a>
        </li>
    @endif
</ul>
