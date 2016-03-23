<?php
//	list-hold			put		#/lists/:id/2/
//	list-active			put		#/lists/:id/1/
//	list-delete			delete	#/lists/:id/0/

/*	PUT:	Update name in list */
$app->put('/api/lists/:id/edit/', function ($id) use ($l){

	//	post keys: user_id, name, status_id

	$data=file_get_contents('php://input');
	$dataobj = json_decode($data);

	$name = $dataobj->name;
	$last_user = $dataobj->user_id;
	$status_id = $dataobj->status_id;

	$sql = "UPDATE `list` SET `status_id` = '{$status_id}',`name` = '{$name}', `last_user` = '{$last_user}' WHERE `id` = '{$id}' ";
	$result = $l->query($sql);
	echo $result;

});

?>