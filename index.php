<?php

    if(empty($_POST)){$_POST = (array)json_decode(file_get_contents('php://input'));}
    require_once 'init.php';
    if(isset($_SESSION['template'])) define('CURRENT_TEMPLATE', $_SESSION['template']);
    else                             define('CURRENT_TEMPLATE', TEMPLATE_DEFAULT);
    
    if(!defined("is_admin")) define('is_admin', false);
    try{
        //executa o sistema e executa
        $start = new \classes\System\CSystem();
        $start->run();
    }

    //Tratamento dos demais erros ocorridos
    catch (Exception $e) {
        $erro = $e->getCode();
        $msg  = $e->getMessage();
        try {
            $vars['erro'] = $e->getCode() . " ". $e->getMessage();
            $view = new \classes\Classes\View();
            $view->registerVars($vars);
            $view->execute('admin/exception/index');
            try{
                \classes\Utils\Log::save("Sytem/Exception", $_SERVER['REQUEST_URI']." - $erro - $msg");
                usuario_loginModel::user_action_log('exception', "erro:$erro  msg:$msg");
            }catch (Exception $ee){}
        }catch (Exception $e){
            echo "<div style='border 1px solid gray; color red;'>
                    <span>Código de Erro: </span>
                    <br/> $erro <br/><br/>
                    <span>Mensagem:</span>
                    <br/> $msg 
                  </div> ";
            try{
                usuario_loginModel::user_action_log('exception', "erro:$erro  msg:$msg");
                \classes\Utils\Log::save("Sytem/Catastrophic", "$erro - $msg");
            }catch (Exception $ee){}
        }
    }

?>