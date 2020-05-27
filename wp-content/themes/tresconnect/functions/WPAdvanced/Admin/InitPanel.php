<?php

namespace WPAdvanced\Admin;

use WPAdvanced\Settings\ACF;

class InitPanel
{
  private $core;

  public function __construct($core)
  {
    $this->core = $core;

    $this->addTab();
  }

  public function addTab()
  {
    $pages = [
//      'Seo' => __('SEO', 'wpa'),
    ];

    $noTranslate = [
//      'seo'
    ];

    asort($pages);

    $args = [
      'title'       => __('WPAdvanced', 'wpa'),
      'slug'        => 'wpa',
      'icon'        => 'dashicons-wordpress',
      'pages'       => $pages,
      'notranslate' => $noTranslate
    ];

    $optionspage = new ACF($this, $args);
    $optionspage->registerOptionsPage();
  }
}