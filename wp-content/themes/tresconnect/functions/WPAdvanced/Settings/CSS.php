<?php


namespace WPAdvanced\Settings;


class CSS
{
  private $core, $settings;

  public function __construct($core, $settings)
  {
    $this->core = $core;
    $this->settings = $settings;

    add_action('wp_enqueue_scripts',    [$this, 'loadFrontendCss']);
  }

  public function loadFrontendCss()
  {
    foreach ($this->settings['path'] as $path) {
      $this->registerStyle($path);
    }
  }

  private function registerStyle($source)
  {
    $handle = md5($source);

    if (strpos($source, 'http') !== false) {
      $url   = $source;
      $parts = explode('?ver=', $url);
      $ver   = (count($parts) > 1) ? $parts[1] : '';
    } else {
      $url  = get_template_directory_uri() . '/' . trim($source, '/');
      $path = get_template_directory() . '/' . trim($source, '/');
      $ver  = file_exists($path) ? filemtime($path) : time();
    }

    wp_register_style($handle, $url, '', $ver);
    wp_enqueue_style($handle);
  }
}