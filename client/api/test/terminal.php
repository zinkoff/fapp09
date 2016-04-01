<?php
$outp = "<p>";
$outp.= shell_exec("curl -i -X POST http://mikbook.local:60046/api/lists/");
echo $outp
?>