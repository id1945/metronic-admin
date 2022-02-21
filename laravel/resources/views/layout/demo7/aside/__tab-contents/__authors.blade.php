@php
    // Authors items
    $listRows = array(
        array(
            'avatar' => 'avatars/150-1.jpg',
            'name' => 'Emma Smith',
            'description' => 'Project Manager',
        ),

        array(
            'avatar' => 'avatars/150-4.jpg',
            'name' => 'Sean Bean',
            'description' => 'PHP, SQLite, Artisan CLI',
        ),

        array(
            'avatar' => 'avatars/150-12.jpg',
            'name' => 'Brian Cox',
            'description' => 'HTML5, jQuery, CSS3',
        ),

        array(
            'avatar' => 'avatars/150-6.jpg',
            'name' => 'Dan Wilson',
            'description' => 'MangoDB, Java',
        ),

        array(
            'avatar' => 'avatars/150-9.jpg',
            'name' => 'Natali Trump',
            'description' => 'NET, Oracle, MySQL',
        ),

        array(
            'avatar' => 'avatars/150-8.jpg',
            'name' => 'Francis Mitcham',
            'description' => 'React, Vue',
        ),

        array(
            'avatar' => 'avatars/150-7.jpg',
            'name' => 'Jessie Clarcson',
            'description' => 'Angular, React',
        )
    );
@endphp

<!--begin::Authors-->
<div class="mx-5">
    <!--begin::Header-->
    <h3 class="fw-bolder text-dark mx-0 mb-10">Authors</h3>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="mb-12">
        @foreach($listRows as $index => $row)
            <!--begin::Item-->
            <div class="d-flex align-items-center {{ util()->putIf(next($listRows), 'mb-7') }}">
                <!--begin::Avatar-->
                <div class="symbol symbol-50px me-5">
                    <img src=" {{ asset(theme()->getMediaUrlPath() . $row['avatar']) }}" class="" alt=""/>
                </div>
                <!--end::Avatar-->

                <!--begin::Text-->
                <div class="flex-grow-1">
                    <a href=" {{ theme()->getPageUrl('pages/projects/users') }}" class="text-dark fw-bolder text-hover-primary fs-6">{{ $row['name'] }}</a>

                    <span class="text-muted d-block fw-bold">{{ $row['description'] }}</span>
                </div>
                <!--end::Text-->
            </div>
            <!--end::Item-->
        @endforeach
    </div>
    <!--end::Body-->
</div>
<!--end::Authors-->
