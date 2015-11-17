<?php
$http_origin = $_SERVER['HTTP_ORIGIN'];

//if ( strrpos($http_origin, "mysite1.net") || strrpos($http_origin, "mysite2") ){
//    header("Access-Control-Allow-Origin: $http_origin");
//}
header('Access-Control-Allow-Origin: *');

header('Content-Type: application/json');

ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "479071285-wSAUxVDR0sWa44i7DopCN9HUfwZQlGJXfAjqrESF",
    'oauth_access_token_secret' => "IztLdyffzgzTSOMvI7gjR3WynjgKaScwHGiXMXdmm07fb",
    'consumer_key' => "C6smqWBaqZ5cnveSRyxmWEhuF",
    'consumer_secret' => "59NQs8bmInEwTVJhgebzmHYZLwTLyQJpximruwYvni9l0Z9GP2"
);

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?'.$_SERVER['QUERY_STRING'];
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);

$response = $twitter ->setGetfield($getfield)
                     ->buildOauth($url, $requestMethod)
                     ->performRequest();

$images = array();

if($response){
	foreach(json_decode($response)->statuses as $item){
	    $id = $item->id;
		$caption = $item->text;
		$user = $item->user;
		$createdAt = $item->created_at;
		$url = $item->entities->media[0]->media_url;

        $images[] = array(
        "id"=> $id,
        "caption" => htmlspecialchars($caption),
        "user" => $user,
        "src" => htmlspecialchars($url),
        "createdAt" => strtotime($createdAt),
        "platform" => "twitter"
        );

    }
}

print_r(str_replace('\\/', '/', json_encode($images)));
//echo $response;