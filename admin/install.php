<?php

    define('DEBUG', true);
    define('is_admin', true);
    define('page_type', 'admin/');
    require_once '../init.php';
    require_once './check_extensions.php';
    define('CURRENT_TEMPLATE', 'area-admin');
    try{
        
        //executa o sistema e executa
        $start = new \classes\System\InstallSystem();
        $start->run();
    }

    //Tratamento dos demais erros ocorridos
    catch (Exception $e) {
        $erro = $e->getCode();
        $msg  = $e->getMessage();
        try {
            $vars = array(
                'erro' => $e->getCode(),
                'msg'  => $e->getMessage()
            );
            $_GET['url'] = 'admin/exception/';
            $start = new classes\System\InstallSystem();
            $start->setVars($vars);
            $start->run();
        }catch (Exception $e){
            echo "<div style='border 1px solid gray; color red;'>
                    <span>Código de Erro: </span>
                    <br/> $erro <br/><br/>
                    <span>Mensagem:</span>
                    <br/> $msg
                  </div> ";
        }
    }

?>