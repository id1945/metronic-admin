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

            <p>For the preview purpose, we use URL query <code>?demo=demo2</code> to enable the other demos preview without modifying the Laravel routes.
                See the example preview URL <a href="{{ url()->current() . '?demo=demo2' }}">{{ url()->current() . '?demo=demo2' }}</a>.</p>

            <p>The default build command will build the assets for <code>demo1</code>.</p>

            <div class="py-5">
                <?php util()->highlight('
                    npm run dev
                    ', 'bash') ?>
            </div>

            To build the other demo, the demo name need to be appended in the command as below.

            <div class="py-5">
                <?php util()->highlight('
                    npm run dev --demo2
                    ', 'bash') ?>
            </div>
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">

            More demos will be included in the future updates. At the moment, these are the available demos that can be used:

            <ul class="py-5">
                @foreach(theme()->getOption('product', 'demos') ?? [] as $id => $demo)
                    @if($demo['published'])
                        <li><code>{{ $id }}</code></li>
                    @endif
                @endforeach
            </ul>

        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">

            To set a fixed demo by default. Edit this file <code>app/Providers/AppServiceProvider.php</code> and set the demo id in using the function below.

            <div class="py-5">
                <?php util()->highlight("
            \$theme->setDemo('demo2');
            ", 'php') ?>
            </div>

        </div>
        <!--end::Block-->
    </div>
    <!--end::Section-->

</x-base-layout>
