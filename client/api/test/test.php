<?php
        include_once('config.php');

		die(BASE_URL."api/haver/new/");
        // create curl resource
        $ch = curl_init();

        // set url
        curl_setopt($ch, CURLOPT_URL, BASE_URL."api/haver/new/");

        //return the transfer as a string
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        // $output contains the output string
        $output = curl_exec($ch);
		echo $output;
        // close curl resource to free up system resources
        curl_close($ch);
?>
