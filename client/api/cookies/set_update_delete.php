<?php

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
	setCookie($key,NULL,time()-3600,"/",$_SERVER['SERVER_NAME'],0,true);
	if($returURL!=''){
		header("Location:{$returURL}");
	}
}
//set_cookie("test","a999dsf","test.php");
delete_cookie("user_id","11","/test/cookies/test.php");
?>