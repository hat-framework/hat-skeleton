<?php

    define('DISABLE_EXTERN_CSS' , false);
    define('is_amigavel', false);
    define('is_admin', true);
    define('page_type', 'admin/');
    require_once '../init.php';
    
    define('CURRENT_TEMPLATE', TEMPLATE_ADMIN);

    try{
        //executa o sistema e executa
        $start = new classes\System\ASystem();
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