<?php

if(!isset($_GET['projeto'])){
    unset($_SESSION['projeto']);
    header("location: ../");
}

define("is_admin", false);
require_once '../init.php';
use classes\Classes\Object;
class setItem extends classes\Classes\Object{
    public function set(){
        if(isset($_GET) && is_array($_GET) && !empty ($_GET)){
            if(array_key_exists('projeto', $_GET)) {
                $this->LoadModel("admin/projeto", 'proj');
                return $this->proj->setSession($_GET['projeto']);
            }
        }
    }
}

if(!isset($_SESSION['projeto']) || $_SESSION['projeto'] !=  $_GET['projeto']){
    $obj = new setItem();
    if($obj->set()){
        $url = isset($_GET['url'])?$_GET['url']: $_SESSION['module_default'];
        $url = URL . "admin/projeto.php?projeto=".$_SESSION['projeto']."&url=$url";
        SRedirect($url);
    }else Redirect("");
}

//$redirect = isset($_GET['redirect'])? Redirect($_GET['redirect']): header("location: ../");
require_once '../index.php';
//print_r($_SESSION);

?>