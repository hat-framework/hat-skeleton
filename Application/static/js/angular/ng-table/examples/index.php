<?php

if(!isset($_GET['url'])){ $_GET['url'] = 1;}
echo "<html>
    <head><meta http-equiv='Content-Type'     content='text/html; charset=utf-8' /></head>
    <body style='margin:0px;padding:0px;'>";
$i   = 1;
$max = 28;

$cd = $_GET['url']; $prox = $cd+1; $ant = $cd-1;
if($ant > 0 && $ant <= $max) echo "<a href='index.php?url=$ant'>Anterior</a> - ";
if($prox <= $max && $prox > 0)echo "<a href='index.php?url=$prox'>Próximo</a> -";

if($cd > 0 && $cd <= $max) {
    echo "<a href='demo$cd.html'>Ir para a página</a>";
}

echo "<div style='clear:both;'></div>";
echo "<ul style='list-style:none;'>";
for($i;$i<=$max;$i++){
    $style  = ($cd == $i)?"border:1px solid #0C0; background:#B8C5B8;":"border:1px solid #F00; background:#F6E6E6;";
    $style2 = ($cd == $i)?"color:#2C2C2C;":"color:#000000";
    echo "<li style = 'float: left;  padding:5px; margin: 5px; $style'><a href='index.php?url=$i' style='text-decoration:none; $style2'>Example $i</a></li>";
}
echo "</ul>";

if($cd > 0 && $cd <= $max) {
    echo "<iframe src='demo$cd.html' frameborder='0' style='overflow:hidden;height:100%;width:100%' height='100%' width='100%'></iframe>";
}
echo "</body></html>";
