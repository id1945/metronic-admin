<?php
    $replies = array(
        array(
            'message' => 'I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.',
            'author' => 'Sandra Piquet',
            'date' => '24 minutes ago',
            'avatar' => 'avatars/150-3.jpg',
            'upvotes' => '',
            'indent' => ''
        ),

        array(
            'message' => 'I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.',
            'author' => 'Niko Roseberg',
            'date' => '1 day ago',
            'avatar' => false,
            'upvotes' => '2',
            'indent' => 'ms-5 ms-lg-10'
        ),

        array(
            'message' => 'I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.',
            'author' => 'Sandra Piquet',
            'date' => '24 minutes ago',
            'avatar' => 'avatars/150-7.jpg',
            'upvotes' => '6',
            'indent' => ''
        ),

        array(
            'message' => 'I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.',
            'author' => 'Sandra Piquet',
            'date' => '24 minutes ago',
            'avatar' => false,
            'upvotes' => '4',
            'indent' => ''
        ),

        array(
            'message' => 'I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.',
            'author' => 'Niko Roseberg',
            'date' => '1 day ago',
            'avatar' => 'avatars/150-5.jpg',
            'upvotes' => '',
            'indent' => ''
        ),
    );

    $pagination = array(
        '1', '2', '3', '4', '5', '..', '19'
    )
?>

<!--begin::Heading-->
<a id="answers" data-kt-scroll-offset="{default: 100, lg: 125}"></a>
<h2 class="fw-bolder text-gray-900 mb-10">
    Replies(14)
</h2>
<!--end::Heading-->

<!--begin::Replies-->
<div class="mb-10">
    @foreach($replies as $reply)
        <!--begin::Reply-->
        <div class="border rounded p-2 p-lg-6 mb-10 {{ $reply['indent'] }}">
            <!--begin::Wrapper-->
            <div class="mb-0">
                <!--begin::Foot-->
                <div class="d-flex flex-stack flex-wrap mb-5">
                    <!--begin::Author-->
                    <div class="d-flex align-items-center py-1">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-35px me-2">
                            @if($reply['avatar'])
                                <img src="{{ asset(theme()->getMediaUrlPath() . $reply['avatar']) }}" alt="user"/>
                            <?php else:?>
                                <div class="symbol-label bg-light-success fs-3 fw-bold text-success text-uppercase">
                                    {{ $reply['author'][0] }}
                                </div>
                            @endif
                        </div>
                        <!--end::Symbol-->

                        <!--begin::Name-->
                        <div class="d-flex flex-column align-items-start justify-content-center">
                            <span class="text-gray-800 fs-7 fw-bold lh-1 mb-2">{{ $reply['author'] }}</span>
                            <span class="text-muted fs-8 fw-bold lh-1">{{ $reply['date'] }}</span>
                        </div>
                        <!--end::Name-->
                    </div>
                    <!--end::Author-->

                    <!--begin::Info-->
                    <div class="d-flex align-items-center py-1">
                        <!--begin::Reply-->
                        <a href="#" class="btn btn-sm btn-flex btn-color-gray-500 btn-active-light me-1">
                            Reply
                        </a>
                        <!--end::Reply-->

                        <!--begin::Upvote-->
                        <a href="#" class="btn btn-sm btn-flex btn-light {{ empty($question['upvotes']) ? 'btn-icon' : 'px-3' }}" data-bs-toggle="tooltip" title="Upvote" data-bs-dismiss="click">
                            {{ $reply['upvotes'] }}
                            {!! theme()->getSvgIcon('icons/duotune/arrows/arr062.svg', 'svg-icon-7' . (empty($reply['upvotes']) ? '' : 'ms-2 me-0')) !!}
                        </a>
                        <!--end::Upvote-->
                    </div>
                    <!--end::Info-->
                </div>
                <!--end::Foot-->

                <!--begin::Message-->
                <div class="fs-5 fw-normal text-gray-800">
                    {{ $reply['message'] }}
                </div>
                <!--end::Message-->
            </div>
            <!--end::Wrapper-->

            <!--begin::Replies-->
            <div class="ps-10 mb-0">

            </div>
            <!--end::Replies-->
        </div>
        <!--end::Reply-->
    @endforeach
</div>
<!--end::Replies-->

<!--begin::Pagination-->
<div class="d-flex flex-center mb-0">
    @foreach($pagination as $page)
        @if($page == '..')
            <span class="text-muted fw-bold fs-6 mx-2">..</span>
        <?php else:?>
            <a href="#" class="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2 {{ $page == '2' ? 'active' : '' }}">{{ $page }}</a>
        @endif
    @endforeach
</div>
<!--end::Questions-->
