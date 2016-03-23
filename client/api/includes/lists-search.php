<?php
	/*	Searches for lists with ‘:string’ is in their name	*/
$app->get('/api/lists/search/:string/', function ($string) use ($l){
	$sql =  "SELECT list . id , list . name as list_name FROM `list` /*INNER JOIN text ON list . text_id = text . id*/ WHERE list . name LIKE '%$string%'";
	echo $l -> query2json($sql,array('id','list_name'));
});
?>