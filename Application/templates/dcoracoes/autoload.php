<?php

spl_autoload_register(function ($class) {
    $e = explode('dcoracoes', $class);
    $file = str_replace(array('/', '\\', '//'), DIRECTORY_SEPARATOR, __DIR__ . "/{$e[1]}.php");
    if (file_exists($file)) {
        require_once($file);
        return;
    }
});
