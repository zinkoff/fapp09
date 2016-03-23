<?php
setCookie($_GET['key'],$_GET['value'],time()+360000000,"/",$_SERVER['SERVER_NAME'],0,true);
	if($_GET['returURL']!=''){
		header("Location:{$_GET['returURL']}");
	}
?>