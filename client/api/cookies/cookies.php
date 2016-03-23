<?php
include("../session-start.php");
function delete_all_cookies($text='all cookies deleted') {
	if (isset($_COOKIE)) {
		$host = explode('.', $_SERVER['HTTP_HOST']);
		while ($host) {
			$domain = '.' . implode('.', $host);
			foreach($_COOKIE as $name => $value) {
				// Name of the cookie you want to preserve

				if ($name != "preservecookie") {
					setcookie($name, '', 1, '/', $domain);
				}
				array_shift($host);
			}
		}
	echo $text;
	}
	else
	{
		return FALSE;
	}
}

function show_all_cookies() {
	if (isset($_COOKIE)) {
		$host = explode('.', $_SERVER['HTTP_HOST']);
		$outp = '';
		while ($host) {
			$domain = '.' . implode('.', $host);
			foreach($_COOKIE as $name => $value) {
				$outp .= $name.": ".$value."<br/>";
			}
			array_shift($host);
		}
	}else{}
}

function destroy($text='',$returURL='')
{

 	$_SESSION = array();
 	session_destroy();
 	if($returURL!='')
 	{
		header("Location:{$returURL}");
	}
 	delete_all_cookies($text);
}


	#show_all_cookies();

#destroy('cookie and session gone!');
show_all_cookies();
var_dump($_SESSION);


?>