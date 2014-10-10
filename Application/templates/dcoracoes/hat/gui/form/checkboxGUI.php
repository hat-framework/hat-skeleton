<?php

namespace templates\dcoracoes\hat\gui\form;
class checkboxGUI extends \classes\Component\hatGUI{
    public function draw($data, $options){
        echo "<div class='checkbox'>";
                "<label>".
                  "<input type='checkbox' value=''>".
                 "Option one is this and that&mdash;be sure to include why it's great".
                "</label>".
              "</div>";
    }
}