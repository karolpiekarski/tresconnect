<?php


namespace WPAdvanced\SEO;


class PageDescription
{
  private $core;

  public function __construct($core)
  {
    $this->core = $core;

    add_filter('show_description', [$this, 'getDescription']);
  }

  public function getDescription($description)
  {
    $category = get_the_category();

    if (is_category()) {
      return category_description($category[0]->ID);
    }

    return $description;
  }
}