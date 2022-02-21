<x-auth-layout>
    <!--begin::Verify Email Form-->
    <div class="w-100">

        <!--begin::Heading-->
        <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-dark mb-3">
                {{ __('Verify Email') }}
            </h1>
            <!--end::Title-->

            <!--begin::Link-->
            <div class="text-gray-400 fw-bold fs-4">
                {{ __('Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn\'t receive the email, we will gladly send you another.') }}
            </div>
            <!--::Link-->

            <!--begin::Session Status-->
            @if (session('status') === 'verification-link-sent')
                <p class="font-medium text-sm text-gray-500 mt-4">
                    {{ __('A new verification link has been sent to the email address you provided during registration.') }}
                </p>
            @endif
            <!--end::Session Status-->
        </div>
        <!--begin::Heading-->

        <!--begin::Actions-->
        <div class="d-flex flex-wrap justify-content-center pb-lg-0">

            <form method="POST" action="{{ theme()->getPageUrl('verification.send') }}">
                @csrf
                <button type="submit" class="btn btn-lg btn-primary fw-bolder me-4">{{ __('Resend Verification Email') }}</button>
            </form>

            <form method="POST" action="{{ theme()->getPageUrl('logout') }}">
                @csrf
                <button type="submit" class="btn btn-lg btn-light-primary fw-bolder me-4">{{ __('Log out') }}</button>
            </form>
        </div>
        <!--end::Actions-->
    </div>

    <!--end::Verify Email Form-->
</x-auth-layout>
