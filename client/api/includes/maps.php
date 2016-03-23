<?php
//2028
$app->get('/geo/coords/:address/','getCoordinates');
$app->get('/geo/nsew/','get_nsew');

/*  http://nazcalabs.com/blog/?p=27  */
function getCoordinates($address){

    $address = urlencode($address);

    $url = "http://maps.google.com/maps/api/geocode/json?sensor=false&address=" . $address;

   	$response = file_get_contents($url);
    $json = json_decode($response,true);


    $lat = $json['results'][0]['geometry']['location']['lat'];
    $lng = $json['results'][0]['geometry']['location']['lng'];

    #return array($lat, $lng);
    return $lat.",".$lng;

}

//$coords = getCoordinates("Wall Street, New York");
function printCoordinates($address){
	$coords = getCoordinates($address);
	print_r($coords);
}


function get_nsew(){
$sql = "select max(lat) as n,min(lat) as s, max(lng) as e, min(lng) as w,(max(lat)+min(lat))/2 as lat_center,(max(lng)+min(lng))/2 as lng_center FROM haver";
$l = new iisx_frugtpluk();
$outp = $l->query2json($sql);
echo $outp;
}