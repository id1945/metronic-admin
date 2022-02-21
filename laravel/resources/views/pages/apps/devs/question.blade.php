<x-base-layout>

    <!--begin::Question-->
    <div class="mb-0">
        <!--begin::Head-->
        <div class="d-flex align-items-center mb-9">
            <!--begin::Title-->
            <h1 class="fs-2x fw-bolder text-gray-900 mb-0 me-1">
                How to use Metronic with Laravel Framework ?
            </h1>
            <!--end::Title-->

            <!--begin::Icons-->
            <div class="d-flex align-items-center">
            <span class="ms-1" data-bs-toggle="tooltip" title="User replied">
                {!! theme()->getSvgIcon('icons/duotune/general/gen043.svg', 'svg-icon-success svg-icon-1') !!}
            </span>
            </div>
            <!--end::Icons-->
        </div>
        <!--end::Head-->

        <!--begin::Question-->
        <div class="fs-4 fw-normal text-gray-800 mb-10">
            <p>Hi Keenthemes,</p>

            <p>I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.</p>

            <p>But they are not displaying, since it is an ajax, I tried “KTApp.init();” but didn’t work (worked for Tooltips sure, but not Menu).</p>

            <p>Anyway to Re-init those https://ibb.co/gysPGpx Menu. ?</p>

            <p>Thank you.</p>
        </div>
        <!--end::Question-->

        <!--begin::Foot-->
        <div class="d-flex flex-stack flex-wrap">
            <!--begin::Author-->
            <div class="d-flex align-items-center py-1">
                <!--begin::Symbol-->
                <div class="symbol symbol-35px me-2">
                    <div class="symbol-label bg-light-success fs-3 fw-bold text-success text-uppercase">
                        j
                    </div>
                </div>
                <!--end::Symbol-->

                <!--begin::Name-->
                <div class="d-flex flex-column align-items-start justify-content-center">
                    <span class="text-gray-800 fs-7 fw-bold lh-1 mb-2">James Hunt</span>
                    <span class="text-muted fs-8 fw-bold lh-1">24 minutes ago</span>
                </div>
                <!--end::Name-->
            </div>
            <!--end::Author-->

            <!--begin::Info-->
            <div class="d-flex align-items-center py-1">
                <a href="#answers" data-kt-scroll-toggle="true" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default px-4 me-2">
                    12 Answers
                </a>

                <a href="{{ theme()->getPageUrl('apps/devs/tag') }}" class="btn btn-sm btn-light px-4 me-2">
                    Laravel
                </a>

                <a href="{{ theme()->getPageUrl('apps/devs/tag') }}" class="btn btn-sm btn-light px-4 me-2">
                    Metronic
                </a>

                <a href="#" class="btn btn-sm btn-icon btn-light me-2" data-bs-toggle="tooltip" title="Save for your future reference" data-bs-dismiss="click">
                    {!! theme()->getSvgIcon('icons/duotune/general/gen056.svg', 'svg-icon-2') !!}
                </a>

                <a href="#" class="btn btn-sm btn-flex btn-light px-4" data-bs-toggle="tooltip" title="Upvote this question" data-bs-dismiss="click">
                    23
                    {!! theme()->getSvgIcon('icons/duotune/arrows/arr062.svg', 'svg-icon-7 ms-1 me-1') !!}
                </a>
            </div>
            <!--end::Info-->
        </div>
        <!--end::Foot-->
    </div>
    <!--end::Question-->

    <!--begin::Separator-->
    <div class="separator separator-dashed border-gray-300 mt-8 mb-10"></div>
    <!--end::Separator-->

    <!--begin:Reply Form-->
    <form id="kt_devs_reply_form" class="form mb-10" action="#">
        <!--begin::Input group-->
        <div class="form-group mb-2">
            <textarea name="comment" class="form-control" rows="6" placeholder="Your reply here.." maxlength="1000" data-kt-autosize="true"></textarea>
        </div>
        <!--end::Input group-->

        <!--begin::Action-->
        <div class="d-flex align-items-center justify-content-between py-2 mb-5">
            <!--begin::Formating toggle-->
            <div class="text-primary fs-base fw-bold cursor-pointer" data-bs-toggle="collapse" data-bs-target="#kt_devs_ask_formatting">
                Text formatting options
            </div>
            <!--end::Formating toggle-->

            <!--begin::Submit-->
            <button class="btn btn-primary fw-bolder" data-kt-action="submit">Submit</button>
            <!--end::Submit-->
        </div>
        <!--end::Action-->

        {{ theme()->getView('pages/apps/devs/_text-formatting') }}
    </form>
    <!--end:Reply Form-->

    {{ theme()->getView('pages/apps/devs/_replies') }}

</x-base-layout>
