<?php
    // List items
    $items = array(
        'users' => array(
            array(
                'avatar' => 'avatars/150-1.jpg',
                'name' => 'Karina Clark',
                'position' => 'Marketing Manager'
            ),
            array(
                'avatar' => 'avatars/150-3.jpg',
                'name' => 'Olivia Bold',
                'position' => 'Software Engineer'
            ),
            array(
                'avatar' => 'avatars/150-8.jpg',
                'name' => 'Ana Clark',
                'position' => 'UI/UX Designer'
            ),
            array(
                'avatar' => 'avatars/150-11.jpg',
                'name' => 'Nick Pitola',
                'position' => 'Art Director'
            ),
            array(
                'avatar' => 'avatars/150-12.jpg',
                'name' => 'Edward Kulnic',
                'position' => 'System Administrator'
            )
        ),

        'customers' => array(
            array(
                'logo' => 'svg/brand-logos/volicity-9.svg',
                'title' => 'Company Rbranding',
                'category' => 'UI Design'
            ),
            array(
                'logo' => 'svg/brand-logos/tvit.svg',
                'title' => 'Company Re-branding',
                'category' => 'Web Development'
            ),
            array(
                'logo' => 'svg/misc/infography.svg',
                'title' => 'Business Analytics App',
                'category' => 'Administration'
            ),
            array(
                'logo' => 'svg/brand-logos/leaf.svg',
                'title' => 'EcoLeaf App Launch',
                'category' => 'Marketing'
            ),
            array(
                'logo' => 'svg/brand-logos/tower.svg',
                'title' => 'Tower Group Website',
                'category' => 'Google Adwords'
            )
        ),

        'projects' => array(
            array(
                'icon' => 'icons/duotune/general/gen005.svg',
                'title' => 'Si-Fi Project by AU Themes',
                'number' => '#45670'
            ),
            array(
                'icon' => 'icons/duotune/general/gen032.svg',
                'title' => 'Shopix Mobile App Planning',
                'number' => '#45690'
            ),
            array(
                'icon' => 'icons/duotune/communication/com012.svg',
                'title' => 'Finance Monitoring SAAS Discussion',
                'number' => '#21090'
            ),
            array(
                'icon' => 'cons/duotune/communication/com006.svg',
                'title' => 'Dashboard Analitics Launch',
                'number' => '#34560'
            )
        )
    );

    $loop = 0;
?>
<!--begin::Recently viewed-->
<div data-kt-search-element="results" class="d-none">
    <!--begin::Items-->
    <div class="scroll-y mh-200px mh-lg-325px">
        <?php foreach($items as $category => $categoryItems):?>
            <!--begin::Category title-->
            <h3 class="fs-5 text-muted m-0 {{ ($loop > 1 ? 'pt-5' : '') }} pb-5" data-kt-search-element="category-title">
                {{ ucfirst($category) }}
            </h3>
            <!--end::Category title-->

            <?php foreach($categoryItems as $item):?>
                <?php
                    $loop++;
                ?>

                <?php if ($category == 'projects'):?>
                    <!--begin::Item-->
                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                            <span class="symbol-label bg-light">
                                {!! theme()->getSvgIcon($item['icon'], "svg-icon-2 svg-icon-primary") !!}
                            </span>
                        </div>
                        <!--end::Symbol-->

                        <!--begin::Title-->
                        <div class="d-flex flex-column">
                            <span class="fs-6 fw-bold">{{ $item['title'] }}</span>
                            <span class="fs-7 fw-bold text-muted">{{ $item['number'] }}</span>
                        </div>
                        <!--end::Title-->
                    </a>
                    <!--end::Item-->
                <?php endif?>

                <?php if ($category == 'customers'):?>
                    <!--begin::Item-->
                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                            <span class="symbol-label bg-light">
                                <img class="w-20px h-20px" src="{{ asset(theme()->getMediaUrlPath() . $item['logo']) }}" alt=""/>
                            </span>
                        </div>
                        <!--end::Symbol-->

                        <!--begin::Title-->
                        <div class="d-flex flex-column justify-content-start fw-bold">
                            <span class="fs-6 fw-bold">{{ $item['title'] }}</span>
                            <span class="fs-7 fw-bold text-muted">{{ $item['category'] }}</span>
                        </div>
                        <!--end::Title-->
                    </a>
                    <!--end::Item-->
                <?php endif?>

                <?php if ($category == 'users'):?>
                    <!--begin::Item-->
                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                            <img src="{{ asset(theme()->getMediaUrlPath() . $item['avatar']) }}" alt=""/>
                        </div>
                        <!--end::Symbol-->

                        <!--begin::Title-->
                        <div class="d-flex flex-column justify-content-start fw-bold">
                            <span class="fs-6 fw-bold">{{ $item['name'] }}</span>
                            <span class="fs-7 fw-bold text-muted">{{ $item['position'] }}</span>
                        </div>
                        <!--end::Title-->
                    </a>
                    <!--end::Item-->
                <?php endif?>
            <?php endforeach?>
        <?php endforeach?>
    </div>
    <!--end::Items-->
</div>
<!--end::Recently viewed-->
