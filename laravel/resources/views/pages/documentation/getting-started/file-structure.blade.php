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
            The default Laravel application structure is intended to provide a great starting point for both large and small applications. But you are free to organize your application however you like. Laravel imposes almost no restrictions on where any given class is located
            - as long as Composer can autoload the class. More information can be found in the Laravel official documentation <a href="https://laravel.com/docs/8.x/structure" target="_blank">https://laravel.com/docs/8.x/structure</a>
        </div>
        <!--end::Block-->


        <!--begin::Table-->
        <div class="py-5">
            <div class="table-responsive border rounded">
                <table class="table table-striped table-flush align-middle mb-0">
                    <!--begin::Block-->
                    <thead>
                    <tr class="fs-4 fw-bolder text-dark p-6">
                        <th class="min-w-400px">File/Folder</th>
                        <th class="min-w-500px">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="p-6">
                        <td>
                            <code>The App Directory</code>
                        </td>
                        <td>
                            <p>The <code>app</code> directory contains the core code of your application. We'll explore this directory in more detail soon; however, almost all of the classes in your application will be in this directory.</p>
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>The Bootstrap Directory</code>
                        </td>
                        <td>
                            <p>The <code>bootstrap</code> directory contains the <code>app.php</code> file which bootstraps the framework. This directory also houses a <code>cache</code> directory which contains framework generated files for performance optimization such as the route and services cache files. You should not typically need to modify any files within this directory.</p>
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>The Config Directory</code>
                        </td>
                        <td>
                            <p>The <code>config</code> directory, as the name implies, contains all of your application's configuration files. It's a great idea to read through all of these files and familiarize yourself with all of the options available to you.</p>
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>The Database Directory</code>
                        </td>
                        <td>
                            <p>The <code>database</code> directory contains your database migrations, model factories, and seeds. If you wish, you may also use this directory to hold an SQLite database.</p>
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>The Public Directory</code>
                        </td>
                        <td>
                            <p>The <code>public</code> directory contains the <code>index.php</code> file, which is the entry point for all requests entering your application and configures autoloading. This directory also houses your assets such as images, JavaScript, and CSS.</p>
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>The Resources Directory</code>
                        </td>
                        <td>
                            <p>The <code>resources</code> directory contains your <a href="https://laravel.com/docs/8.x/views" target="_blank">views</a> as well as your raw, un-compiled assets such as CSS or JavaScript. This directory also houses all of your language files.</p>
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>The Routes Directory</code>
                        </td>
                        <td>
                            <p>The <code>routes</code> directory contains all of the route definitions for your application. By default, several route files are included with Laravel: <code>web.php</code>, <code>api.php</code>, <code>console.php</code>, and <code>channels.php</code>.</p>
                            <p>The <code>web.php</code> file contains routes that the <code>RouteServiceProvider</code> places in the <code>web</code> middleware group, which provides session state, CSRF protection, and cookie encryption. If your application does not offer a stateless, RESTful API then it is likely that all of your routes will most likely be defined in the <code>web.php</code> file.</p>
                            <p>The <code>api.php</code> file contains routes that the <code>RouteServiceProvider</code> places in the <code>api</code> middleware group. These routes are intended to be stateless, so requests entering the application through these routes are intended to be authenticated <a href="https://laravel.com/docs/8.x/sanctum" target="_blank">via tokens</a> and will not have access to session state.</p>
                            <p>The <code>console.php</code> file is where you may define all of your closure based console commands. Each closure is bound to a command instance allowing a simple approach to interacting with each command's IO methods. Even though this file does not define HTTP routes, it defines console based entry points (routes) into your application.</p>
                            <p>The <code>channels.php</code> file is where you may register all of the <a href="https://laravel.com/docs/8.x/broadcasting" target="_blank">event broadcasting</a> channels that your application supports.</p>
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>The Storage Directory</code>
                        </td>
                        <td>
                            <p>The <code>storage</code> directory contains your logs, compiled Blade templates, file based sessions, file caches, and other files generated by the framework. This directory is segregated into <code>app</code>, <code>framework</code>, and <code>logs</code>directories. The <code>app</code> directory may be used to store any files generated by your application. The <code>framework</code> directory is used to store framework generated files and caches. Finally, the <code>logs</code> directory contains your application's log files.</p>
                            <p>The <code>storage/app/public</code> directory may be used to store user-generated files, such as profile avatars, that should be publicly accessible. You should create a symbolic link at <code>public/storage</code> which points to this directory. You may create the link using the <code>php artisan storage:link</code> Artisan command.</p>
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>The Tests Directory</code>
                        </td>
                        <td>
                            <p>The <code>tests</code> directory contains your automated tests. Example <a href="https://phpunit.de/" target="_blank">PHPUnit</a> unit tests and feature tests are provided out of the box. Each test class should be suffixed with the word <code>Test</code>. You may run your tests using the <code>phpunit</code> or <code>php vendor/bin/phpunit</code> commands. Or, if you would like a more detailed and beautiful representation of your test results, you may run your tests using the <code>php artisan test</code> Artisan command.</p>
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>The Vendor Directory</code>
                        </td>
                        <td>
                            <p>The <code>vendor</code> directory contains your <a href="https://getcomposer.org" target="_blank">Composer</a> dependencies.</p>
                        </td>
                    </tr>
                    </tbody>
                    <!--end::Block-->
                </table>
            </div>
        </div>
        <!--end::Table-->

    </div>

</x-base-layout>
