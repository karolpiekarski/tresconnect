<?php

  namespace WebpConverter\Action;

  use WebpConverter\Convert as ConvertMethod;
  use WebpConverter\Media\Attachment;

  class Convert
  {
    public function __construct()
    {
      add_action('webpc_convert_paths',      [$this, 'convertFilesByPaths']);
      add_action('webpc_convert_attachment', [$this, 'convertFilesByAttachment']);
      add_action('webpc_convert_dir',        [$this, 'convertFilesByDirectory'], 10, 2);
    }

    /* ---
      Functions
    --- */

    public function convertFilesByPaths($paths)
    {
      $settings = apply_filters('webpc_get_values', []);

      if ($settings['method'] === 'gd') $convert = new ConvertMethod\Gd();
      else if ($settings['method'] === 'imagick') $convert = new ConvertMethod\Imagick();
      if (!isset($convert)) return false;

      foreach ($paths as $path) {
        $extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));
        if (!in_array($extension, $settings['extensions'])) continue;

        $response = $convert->convertImage($path, $settings['quality']);
        if (!$response['success']) $this->addErrorToLog($response['message']);
      }
    }

    public function convertFilesByAttachment($postId)
    {
      $paths = (new Attachment())->getAttachmentPaths($postId);
      do_action('webpc_convert_paths', $paths);
    }

    public function convertFilesByDirectory($dirPath, $skipExists = true)
    {
      $paths = apply_filters('webpc_dir_files', [], $dirPath, $skipExists);
      do_action('webpc_convert_paths', $paths);
    }

    private function addErrorToLog($message)
    {
      error_log(sprintf(
        'WebP Converter for Media (Error): %s',
        $message
      ));
    }
  }