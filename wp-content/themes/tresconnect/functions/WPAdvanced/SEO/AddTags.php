<?php


namespace WPAdvanced\SEO;


class AddTags
{
  private $core;

  public function __construct($core)
  {
    $this->core = $core;

    add_action('wp_head', [$this, 'addTags']);
  }

  public function addTags()
  {
    if (!get_field('wpa_seo_active', 'option')) return;
    $tags = '' . PHP_EOL;

    $title = apply_filters('show_title', get_field('wpa_seo_title') ? get_field('wpa_seo_title') : get_the_title());
    $description = get_field('wpa_seo_description');
    $image = get_field('wpa_seo_image');

    if($title) {
      $tags .= '<title>' . $title . ' - ' . get_bloginfo() . '</title>' . PHP_EOL;
      $tags .= '<meta property="og:title" content="'.$title.'"/>' . PHP_EOL;
    }

    if($description) {
      $tags .= '<meta name="description" content="'.$description.'"/>' . PHP_EOL;
      $tags .= '<meta property="og:description" content="'.$description.'"/>' . PHP_EOL;

    }

    if($image) {
      $tags .= '<meta property="og:image" content="'.$image['sizes']['medium'].'" />' . PHP_EOL;
      $tags .= '<meta property="og:image:width" content="'.$image['width'].'" />' . PHP_EOL;
      $tags .= ' <meta property="og:image:height" content="'.$image['height'].'" />' . PHP_EOL;
    }

    echo $tags;
  }
}