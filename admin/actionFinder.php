<?php

require_once '../init.php';

use classes\Classes\Object;
class actionFinder extends classes\Classes\Object{
    private $blackList = array('AfterLoad', 'BeforeLoad', '', '__construct');
    private $cont      = "";
    public function __construct() {
        $this->LoadResource('files/dir' , 'dir');
        $this->LoadResource('files/file', 'file');
    }
    
    public function findPlugins(){
        return classes\Classes\Registered::getAllPluginsLocation();
    }
    
    public function find($plugin){
        $this->set($plugin);
        $arr = $this->getArray($plugin);
        echo nl2br($this->array2string($plugin, $arr));
       
    }
    
    private function set($plugin){
        $file       = classes\Classes\Registered::getPluginLocation($plugin, true)."/Config/{$plugin}Actions.php";
        $this->cont = $this->file->GetFileContent($file);
    }
    
    private function array2string($plugin, $arr){
        $str = "";
        foreach($arr as $subplugin => $actions){
            foreach($actions as $action){
                $act = ucfirst($action);
                $str .= "'$plugin/$subplugin/$action' => array(
                    \t\t'label' => '$act', 'publico' => 'n', 'default_yes' => 's','default_no' => 'n', 
                    \t\t'permission' => '$plugin/$subplugin', 'needcod' => false,
                    \t\t'menu' => array('$act' => '$plugin/$subplugin/index', 'Voltar' => '$plugin/$subplugin/show')
                ),\n\n";
            }
        }
        return $str;
    }
    
    private function getArray($plugin){
        $dir  = classes\Classes\Registered::getPluginLocation($plugin, true);
        $fold = $this->dir->getPastas($dir);
        $out  = array();
        foreach($fold as $sub){
            $file = "$dir/$sub/classes/{$sub}Controller.php";
            if(!file_exists($file)) continue;
            $cont = $this->file->GetFileContent($file);
            $exp  = explode('public function ', $cont);
            array_shift($exp);
            $out[$sub] = array();
            foreach ($exp as $ee){
                $e = explode("(", $ee);
                $s = array_shift($e);
                $s = str_replace(array("<?php", "?>"), '', $s);
                if(in_array(trim($s), $this->blackList)){ continue; }
                if($s == "" || trim($s) == "") continue;
                
                $action = "$plugin/$sub/$s";
                if($this->actionRegistered($action)) continue;
                $out[$sub][] = $s;
            }
            if(empty($out[$sub])) unset($out[$sub]);
        }
        return $out;
    }
    
    private function actionRegistered($action){
        return (strstr($this->cont, $action) !== false);
    }
}

$action = isset($_GET['action'])?$_GET['action']:'';
$af = new actionFinder();

if($action == ""){
    $action = $af->findPlugins();
    foreach($action as $act){
        echo ucfirst($act)."<hr/>";
        $af->find($act);
    }
}
else{$af->find($action);}

?>