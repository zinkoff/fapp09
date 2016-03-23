<?php

class ContentID {

	public function contentID($length=8, $strength=4) {
		$vowels = 'aeuy';
		$consonants = 'bdghjmnpqrstvz';
		$consonants .= '23456789';
		if ($strength & 1) {
			$consonants .= 'BDGHJLMNPQRSTVWXZ';

		}
		if ($strength & 2) {
			$vowels .= "AEUY";
		}
		if ($strength & 4) {
			$consonants .= '23456789';
		}
		if ($strength & 8) {
			$consonants .= '@#$%';
		}
		if ($strength & 16) {
			$consonants .= 'BDGHJLMNPQRSTVWXZ@#$%23456789';
		}

		$password = '';
		$alt = time() % 2;
		for ($i = 0; $i < $length; $i++) {
			if ($alt == 1) {
				$password .= $consonants[(rand() % strlen($consonants))];
				$alt = 0;
			} else {
				$password .= $vowels[(rand() % strlen($vowels))];
				$alt = 1;
			}
		}
		return $password;
	}

	public function userID() {
		return md5(microtime()*mt_rand(1,100));
	}


}
?>