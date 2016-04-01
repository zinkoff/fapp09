<?php

//	$app->post('/types/', 'create_list');
$app->post('/types', 'create_type');
$app->get('/types', 'get_types');
$app->get('/types/:id', 'get_type');
$app->delete('/types/:id', 'delete_type');
$app->put('/types/:id', 'update_type');
$app->get('/types/:id/name', 'get_type_name');
$app->get('/types/search/:string','search_type');



//$app->get('/types/:id/', 'get_list');

//	POST: create a new list
function get_type($id) {
	$sql = "SELECT * FROM `keys` WHERE `types_id` = '{$id}';
";
".$id."' ";
	echo $l -> query2json($sql,array('id','list_name'));
}

function create_type() {

	$l = new iisx_frugtpluk();
	// 	Henter og decoder POSTkeys: list_name, user_id
	$data = file_get_contents('php://input');
	$dataobj = json_decode($data);
	$type_name = $dataobj->type_name;
	$user_id = $dataobj->user_id;
	$types_id = $dataobj->types_id;

	//	Skaber et id. Gentager hvis ikke unikt. Opretter liste med dette id.
	$_c = new ContentID();
	$result = 0;
	while($result<1) {
		$contentID = $_c->contentID();
		//$sql = "INSERT INTO `list` (`id`, `user_id`, `name`, `created`, `last_action`, `status_id`) VALUES ('{$contentID}','{$user_id}', '{$list_name}', '".date('Y-m-d G:i:s')."',  '".date('Y-m-d G:i:s')."', 1);";
		$sql = "
		INSERT INTO `types`
		(
			`id`,
			`users_id`,
			`created`,
			`updated`,
			`name`
		)
		VALUES
		(
			'{$contentID}',
			'{$user_id}',
			'".time()."',
			'".time()."',
			1
		)
		;";
		$result = $l->query($sql);
	}
	$rows = array();
	$rows[] = array('id' => $contentID,'name' => $list_name );

	//	Returnerer listens id
	echo $contentID;
};

//	GET: get list based on id

function get_list($id) {
	$sql = "SELECT types.id, types.name as list_name FROM 'types' WHERE types.id = '".$id."' ";
	echo $l -> query2json($sql,array('id','list_name'));
};

//	GET: get name of list based on id

function get_list_name($id) {
	$sql = "SELECT name FROM `list` WHERE list.id = '{$id}' ";
	$rows = $l->select($sql);
	echo $rows[0]['name'];
};

//	GET: get all types

function get_types() {
	$sql = "SELECT types.id, types.key FROM `types` ORDER BY id desc";
	echo $l -> query2json($sql,array('id','key'));
};

//	DELETE:	delete list based on id

function delete_list($id) {

	$sql = "DELETE FROM list WHERE id = '{$id}'";
	if($result = $l->query($sql)){
		$sql2 = "DELETE FROM item WHERE list_id = '{$id}'";
		$result2 = $l->query($sql2);
	};

	echo $result;

};

//	PUT: update list by id

function update_list($id) {

	//	put keys: user_id, name, status_id
	$data=file_get_contents('php://input');
	$dataobj = json_decode($data);

	$sql = "UPDATE `list` SET `status_id` = '{$dataobj->status_id}',`name` = '{$dataobj->name}', `last_user` = '{dataobj->user_id}' WHERE `id` = '{$id}' ";
	$result = $l->query($sql);
	echo $result;

};

//	GET: search for types with where :string is in the name

function search_list($string) {
	$sql =  "SELECT list . id , list . name as list_name FROM `list` /*INNER JOIN text ON list . text_id = text . id*/ WHERE list . name LIKE '%$string%'";
	echo $l -> query2json($sql,array('id','list_name'));
};

?>