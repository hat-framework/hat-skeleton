<?php

namespace templates\dcoracoes\hat\gui\form;
class emailGUI extends inputTextGUI{
    public function draw($data, $options){
        $options['type'] = 'email';
        return parent::draw($data, $options);
    }
}