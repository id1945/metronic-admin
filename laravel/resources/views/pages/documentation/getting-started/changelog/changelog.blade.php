<x-base-layout>

    <!--begin::Changelog-->
    <div class="accordion accordion-flush accordion-icon-toggle" id="kt_accordion">
    @foreach(config('changelog') as $version => $info)
        @php
            $id = \Illuminate\Support\Str::slug($version);
        @endphp

        <!--begin::Item-->
            <div class="accordion-item mb-5">
                <!--begin::Header-->
                <div class="accordion-header py-3 d-flex {{ $loop->index === 0 ? '' : 'collapsed' }}" data-bs-toggle="collapse" data-bs-target="#kt_accordion_body_{{ $id }}">
                    <span class="accordion-icon">{!! theme()->getSvgIcon('icons/duotune/arrows/arr064.svg', 'svg-icon-3') !!}</span>
                    <h3 class="fs-2 text-gray-800 fw-bolder mb-0 ms-4">
                        {{ theme()->getProductName() }} {{ $version }} - {{ $info['date'] }}
                    </h3>
                </div>
                <!--end::Header-->

                <!--begin::Body-->
                <div id="kt_accordion_body_{{ $id }}" class="fs-6 my-1 py-0 ps-10 collapse {{ $loop->index === 0 || (isset($info['open']) && $info['open']) ? 'show' : '' }}" data-bs-parent="#kt_accordion">
                    <div class="accordion-body ps-0 pt-0">
                        @if(is_array($info['changelog']))
                            @foreach($info['changelog'] as $label => $records)
                                @if(!empty($records))
                                    <div class="mb-5">
                                        <h4 class="fs-6 fw-bold mb-1">{{ ucfirst($label) }}:</h4>
                                        <ul class="my-0 py-0">
                                            @foreach($records as $record)
                                                <li class="py-2">{!! $record !!}</li>
                                            @endforeach
                                        </ul>
                                    </div>
                                @endif
                            @endforeach
                        @else
                            <ul class="my-0 py-0">
                                <li class="py-2">{!! $info['changelog'] !!}</li>
                            </ul>
                        @endif
                    </div>
                </div>
                <!--end::Body-->
            </div>
            <!--end::Item-->
        @endforeach
    </div>
    <!--end::Changelog-->

</x-base-layout>
