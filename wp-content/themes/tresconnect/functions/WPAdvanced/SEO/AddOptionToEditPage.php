<?php


namespace WPAdvanced\SEO;


class AddOptionToEditPage
{
  private $core;

  public function __construct($core)
  {
    $this->core = $core;

    $this->addAcfToEditPage();
  }

  public function addAcfToEditPage()
  {
    if (!function_exists('acf_add_local_field_group') || !get_field('wpa_seo_active', 'option')) return;

    $list = [
      'key'    => 'group_wpadasafdsg',
      'title'  => __('Meta tags', 'wpa'),
      'fields' => [
        [
          'key'   => 'field_wpa_seo_title',
          'label' => __('Title', 'wpa'),
          'instructions' => __('(if you leave it blank it will be taken from the primary title field)', 'wpa'),
          'name'  => 'wpa_seo_title',
          'type'  => 'text',
        ],
        [
          'key'   => 'field_wpa_seo_description',
          'label' => __('Description', 'wpa'),
          'name'  => 'wpa_seo_description',
          'type'  => 'textarea',
        ],
        [
          'key'   => 'field_wpa_seo_image',
          'label' => __('Image', 'wpa'),
          'name'  => 'wpa_seo_image',
          'type'  => 'image',
        ],
      ],
      'location' => [
        [
          [
            'param'    => 'post_type',
            'operator' => '==',
            'value'    => 'post',
          ],
        ],
        [
          [
            'param'    => 'post_type',
            'operator' => '==',
            'value'    => 'page',
          ]
        ],
      ],
      'menu_order'            => 1,
      'position'              => 'side',
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