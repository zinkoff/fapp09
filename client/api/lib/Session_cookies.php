<?php

class Session_cookies {

	function br($i=1,$txt=''){$i=($i=='')?1:$i;while($i>0){echo "<br/>".$txt;$i=$i-1;}}

	function tjek($_key,$constant,$new_value){

		$_key 	= "user_id";
		$log1 	= "";
		$log 	= "";

		if(isset($_COOKIE[$_key]) && !empty($_COOKIE[$_key]))

			{	$log .= "<p>1.1) har cookie: ".$_COOKIE[$_key]."</p>";

				//	sæt sessionvariabel lig med cookie
				$_SESSION[$_key] = $_COOKIE[$_key];

				$log .= "<p>1.2) session = cookie: ".$_SESSION[$_key]."</p>";

				//	sæt konstant lig med cookie
				define($constant, $_COOKIE[$_key]);

				$log .= "<p>1.3) constant = cookie: ".USER_ID."</p>";

				//	forny cookie lig med cookie
				setCookie($_key,$_COOKIE[$_key],time()+3600000000,"/",$_SERVER['SERVER_NAME'],0,true);

				$log .= "<p>1.4) cookie = cookie: ".$_COOKIE[$_key]."</p>";
			}

		else 	//	hvis der ikke er sat cookie
			{
				if(isset($_SESSION[$_key]) && !empty($_SESSION[$_key]))

					{	// 	hvis der er sat en session variabel

						$log .= "<p>2.1) har session - ingen cookie: ".$_SESSION[$_key]."</p>";

						//	sæt eller forny cookie lig med sessionvariabel
						setCookie($_key,$_SESSION[$_key],time()+3600000000,"/",$_SERVER['SERVER_NAME'],0,true);

						$log .= "<p>2.2) cookie = session: Kræver reload</p>";

						//	sæt konstant lig med sessionvariabel
						define($constant, $_SESSION[$_key]);

						$log .= "<p>2.2) constant = session: ".USER_ID."</p>";

					}

				else

					{	// 	hverken cookie eller session

						$log .= "<p>3.1.a) ingen cookie: 	COOKIE</p>";
						$log .= "<p>3.1.b) ingen session: 	SESSION</p>";

						//	sæt cookie lig med temp_user_id
						setCookie($_key,$new_value,time()+3600000000,"/",$_SERVER['SERVER_NAME'],0,true);

						$log .= "<p>3.2.a) cookie = ny værdi: ".$new_value."</p>";
						$log .= "<p>3.2.b) cookie = er sat: Kræver reload</p>";

						//	sæt sessionvariabel lig med temp_user_id
						$_SESSION[$_key] = $new_value;

						$log .= "<p>3.3.a) session = ny værdi: ".$new_value."</p>";
						$log .= "<p>3.3.b) session = er sat: ".$_SESSION[$_key]."</p>";

						//	sæt konstant lig med temp_user_id
						define($constant, $new_value);

						$log .= "<p>3.3.a) constant = ny værdi: ".$new_value."</p>";
						$log .= "<p>3.3.b) constant = er sat: ".USER_ID	."</p>";

					}
			}
			$log .= "<p>slut.a) cookie: ";
			$log .= (isset($_COOKIE[$_key]))?$_COOKIE[$_key]:' Kræver reload';
			$log .= "</p>";
			$log .= "<p>slut.b) session: ".$_SESSION[$_key]."</p>";
			$log .= "<p>slut.c) constant: ".USER_ID	."</p>";
			#echo $log;

	}

	function tjek1($_key,$constant,$new_value){

		if(isset($_SESSION[$_key]) && !empty($_SESSION[$_key]))
		{	// 	hvis der er sat en session variabel

			//	sæt konstant lig med sessionvariabel
			define($constant, $_SESSION[$_key]);

			//	sæt eller forny cookie lig med sessionvariabel
			setCookie($_key,$_SESSION[$_key],time()+3600,"/",$_SERVER['SERVER_NAME'],0,true);
		}

		else

		{	// 	hvis der er sat en cookie

			if(isset($_COOKIE[$_key]) && !empty($_COOKIE[$_key]))
			{
				//	sæt sessionvariabel lig med cookie
				$_SESSION[$_key] = $_COOKIE[$_key];

				//	sæt konstant lig med cookie
				define($constant, $_COOKIE[$_key]);

				//	forny cookie lig med cookie
				setCookie($_key,$_COOKIE[$_key],time()+3600,"/",$_SERVER['SERVER_NAME'],0,true);
			}

			//	hvis der ikke er sat cookie
			else
			{
				//	sæt sessionvariabel lig med temp_user_id
				$_SESSION[$_key] = $new_value;

				//	sæt konstant lig med temp_user_id
				define($constant, $new_value);

				//	sæt cookie lig med temp_user_id
				setCookie($_key,$new_value,time()+3600,"/",$_SERVER['SERVER_NAME'],0,true);

			}
		}
	}
}
?>