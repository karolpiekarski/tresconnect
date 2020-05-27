<?php

namespace WPAdvanced;

class WPAdvanced
{
  public function __construct()
  {
    define('WPA_PATH', get_template_directory());

    $this->menu = new Menu\_Core($this);
    $this->translate = new Translate\_Core($this);
    $this->settings = new Settings\_Core($this);
    $this->admin = new Admin\_Core($this);
    $this->seo = new SEO\_Core($this);
    $this->helpers = new Helpers\_Core($this);
  }
}