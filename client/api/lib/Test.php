<?php

$config = parse_ini_file('./config.ini');
/*
GET			/api/lists									Retrieves all lists
GET			/api/lists/#234jfb23				Retrieves list based on primary key
GET			/api/lists/search/Astro			Searches for lists with ‘Astro’ is in their name

POST		/api/lists									Adds a new list
PUT			/api/lists/#234jfb23				Updates list based on primary key
DELETE		/api/lists/#234jfb23				Deletes list based on primary key

POST 		/api/lists/#234jfb23/item		Adds a new item to list based on list's PK
PUT			/api/item/#234kjlkj					Updates item based on item's PK
DELETE		/api/item/#234kjlkj					Deletes item based on item's PK

GET 		/api/users									Retrieves all users
GET 		/api/users/search/[email]
GET 		/api/users/#asdf8766				Retrieves user based on primary key
POST 		/api/users/									Adds a new user
PUT 		/api/users/#asdf8766				Updates user based on primary key

*/


class Test extends Db
{

    public function validation()
    {
        //Type must be: droid, mechanical or virtual
        $this->validate(new InclusionIn(
            array(
                "field"  => "type",
                "domain" => array("droid", "mechanical", "virtual")
            )
        ));

        //Robot name must be unique
        $this->validate(new Uniqueness(
            array(
                "field"   => "name",
                "message" => "The robot name must be unique"
            )
        ));

        //Year cannot be less than zero
        if ($this->year < 0) {
            $this->appendMessage(new Message("The year cannot be less than zero"));
        }

        //Check if any messages have been produced
        if ($this->validationHasFailed() == true) {
            return false;
        }
    }

}