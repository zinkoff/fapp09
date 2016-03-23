<?php
#	lists/:id
	/*	Retrieves list based on primary key	*/
$app->get('/api/lists/:id/', function ($id) use ($l){
	$sql = "SELECT list.id, list.name as list_name FROM `list` /*INNER JOIN text ON list.text_id = text.id*/ WHERE list.id = '{$id}' ";
	echo $l -> query2json($sql,array('id','list_name'));

});
?>