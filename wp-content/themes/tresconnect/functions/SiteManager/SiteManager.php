<?php

  namespace SiteManager;

  class SiteManager
  {
    public function __construct()
    {
      define('SITE_CONFIG', require 'Config.php');

      new Orphan\Orphan();
    }
  }