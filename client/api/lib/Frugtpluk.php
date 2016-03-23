<?php

/*	 Db: /Users/tosti/Sites/com.tosti.info/Db.php	*/

class iisx_frugtpluk extends Db{

	public function test1(){return 'test';}

	public function query2json($sql){

		/*	sql'en køres i Db */
		$row = array();$rows = array();
		$rows = $this->select($sql);
		echo $this->array2json($rows);
	}

	public function array2json($rows){
		$row = array();
		/*	test hvor mange rækker, der køres igennem */
		$object2json = $this -> object2json($rows);

		/*	byg json-output	*/
		$outp = "";
		$outp .= "[";
		$outp .= $object2json;
		$outp .="]";

		/*	false, hvis ingen rækker - ellers return json-output	*/
		return ($object2json)?$outp:'FALSE';
	}

	public function object2json($rows){
		$row = array();
		/*	test hvor mange rækker, der køres igennem */
		$i=0;$r=0;

		/*	byg json-output	*/
		$outp = "";

			foreach($rows as $row){
				$i++;$r=0;

				$outp .= '{';
				/*foreach ($d as $key => $value)
				{

				}*/
				foreach($row as $key => $value){
				$r++;
					$outp .= '"'.$key.'" : "'.$value.'"';
					$outp .= ($r<count($row))?', ':'';
					}

				$outp .= '}';
				$outp .= ($i<count($rows))?',':'';
			}


		/*	false, hvis ingen rækker - ellers return json-output	*/
		return ($i++>0)?$outp:'FALSE';
	}

	public function object2json_all($rows){
		$row = array();
		/*	test hvor mange rækker, der køres igennem */
		$i=0;

		/*	byg json-output	*/
		$outp = "";

			foreach($rows as $row){
				$i++;

				$outp .= '{';
				/*foreach($elements2return as $element){*/
					$outp .= '"'.$element.'" : "'.$row[$element].'"';
					$outp .= ($element !== end($elements2return))?', ':'';
				/*	}*/

				$outp .= '}';
				if($i<count($rows))$outp .= ',';
			}


		/*	false, hvis ingen rækker - ellers return json-output	*/
		return ($i++>0)?$outp:'FALSE';
	}

}

/*
#	TODOS
#	bedre måde at tæller rækker?
#
*/
?>