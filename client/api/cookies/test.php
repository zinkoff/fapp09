<?php
if (session_id() === '') {
            session_start();
        }
echo "SESSION: ";
var_dump($_SESSION);
Print_r ($_SESSION);
echo "<br /><br />";
echo "COOKIES: ";
var_dump($_COOKIE	);
echo "<br /><br />";
echo "<a href='/test/cookies/set_update_delete.php'>xxx</a>";
?>