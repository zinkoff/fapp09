<?php
function br($txt='',$i=1){
	$i = ($i=='') ? 1 : $i ;
	while($i>0){
		echo "<br/>$txt";
		$txt='';
		$i=$i-1;
	}
}
?>