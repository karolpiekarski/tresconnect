<?php

  namespace WebpConverter\Admin;

  class Update
  {
    private $optionVersion  = 'webpc_latest_version';
    private $optionSettings = 'webpc_settings';

    public function __construct()
    {
      add_action('admin_init', [$this, 'runActionsAfterUpdate']);
    }

    /* ---
      Functions
    --- */

    public function runActionsAfterUpdate()
    {
      $version = get_option($this->optionVersion, null);
      if ($version === WEBPC_VERSION) return;

      if ($version !== null) {
        $this->saveOptionValue($this->optionSettings, $this->updateSettingsForOldVersions($version));
        $this->moveFilesToUploadsSubdirectory($this->optionVersion);
      }

      do_action('webpc_rewrite_htaccess', true);
      flush_rewrite_rules(true);
      $this->saveOptionValue($this->optionVersion, WEBPC_VERSION);
    }

    private function updateSettingsForOldVersions($version)
    {
      $settings = apply_filters('webpc_get_values', []);

      if (version_compare($version, '1.1.2', '<=')) {
        $settings['features'][] = 'only_smaller';
      }

      $settings['features'] = array_unique($settings['features']);
      return $settings;
    }

    private function saveOptionValue($optionKey, $value)
    {
      if (get_option($optionKey, false) !== false) update_option($optionKey,  $value);
      else add_option($optionKey,  $value);
    }

    private function moveFilesToUploadsSubdirectory($version)
    {
      if (version_compare($version, '1.2.7', '>')) return;

      $webpRoot = apply_filters('webpc_uploads_webp', '');
      if (!is_writable($webpRoot)) return;

      $pathParts = explode('/', apply_filters('webpc_uploads_dir', ''));
      $oldPaths  = scandir(apply_filters('webpc_uploads_webp', ''));
      for ($i = 1; $i <= count($pathParts); $i++) {
        $dirPath = $webpRoot . '/' . implode('/', array_slice($pathParts, 0, $i));
        if (!file_exists($dirPath)) mkdir($dirPath);
      }

      foreach ($oldPaths as $path) {
        if (in_array($path, ['.', '..', '.htaccess', $pathParts[0]])) continue;
        rename($webpRoot . '/'. $path, $dirPath . '/'. $path);
      }
    }
  }