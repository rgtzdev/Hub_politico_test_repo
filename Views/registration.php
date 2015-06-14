<?php


	session_start();

	if(isset($_POST['save'])){

		include('../Controllers/RegistrationController.php');

		$register = new RegistrationModel();

		if( $register->process() ){

			print( 'Usuario registrado!!!' );
			header("Location: http://localhost/Hub_politico_test/Views/Hub.php");

		}else{

			$register->show_errors();

		}

	}
	$token = $_SESSION['token'] = md5( uniqid( mt_rand(), true ) );

?>

<!DOCTYPE hmtl>

<html  lang="es">


<head>
	<meta charset="utf-8" />
	<title>Registrate</title>

</head>

	<form method="POST" action="<?=$_SERVER['PHP_SELF'];?>">

		<p>
			e-mail <input type="email" id="email" name="email" />
		</p>
		<p>
			Nombre De Usuario <input type="text" id="username" name="username" />
		</p>
		<p>
			Contraseña <input type="password" id="password" name="password" />
		</p>
		<p>
			Repetir Contraseña <input type="password" id="password" name="password" />
		</p>
		<p>
			Nombre/s <input type="text" id="real_name" name="real_name" />
		</p>
		<p>
			Apellido/s <input type="text" id="lastname" name="lastname" />
		</p>
		<p>
			<input type="hidden" name="token" value="<?=$token;?>" />
			<input type="submit" id="save" name="save" value="Registrarse"/>
		</p>

	</form>
</html>
