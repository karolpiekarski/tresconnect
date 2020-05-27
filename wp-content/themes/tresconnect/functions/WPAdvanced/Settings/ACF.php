<?php


namespace WPAdvanced\Settings;


class ACF
{
  private $core, $settings, $isDefault;

  public function __construct($core, $settings)
  {
    $this->core = $core;
    $this->settings = $settings;

    add_filter('admin_menu', [$this, 'newSeparator']);
    add_filter('admin_menu', [$this, 'removeDuplicatedLinks'], 100);

    $this->registerOptionsPage();

  }

  public function newSeparator()
  {
    global $menu;
    $menu[51] = $menu[59];
  }

  public function removeDuplicatedLinks()
  {
    remove_submenu_page($this->settings['slug'], $this->settings['slug']);
  }

  public function registerOptionsPage($isDefault = false)
  {
    if (!function_exists('acf_add_options_page') || !function_exists('acf_add_options_sub_page')) return;

    $this->isDefault = $isDefault;
    add_action('init', [$this, 'addNewOptionsPage'], 0);

  }

  public function addNewOptionsPage()
  {
    $this->addOptionsPage($this->settings);
    $this->addOptionSubPages($this->settings['pages'], $this->settings['slug']);
  }

  private function addOptionsPage($settings)
  {
    acf_add_options_page([
      'page_title' => $settings['title'],
      'menu_slug' => $settings['slug'],
      'capability' => 'manage_options',
      'position' => $this->isDefault ? 58 : 57,
      'icon_url' => $settings['icon'],
      'redirect' => false,
    ]);
  }

  private function addOptionSubPages($pages, $parent)
  {
    foreach ($pages as $slug => $title) {
      acf_add_options_sub_page([
        'page_title' => $title,
        'menu_slug' => sprintf('%s-%s', $parent, $slug),
        'parent_slug' => $parent,
      ]);
    }
  }
}