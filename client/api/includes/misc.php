<?php
$app->get('/now/','nu');function nu(){
	echo json_encode(date('Y-m-d G:i:s'));
}
?>