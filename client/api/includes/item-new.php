<?php
$app->post('/api/lists/:id/item/', function ($id) use ($l) {

	//	post keys: item_text, user_id
	$data=file_get_contents('php://input');
	$dataobj = json_decode($data);

	$sql = " INSERT INTO `item` (`id`, `list_id`, `status_id`, `first_action`, `text`, `user_id`, `last_action`) VALUES (NULL, '{$id}','1', '".date('Y-m-d G:i:s')."', '".$dataobj->item_text."', '".$dataobj->user_id."', '".date('Y-m-d G:i:s')."')";
	$result = $l -> query($sql);
	echo $result;
    }
);

?>