<?php

#header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
#header("Access-Control-Allow-Origin: *");
#header("Access-Control-Allow-Credentials: true");
#header('Access-Control-Max-Age: 1000');
#header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

$http_origin = (isset($_SERVER['HTTP_ORIGIN']))?$_SERVER['HTTP_ORIGIN']:'';

if ($http_origin == "http://localhost:61001" || "http://mikbook.local:60028" || "http://mikbook.local:60027" || "http://mikbook.local:60046" || "http://app.frugtplukkerne.dk" || $http_origin == "http://frugtplukkerne.dk" || $http_origin == "http://www.frugtplukkerne.dk")
{
    header("Access-Control-Allow-Origin: $http_origin");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
}

$errors = array();
$errors[0] = "Der opstod en fejl - tjek venligst felterne";

include_once('preferences.php');
include INC_DIR."/visuals.php";
include INC_DIR."/misc.php";
include INC_DIR."/maps.php";
#include INC_DIR."/haver.php";
include INC_DIR."/lists.php";
include INC_DIR."/media.php";

$app->run();

?>