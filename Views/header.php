<?php
	//Adding the resources
	require( $_SERVER['DOCUMENT_ROOT'].'/Hub_politico_test/Global.php' );
?>
<!----------header de primera plana---------->
<script src="/Hub_politico_test/js/controllers/search_module.js"></script>

<div id="header-primera-plana">

	<center>

		<!---------div for display the title--------->
		<div id="Title"><? print( $GLOBALS['title'] ); ?></div><br />
		<!---------div for display the sub-title, slogan--------->
		<div id="sub-Title"><? print( $GLOBALS['sub_title'] ); ?></div> <br />
		<!---------div for display the date--------->
		<div id="date"><? print( $GLOBALS['date'] ); ?></div><br />
		<!---------lines, merely disign------------->
		<hr id="first-line" class="header-line" />

		<hr id="second-line" class="header-line" />

		<div id="menu">

			<button type="button" id="btn_noticias" class="btn menu-button">Noticias</button>
			<button type="button" id="btn_estadisticas" class="btn menu-button">Estadísticas</button>
			<button type="button" id="btn_popularidad" class="btn menu-button">Popularidad</button>
			<button type="button" id="btn_tecnologia" class="btn menu-button">Tecnología</button>

			<button type="button" id="btn_arte_cultura" class="btn menu-button">Arte & Cultura</button>
			<button type="button" id="btn_ciencia" class="btn menu-button">Ciencia</button>
			<button type="button" id="btn_columnistas" class="btn menu-button">Columnistas</button>
			<button type="button" id="btn_cartoons" class="btn menu-button">Cartoons</button>

			<div id="search-box">

				<button type="button" id="search-button">
  					<span class="glyphicon glyphicon-search" id="search-icon" aria-hidden="true"></span>
				</button>

			</div>

			<input type="text" id="search-field" class="form-control" placeholder="Búsqueda"/>

			<hr id="menu-line" />

		</div>

	</center>

</div>
