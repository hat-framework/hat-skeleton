<?php

namespace templates\dcoracoes\hat\gui\form;
class buttonGUI{
    public function draw($data, $options){
        extract($options);
        $str  = (isset($type)                           )?"btn-$type ":"btn-default ";
        $str .= (isset($active)   and $active === true  )?'active '   :'';
        $str .= (isset($disabled) and $disabled === true)?'disabled ' :'';
        if(isset($size)){
            switch ($size){
                case 'large'      :$str.="btn-lg ";break;
                case 'small'      :$str.="btn-sm ";break;
                case 'extra-small':$str.="btn-xs ";break;
            }
        }
        echo "<button type='button' class='btn $str'>$data</button>";
        /**
         * <!-- Standard button -->
<button type="button" class="btn btn-default">Default</button>

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Success</button>

<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Info</button>

<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">Link</button>
         */
    }
}