<?php
	require_once( $_SERVER['DOCUMENT_ROOT'].'/Hub_politico_test/Helpers/date_formatter_helper.php' );
	//File for defining global variables
	$xml = simplexml_load_file( $_SERVER['DOCUMENT_ROOT']."/Hub_politico_test/Resources/Labels.xml" );
	//Toma las variables del documento
	$GLOBALS['title'] = $xml->titles->title;
	$GLOBALS['sub_title'] = $xml->titles->sub_title;
	$GLOBALS['date'] = Date_formatter_helper::format_date_es( date("d") ,  date("m") , date("Y") );

?>
