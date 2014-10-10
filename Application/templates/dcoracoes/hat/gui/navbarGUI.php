<?php

class navbarGUI extends classes\Classes\Object{
    public function draw($data, $options){
        $this->LoadResource('html', 'Html');
        $str = "";
        if(is_callable($data)){
            $str = call_user_func($data, $this->LoadResource('html/gui', 'gui'), $options);
        }elseif (is_array($data)){
            $str = $this->drawitens($data);
        }
        if($str === ""){return;}
        $str  = "<nav class='navbar navbar-default' role='navigation'>$str</nav>";
        if(isset($options['noprint']) && $options['noprint'] === true){
            return $str;
        }
        echo $str;
    }
    
    static private $instance;
    public static function getInstanceOf($plugin){
        $class_name = __CLASS__;
        if (!isset(self::$instance))self::$instance = new $class_name($plugin);
        return self::$instance;
    }

    public function imprime(){
        $this->print = false;
    }
    
    public function drawitens($menu, $class = "nav navbar-nav", $id = ""){
        $this->level = 0;
        static $i = 0; $i++;
        $id = ($id == "") ? "menu_$i" : "$id";
        $var = "";
        //desenhando o menu
        if(!empty($menu)){
            $var  = "<ul class='$class ' id='$id'>";
            $var .= $this->drawMenu($menu);
            $var .= "</ul>";
        }
        $this->level = 0;
        return $var;
    }
    
    public function drawMenu($menu){
        
        //validação do menu
        if(!is_array($menu)) {return "";}
        
        //inicializa as variaveis
        $var = "";
        $this->level++;
        $color_type = "color$this->level";
        foreach($menu as $name => $array){

            //seta as variaveis
            $id      = $this->getId($name, $array);
            $link    = $this->getLink($name, $array);
            $current = ($link == CURRENT_URL);
            $class   = ($current)?"current_page":"";

            //carrega o link a ser colocado no menu
            $protected_link = $this->Html->getActionLinkIfHasPermission($link, $name, $color_type, "a_$id");
            
            //se link é vazio, então usuário não tem permissão de acessá-lo
            if($protected_link == "") {continue;}
            if($current) $protected_link = $this->Html->getActionLinkIfHasPermission("#", $name, "dropdown-toggle", "a_$id", "" , " data-toggle='dropdown'");
            
            //gera o html do menu e concatena
            $var .= $this->geraMenu($array, $link, $id, "$class $color_type", $protected_link);
            
        }
        $this->level--;
        return $var;
    }
    
    private function getId($name, &$array){
        if(is_array($array) && array_key_exists('__id', $array)){
            $id = GetPlainName($array['__id']);
            unset($array['__id']);
        }else $id = GetPlainName($name);
        return $id;
    }
    
    private function getLink($name, &$array){
        $link = "#";
        if(is_array($array)){
            if(array_key_exists($name, $array)){
                $link = $array[$name];
                unset($array[$name]);
            }
        }else $link = $array;
        return $link;
    }
    
    private function geraMenu($array, $link, $id, $class, $protected_link){

        $concat = "";
        
        //se menu possui subitens, desenha o menu dos subitens
        if(is_array($array) && !empty($array)){
            $temp = $this->drawMenu($array);
            if($temp != "") $concat = "<ul class='dropdown-menu' role='menu'>$temp</ul>"; 
            elseif($protected_link == "")$concat = "";
        }

        //se menu não possui subitens e o link está vazio
        elseif($protected_link == "") $concat = "";

        $list = "";
        
        //verifica se a variável temporária está vazia
        if($concat != "" || $link != "")  $list  = "<li id='$id' class='dropdown'> $protected_link $concat </li>";
        elseif($link == "#") $list  = "";
        return $list;
    }
}
