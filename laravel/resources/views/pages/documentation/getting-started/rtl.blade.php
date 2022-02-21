<x-base-layout>

    <!--begin::Section-->
    <div class="pb-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="title">
            <a href="#title"></a>
            {{ theme()->getPageTitle() }}
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
            <p class="mb-0">
                Right to Left (RTL) version of {!! theme()->getProductNameHtml() !!} can be easily setup with special Laravel Mix plugin that depends on
                <a href="https://rtlcss.com/" class="fw-bolder">RTLCSS</a>&nbsp; tools.
            </p>
        </div>
        <!--end::Block-->

        <!--begin::List-->
        <ol class="py-5">
            <li class="py-3">
                Find the <code>webpack.mix.js</code> file.
            </li>

            <li class="py-3">
                Uncomment this part of the code in the <code>webpack.mix.js</code> file.
                <div class="py-5">
                    <?php util()->highlight('new WebpackRTLPlugin({
    filename: \'[name].rtl.css\',
    options: {},
    plugins: [],
})', 'javascript')
                    ?>
                </div>
            </li>

            <li class="py-3">
                Run the build command for Laravel.
                <div class="py-5">
                    <?php util()->highlight('
                    npm run dev
', 'bash')
                    ?>
                </div>
            </li>

            <li class="py-3">
                You will find the RTL CSS files in the <code>public</code> folder. Here is the list of CSS files that need to include in the HTML:

                <ul class="py-5">
                    <li><code>public/css/style.bundle.rtl.css</code></li>
                    <li><code>public/plugins/global/plugins.bundle.rtl.css</code></li>
                </ul>
            </li>

            <li class="py-3">
                Change the CSS files reference in <code>config/demo1/general.php</code>

                <div class="py-5">
                    <?php util()->highlight("
'assets'  => array(
    // ...
    'css'     => array(
        'plugins/global/plugins.bundle.rtl.css',
        'css/style.bundle.rt.css',
    ),
    // ...
),
", 'php')
                    ?>
                </div>
            </li>


            <li class="py-3">
                Edit <code>app/helpers.php</code> to force enable RTL option.

                <div class="py-5">
                    <?php util()->highlight("
function isRTL()
{
    return true;
}
", 'php')
                    ?>
                </div>

                This option will append these attributes to the HTML tag.

                <div class="py-5">
                    <?php util()->highlight('
<html lang="en" dir="rtl" direction="rtl" style="direction:rtl;" >
', 'html')
                    ?>
                </div>
            </li>

        </ol>
        <!--end::List-->

    </div>
    <!--end::Section-->

</x-base-layout>
