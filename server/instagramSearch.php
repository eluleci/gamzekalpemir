<?php
header('Content-type: application/json');

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

$client = "40203b9010844552af16857c3f547db1";
$token = "224663913.1fb234f.9425e3c29e7647788f3bfb16173559e0";
$query = $_GET['q'];
$clnum = mt_rand(1,3);

$api = "https://api.instagram.com/v1/tags/".$query."/media/recent?client_id=".$client."&access_token=".$token;

function get_curl($url) {
    if(function_exists('curl_init')) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0); 
        $output = curl_exec($ch);
        echo curl_error($ch);
        curl_close($ch);
        return $output;
    } else{
        return file_get_contents($url);
    }
}

$response = get_curl($api);
$images = array();

if($response){
	foreach(json_decode($response)->data as $item){
	    $id = $item->id;
        $src = $item->images->standard_resolution->url;
        $thumb = $item->images->thumbnail->url;
		$url = $item->link;
		$caption = $item->caption->text;
		$user = $item->user;
		$createdAt = $item->created_time;
		
        $images[] = array(
        "id"=> $id,
        "src" => htmlspecialchars($src),
        "thumb" => htmlspecialchars($thumb),
        "url" => htmlspecialchars($url),
        "caption" => htmlspecialchars($caption),
        "user" => $user,
        "createdAt" => intval($createdAt),
        "platform" => "instagram"
        );

    }
}

print_r(str_replace('\\/', '/', json_encode($images)));
//print_r($response);
die();
?>