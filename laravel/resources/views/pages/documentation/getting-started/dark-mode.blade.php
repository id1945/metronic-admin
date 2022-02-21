<x-base-layout>

    <!--begin::Section-->
    <div class="pt-5">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="rtl-version">
            <a href="#rtl-version"></a>
            Quick Setup
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
            At the moment, these are the available demos that have dark mode version:

            <ul class="py-5">
                @foreach(theme()->getOption('product', 'demos') ?? [] as $id => $demo)
                    @if(config($id.'.general.layout.main.dark-mode-enabled'))
                        <li><code>{{ $id }}</code></li>
                    @endif
                @endforeach
            </ul>

        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
            <p>For the preview purpose, we use URL query <code>?mode=dark</code> to enable the other demos preview without modifying the Laravel routes.
                See the example preview URL <a href="{{ url()->current() . '?mode=dark' }}">{{ url()->current() . '?mode=dark' }}</a>.</p>

            <p>Dark Mode mode of <?php echo theme()->getProductName()?> can be easily setup.</p>
        </div>
        <!--end::Block-->

        <!--begin::List-->
        <ol class="pt-5">
            <li class="py-3">
                Run gulp task with <code>--dark-mode</code> flag to generate the Dark Mode mode of CSS files. This will generate both normal and dark CSS files.
                <div class="py-5">
                    <?php util()->highlight('
                    npm run dev --dark-mode
                ', 'bash')
                    ?>
                </div>
            </li>

            <li class="py-3">
                Switch CSS files to their Dark Mode mode. These files are required for the dark mode mode. The CSS files are generated in the <code>public</code> assets folder:
                <div class="py-5">
                    <?php util()->highlight("
// Assets
'assets'  => array(
    // ...
    'css'     => array(
        'plugins/global/plugins.dark.bundle.css',
        'plugins/global/plugins-custom.dark.bundle.css',
        'css/style.dark.bundle.css',
    ),
    // ...
),
", 'php')
                    ?>
                </div>
            </li>

            <li class="py-3">
                Add <code>dark-mode</code> class name to the <code><?php echo htmlspecialchars('<body>') ?></code> tag. Keep other <code>body</code> class names.
                <div class="py-5">
                    <?php util()->highlight('<body class="dark-mode ...">
<!-- HTML content -->
</body>', 'html')
                    ?>
                </div>
            </li>
        </ol>
        <!--end::List-->
    </div>
    <!--end::Section-->

</x-base-layout>
