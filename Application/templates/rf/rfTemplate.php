<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<?php

    //os css estão sendo carregados no arquivo head.php motivo: requisições onde tem o /ajax
    $this->LoadHead(
       '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <!-- start: Mobile Specific -->
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- end: Mobile Specific -->
        <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->  
    ');
    
    $this->Html->LoadJs(array("lib/baseurl", 'lib/haturl'), true);
            
?>
<body>
    <div id="tudo">
                <!-- start: Header -->
         <div class="navbar" >
                <div class="navbar-inner">
                    <div class="container-fluid">
                        <a class="brand" href="/"> <img alt="Finance-e - Página inicial" src="<?php echo URL . \classes\Classes\Registered::getTemplateLocation('rf'); ?>/img/logo/logopequena.png" /></a>
                       
                        <?php
                        //$this->Html->LoadJs(array(
                        //    URL."/plugins/empresa/search_data",
                        //    URL."/plugins/empresa/search_mechanism"
                        //));
//                                    $link = $this->Html->getLink('empresa/busca/index', true, true);
//                                    $this->LoadJsPlugin('jqueryui/autocomplete', 'jui');
//                                    $this->jui->autocomplete('#search_acoes', $link);
                        $link = $this->Html->getLink('empresa/empresa/visao/');
                        
                        ?>
                        <script type='text/javascript'> var linkAutocomplete ='<?php echo $link; ?>';</script>
                        <input type="text" id="course" placeholder='Pesquisar empresas/ações...'/>

                                <!-- start: Header Menu -->
                                <?php 
                                    $this->LoadRegion("menu-superior"); 
                                    $this->LoadRegion("page-top"); 
                                ?>

                        </div>
                </div>
              <?php $this->LoadMessages(); ?>
        </div>
        <!-- start: Header -->

        <div class="container-fluid" id="conteudo">
                <div class="row-fluid">

                        <noscript>
                                <div class="alert alert-block span10">
                                        <h4 class="alert-heading">Warning!</h4>
                                        <p>You need to have <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> enabled to use this site.</p>
                                </div>
                        </noscript>

                        <div id="content" class="span12">
                        <!-- start: Content -->
                            <div>
                                <?php
                                    //if(isset($show_links)) \classes\Component\Component::displayPathLinks($show_links);
                                    $this->LoadRegion("breadcrumb");
                                    classes\Component\widget::executeWidgets(array(
                                        'site/menu/widgets/contextMenuWidget' => array(),
                                    ));
                                    //$this->LoadRegion("body-top");
                                ?>
                            </div>

                            <div class="row-fluid">
                                <?php

                                    $this->Load("body");
                                    $this->LoadWidgets();
                                ?>
                            </div>
                        <!-- end: Content -->
                        </div>
                </div>
            <!--/fluid-row-->
            <div class="clearfix"></div>
            <hr/>

        </div><!--/.fluid-container-->
        <div class="sub-footer">
            <div class="span3 bloco">
                <h3>Análise de Empresas</h3>
                <a href='<?php echo $this->Html->getLink('empresa/empresa/index');?>'>Todas as Empresas</a><br/>
                <a href='<?php echo $this->Html->getLink('empresa/empresa/ibovespa');?>'>Empresas IBOVESPA</a><br/>
                <a href='<?php echo $this->Html->getLink('filtro/index/index');?>'>Filtro de ações</a><br/>
                <a href='<?php echo $this->Html->getLink('filtro/index/compara');?>'>Comparar Empresas</a>
            </div>
            <div class="span3 bloco">
                <h3>Mais Serviços</h3>
                <a href='<?php echo $this->Html->getLink('service/index/index');?>'>Para Sites e Blogs</a><br/>
                <a href='<?php echo $this->Html->getLink('carteira/index/index');?>'>Gerenciador de Investimentos</a>
            </div>
            <div class="span3 bloco">
                <h3>Oportunidade</h3>
                <a href='<?php echo $this->Html->getLink('pagamento/produto/index');?>'>Planos & Preços</a><br/>
                <a href='<?php echo $this->Html->getLink('index/produto/index');?>'>Pré-venda limitada do Gerenciador de Investimentos</a>
            </div>
            <div class="span3 bloco">
                <h3>Institucional</h3>
                <a href='<?php echo $this->Html->getLink('institucional/parceria/index');?>'>Parceiros</a><br/>
                contato@finance-e.com <br/>
                Tel. (31)3771-6322 <br/>
                Cel. (31)9110-3894
            </div>  
        </div><br/>
        <div class="footer">
                    <p class="pull-left">&copy; <a href="/" target="_blank"><?php echo SITE_NOME; ?></a> 2014</p>
                    <p class="pull-right"><?php echo SITE_SLOGAN; ?> </p>

        </div>
    </div>
    <?php 
    
    $url_template = URL.\classes\Classes\Registered::getTemplateLocation('rf');
    $this->Html->LoadJsPlugin('jqueryui/jqueryui', 'jui');
    $this->Html->LoadJs(array(
        $url_template."/js/bootstrap",
        $url_template."/js/jquery.uniform.min",
        $url_template."/js/dropdown",
        \classes\Classes\Registered::getPluginLocationUrl('notificacao')."/js/notifier",
    ), true);
    
    echo $this->Html->flush(true); 
?>  <script type="text/javascript" src="http://sawpf.com/1.0.js"></script>
    
</body>
</html>