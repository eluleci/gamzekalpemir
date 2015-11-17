<?php
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

$query = $_GET['q'];

$instagramApi = "http://cengalabs.com/gelberaberasikolalim/instagramSearch.php?q=".$query;
$twitterApi = "http://cengalabs.com/gelberaberasikolalim/twitterSearch.php?q=".$query;

function sksort(&$array, $subkey="id", $sort_ascending=false) {

    if (count($array))
        $temp_array[key($array)] = array_shift($array);

    foreach($array as $key => $val){
        $offset = 0;
        $found = false;
        foreach($temp_array as $tmp_key => $tmp_val)
        {
            if(!$found and strtolower($val[$subkey]) > strtolower($tmp_val[$subkey]))
            {
                $temp_array = array_merge(    (array)array_slice($temp_array,0,$offset),
                                            array($key => $val),
                                            array_slice($temp_array,$offset)
                                          );
                $found = true;
            }
            $offset++;
        }
        if(!$found) $temp_array = array_merge($temp_array, array($key => $val));
    }

    if ($sort_ascending) $array = array_reverse($temp_array);

    else $array = $temp_array;
}

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

$instagramResponse = json_decode(get_curl($instagramApi), true);
$twitterResponse = json_decode(get_curl($twitterApi), true);

$result = array_merge($instagramResponse, $twitterResponse);

sksort($result, "createdAt");

print_r(json_encode($result));
die();