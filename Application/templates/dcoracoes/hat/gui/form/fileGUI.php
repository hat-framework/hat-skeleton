<?php

namespace templates\dcoracoes\hat\gui\form;
class fileGUI extends inputTextGUI{
    public function draw($data, $options){
        $options['type'] = 'file';
        return parent::draw($data, $options);
    }
}