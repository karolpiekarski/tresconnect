<?php

  namespace SiteManager\CF7;

  class CustomValidateTextTextarea
  {
    public function __construct()
    {
      add_filter( 'wpcf7_validate_text*', [$this, 'customCF7ValidateText'], 10, 2 );
      add_filter( 'wpcf7_validate_textarea*', [$this, 'customCF7ValidateText'], 1, 2 );
    }

    public function customCF7ValidateText( $result, $tag ) {

      $type = $tag['type'];
      $name = $tag['name'];
      $value = $_POST[$name] ;
      $excludedPhrases = get_field('cf7_text_excluded_phrases', 'option');

      $excludedPhrases = get_field('cf7_text_excluded_phrases', 'option');
      $excludedPhrasesArr = explode(',', $excludedPhrases);
      $excludedPhrasesNewArr = array_map(function($text){
        return (string) trim($text);
      }, $excludedPhrasesArr);
    
      if ( in_array($value, $excludedPhrasesNewArr) ) {
        $result->invalidate( $tag, get_field('cf7_text_message_excluded_phrases', 'option') );
      }
      
      return $result;
    }
  }