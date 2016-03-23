<?php

//$kunder_ID bruges i webshopindasiadk.ordrer
function setVar_kunder_ID($returURL='')
{		
	include_once($_SERVER['DOCUMENT_ROOT']."/_settings/base.php");
	include_once($basedir."/_functions/function_generateID.php");
	include_once($basedir."/website/models/cookies/set_update_delete.php")
	if(isset($_COOKIE["temp_kundeID"]) && !empty($_COOKIE["temp_kundeID"])) 
	{
		return $_COOKIE['temp_kundeID'];
	}
	else
	{
		$value = generate_long_ID();
		$kunder_ID = $value;
		set_cookie("temp_kundeID", $value,$returURL);
	}
}

?>