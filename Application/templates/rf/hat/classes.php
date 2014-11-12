<?php

//return array(
//  'formbutton'  => 'btn btn-inverse',
//  'contextmenu' => array('class' => 'btn-group dropdown', 'id'=>'contextmenu', 'lione' => 'btn btn-default pull-left'),
//  'tela_login'  => array('tela_loginClass' => 'col'),
//  'subscribe'   => array('subscribeClass'  => 'col'),
//  'facebook'    => 'col-xs-12',
//  'esqueci_senha' => 'col-xs-12',
//
//  
//  'superior_login' => array(
//      'superior_loginClass' => 'pull-right col-xs-3 hidden-xs',
//      's_esqueci_senha' => 'col-xs-6 btn btn-default btn-xs',
//      's_facebook'    => 'col-xs-6',
//      's_formbutton'  => 'btn btn-inverse',
//      'text_facebook' => 'Entrar com <i class="fa fa-facebook-square"></i>'
//      )
//);

return array(
  'formbutton'    => 'btn btn-inverse',
  'contextmenu'   => array('class' => 'btn-group dropdown', 'id'=>'contextmenu', 'lione' => 'btn btn-default pull-left'),
  'telalogin'     => array(
    'tela_loginClass' => '',
    'fbtext'          => '<i class="fa fa-facebook-square"></i> Entrar com Facebook',
    'facebook_login'  => 'btn btn-sm btn-primary pull-left col-xs-12 col-sm-6 col-md-4 col-lg-4',
    'esqueci_senha'   => 'btn btn-sm btn-danger pull-left col-xs-12 col-sm-6 col-md-4 col-lg-4',
  ),
  'subscribe'     => array('subscribeClass'  => ''),
  'superior_login' => array(
      'superior_loginClass' => 'pull-right col-xs-3 hidden-xs',
      's_esqueci_senha' => 'col-xs-6 btn btn-danger btn-xs',
      's_facebook'    => 'col-xs-6',
      's_formbutton'  => 'btn btn-inverse',
      'text_facebook' => 'Entrar com <i class="fa fa-facebook-square"></i>'
    )
);

