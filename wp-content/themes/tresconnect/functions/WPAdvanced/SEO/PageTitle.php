<?php


namespace WPAdvanced\SEO;


class PageTitle
{
  private $core;

  public function __construct($core)
  {
    $this->core = $core;

    add_filter('show_title', [$this, 'getTitle']);
  }

  public function getTitle($title)
  {
    $category = get_queried_object();

    if (is_category()) {
      return get_the_category_by_ID($category->term_id);
    }

    return $title;
  }
}