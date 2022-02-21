<?php
    $questions = array(
        array(
            'title' => 'How to use Metronic with Django Framework ?',
            'summary' => 'I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.',
            'author' => 'James Hunt',
            'date' => '24 minutes ago',
            'avatar' => false,
            'answers' => '16',
            'upvotes' => '23',
            'icons' => array(
                array(
                    'path' => 'icons/duotune/general/gen045.svg',
                    'class' => 'svg-icon-primary',
                    'tooltip' => 'New question'
                ),
                array(
                    'path' => 'icons/duotune/communication/com010.svg',
                    'class' => 'svg-icon-danger',
                    'tooltip' => 'User replied'
                )
            ),
            'tags' => array('Metronic')
        ),

        array(
            'title' => 'When to expect new version of Laravel ?',
            'summary' => 'When approx. is the next update for the Laravel version planned? Waiting for the CRUD, 2nd factor etc. features before starting my project. Also can we expect the Laravel + Vue version in the next update ?',
            'author' => 'Sandra Piquet',
            'date' => '1 day ago',
            'avatar' => 'avatars/150-3.jpg',
            'answers' => '2',
            'upvotes' => '4',
            'icons' => array(
                array(
                    'path' => 'icons/duotune/general/gen044.svg',
                    'class' => 'svg-icon-warning',
                    'tooltip' => 'In-process'
                )
            ),
            'tags' => array('Pre-sale')
        ),

        array(
            'title' => 'Could not get Demo 7 working',
            'summary' => 'could not get demo7 working from latest metronic version. Had a lot of issues installing, I had to downgrade my npm to 6.14.4 as someone else recommended here in the comments, this goot it to compile but when I ran it, the browser showed errors TypeErr..',
            'author' => 'Niko Roseberg',
            'date' => '2 days ago',
            'avatar' => false,
            'answers' => '4',
            'upvotes' => '',
            'icons' => array(
                array(
                    'path' => 'icons/duotune/general/gen044.svg',
                    'class' => 'svg-icon-warning',
                    'tooltip' => 'In-process'
                )
            ),
            'tags' => array('Angular')
        ),

        array(
            'title' => 'I want to get refund',
            'summary' => 'Your Metronic theme is so good but the reactjs version is typescript only. The description did not write any warn about it. Since I only know javascript, I can not do anything with your theme. I want to refund.',
            'author' => 'Alex Bold',
            'date' => '1 day ago',
            'avatar' => 'avatars/150-6.jpg',
            'answers' => '22',
            'upvotes' => '11',
            'icons' => array(
                array(
                    'path' => 'icons/duotune/general/gen043.svg',
                    'class' => 'svg-icon-success',
                    'tooltip' => 'Resolved'
                )
            ),
            'tags' => array('React', 'Demo 1')
        ),

        array(
            'title' => 'How to integrate Metronic with Blazor Server Side ?',
            'summary' => 'could not get demo7 working from latest metronic version. Had a lot of issues installing, I had to downgrade my npm to 6.14.4 as someone else recommended here in the comments, this goot it to compile but when I ran it, the browser showed errors TypeErr..',
            'author' => 'Tim Nilson',
            'date' => '3 days ago',
            'avatar' => false,
            'answers' => '44',
            'upvotes' => '3',
            'icons' => array(
                array(
                    'path' => 'icons/duotune/general/gen043.svg',
                    'class' => 'svg-icon-success',
                    'tooltip' => 'In-process'
                )
            ),
            'tags' => array('Blazor')
        ),

        array(
            'title' => 'Using Metronic with .NET multi tenant application',
            'summary' => 'When approx. is the next update for the Laravel version planned? Waiting for the CRUD, 2nd factor etc. features before starting my project. Also can we expect the Laravel + Vue version in the next update ?',
            'author' => 'Ana Quil',
            'date' => '5 days ago',
            'avatar' => 'avatars/150-9.jpg',
            'answers' => '2',
            'upvotes' => '4',
            'icons' => array(
                array(
                    'path' => 'icons/duotune/general/gen043.svg',
                    'class' => 'svg-icon-success',
                    'tooltip' => 'Resolved'
                )
            ),
            'tags' => array('Aspdotnet')
        ),
    );

    $pagination = array(
        '1', '2', '3', '4', '5', '..', '19'
    )
?>

<!--begin::Questions-->
<div class="mb-10">
    @foreach($questions as $question)
        <!--begin::Question-->
        <div class="mb-0">
            <!--begin::Head-->
            <div class="d-flex align-items-center mb-4">
                <!--begin::Title-->
                <a href="{{ theme()->getPageUrl('apps/devs/question') }}" class="fs-2 fw-bolder text-gray-900 text-hover-primary me-1">
                    {{ $question['title'] }}
                </a>
                <!--end::Title-->

                <!--begin::Icons-->
                <div class="d-flex align-items-center">
                    @foreach($question['icons'] as $icon)
                        <span class="ms-1" data-bs-toggle="tooltip" title="{{ $icon['tooltip'] }}">
                            {!! theme()->getSvgIcon($icon['path'], $icon['class'] . ' svg-icon-1') !!}
                        </span>
                    @endforeach
                </div>
                <!--end::Icons-->
            </div>
            <!--end::Head-->

            <!--begin::Summary-->
            <div class="fs-base fw-normal text-gray-700 mb-4">
                {{ $question['summary'] }}
            </div>
            <!--end::Summary-->

            <!--begin::Foot-->
            <div class="d-flex flex-stack flex-wrap">
                <!--begin::Author-->
                <div class="d-flex align-items-center py-1">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-35px me-2">
                        @if($question['avatar'])
                            <img src="{{ asset(theme()->getMediaUrlPath() . $question['avatar']) }}" alt="user"/>
                        <?php else:?>
                            <div class="symbol-label bg-light-success fs-3 fw-bold text-success text-uppercase">
                                {{ $question['author'][0] }}
                            </div>
                        @endif
                    </div>
                    <!--end::Symbol-->

                    <!--begin::Name-->
                    <div class="d-flex flex-column align-items-start justify-content-center">
                        <span class="text-gray-900 fs-7 fw-bold lh-1 mb-2">{{ $question['author'] }}</span>
                        <span class="text-muted fs-8 fw-bold lh-1">{{ $question['date'] }}</span>
                    </div>
                    <!--end::Name-->
                </div>
                <!--end::Author-->

                <!--begin::Info-->
                <div class="d-flex align-items-center py-1">
                    <!--begin::Answers-->
                    <a href="{{ theme()->getPageUrl('apps/devs/question') }}#answers" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default px-4 me-2">
                        {{ $question['answers'] }} Answers
                    </a>
                    <!--end::Answers-->

                    <!--begin::Tags-->
                    @foreach($question['tags'] as $tag)
                        <a href="{{ theme()->getPageUrl('apps/devs/tag') }}" class="btn btn-sm btn-light px-4 me-2">
                            {{ $tag }}
                        </a>
                    @endforeach
                    <!--end::Tags-->

                    <!--begin::Upvote-->
                    <a href="#" class="btn btn-sm btn-flex btn-light {{ empty($question['upvotes']) ? 'btn-icon' : 'px-3' }}" data-bs-toggle="tooltip" title="Upvote this question" data-bs-dismiss="click">
                        {{ $question['upvotes'] }}
                        {!! theme()->getSvgIcon('icons/duotune/arrows/arr062.svg', 'svg-icon-7' . (empty($question['upvotes']) ? '' : 'ms-2 me-0')) !!}
                    </a>
                    <!--end::Upvote-->
                </div>
                <!--end::Info-->
            </div>
            <!--end::Foot-->
        </div>
        <!--end::Question-->

        <!--begin::Separator-->
        <div class="separator separator-dashed border-gray-300 my-8"></div>
        <!--end::Separator-->
    @endforeach
</div>
<!--end::Questions-->

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
