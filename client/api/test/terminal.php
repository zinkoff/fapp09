<?php
$outp = "<p>";
$outp.= shell_exec("curl -i -X PUT http://mikbook.local:60014/test/api/newlist/");
echo $outp
?>