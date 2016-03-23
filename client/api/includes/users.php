<?php

	/*	Retrieves all users	*/

$app->get('/api/users/', function () use ($l){
	$sql = "SELECT user.id, user.name, user.email, user.mobile, user.first_action, user.last_action, user.status_id, status.text FROM `user` INNER JOIN status ON user.status_id = status.id";
	echo $sql;
	//echo $l -> query2json($sql,array('id','name','email','mobile','first_action','last_action','status_id','text'));
});

?>