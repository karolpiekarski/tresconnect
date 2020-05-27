<?php
namespace WPAdvanced\Admin;

class _Core
{
  private $core;

  public function __construct($core)
  {
    $this->core = $core;

    $this->initPanel = new InitPanel($core);
  }
}