<?php

use App\Core\Adapters\Theme;

return array(
    'aside_tabs' => array(
        array(
            'link'    => 'kt_aside_nav_tab_projects',
            'icon'    => 'icons/duotune/general/gen025.svg',
            'tooltip' => 'Projects',
            'view'    => 'layout/aside/__tab-contents/__projects',
        ),

        array(
            'link'    => 'kt_aside_nav_tab_menu',
            'icon'    => 'icons/duotune/finance/fin006.svg',
            'tooltip' => 'Menu',
            'view'    => 'layout/aside/__tab-contents/__menu',
        ),

        array(
            'link'    => 'kt_aside_nav_tab_subscription',
            'icon'    => 'icons/duotune/general/gen032.svg',
            'tooltip' => 'Subscription',
            'view'    => 'layout/aside/__tab-contents/__subscription',
        ),

        array(
            'link'    => 'kt_aside_nav_tab_tasks',
            'icon'    => 'icons/duotune/general/gen048.svg',
            'tooltip' => 'Tasks',
            'view'    => 'layout/aside/__tab-contents/__tasks',
        ),

        array(
            'link'    => 'kt_aside_nav_tab_notifications',
            'icon'    => 'icons/duotune/abstract/abs027.svg',
            'tooltip' => 'Notifications',
            'view'    => 'layout/aside/__tab-contents/__notifications',
        ),

        array(
            'link'    => 'kt_aside_nav_tab_authors',
            'icon'    => 'icons/duotune/files/fil005.svg',
            'tooltip' => 'Authors',
            'view'    => 'layout/aside/__tab-contents/__authors',
        ),
    ),
);
