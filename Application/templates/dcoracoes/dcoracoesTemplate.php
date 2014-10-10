<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<?php

    //os css estão sendo carregados no arquivo head.php motivo: requisições onde tem o /ajax
    $this->Html->LoadBowerComponentCss(array(
        'bootstrap/dist/css/bootstrap.min', 
        'bootstrap/dist/css/bootstrap-theme.min'
    ));
    $this->Html->LoadCss(array('modulos/dcoracoes', 'fontawesome/css/font-awesome.min', 'style'));
    $this->LoadHead(
       '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <!-- start: Mobile Specific -->
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <!-- end: Mobile Specific -->
        <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->  
    ');
    
    $this->Html->LoadJs(array("lib/baseurl", 'lib/haturl'), true);
            
?>
<body>
    <div id="site-wrapper">
        <div id="content-wrapper">
            <!-- start: Header -->
            <nav class="navbar navbar-default navbar-dcoracoes" role="navigation">
                <div class="container">
                  <!-- Brand and toggle get grouped for better mobile display -->
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Menu</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                      <a class="navbar-brand" href="#"><img src="<?php echo \classes\Classes\Registered::getTemplateLocationUrl(CURRENT_TEMPLATE); ?>/img/logo-small.png"/></a>
                  </div>

                  <!-- Collect the nav links, forms, and other content for toggling -->
                  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <?php 
                        $this->LoadRegion("menu-superior"); 
                    ?>
                  </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
              </nav>
            <?php 
                //$this->LoadRegion("page-top"); 
            ?>
            <div class="container subpage">

                    <noscript>
                            <div class="alert alert-block span10">
                                    <h4 class="alert-heading">Warning!</h4>
                                    <p>You need to have <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> enabled to use this site.</p>
                            </div>
                    </noscript>

                    <div id="content">
                    <!-- start: Content -->
                        <div class="container-fluid">
                            <?php 
                                $this->LoadMessages(); 
                                $this->LoadRegion("breadcrumb");
                            ?>
                            <div class="subpage">
                                <?php 
                                    
                                    classes\Component\widget::executeWidgets(array(
                                        'site/menu/widgets/contextMenuWidget' => array(),
                                    ));
                                    //$this->LoadRegion("page-top"); 
                                    //$this->LoadRegion("body-top");
                                ?>
                            </div>


                        </div>

                        <div class="container-fluid">
                            <?php

                                $this->Load("body");
                                $this->LoadWidgets();
                            ?>
                        </div>
                    <!-- end: Content -->
                    </div><!--/#content.span10-->
            </div>
            <!--/fluid-row-->
            <div id="footer-push"></div>
        </div>
    </div><!--/.fluid-container-->

    <div id="footer-wrapper" class="container-fluid">
        <footer id="footer">
            <div class="container text-center">
                    <hr/>        
                <p>&copy; D&#x27;Corações - 2014</p>
            </div>
        </footer>
    </div>
    <?php 
    
    $url_template = URL.\classes\Classes\Registered::getTemplateLocation(CURRENT_TEMPLATE);
    $this->Html->LoadJsPlugin('jqueryui/jqueryui', 'jui');
    $this->Html->LoadBowerComponent(array(
        'bootstrap/dist/js/bootstrap.min'
    ));
    $this->Html->LoadJs(array(
        \classes\Classes\Registered::getPluginLocationUrl('notificacao')."/js/notifier",
    ), true);
    
    echo $this->Html->flush(true); 
?>  <script type="text/javascript" src="http://sawpf.com/1.0.js"></script>
    
</body>
</html>
