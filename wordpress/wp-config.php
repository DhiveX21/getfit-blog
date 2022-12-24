<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'getfit-blog' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'HX[L/nd?<Mv8x$grqkeh;q/hfQ+;#LS|./fnW=]E4k)&97),Cavf]F9?ON5=JjO~' );
define( 'SECURE_AUTH_KEY',  'Mm.rDP>6@WYcRI.084pp)=AH=0Sv`c ueC-qs0f;x7?viF0[ Lj%0(uZ~+*E:a%_' );
define( 'LOGGED_IN_KEY',    '~+{4ia+kLb(j;}W[r;N5R*0rg~IT(XV-P0aW7h.{Cnm9[}sxU8p%|Rc*~dVRn.1`' );
define( 'NONCE_KEY',        '[D}ms+Xd?PPeo= k4:W6[4ETa&dI|m1#|}]emb<x{ZzeUou^CF-SS#7.clo5`UEj' );
define( 'AUTH_SALT',        'sHF>K_N{CP8?9.D*}(_=#R@+TaQ8z$bUvY/N/B[B`5{*F<7i/cc&s4%R=X]1&d? ' );
define( 'SECURE_AUTH_SALT', '?AV4<2Z]qas}?U{f/d=KZrJ|M$.f-46%r>.7K3xE;v6t>*(9Z1LkMK99X6l/K;k|' );
define( 'LOGGED_IN_SALT',   'M=&=DE7d99U@`:/GTl0{Q{CCR$iwl=uD7Jcm6TxV%~}_MmSqu(+0;sZWba``$,LU' );
define( 'NONCE_SALT',       'KU_,wu$12sd{Mr1TBLd~G4?*e~_SJ3oBWo@bCY#{xf.HZu$E{`YR,NM:U0fZ~jCT' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
