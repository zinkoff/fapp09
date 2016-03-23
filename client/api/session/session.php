<?php
include_once('../session-start.php');
$action = '';
$action = (isset($_GET['action']))?$_GET['action']:'abcd';
#if(isset($_GET['action'])){$action=$_GET['action'];}
switch($action)
{
	case 'destroy':
		// destroy the session
		session_destroy();
	break;
	case 'test':
		echo 'test';
	break;
	default:
		// remove all session variables
		session_unset();
	break;
}

?>



