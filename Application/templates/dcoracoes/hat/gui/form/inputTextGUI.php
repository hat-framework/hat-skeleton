<?php

namespace templates\dcoracoes\hat\gui\form;
class inputTextGUI extends \classes\Component\hatGUI{
    public function draw($name, $options){
        //print_r($this->extractOptions($options, array('type', 'caption', 'placeholder', 'id', 'class', 'extra', 'description')));
        extract($this->extractOptions($options, array('type', 'caption', 'placeholder', 'id', 'class', 'extra', 'description')));
        $id   = ($id   === "")?$name:$id;
        $type = ($type === "")?"text":$type;
        echo "<div class='form-group'>".
                "<label for='$id'>$caption</label>".
                "<input type='$type' class='form-control $class' id='$id' placeholder='$placeholder' name='$name' $extra>".
                "<span class='help-block'>$description</span>" .
             "</div>";
    }
}