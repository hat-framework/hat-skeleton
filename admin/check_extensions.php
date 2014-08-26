<?php

if(!function_exists('extension_loaded')){
    echo("<h1>A função extension_loaded não existe! a instalação não pode continuar!</h1>");
    echo phpinfo();
    die();
}

$dont_instaled     = array();
$extensions_needed = array('bz2','curl','gd', 'iconv', 'mcrypt','mysql', 'zip', 'zlib', 'PDO', 'pdo_mysql');
foreach($extensions_needed as $name){
    if(extension_loaded ( $name )){continue;}
    $dont_instaled[] = $name;

}
if(!empty($dont_instaled)){
    echo "<h2>Extensões do sistema<h2>";
    echo "<h4>O sistema não pode prosseguir a instalação pois estão faltando extensões!</h4>";
    if(!empty($dont_instaled)){
        echo "<p>Algumas extensões não estão <b>instaladas</b> Para solucionar o problema adicione estas extensões no seu arquivo httpd.conf:</p>";
        echo "<ul><li>".implode("</li><li>", $dont_instaled)."</li></ul>";
    }
    
    $ext = get_loaded_extensions();
    sort($ext);
    
    echo "<h4>Extensões carregadas no sistema</h4>";
    echo "<ul><li>".implode("</li><li>", $ext)."</li></ul>";
    die();
}elseif($_SERVER['PHP_SELF'] === $_SERVER['REQUEST_URI']){
    echo "Todas as extensões foram carregadas corretamente!";
}
