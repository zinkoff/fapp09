<?php
$errors = array();
$errors[0] = "Der opstod en fejl - tjek venligst felterne";
#	slim < version 2

$app->get('/haver/:limit/','get_haver');
$app->get('/haver/:limit/:columns/','get_haver');
$app->get('/haver/', 'get_haver');
$app->get('/have/:id/', 'get_have');
$app->get('/have/:id/:columns/', 'get_have');
$app->post('/haver/new/', 'haver_new');
$app->put('/have/:id/', 'put_haver_by_id');
$app->delete('/haver/', 'delete_haver');
$app->delete('/have/:id/', 'delete_have');

#############################

$app->post('/media','post_media');
$app->get('/media/:id/','get_media');

function get_media($id) {

	$l = new iisx_frugtpluk();

	//	build sql
  	$sql = "SELECT type, uri,annotation,timestamp FROM media WHERE id = '{$id}'";

  		$outp = $l->query2json($sql);


  	echo $outp;
}

function post_media() {
	/*	variabler	*/
	$l = new iisx_frugtpluk();
	$type = '';
	$uri = '';
	$annotation = '';
	$userID = 'Mikael';
	$sql = "";
	/*	opret liste til æblesorter 	*/
	//	generer id på 8 tegn
	$_c = new ContentID();
	//	nulstil resultat af efterfølgende query
	$result = 0;
	//	opret liste - gentages automatisk, hvis ikke id er unikt
	while($result<1) {
		$id = $_c->contentID();
		$result = $l->query(
		"INSERT INTO `media` (
			`id`,
			`type`,
			`uri`,
			`annotation`,
			`timestamp`,
			`userID`
			) VALUES (
			'{$id}',
			'{$type}',
			'{$uri}',
			'{$annotation}',
			'".date('Y-m-d G:i:s')."',
			'{$userID}');"
		);
		$result = $l->query($sql);
	}
	echo $id;
}
#############################

function get_have($id,$columns=''){
	get_haver(1,$columns,$id);
}

function get_haver($limit='',$columns='',$id='') {

	$l = new iisx_frugtpluk();

	//	build sql
  	$sql = "SELECT ";
  	$sql.= (isset($columns) && $columns !== '')?str_replace(':',',',$columns):" * ";
  	$sql.= " FROM `haver` ";
  	$sql.= (isset($id) && $id !== '')?" WHERE id = '{$id}' ":" ";
	$sql.= (isset($id) && $id !== '')?" ":" ORDER BY created desc ";
  	$sql.= (isset($limit) && $limit>0)?" LIMIT {$limit} " :" ";

	if((isset($limit) && $limit==='1') || (isset($id) && $id !== '')){

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

function put_haver_by_id($id) {

	$l = new iisx_frugtpluk();
	$i = 0;
	$request = Slim::getInstance()->request();
    $body = $request->getBody();
	$felter = json_decode($body);
	$sql = "UPDATE `haver` SET ";
	foreach($felter as $key => $value){
		if($key ==='updated' || $key === 'geo' || $key === 'created' || $key === 'sort_list_id'){}else{
			$sql.= " `$key` = '$value', ";
		}
    }
    $sql.= " `updated` = '".date('Y-m-d G:i:s')."', ";


	//	setup location
    $location = $felter->address.", ".$felter->zip." ".$felter->city;

    //	get coordinates for location: lat,lng
   	$coords = getCoordinates($location);

   	$lat_lng = explode(',',$coords);

	//	add coordinates to haver.geo
	if($coords)$sql.= " `lat`= '".$lat_lng[0]."', `lng`= '".$lat_lng[1]."' ";

	$sql.= " WHERE `id` = '{$id}' ";

	$result = $l->query($sql);
	echo "####".$coords."###";
	echo ($result)?$sql:$sql;


  	}

function haver_new() {

	/*	variabler	*/

	$l = new iisx_frugtpluk();
	$user_id = 'Mikael';
	$list_id = '';
	$have_id = '';
	$sql = "";

	/*	opret liste til æblesorter 	*/

	//	generer id på 8 tegn

	$_c = new ContentID();

	//	nulstil resultat af efterfølgende query

	$result = 0;

	//	opret liste - gentages automatisk, hvis ikke id er unikt

	while($result<1) {
		$list_id = $_c->contentID();
		$result = $l->query(
		"INSERT INTO `list` (`id`, `user_id`, `name`, `created`, `last_action`, `status_id`) VALUES ('{$list_id}','{$user_id}', 'Æblesorter ({$list_id})', '".date('Y-m-d G:i:s')."', '".date('Y-m-d G:i:s')."', 1);"
		);
	}

	// 	nulstil resultatet

	$result = 0;

	//	opret have med unikt id og indsæt sort_list_id

	while($result<1) {
		$have_id = $_c->contentID();
		$sql = "INSERT INTO
		`haver` (`id`, `created`,`sort_list_id`,`first_user`)
		VALUES ('{$have_id}', '".date('Y-m-d G:i:s')."', '".$list_id."', '".$user_id."');";



		$result = $l->query($sql);

	}

	echo $have_id;
}

function delete_haver(){
	$l = new iisx_frugtpluk();
	$sql = "DELETE haver,list FROM  haver LEFT JOIN list ON haver.sort_list_id = list.id WHERE haver.name IS NULL OR haver.name = ''";
	#die($sql);
	$result = $l->query($sql);
	echo ($result = $l->query($sql))?$result.'Haverne er nu slettet':$result;
}

function delete_have($id){
	$l = new iisx_frugtpluk();
	$sql = "DELETE haver,list FROM  haver LEFT JOIN list ON haver.sort_list_id = list.id WHERE haver.id = '".$id."'";

	echo ($result = $l->query($sql))?$result.'Have '.$id.' er nu slettet':$result;
}

?>