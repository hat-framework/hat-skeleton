<?php

namespace templates\dcoracoes\hat\gui\form;
class passwordGUI extends inputTextGUI{
    public function draw($data, $options){
        $options['type'] = 'password';
        return parent::draw($data, $options);
    }
}