<?php

class Cookies_2{

function set_cookie($key,$value,$returURL='')
{
	setCookie($key,$value,time()+3600,"/",$_SERVER['SERVER_NAME'],0,true);
	if($returURL!=''){
		header("Location:{$returURL}");
	}
}

function update_cookie($key,$value,$returURL='')
{
	//delete_cookie($key,NULL);
	setCookie($key,$value,time()+3600,"/",$_SERVER['SERVER_NAME'],0,true);
	if($returURL!=''){
		header("Location:{$returURL}");
	}
}

function delete_cookie($key,$value,$returURL='')
{
	setCookie($key,NULL,1,"/",$_SERVER['SERVER_NAME'],0,true);
	if($returURL!=''){
		header("Location:{$returURL}");
	}
}

/*delete_cookie("temp_kundeID","11","test.php");*/

}
?>