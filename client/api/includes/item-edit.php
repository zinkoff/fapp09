<?php
//	list-hold			put		#/item/:id/2/
//	list-active			put		#/item/:id/1/
//	list-delete			delete	#/item/:id/0/
//	put: status_id, text, last_user
/*$app->put('/api/item/:id/2/', function ($id) use ($l) {

#var_dump($_SERVER['REQUEST_METHOD']);
	$sql = "UPDATE `item` SET `status_id` = '2' WHERE `id` = '{$id}'";
	$result = $l -> query($sql);
	echo $id;
    }
);
*/


$app->put('/api/item/:id/edit/', function ($id) use ($l) {

	//	curl -X PUT -d arg=val -d {text:'curl opdatering',status_id:'1',user_id='mikael'} http://mikbook.local:60014/test/api/item/309/edit/

	//	put: status_id, text, last_user
	// 	item_id: dataValue,user_id:user_id,text:textValue
	$data=file_get_contents('php://input');
	$dataobj = json_decode($data);

	$last_user = $dataobj->user_id;

	$text = $dataobj->text;
	$status_id = $dataobj->status_id;

	$sql = "UPDATE `item` SET `status_id` = '{$status_id}',`text` = '{$text}', `last_user` = '{$last_user}' WHERE `id` = '{$id}' ";
	$result = $l->query($sql);
	echo $result;

    }
);

?>