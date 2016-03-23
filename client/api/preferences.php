<?php

/* 	config	*/

include_once('config.php');

#$queries = parse_ini_file('./sql.php');

/*	Session & Cookies		*/

#include_once("session_cookies.php");

/*	Generate_id		*/

require_once(LIB_DIR.'ContentID.php');
$c1 = new ContentID();

/*	Db 	*/

require_once(LIB_DIR.'Db.php');
$db = new Db();
$db->query('SET NAMES utf8');

/*	Lister	*/

require_once(LIB_DIR.'Frugtpluk.php');

$l = new iisx_frugtpluk();

/* 	Slim framework -> http://docs.slimframework.com/#Installation */

/* for php > 5.2 */
#require_once(LIB_DIR.'Slim/Slim/Slim.php');
#\Slim\Slim::registerAutoloader();
#$app = new \Slim\Slim();

/* for php 5.2 */
require_once(LIB_DIR.'Slim-1.6.4/Slim/Slim.php');
$app = new Slim();

/*
require_once('../../lib/Slim/Slim/Slim.php');
$app = new Slim();
$app -> registerAutoloader();
*/


/*	Mysql 	*/

/*require_once LIB_DIR."mysqli-wrapper/class.Mysql.php";
$connection_information = array(
	'host' => 'localhost',
	'user' => $config['username'],
	'pass' => $config['password'],
	'db' => $config['dbname']
);
$db = new mysql($connection_information);*/

?>