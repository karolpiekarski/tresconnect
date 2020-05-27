<?php


namespace WPAdvanced\Settings;


class TinyMCE
{
  private $core, $settings;

  public function __construct($core, $settings)
  {
    $this->core = $core;
    $this->settings = $settings;

    add_action('init', [$this, 'editorSupport']);
    add_filter('mce_buttons', [$this, 'firstLineButtons'], 99);
    add_filter('mce_buttons_2', [$this, 'secondLineButtons'], 99);
    add_filter('tiny_mce_before_init', [$this, 'customColorsOptions']);
    add_action('tiny_mce_before_init', [$this, 'changeBlockFormats']);
  }

  public function customColorsOptions($init)
  {

    $init['textcolor_map'] = '['.$this->settings['colors'].']';
    return $init;
  }

  public function editorSupport()
  {
    if (!isset($this->settings['pages_editor']) || $this->settings['pages_editor']) return;
    remove_post_type_support('page', 'editor');
  }

  public function firstLineButtons($buttons)
  {
    if (!isset($this->settings['buttons_1'])) return $buttons;
    return $this->settings['buttons_1'];
  }

  public function changeBlockFormats($settings)
  {
    if (!isset($this->settings['formats']) || !$this->settings['formats']) return $settings;

    $formats = [];
    foreach ($this->settings['formats'] as $block => $name) {
      $formats[] = $name.'='.$block.';';
    }

    $settings['block_formats'] = implode('', $formats);
    return $settings;
  }

  public function secondLineButtons($buttons)
  {
    if (!isset($this->settings['buttons_2'])) return $buttons;
    return $this->settings['buttons_2'];
  }
}