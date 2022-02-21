<!--begin::Section-->
<div class="py-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="laravel-quick-start">
        <a href="#laravel-quick-start"></a>
        Laravel Quick Start
    </h1>
    <!--end::Heading-->

    <!--begin::List-->
    <ol class="py-5">
        <li class="pt-0 pb-3">Download the latest theme source from the <a href="{{ theme()->getOption('product', 'purchase') }}" class="fw-bold">Marketplace</a>.</li>

        <li class="py-3">Download and install Node.js from <a href="https://nodejs.org/en/download/" class="fw-bold">Nodejs</a>. The suggested version to install is <code>14.16.x LTS</code>.</li>

        <li class="py-3">
            Start a command prompt window or terminal and change directory to <code>[unpacked path]</code>:
        </li>

        <li class="py-3">
            Install the latest NPM:

            <div class="py-5">
                <?php util()->highlight('
                    npm install --global npm@latest
                    ', 'bash') ?>
            </div>
        </li>

        <li class="py-3">
            Composer is an application-level package manager for the PHP programming language that provides a standard format for managing dependencies of PHP software and required libraries.
            To install Composer globally, download the installer from <a href="https://getcomposer.org/download/">https://getcomposer.org/download/</a>

            Verify that Composer in successfully installed, and version of installed Composer will appear:

            <div class="py-5">
                <?php util()->highlight('
                    composer --version
                    ', 'bash') ?>
            </div>
        </li>

        <li class="py-3">
            Install Composer dependencies.

            <div class="py-5">
                <?php util()->highlight('
                    composer install
                    ', 'bash') ?>
            </div>
        </li>

        <li class="py-3">
            Install NPM dependencies.

            <div class="py-5">
                <?php util()->highlight('
                    npm install
                    ', 'bash') ?>
            </div>
        </li>

        <li class="py-3">
            The below command will compile all the assets(sass, js, media) to <code>public</code> folder:

            <div class="py-5">
                <?php util()->highlight('
                    npm run dev
                    ', 'bash') ?>
            </div>

            Above command will compile the default <code>demo1</code> layout. To build more demos, go to <a href="{{ theme()->getPageUrl('documentation/getting-started/multi-demo/build') }}">Multi-demo</a> page.
        </li>

        <li class="py-3">
            Copy <code>.env.example</code> file and create duplicate. Use <code>cp</code> command for Linux or Mac user.

            <div class="py-5">
                <?php util()->highlight('
                    cp .env.example .env
                    ', 'bash') ?>
            </div>

            If you are using <code>Windows</code>, use <code>copy</code> instead of <code>cp</code>.

            <div class="py-5">
                <?php util()->highlight('
                    copy .env.example .env
                    ', 'bash') ?>
            </div>
        </li>

        <li class="py-3">
            Create a table in MySQL database and fill the database details <code>DB_DATABASE</code> in <code>.env</code> file.
        </li>

        <li class="py-3">
            The below command will create tables into database using Laravel <code>migration</code> and <code>seeder</code>.

            <div class="py-5">
                <?php util()->highlight('
                    php artisan migrate:fresh --seed
                    ', 'bash') ?>
            </div>
        </li>

        <li class="py-3">
            Generate your application encryption key.

            <div class="py-5">
                <?php util()->highlight('
                    php artisan key:generate
                    ', 'bash') ?>
            </div>
        </li>

        <li class="py-3">
            Start the localhost server:

            <div class="py-5">
                <?php util()->highlight('
                php artisan serve
                ', 'bash') ?>
            </div>

            <div class="pt-2 pb-5">
                <?php echo util()->info('
                Keep the console open. Open this link to run <a href="http://localhost:8000/" target="_blank">http://localhost:8000/</a>. It will take a few seconds for the build to finish. To stop a localhost environment, press <code>Ctrl+C</code>.
                ', 'danger') ?>
            </div>
        </li>

        <li class="py-3">
            Optional step. This command is required for the image upload feature. For more information, check the Laravel documentation here.
            <a href="https://laravel.com/docs/8.x/filesystem">https://laravel.com/docs/8.x/filesystem</a>

            <div class="py-5">
                <?php util()->highlight('
                    php artisan storage:link
                    ', 'bash') ?>
            </div>
        </li>
    </ol>
    <!--end::List-->
</div>
<!--end::Section-->
