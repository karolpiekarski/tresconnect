<?php

/* ---
  Name: WordPress Framework
  Author: Mateusz Gbiorczyk
  Docs: https://framework.gbiorczyk.pl/
  License: All rights reserved
--- */

require_once 'vendor/autoload.php';

$WPAdvanced = new WPAdvanced\WPAdvanced();
$management = new SiteManager\SiteManager();

add_filter('wpcf7_validate_configuration', '__return_false');

add_filter('use_block_editor_for_post_type', '__return_false', 10);


add_action('wp_enqueue_scripts', 'remove_block_css', 100);
function remove_block_css()
{
  wp_dequeue_style('wp-block-library'); // WordPress core
  wp_dequeue_style('wp-block-library-theme'); // WordPress core
  wp_dequeue_style('wc-block-style'); // WooCommerce
  wp_dequeue_style('storefront-gutenberg-blocks'); // Storefront theme
}

if (!is_admin()) add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);
function my_jquery_enqueue()
{
  wp_deregister_script('jquery');
}
//
//function custom_post_type()
//{
//
//// Set UI labels for Custom Post Type
//  $labels = array(
//    'name' => _x('Opinions', 'Post Type General Name', 'lang'),
//    'singular_name' => _x('Opinion', 'Post Type Singular Name', 'lang'),
//    'menu_name' => __('Opinions', 'lang'),
//    'parent_item_colon' => __('Parent', 'lang'),
//    'all_items' => __('All', 'lang'),
//    'view_item' => __('View', 'lang'),
//    'add_new_item' => __('Add ', 'lang'),
//    'add_new' => __('Add', 'lang'),
//    'edit_item' => __('Edit', 'lang'),
//    'update_item' => __('Update', 'lang'),
//    'search_items' => __('Search', 'lang'),
//    'not_found' => __('Not Found', 'lang'),
//    'not_found_in_trash' => __('Not found in Trash', 'lang'),
//  );
//
//// Set other options for Custom Post Type
//
//  $args = array(
//    'label' => __('Opinion', 'lang'),
//    'description' => __('Opinions', 'lang'),
//    'labels' => $labels,
//    'supports' => array('title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields',),
//    'taxonomies' => array('genres'),
//    'hierarchical' => false,
//    'public' => true,
//    'show_ui' => true,
//    'show_in_menu' => true,
//    'show_in_nav_menus' => true,
//    'show_in_admin_bar' => true,
//    'menu_position' => 5,
//    'can_export' => true,
//    'has_archive' => true,
//    'exclude_from_search' => false,
//    'publicly_queryable' => true,
//    'capability_type' => 'post',
//    'show_in_rest' => true,
//
//  );
//
//  register_post_type('opinion', $args);
//
//}

//add_action('init', 'custom_post_type', 0);

