<?php

namespace templates\dcoracoes\hat\gui\form;
class textareaGUI extends \classes\Component\hatGUI{
    
    public function draw($data, $options){
        extract($this->extractOptions($options, array('caption', 'placeholder', 'id', 'class', 'extra', 'description', 'rows')));
        $id   = ($id   === "")?$name:$id;
        
        echo "<div class='form-group'>".
                "<label for='$id'>$caption</label>".
                "<textarea class='form-control $class' id='$id' rows='$rows' placeholder='$placeholder' $extra></textarea>".
                "<span class='help-block'>$description</span>" .
             "</div>";
    }
}