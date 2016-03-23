<?php
include_once('../config.php');

include_once(LIB_DIR."functions/function_br.php");

include_once('session-start.php');
br('SESSIONS');
var_dump($_SESSION);
br('COOKIES');
var_dump($_COOKIE);

?>