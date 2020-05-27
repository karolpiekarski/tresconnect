<?php


namespace WPAdvanced\Settings;

class Phpmailer
{
  private $settings, $core;

  public function __construct($core, $settings)
  {
    $this->settings = $settings;
    $this->core = $core;

    add_action('phpmailer_init', [$this, 'PHPMailerSettings']);
  }

  public function PHPMailerSettings($PHPMailer)
  {
    $this->setSettings($PHPMailer);
  }

  private function setSettings($PHPMailer)
  {
    $PHPMailer->IsSMTP();
    $PHPMailer->SMTPDebug  = $this->settings['debug_level'];
    $PHPMailer->Host       = $this->settings['host'];
    $PHPMailer->SMTPAuth   = true;
    $PHPMailer->Username   = $this->settings['username'];
    $PHPMailer->Password   = $this->settings['password'];
    $PHPMailer->SMTPSecure = $this->settings['secure'];
    $PHPMailer->Port       = $this->settings['port'];
    $PHPMailer->From       = $this->settings['from'];
    $PHPMailer->FromName   = get_bloginfo('name');

    if (empty($this->settings['secure'])) {
      $PHPMailer->SMTPAutoTLS = false;
    } else if ($this->settings['secure'] == 'ssl') {
      $PHPMailer->SMTPOptions = [
        'ssl' => [
          'verify_peer'       => false,
          'verify_peer_name'  => false,
          'allow_self_signed' => true,
        ]
      ];
    }
  }
}