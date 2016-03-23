<?php
include_once('session-start.php');

include_once('config.php');

/*	Session & Cookies 	*/

require_once(LIB_DIR.'Session_cookies.php');
$t = new Session_cookies();

/*	user_id		*/

$new_value = str_replace('.','',$_SERVER['REMOTE_ADDR']).":".($_SERVER["REQUEST_TIME_FLOAT"]*100).":".rand(0,100);
$t->tjek('user_id','USER_ID',$new_value);

#var_dump($_SESSION);
?>