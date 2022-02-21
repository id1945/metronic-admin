<x-base-layout>

    {{ util()->notice('
    '.theme()->getProductName().'\'s <a class="fw-bold me-1" href="https://laravel.com/" target="_blank">Laravel</a> is a web application framework with expressive, elegant syntax. A web framework provides a structure and starting point for creating your application, allowing you to focus on creating something amazing while we sweat the details.
    More information on the installation can be found in <a href="https://laravel.com/docs/8.x/installation" target="_blank">https://laravel.com/docs/8.x/installation</a>
', 'info') }}

    {{ theme()->getView('pages/documentation/getting-started/build/_quick-start') }}

</x-base-layout>
