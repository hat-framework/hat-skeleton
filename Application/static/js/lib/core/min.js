function Core(){}Core.result=function(){this.response="";this.status=!0;this.exception=this.error=""};Core.result.prototype.setResponse=function(a){this.response=a};Core.result.prototype.setStatus=function(a){this.status=a};Core.result.prototype.setError=function(a){this.error=a};Core.result.prototype.setException=function(a){this.exception=a;this.status=!1;this.message=this.exception.message};
Core.result.prototype.getResponse=function(a){if("undefined"!=typeof a)try{return"undefined"!=typeof this.response[a]?this.response[a]:""}catch(c){console.log(a)}return this.response};Core.result.prototype.getStatus=function(){return this.status};Core.result.prototype.getError=function(){return this.error};Core.result.prototype.printError=function(){var a=this.getError();try{blockUI_error(a)}catch(c){alert(c)}};Core.dom=function(){};
Core.dom.prototype.hide=function(a,c){"undefined"==typeof c&&(c="1500");a.slideUp(c)};Core.dom.prototype.show=function(a,c){"undefined"==typeof c&&(c="1500");a.slideDown(c)};Core.ajax=function(){this.defaltCallback=!1;this.dataType="json";this.type="POST";this.ret=new Core.result;this.async=!0;this.urls="";this.isTest=!1};Core.ajax.prototype.enableDefaultCallback=function(){this.defaltCallback=!0};Core.ajax.prototype.disableDefaultCallback=function(){this.defaltCallback=!1};
Core.ajax.prototype.setDataType=function(a){this.dataType=a};Core.ajax.prototype.setUrl=function(a){this.urls=a};Core.ajax.prototype.setType=function(a){this.type=a};Core.ajax.prototype.setAssync=function(a){this.async=a};Core.ajax.prototype.getResponse=function(){return this.ret};
Core.ajax.prototype.defaultCallbackFunction=function(a,c){var d=a.getResponse(),b=new Core.msg;a.getStatus()?"undefined"!=typeof d.success&&""!=d.success?b.displaySuccess(d.success):"undefined"!=typeof d.alert&&""!=d.alert?b.displayAlert(d.alert):b.displayError("Dados enviados corretamente, mas sem a confirma\u00e7\u00e3o do servidor."):"undefined"!=typeof d.erro?displaySuccess(d.erro):"undefined"!=typeof d.alert&&""!=d.alert?displayAlert(d.alert):b.displayError("Dados enviados corretamente, mas sem a confirma\u00e7\u00e3o do servidor.")};
Core.ajax.prototype.exCallback=function(a,c,d){try{"function"===typeof a?a(c,d):this.defaltCallback&&this.defaultCallbackFunction(c)}catch(b){console.log("core.ajax: Exce\u00e7\u00e3o lan\u00e7ada no callback "+JSON.stringify(b))}};
Core.ajax.prototype.send=function(a,c,d){var b=this.ret,e=this;try{$.ajax({async:this.async,url:this.urls,type:this.type,data:a,dataType:this.dataType,success:function(a){try{return b.setResponse(a),b.setStatus(!0),b.setError("Opera\u00e7\u00e3o conclu\u00edda com sucesso!"),e.ret=b,e.exCallback(c,b,d),b}catch(f){console.log("core.ajax: Erro na fun\u00e7\u00e3o ao executar a fun\u00e7\u00e3o de retorno! "+JSON.stringify(f))}},error:function(a){try{return b.setError("Erro na comunica\u00e7\u00e3o com o site.<hr/> Detalhes: "+
a.responseText),b.setStatus(!1),b.setResponse(a),e.r=b,e.exCallback(c,b,d),b}catch(f){console.log("core.ajax: Erro ao executar tratamento de erros! "+f.message)}}})}catch(g){try{return b.setError("Erro ao executar o script: "+g.message),b.setStatus(!1),b.setException(g),e.ret=b,e.exCallback(c,b),b}catch(h){console.log("core.ajax: Erro no tratamento de exe\u00e7\u00f5es! "+JSON.stringify(h))}}};Core.ajaxform=function(a){this.form=a;this.ajax=new Core.ajax;this.result=""};
Core.ajaxform.prototype.beforeSend=function(){blockUI_wait("Salvando...");$("#erro").hide();$("#success").hide();$(".erro").delay("1200").fadeOut("slow");$(".valid_msg").delay("1200").fadeOut("slow")};Core.ajaxform.prototype.afterSend=function(){blockUI_unwait()};
Core.ajaxform.prototype.success=function(a){"undefined"!=typeof a.redirect&&(window.location.href=a.redirect);if(1==a.status)1!=a.is_editing&&this.form[0].reset(),"undefined"!=typeof a.success&&""!=a.success?blockUI_success(a.success):"undefined"!=typeof a.alert&&""!=a.alert?blockUI_alert(a.alert):blockUI_error("Dados enviados corretamente, mas sem a confirma\u00e7\u00e3o do servidor.");else{"undefined"!=typeof a.erro?blockUI_error(a.erro):"undefined"!=typeof a.alert&&""!=a.alert?blockUI_alert(a.alert):
blockUI_error("Dados enviados corretamente, mas sem a confirma\u00e7\u00e3o do servidor.");for(var c in a)$("#v"+c).text(a[c]).fadeIn("slow").addClass("erro").removeClass("valid_msg")}return a.status};Core.ajaxform.prototype.erro=function(a){blockUI_error("Erro na comunica\u00e7\u00e3o com o site.<hr/> Detalhes: "+a.erro)};Core.ajaxform.prototype.getResult=function(){return this.result};
Core.ajaxform.prototype.sendform=function(){try{this.beforeSend();var a=this.ajax.send(this.form.attr("action"),this.form.serialize());this.afterSend();return!1==a.status?(this.erro(a),!1):this.success(a.response)}catch(c){ret.erro=c.message,ret.status=!1,this.erro()}};