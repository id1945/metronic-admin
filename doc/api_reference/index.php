<?php
header('Access-Control-Allow-Origin: *');

if (isset($_GET['file'])) {
    preg_match('/\.(.*?)$/', $_GET['file'], $matches);

    // if is json file
    if (isset($matches[1]) && $matches[1] === 'json') {
        $content = file_get_contents(__DIR__ . '/' . $_GET['file']);
        header('Content-Type: application/json');
        echo $content;
    }
}
