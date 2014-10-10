<?php

namespace templates\dcoracoes\hat\gui\form;
class radioGUI extends \classes\Component\hatGUI{
    
    public function draw($data, $options){
        echo "<div class='radio'>
                <label>
                  <input type='radio' name='optionsRadios' id='optionsRadios1' value='option1' checked>
                  Option one is this and that&mdash;be sure to include why it's great
                </label>
              </div>";
    }
}