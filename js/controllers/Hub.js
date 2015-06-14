
var routes_url = new Array();

$( document ).ready( function(){

	//initialiation of global variables
	routes_url[0] = '/Hub_politico_test/Views/writer.php';
	routes_url[1] = '/Hub_politico_test/Views/writer.php';
	routes_url[2] = '/Hub_politico_test/Views/writer.php';
	routes_url[3] = '/Hub_politico_test/Views/writer.php';
	routes_url[4] = '/Hub_politico_test/Views/writer.php';
	routes_url[5] = '/Hub_politico_test/Views/writer.php';
	routes_url[6] = '/Hub_politico_test/Views/writer.php';
	routes_url[7] = '/Hub_politico_test/Views/writer.php';

	//New button
	$( '#write_post_button' ).click( new_post_action );

	//Sorting buttons
	$( '#b_get_popularity' ).click( b_get_popularity_action );
	$( '#b_get_share' ).click( b_get_share_action );
	$( '#b_get_date' ).click( b_get_date_action );

	//Menu buttons
	$( '#b_front_page' ).click( b_front_page_action );
	$( '#b_columns' ).click( b_columns_action );
	$( '#b_account' ).click( b_account_action );
	$( '#b_configuration' ).click( b_configuration_action );

});


/*
* new_post_action
* method that adds the new post window
*/
function new_post_action(){

	$( "#application_container" ).html( '<i class="fa fa-circle-o-notch fa-spin"></i>' );
	$( "#happening" ).hide( "slow" );

	$.ajax({

		url : routes_url[0],
		cache : true,
		success : function( response ){

			$( "#application_container" ).html( response );

		}

	});

}//End of new_post_action function


function b_get_popularity_action(){

	$( "#application_container" ).html( '<i class="fa fa-circle-o-notch fa-spin"></i>' );
	$( "#happening" ).hide( "slow" );

	$.ajax({

		url : routes_url[1],
		cache : true,
		success : function( response ){

			$( "#application_container" ).html( response );

		}

	});

}//End of b_get_popularity_action Method


function b_get_share_action(){

	$( "#application_container" ).html( '<i class="fa fa-circle-o-notch fa-spin"></i>' );
	$( "#happening" ).hide( "slow" );

	$.ajax({

		url : routes_url[2],
		cache : true,
		success : function( response ){

			$( "#application_container" ).html( response );

		}

	});

}//End of b_get_share_action Method


function b_get_date_action(){

	$( "#application_container" ).html( '<i class="fa fa-circle-o-notch fa-spin"></i>' );
	$( "#happening" ).hide( "slow" );

	$.ajax({

		url : routes_url[3],
		cache : true,
		success : function( response ){

			$( "#application_container" ).html( response );

		}

	});

}//End of b_get_date_action Method

function b_front_page_action(){

	$( "#application_container" ).html( '<i class="fa fa-circle-o-notch fa-spin"></i>' );
	$( "#happening" ).hide( "slow" );

	$.ajax({

		url : routes_url[4],
		cache : true,
		success : function( response ){

			$( "#application_container" ).html( response );

		}

	});

}//End of b_front_page_action function

function b_columns_action(){

	$( "#application_container" ).html( '<i class="fa fa-circle-o-notch fa-spin"></i>' );
	$( "#happening" ).hide( "slow" );

	$.ajax({

		url : routes_url[5],
		cache : true,
		success : function( response ){

			$( "#application_container" ).html( response );

		}

	});

}//End of b_columns_action function

function b_account_action(){

	$( "#application_container" ).html( '<i class="fa fa-circle-o-notch fa-spin"></i>' );
	$( "#happening" ).hide( "slow" );

	$.ajax({

		url : routes_url[6],
		cache : true,
		success : function( response ){

			$( "#application_container" ).html( response );

		}

	});

}//End of b_account_action function

function b_configuration_action(){

	$( "#application_container" ).html( '<i class="fa fa-circle-o-notch fa-spin"></i>' );
	$( "#happening" ).hide( "slow" );

	$.ajax({

		url : routes_url[7],
		cache : true,
		success : function( response ){

			$( "#application_container" ).html( response );

		}

	});

}//End of b_configuration_action function
