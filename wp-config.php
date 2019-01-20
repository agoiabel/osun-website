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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
define('FS_METHOD', 'direct');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'osun');

/** MySQL database username */
define('DB_USER', 'onehealth_sleep');

/** MySQL database password */
define('DB_PASSWORD', 'onehealth_sleep');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '4M;dtNCM]/cM1~P#%Nl_{Vm23hWTe=qn>zQn-|eCK}eAbhCvS4r(d[[uy)}9UjnH');
define('SECURE_AUTH_KEY',  '%&+o[x7~+.f)RaP^ .pUX7ZQKdyG<Mk)JoUc;FQ+~9(^21beFpo$8p+S52s<mS%f');
define('LOGGED_IN_KEY',    '|`9SS}GtcT`f.7zQx#ex/QO]Dnr]L;6$.6@:tQAaBNYF`BLK;Et;&c81^S<}52&t');
define('NONCE_KEY',        '{` N+,7nJ)|&VgcnmelT;Tn[?gs~8vaD6Kh;$Eh{C[*Iz6xX^,D9uKix1%x#uGye');
define('AUTH_SALT',        'eP*cXY/*PT0%T()ppF*Dn!4U uHE-<BO4;=_@yCdZLXB])i><s~i_?DL>@*C LVz');
define('SECURE_AUTH_SALT', '=X~lmZ,mPG!g!,Ap+dlB#URe`3.i-f_CB$uoY_DMvkMy%r~.~v7:[M!PHos%.t++');
define('LOGGED_IN_SALT',   'r/L5%u4R`oKMwD%.k?DVfwpI1:]@Z<~i_i[%AV:gxyIOu5%j)g1^+~M)~Ki4ov>}');
define('NONCE_SALT',       'r*4#@&ZLRU:yl~:)u0Q}kh0I^k~)G!FUGz$,9Fhoqc`(+V v@v*l;q@h5_pu4Mm&');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

