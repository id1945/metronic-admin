<?php
return array(
   'index' => array(
      'title' => 'Hello, Paul',
      'description' => 'You’ve got 24 New Sales',
      'view' => 'index',
      'layout' => array(
         'page-title' => array(
            'description' => true,
            'breadcrumb' => false
         )
      )
   ),

   'dashboards' => array(
      'compact' => null,
      'header' => null
   ),

   'apps' => array(
      'support-center' => array(
         '*' => array(
            // Layout
            'layout' => array(
               'main' => array(
                  'body' => array(
                     'class' => 'page-bg-image-lg'
                  )
               )
            ),

            // Aside
            'aside' => array(
               'display' => false,
            ),

            // Toolbar
            'toolbar' => array(
               'display' => false,
            )
         )
      )
   ),

   'layouts' => null
);
