<?php

namespace WPAdvanced\Settings;


class _Core
{
  private $core;
  private $settings = [
    'gutenberg' => [
      'disabled' => true
    ],
    'comments' => [
      'disabled' => true
    ],
    'security' => [
      'wpc_path_allow' => [],
      'login_url' => 'my-login',
    ],
    'acf' => [
      'title' => 'Zarządzanie',
      'slug' => 'options',
      'icon' => 'dashicons-admin-tools',
      'pages' => [
        'header' => 'Nagłówek',
        'settings' => 'Ustawienia',
        'footer' => 'Stopka',
      ],
      'notranslate' => [],
    ],
    'tinymce' => [
      'pages_editor' => false,
      'buttons_1' => [
        'formatselect',
        'bold',
        'italic',
        'bullist',
        'numlist',
        'link',
        'removeformat',
        'pastetext',
        'undo',
        'redo',
        'hr',
        'blockquote',
        'forecolor',
        'textcolor_map' => [
          'D7C0D0', 'color1',
          'F7C7DB', 'color2',
        ],
        'alignleft',
        'aligncenter',
        'alignright',
      ],
      'buttons_2' => [
      ],
      'formats' => [
        'h1' => 'H1',
        'h2' => 'H2',
        'h3' => 'H3',
        'h4' => 'H4',
        'p' => 'Akapit',
        'small' => 'Mały akapit',
      ],
      'colors' => '
        "000000", "Black",
        "161615", "Black 2",
        "161615", "White",
        "fdfdfd", "Gray 1",
        "f8f8f8", "Gray 2",
        "e8e8e8", "Gray 3",
        "dcdcdc", "Gray 4",
        "163767", "Blue 1",
        "18ede2", "Green 1",
        "00a19a", "Green 2",
      '
    ],
    'css' => [
      'path' => [
        'public/build/css/styles.css'
      ]
    ],
    'js' => [
      'path' => [
        'public/build/js/scripts.js'
      ]
    ],
    'phpmailer' => [
      'debug_level' => 0, // 0 - DEBUG OFF 1 - DEBUG_CLIENT 2 - DEBUG_SERVER 3 - DEBUG_CONNECTION 4 - DEBUG_LOWLEVEL
      'host' => 'smtp.gmail.com',
      'username' => 'noreply.wpadvanced@gmail.com',
      'password' => 'NoReplyTest',
      'secure' => 'ssl', // sll, tls
      'port' => '465',
      'from' => 'noreply.wpadvanced@gmail.com',
    ],
  ];

  public function __construct($core)
  {
    $this->core = $core;

    $this->guttenber = new Gutenberg($core, $this->settings['gutenberg']);
    $this->comments = new Comments($core, $this->settings['comments']);
    $this->acf = new ACF($core, $this->settings['acf']);
    $this->security = new Security($core, $this->settings['security']);
    $this->tinymce = new TinyMCE($core, $this->settings['tinymce']);
    $this->css = new CSS($core, $this->settings['css']);
    $this->js = new JS($core, $this->settings['js']);
    $this->phpmailer = new Phpmailer($core, $this->settings['phpmailer']);
  }
}