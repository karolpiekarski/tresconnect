<?php


namespace WPAdvanced\SEO;


class AddOptionPage
{
  private $core;

  public function __construct($core)
  {
    $this->core = $core;

    add_action('init', [$this, 'addOptionPage']);
  }

  public function addOptionPage()
  {
    if (!function_exists('acf_add_local_field_group')) return;

    $list = [
      'key'    => 'group_wpfsec69vjrfq',
      'title'  => __('SEO', 'wpa'),
      'fields' => [
        [
          'key'   => 'field_wpf9bzgqsaudq',
          'label' => __('Module active?', 'wpa'),
          'name'  => 'wpa_seo_active',
          'type'  => 'true_false',
        ],
      ],
      'location' => [
        [
          [
            'param'    => 'options_page',
            'operator' => '==',
            'value'    => 'wpa-Seo',
          ],
        ],
      ],
      'menu_order'            => 0,
      'position'              => 'normal',
      'style'                 => 'default',
      'label_placement'       => 'top',
      'instruction_placement' => 'label',
      'hide_on_screen'        => '',
      'active'                => 1,
      'description'           => '',
    ];

    $list = json_encode($list);
    $list = str_replace('"logic":', '"conditional_logic":', $list);
    $list = json_decode($list, true);

    acf_add_local_field_group($list);
  }
}