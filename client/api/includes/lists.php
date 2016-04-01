<?php

//	$app->post('/lists/', 'create_list');
$app->post('/lists', 'create_list');
$app->get('/lists', 'get_lists');
$app->get('/lists/:id', 'get_list');
$app->delete('/lists/:id', 'delete_list');
$app->put('/lists/:id', 'update_list');
$app->get('/lists/:id/name', 'get_list_name');
$app->get('/lists/search/:string','search_list');

//	list-hold			put		#/lists/:id/2/
//	list-active			put		#/lists/:id/1/
//	list-delete			delete	#/lists/:id/0/

//$app->get('/lists/:id/', 'get_list');

//	POST: create a new list

function create_list() {

	$l = new iisx_frugtpluk();
	// 	Henter og decoder POSTkeys: list_name, user_id
	$data = file_get_contents('php://input');
	$dataobj = json_decode($data);
	$users_id = $dataobj->users_id;
	switch ($dataobj->users_id) {
    case 'custom':
        echo 'custom';
        break;
    case 'media':
        echo 'media';
        break;
    case 'project':
        echo 'project';
        break;
    case 'subproject':
        echo 'subproject';
        break;
    case 'projectpart':
        echo 'projectpart';
        break;

    default:
        echo 'custom';
	}
	$lists_type = ($dataobj->lists_type)?$dataobj->lists_type:'custom';

	//	Skaber et id. Gentager hvis ikke unikt. Opretter liste med dette id.
	$_c = new ContentID();
	$result = 0;
	while($result<1) {
		$contentID = $_c->contentID();
//{"user_id":"Mikael Tosti","list_name":"9","sag":"8","faggruppe":"8","kategori":"8","del":"8"}
		$sql = "
		INSERT INTO `lists`
		(
			`id`,
			`users_id`,
			`types_id`,
			`created`,
			`updated`,
			`status_id`
		)
		VALUES
		(
			'{$contentID}',
			'{$users_id}',
			(SELECT id FROM types WHERE name = '".$lists_type."'),
			'".time()."',
			'".time()."',
			1
		)
		;";
		die($sql);
		$result = $l->query($sql);
	}
	$rows = array();
	$rows[] = array('id' => $contentID,'name' => $list_name );

	//	Returnerer listens id
	echo $contentID;
};

//	GET: get list based on id

function get_list($id) {

	$sql = "SELECT lists.id, lists.name as list_name FROM 'lists' WHERE lists.id = '".$id."' ";
	die($sql);
	echo $l -> query2json($sql,array('id','list_name'));
};

//	GET: get name of list based on id

function get_list_name($id) {
	$sql = "SELECT name FROM `list` WHERE list.id = '{$id}' ";
	$rows = $l->select($sql);
	echo $rows[0]['name'];
};

//	GET: get all lists

function get_lists() {
	$sql = "SELECT list.id, list.name as list_name FROM `list ORDER BY created desc";
	echo $l -> query2json($sql,array('id','list_name'));
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

//	GET: search for lists with where :string is in the name

function search_list($string) {
	$sql =  "SELECT list . id , list . name as list_name FROM `list` /*INNER JOIN text ON list . text_id = text . id*/ WHERE list . name LIKE '%$string%'";
	echo $l -> query2json($sql,array('id','list_name'));
};

?>