<?php
#	lists-view-all

$app->get('/api/lists/', function () use ($l){
	$sql = "SELECT list.id, list.name as list_name FROM `list` /*INNER JOIN text ON list.text_id = text.id*/ ORDER BY created desc";
	echo $l -> query2json($sql,array('id','list_name'));
});

#	test
/*
#	slim < version 2
$app->get('/hello/:name', 'hello');
function hello($name) {
    echo "Hello, $name!";
}

$app->get('/vis/:lister/', 'vis_lister');
function vis_lister($lister,$l) {
   	$sql = "SELECT list.id, list.name as list_name FROM `list` ORDER BY created desc";
	echo $l -> query2json($sql,array('id','list_name'));
}
*/
?>