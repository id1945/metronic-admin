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
        <div class="pt-10">
            <h2 class="anchor fw-bolder mb-2" id="db-connect">
                <a href="#db-connect"></a>
                Database connection
            </h2>

            Verify that your database information is correct before start to run the database migration command.

            <div class="py-5">
                <?php util()->highlight('
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
                    ', 'bash')
                ?>
            </div>

            Run this command to refresh the <code>.env</code> file update.

            <div class="py-5">
                <?php util()->highlight('
                    php artisan config:clear
                    ', 'bash')
                ?>
            </div>

            Then retry with the migration.

            <div class="py-5">
                <?php util()->highlight('
                    php artisan migrate:fresh --seed
                    ', 'bash')
                ?>
            </div>
        </div>
        <!--end::Block-->


        <!--begin::Block-->
        <div class="pt-10">
            <h2 class="anchor fw-bolder mb-2" id="composer-error">
                <a href="#composer-error"></a>
                Composer Framework Requirement Error
            </h2>

            <div class="py-5">
                {{ util()->notice('[plugin..] requires php ^5.3.3 || ^7.0 -> your php version (8.0.3) does not satisfy that requirement.', 'danger', '') }}
            </div>

            If you are using the PHP v8, some of the plugins which are not yet supported can caused installation error. The new <code>--ignore-platform-req</code> option can be used to set specific requirements that Composer can ignore.

            <div class="py-5">
                <?php util()->highlight('
                    composer install --ignore-platform-req=php
                    ', 'bash')
                ?>
            </div>
        </div>
        <!--end::Block-->


        <!--begin::Block-->
        <div class="pt-10">
            <h2 class="anchor fw-bolder mb-2" id="db-connect-error">
                <a href="#db-connect-error"></a>
                Database Connection Error
            </h2>

            <div class="py-5">
                {{ util()->notice('PDOException::("SQLSTATE[HY000] [2002] No connection could be made because the target machine actively refused it")', 'danger', '') }}
            </div>

            Check if your web server already started. Start the <code>MySQL</code> in the <code>XAMPP controller</code>, <code>WAMP</code>, etc.

            Check the database port to <code>DB_PORT=3306</code> in <code>.env</code> file.

            Try to run the following commands:

            <div class="py-5">
                <?php util()->highlight('
                    php artisan config:clear
                    ', 'bash')
                ?>
            </div>

            <div class="py-5">
                <?php util()->highlight('
                    php artisan cache:clear
                    ', 'bash')
                ?>
            </div>
        </div>
        <!--end::Block-->
    </div>
    <!--end::Section-->

</x-base-layout>
