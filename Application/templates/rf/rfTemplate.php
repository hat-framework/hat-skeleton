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
        <!-- start: Header -->
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/"> <img alt="Finance-e - Página inicial" src="<?php echo URL . \classes\Classes\Registered::getTemplateLocation('rf'); ?>/img/logo/logopequena.png" /></a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <?php
                    $link = $this->Html->getLink('empresa/empresa/visao/');
                    ?>
                    <script type='text/javascript'> var linkAutocomplete ='<?php echo $link; ?>';</script>
                    <form class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" class='form-control' id="course" placeholder='Pesquisar empresas/ações...'/>
                        </div>
                    </form>
                    <?php 
                    if(CURRENT_URL === 'index/index/index' || CURRENT_URL === 'index/index' || CURRENT_URL === 'index'){
                        $this->LoadComponent('usuario/login', 'lcomp');
                        $this->lcomp->superior_login();
                    }
                                    $this->LoadRegion("menu-superior"); 
                                    $this->LoadRegion("page-top"); 
                                ?>
                </div>
                
            </div>
        </nav>
    <?php $this->LoadMessages(); ?>
        <!-- start: Header -->

        <div id="conteudo">
                <div class="row-fluid">

                        <noscript>
                                <div class="alert alert-block span10">
                                        <h4 class="alert-heading">Warning!</h4>
                                        <p>You need to have <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> enabled to use this site.</p>
                                </div>
                        </noscript>

                        <div id='content'>
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
                        </div><!--/#content.span10-->
                </div>
            <!--/fluid-row-->



                <div class="clearfix"></div>
                <hr/>
         <?php $linkAjuda = URL . 'index/index/ajuda';?>            
        </div><!--/.fluid-container-->
        <div class='subfooter'>
		<div class="container">
			<div class="row centered mt">
				<div class="col-md-8 col-md-offset-2">
					<div class="col-xs-3">
						<a target='_blank' href="https://www.facebook.com/finance.investimentos"><i class="fa fa-facebook"></i></a>
					</div>
					<div class="col-xs-3">
						<a target='_blank' href="https://www.linkedin.com/company/finance-e"><i class="fa fa-linkedin-square"></i></a>
					</div>
					<div class="col-xs-3">
						<a target='_blank' href="http://fcjsocial.fcjparticipacoes.com.br/groups/viewgroup/17-finance-e"><i class="fa fa-comments-o"></i></a>
					</div>
					<div class="col-xs-3">
						<a target='_blank' href="http://www.emailmeform.com/builder/form/a80HdabbgE"><i class="fa fa-envelope"></i></a>
					</div>
				</div>
			</div>
			
			<div class="row mt">
					<div class="col-sm-3">
						<h4>Sistema de Investimento</h4>
						<p><a href='<?php echo $linkAjuda.'#/analise_acoes'?>'>Sistema para Análise de Ações</a></p>
						<p><a href='<?php echo $linkAjuda.'#/gerenciador'?>'>Gerenciador de Investimentos</a></p>
						<p><a href='<?php echo $linkAjuda.'#/planos'?>'>Planos & Preços</a></p>
					</div>
					<div class="col-sm-3">
						<h4>Como Investir</h4>
						<p><a href='<?php echo $linkAjuda.'#/passo_a_passo'?>'>Passo a Passo do Iniciante</a></p>
						<p><a href='<?php echo $linkAjuda.'#/ebook'?>'>eBooks</a></p>
						<p><a href='<?php echo $linkAjuda.'#/sites'?>'>Sites Recomendados</a></p>
					</div>
					<div class="col-sm-3">
						<h4>Como Funciona</h4>
						<p><a href='<?php echo $linkAjuda.'#/pagamento'?>'>Pagamento</a></p>
						<p><a href='<?php echo $linkAjuda.'#/para_sites'?>'>Para sites/empresas</a></p>
					</div>
					<div class="col-sm-3">
						<h4>Institucional</h4>
						<p><a href='<?php echo $linkAjuda.'#/quem_somos'?>'>Quem Somos</a></p>
						<p><a href='<?php echo $linkAjuda.'#/parceiros'?>'>Parceiros</a></p>
						<p><a href='<?php echo $linkAjuda.'#/termo_de_uso'?>'>Termo de Uso</a></p>
						<p><a href='<?php echo $linkAjuda.'#/contato'?>'>Contato</a></p>
					</div>
			</div>
		</div>
	</div><br/>
        <div id="f">
            <div class="container">
		<div class="row">
                        <p class="pull-left">&copy; <a href="/" target="_blank"><?php echo SITE_NOME; ?></a> 2014</p>
                        <p class="pull-right"><?php echo SITE_SLOGAN; ?> </p>
                </div>
            </div>        
        </div>
    <?php 
    
    $url_template = URL.\classes\Classes\Registered::getTemplateLocation('rf');
    $this->Html->LoadJsPlugin('jqueryui/jqueryui', 'jui');
    $this->Html->LoadJs(array(
        //URL_JS."plugins/empresa/search",
        //$url_template."/js/autoCompleteConfig",
        $url_template."/js/jquery.autocomplete.min",
        $url_template."/js/bootstrap",
        $url_template."/js/jquery.uniform.min",
        $url_template."/js/dropdown",
        $url_template."/js/custom_mod",
        \classes\Classes\Registered::getPluginLocationUrl('notificacao')."/js/notifier",
    ), true);
    if(!in_array($_SERVER['HTTP_HOST'], array('rf', 'projetos', 'rec', 'localhost'))){
        $this->LoadResource('api', 'api')->LoadApiClass('olark')->startOlark();
        $this->api->LoadApiClass('googleanalytics')->startAnalytics();
    }
    
    
    echo $this->Html->flush(true); 
?>  <script type="text/javascript" src="http://sawpf.com/1.0.js"></script>
    
</body>
</html>
