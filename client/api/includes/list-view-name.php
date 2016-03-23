<?php
#	lists/:id/name/
	/*	Retrieves list based on primary key	*/
$app->get('/api/lists/:id/name/', function ($id) use ($l){
	$sql = "SELECT name FROM `list` /*INNER JOIN text ON list.text_id = text.id*/ WHERE list.id = '{$id}' ";
	$rows = $l->select($sql);
	echo $rows[0]['name'];
});
?>