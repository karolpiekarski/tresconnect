<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tresconnect' );

/** MySQL database username */
define( 'DB_USER', 'homestead' );

/** MySQL database password */
define( 'DB_PASSWORD', 'secret' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'D23x^.(RotygG,ke!<!gw)P$- e.Ty7[Pkm;C5PFnF+oN@>>^>eMW@jQLh[5/-~7' );
define( 'SECURE_AUTH_KEY',  'krf=%?fK#idk$w WG{5=:(VCH1<b@]t5Q%pYiLm#BYbE7V{5?k!3t?YwUSkEe+Z{' );
define( 'LOGGED_IN_KEY',    '|W|?[E=kL,zwsy-MbwD}tPsp6;Mv#Bt@G)1V6@~<kaz$6.deue`j.qXpK[&-W8;_' );
define( 'NONCE_KEY',        '}Rz>Yf.LX3xPg}2UoR`@WpRCT0&g7q,px~DF&Sl55I0t8df)B^k[D&)-B:TNOBWZ' );
define( 'AUTH_SALT',        ' C`:5CX0,[zsyMn{Xt>.@hfW~TCfn [}^-pX>yU5-xb;S#mj)8;gRyagvJt;(r*7' );
define( 'SECURE_AUTH_SALT', 'i.9Q0LphJ2N:N>b)U$1Ld k_Q)Hn*Hgn3Z[@Kkq^6AENu7w/qcIjgm|IHMjVX7O<' );
define( 'LOGGED_IN_SALT',   'I IC-SD ~xl-$x!h+uf1vYCx%<lrQCF]a!n7#2uo!3-p1+F@lqj(tp/[W $E_1)(' );
define( 'NONCE_SALT',       ']yrCcnA-1f_pE|t#@(;Oh/k`M<mCVDHz|vw)MvG!57V,H_S;ePC^]+_ nv.2ATli' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_trco_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', false);
define('WP_DEBUG_DISPLAY', false);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
