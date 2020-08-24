<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title><?php wp_title( '|', true, 'right' ); ?></title>

  <link rel="apple-touch-icon" sizes="57x57" href="<?=get_template_directory_uri()?>/public/favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="<?=get_template_directory_uri()?>/public/favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="<?=get_template_directory_uri()?>/public/favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="<?=get_template_directory_uri()?>/public/favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="<?=get_template_directory_uri()?>/public/favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="<?=get_template_directory_uri()?>/public/favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="<?=get_template_directory_uri()?>/public/favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="<?=get_template_directory_uri()?>/public/favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="<?=get_template_directory_uri()?>/public/favicon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="<?=get_template_directory_uri()?>/public/favicon/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?=get_template_directory_uri()?>/public/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="<?=get_template_directory_uri()?>/public/favicon/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?=get_template_directory_uri()?>/public/favicon/favicon-16x16.png">
  <link rel="manifest" href="<?=get_template_directory_uri()?>/public/favicon/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="<?=get_template_directory_uri()?>/public/favicon/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css">
  <!--[if (lt IE 9)]><script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.helper.ie8.js"></script><![endif]-->

  <?php
    wp_head();
    do_action('wpa_favicons',  '/public/img/favicons/');
  ?>
</head>
<body <?php body_class(); ?>>

<?php get_template_part('includes/layout/header'); ?>