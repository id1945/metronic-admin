<!--begin::Timeline item-->
<div class="timeline-item">
    <!--begin::Timeline line-->
    <div class="timeline-line w-40px"></div>
    <!--end::Timeline line-->

    <!--begin::Timeline icon-->
    <div class="timeline-icon symbol symbol-circle symbol-40px">
        <div class="symbol-label bg-light">
            <?php echo theme()->getSvgIcon("icons/duotune/art/art005.svg", "svg-icon-2 svg-icon-gray-500")?>
        </div>
    </div>
    <!--end::Timeline icon-->

    <!--begin::Timeline content-->
    <div class="timeline-content mb-10 mt-n1">
        <!--begin::Timeline heading-->
        <div class="pe-3 mb-5">
            <!--begin::Title-->
            <div class="fs-5 fw-bold mb-2">You have received a new order:</div>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="d-flex align-items-center mt-1 fs-6">
                <!--begin::Info-->
                <div class="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
                <!--end::Info-->

                <!--begin::User-->
                <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
                    <img src="{{ asset(theme()->getMediaUrlPath() . 'avatars/150-14.jpg') }}" alt="img"/>
                </div>
                <!--end::User-->
            </div>
            <!--end::Description-->
        </div>
        <!--end::Timeline heading-->

        <!--begin::Timeline details-->
        <div class="overflow-auto pb-5">
            <?php
                theme()->getView(
                    'partials/general/_notice',
                    array(
                        'class' => 'min-w-lg-600px flex-shrink-0',
                        'color' => 'primary',
                        'title' => 'Database Backup Process Completed!',
                        'body' => 'Login into Metronic Admin Dashboard to make sure the data integrity is OK',
                        'icon' => "icons/duotune/coding/cod004.svg",
                        'button' => true,
                        'button_label' => 'Proceed'
                    )
                );
            ?>
        </div>
        <!--end::Timeline details-->
    </div>
    <!--end::Timeline content-->
</div>
<!--end::Timeline item-->
