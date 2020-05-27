<?php
namespace WPAdvanced\SEO;

class _Core
{
  private $core;

  private $settings = [
    'adding-tags' => [
      'disabled' => false
    ]
  ];

  public function __construct($core)
  {
    $this->core = $core;

    if (!function_exists('get_field')) return;

//    $this->addOptionPage = new AddOptionPage($core);
//    $this->addTags = new AddTags($core);
//    $this->addOptionToEditPage = new AddOptionToEditPage($core);
//    $this->title = new PageTitle($core);
  }
}