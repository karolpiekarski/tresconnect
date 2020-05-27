<?php


namespace WPAdvanced\Settings;


class Gutenberg
{
  private $core, $settings;

  public function __construct($core, $settings)
  {
    $this->core = $core;
    $this->settings = $settings;

    $this->manageGutenberg();
  }

  public function manageGutenberg()
  {
    if ($this->settings['disabled']) {
      add_filter('gutenberg_can_edit_post_type', '__return_false');
      add_filter('use_block_editor_for_post_type', '__return_false', 100);
    }
  }

}