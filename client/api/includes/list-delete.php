<?php

/*	PUT:	Update name in list */
$app->delete('/api/lists/:id/', function ($id) use ($l){

	$sql = "DELETE FROM list WHERE id = '{$id}'";
	if($result = $l->query($sql)){
		$sql2 = "DELETE FROM item WHERE list_id = '{$id}'";
		$result2 = $l->query($sql2);
	};

	echo $result;

});

?>