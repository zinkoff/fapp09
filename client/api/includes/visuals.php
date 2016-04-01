<?php

//	$app->post('/visuals/', 'create_visual');
$app->post('/visuals', 'create_type');
$app->get('/visuals', 'get_visuals');
$app->get('/visuals/:id', 'get_visual');
$app->delete('/visuals/:id', 'delete_visual');
$app->put('/visuals/:id', 'update_visual');
$app->get('/visuals/:id/name', 'get_visual_name');
$app->get('/visuals/search/:string','search_visual');




//	POST: create a new visual


function create_visual() {

	$l = new iisx_frugtpluk();
	// 	Henter og decoder POSTkeys: visual_name, user_id
	$data = file_get_contents('php://input');
	$dataobj = json_decode($data);
	$type_name = $dataobj->type_name;
	$user_id = $dataobj->user_id;
	$visuals_id = $dataobj->visuals_id;

	//	Skaber et id. Gentager hvis ikke unikt. Opretter visuale med dette id.
	$_c = new ContentID();
	$result = 0;
	while($result<1) {
		$contentID = $_c->contentID();
		//$sql = "INSERT INTO `visual` (`id`, `user_id`, `name`, `created`, `last_action`, `status_id`) VALUES ('{$contentID}','{$user_id}', '{$visual_name}', '".date('Y-m-d G:i:s')."',  '".date('Y-m-d G:i:s')."', 1);";
		$sql = "
		INSERT INTO `visuals`
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
	$rows[] = array('id' => $contentID,'name' => $visual_name );

	//	Returnerer visualens id
	echo $contentID;
};

//	GET: get visual based on id

function get_visual($id) {
	$sql = "SELECT visuals.id, visuals.name as visual_name FROM 'visuals' WHERE visuals.id = '".$id."' ";
	echo $l -> query2json($sql,array('id','visual_name'));
};

//	GET: get name of visual based on id

function get_visual_name($id) {
	$sql = "SELECT name FROM `visual` WHERE visual.id = '{$id}' ";
	$rows = $l->select($sql);
	echo $rows[0]['name'];
};

//	GET: get all visuals

function get_visuals() {die('get_visuals');
	$sql = "SELECT vi* FROM `visuals` ORDER BY id desc";
	echo $l -> query2json($sql,array('id','key'));
};

//	DELETE:	delete visual based on id

function delete_visual($id) {

	$sql = "DELETE FROM visual WHERE id = '{$id}'";
	if($result = $l->query($sql)){
		$sql2 = "DELETE FROM item WHERE visual_id = '{$id}'";
		$result2 = $l->query($sql2);
	};

	echo $result;

};

//	PUT: update visual by id

function update_visual($id) {

	//	put keys: user_id, name, status_id
	$data=file_get_contents('php://input');
	$dataobj = json_decode($data);

	$sql = "UPDATE `visual` SET `status_id` = '{$dataobj->status_id}',`name` = '{$dataobj->name}', `last_user` = '{dataobj->user_id}' WHERE `id` = '{$id}' ";
	$result = $l->query($sql);
	echo $result;

};

//	GET: search for visuals with where :string is in the name

function search_visual($string) {
	$sql =  "SELECT visual . id , visual . name as visual_name FROM `visual` /*INNER JOIN text ON visual . text_id = text . id*/ WHERE visual . name LIKE '%$string%'";
	echo $l -> query2json($sql,array('id','visual_name'));
};

?>