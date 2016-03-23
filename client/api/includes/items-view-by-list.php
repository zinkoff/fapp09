<?php

/*	GET	/api/lists/#234jfb23/items	Get all items on list based on list's PK */
$app->get('/api/lists/:id/items/', function ($id) use ($l) {

	$sql = " SELECT id, text, status_id FROM item WHERE item.list_id = '{$id}'";
	$result = $l -> query($sql);
	echo $l -> query2json($sql,array('id','text','status_id'));
    }
);
?>