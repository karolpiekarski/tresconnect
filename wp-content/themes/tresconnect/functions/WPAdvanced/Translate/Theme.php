<?php

namespace WPAdvanced\Translate;

class Theme
{
  public function __construct()
  {
    add_action('after_setup_theme', [$this, 'setTextdomain']);
  }

  public function setTextdomain()
  {
    load_theme_textdomain('lang', get_template_directory().'/langs');
    load_theme_textdomain('wpA', WPA_PATH.'langs');
  }
}