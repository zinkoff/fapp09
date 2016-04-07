<?php

//	media:
//	id 			int 11
//	type 		varchar 32
//	uri 		varchar 528
//	annotation 	mediumtext
//	timestamp	timestamp
//	user_id 	varchar 64
//	lat 		varchar 32
//	lng 		varchar 32

$app->get('/media/', 'get_all_media');
$app->get('/media/:id/', 'get_media');
$app->get('/media/:id', 'get_media');
$app->get('/media/:id/uri', 'get_media_uri');
$app->get('/media/:id/uri/', 'get_media_uri');
$app->post('/media/', 'create_media');
$app->delete('/media/:id', 'delete_media');
$app->put('/media/:id', 'update_media');
$app->get('/lists/:id/name', 'get_list_name');
$app->get('/media/search/:string','search_media');


function get_all_media() {
	get_media('all');
}

function get_media($id) {

	if(!$id)$id = 'all';
	$l = new iisx_frugtpluk();

	//	build sql
  	$sql = "SELECT * FROM `media` WHERE id = '{$id}' LIMIT 1";
	if($id=='all')$sql = "SELECT * FROM `media`";
	if((isset($limit) && $limit==='1') || (isset($id) && $id !== '' && $id !== 'all')){

		$rows = $l->select($sql);
		if(!$rows)die($errors[0]);
  		$outp = $l->object2json($rows);
  	}
  		else
  	{

  		$outp = $l->query2json($sql);
  	}

  	echo $outp;
}

function get_media_uri($id) {

	if(!$id)$id = 'all';
	$l = new iisx_frugtpluk();

	//	build sql
  	$sql = "SELECT uri FROM `media` WHERE id = '{$id}' LIMIT 1";

	$rows = $l->select($sql);

		if(!$rows) {
			die($errors[0]);
		}
		else
		{
			echo $rows[0]['uri'];
		}

}

function create_media() {

	$l = new iisx_frugtpluk();
	// 	Henter og decoder POSTkeys: list_id, user_id
	$data = file_get_contents('php://input');
	$dataobj = json_decode($data);


	//	Skaber et id. Gentager hvis ikke unikt. Opretter liste med dette id.
	$_c = new ContentID();
	$result = 0;
	while($result<1) {
		$contentID = $_c->contentID();
		//$sql = "INSERT INTO `media` (`id`, `user_id`, `name`, `created`, `last_action`, `status_id`) VALUES ('{$contentID}','{$user_id}', '{$list_name}', '".date('Y-m-d G:i:s')."',  '".date('Y-m-d G:i:s')."', 1);";
		//	id 			int 11
		//	type 		varchar 32
		//	uri 		varchar 528
		//	annotation 	mediumtext
		//	timestamp	timestamp
		//	user_id 	varchar 64
		//	lat 		varchar 32
		//	lng 		varchar 32
		//	created		timestamp
		$sql = "INSERT INTO `media` (`id`,`created``) VALUES ('{$contentID}', '".date('Y-m-d G:i:s')."',  '".date('Y-m-d G:i:s')."');";
		$result = $l->query($sql);
	}

	//	Returnerer media id
	echo $contentID;
}
?>