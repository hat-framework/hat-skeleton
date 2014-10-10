<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">

<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<?php

define('CURRENT_TEMPLATE', 'dcoracoes');
require_once './autoload.php';
require_once $_SERVER['DOCUMENT_ROOT']."/init.php";
$obj = new classes\Classes\Object();
$gui = $obj->LoadResource('html/gui', 'gui');
$gui->exec('form/button', "normal", array());
$gui->exec('form/button', "primary", array('type' => 'primary'));
$gui->exec('form/button', "danger" , array('type' => 'danger'));
$gui->exec('form/button', "success", array('type' => 'success'));
$gui->exec('form/button', "warning", array('type' => 'warning'));
$gui->exec('form/button', "info"   , array('type' => 'info'));
$gui->exec('form/button', "link"   , array('type' => 'link'));
echo "<br/><br/>";
$gui->exec('form/button', "Clear", array('type' => 'primary', 'size'     => 'small'));
$gui->exec('form/button', "Clear", array('type' => 'primary', 'active'   => true   ));
$gui->exec('form/button', "Clear", array('type' => 'primary', 'disabled' => true   ));
echo "<hr/>";


$desc = 'Sua senha deve conter no mínimo 6 caracteres';
echo "<div class='col-lg-6'><form role='form'>";
$gui->exec('form/email'   , 'email'  , array('id'=>'passwd_field', 'placeholder'=>"Meu Email", 'description'=>$desc));
$gui->exec('form/password', 'passwd' , array('id'=>'passwd_field', 'placeholder'=>"Password" , 'description'=>$desc));
$gui->exec('form/file'    , 'file'   , array('id'=>'passwd_field', 'placeholder'=>"File"     , 'description'=>$desc));
$gui->exec('form/textarea', 'txtarea', array('id'=>'txtarea'     , 'placeholder'=>"File"     , 'description'=>$desc));
echo "</form></div>";
