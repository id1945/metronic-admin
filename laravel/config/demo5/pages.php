<?php
return array(
    'index' => array(
        'title' => 'All Questions',
        'description' => '(6,299)',
        'view' => 'apps/devs/index',
        'layout' => array(
            'page-title' => array(
                'description' => true,
                'breadcrumb' => false,
            ),
            'toolbar' => array(
                'primary-button-label' => 'Ask Question',
                'primary-button-url' => 'apps/devs/ask'
            ),
            'sidebar' => array(
                'display' => true, // Display sidebar
            ),
        ),
        'assets' => array(
            'vendors' => array(
                'css' => array(
                    'plugins/custom/fullcalendar/fullcalendar.bundle.css'
                ),
                'js' => array(
                    'plugins/custom/fullcalendar/fullcalendar.bundle.js'
                )
            )
        )
    ),

    'apps' => array(
        'devs' => array(
            'ask' => array(
                'title' => 'Ask a Questions',
                'description' => '(or any community post)',
                'view' => 'apps/devs/ask',
                'layout' => array(
                    'sidebar' => array(
                        'display' => true
                    )
                ),
                'assets' => array(
                    'custom' => array(
                        'js' => array(
                            'js/custom/apps/devs/ask.js'
                        )
                    )
                )
            ),

            'search' => array(
                'title' => 'Ask a Questions',
                'description' => '(or any community post)',
                'view' => 'apps/devs/search',
                'layout' => array(
                    'toolbar' => array(
                        'display' => false
                    ),
                    'sidebar' => array(
                        'display' => true,
                        'search' => false
                    )
                )
            ),

            'tag' => array(
                'title' => 'Tag: Metronic',
                'description' => '(1,850 questions)',
                'view' => 'apps/devs/tag',
                'layout' => array(
                    'toolbar' => array(
                        'primary-button-label' => 'Ask Question',
                        'primary-button-url' => 'apps/devs/ask'
                    ),
                    'sidebar' => array(
                        'display' => true
                    )
                )
            ),

            'question' => array(
                'title' => 'How to use Metronic with Laravel Framework ?',
                'description' => '',
                'view' => 'apps/devs/question',
                'layout' => array(
                    'toolbar' => array(
                        'display' => false
                    ),
                    'sidebar' => array(
                        'display' => true
                    )
                )
            )
        )
    ),
);
