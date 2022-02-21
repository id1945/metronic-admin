# Metronic - Bootstrap 5 HTML, React, Angular, VueJS & Laravel Admin Dashboard Theme

- For a quick start please check [Online documentation page](//preview.keenthemes.com/metronic8/laravel/documentation/getting-started/build)


- The offline documentation is available within the theme [Offline documentation page](//localhost:8000/documentation/getting-started/build)


- For any theme related questions please contact our [Theme Support](//keenthemes.com/support/)


- Using Metronic in a new project or for a new client? Purchase a new license https://1.envato.market/EA4JP or watch https://youtu.be/HJ3RNhoI24A to find out more information about licenses.


- Stay tuned for updates via [Twitter](//www.twitter.com/keenthemes) and [Instagram](//www.instagram.com/keenthemes) and 
  check our marketplace for more amazing products: [Keenthemes Marketplace](//keenthemes.com/)


Happy coding with Metronic!



### Laravel Quick Start

1. Download the latest theme source from the Marketplace.


2. Download and install `Node.js` from Nodejs. The suggested version to install is `14.16.x LTS`.


3. Start a command prompt window or terminal and change directory to [unpacked path]:


4. Install the latest `NPM`:
   
        npm install --global npm@latest


5. To install `Composer` globally, download the installer from https://getcomposer.org/download/ Verify that Composer in successfully installed, and version of installed Composer will appear:
   
        composer --version


6. Install `Composer` dependencies.
   
        composer install


7. Install `NPM` dependencies.
   
        npm install


8. The below command will compile all the assets(sass, js, media) to public folder:
   
        npm run dev


9. Copy `.env.example` file and create duplicate. Use `cp` command for Linux or Max user.

        cp .env.example .env

    If you are using `Windows`, use `copy` instead of `cp`.
   
        copy .env.example .env
   

10. Create a table in MySQL database and fill the database details `DB_DATABASE` in `.env` file.


12. The below command will create tables into database using Laravel migration and seeder.

        php artisan migrate:fresh --seed


13. Generate your application encryption key:

        php artisan key:generate


14. Start the localhost server:
    
        php artisan serve
