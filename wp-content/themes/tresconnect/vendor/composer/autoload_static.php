<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd131b9c923faadfb3f9760fc61d9df73
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WPAdvanced\\' => 11,
        ),
        'S' => 
        array (
            'SiteManager\\' => 12,
        ),
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WPAdvanced\\' => 
        array (
            0 => __DIR__ . '/../..' . '/functions/WPAdvanced',
        ),
        'SiteManager\\' => 
        array (
            0 => __DIR__ . '/../..' . '/functions/SiteManager',
        ),
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd131b9c923faadfb3f9760fc61d9df73::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd131b9c923faadfb3f9760fc61d9df73::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
