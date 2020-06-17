<?php

  namespace SiteManager\Orphan;

  class Orphan
  {
    public function __construct()
    {
        add_filter('acf/format_value/type=textarea', [$this, 'acfOrphans'], 10, 3);
        add_filter('acf/format_value/type=wysiwyg', [$this, 'acfOrphans'], 10, 3);
    }

    public function acfOrphans($value, $post_id, $field) {
        if ( class_exists( 'iworks_orphan' ) ) {
            $orphan = new \iworks_orphan();
            $value = $orphan->replace( $value );
        }
        return $value;
    }
  }