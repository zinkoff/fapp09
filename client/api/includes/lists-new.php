<?php
	/*	POST: Adds a new list	*/
$app->post('/api/lists/new/', function () use ($l){

	//	post keys: list_name, user_id
	$data=file_get_contents('php://input');
	$dataobj = json_decode($data);

	$list_name = $dataobj->list_name;
	$user_id = $dataobj->user_id;

	$_c = new ContentID();
	$result = 0;

	while($result<1) {
		$contentID = $_c->contentID();
		$result = $l->query(
		"INSERT INTO `list` (`id`, `user_id`, `name`, `created`, `last_action`, `status_id`) VALUES ('{$contentID}','{$user_id}', '{$list_name}', '".date('Y-m-d G:i:s')."',  '".date('Y-m-d G:i:s')."', 1);"
		);
	}
	$rows = array();
	$rows[] = array(
					'id' => $contentID,
					'name' => $list_name,
					'uri' =>  '/test/api/lists/'.$contentID.'/'
					);

	#echo "<h4><a href='/test/api/lists/".$contentID."/'>".$contentID."</a></h4>";
	#echo $l -> array2json($rows,array('id','uri','name'));
	return $contentID;
});

?>