<?php
include_once('../config.php');
require_once(LIB_DIR.'Slim-1.6.4/Slim/Slim.php');
$app = new Slim();
$app->get('/hello/:name', 'hello');
function hello($name) {
    echo "Hello, $name!";
}
$app->run();
?>