<?php
define('ROOT', (is_dir(($_SERVER['DOCUMENT_ROOT'] . '/system/')) ? $_SERVER['DOCUMENT_ROOT'] : __DIR__ . '/../'));
define('MODE', 'ROUTING');
$plugin = parse_url('PonomareVlad/catalog?_url_format=hierarchy&_path[0]=category&_path[1]=item&page_items=100');
//parse_str($plugin['query'], $GLOBALS['ROUTING_PARAMETERS']);
parse_str($plugin['query'], $pluginQuery);
$_REQUEST = (array)array_merge((array)$_REQUEST, (array)$pluginQuery);
$pluginPath = ROOT . '/system/plugins/' . $plugin['path'] . '/index.php';
if (!is_file($pluginPath)) header('Location: /'); //exit('Error initialise Plugin ' . $plugin['path']);
require_once ROOT . '/system/plugins/PonomareVlad/catalog/index.php';
