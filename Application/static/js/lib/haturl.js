function getHatUrl(type, name){var urls={"plugin":{"admin":"vendor\/hatframework\/hat-plugin-admin","api":"vendor\/hatframework\/hat-plugin-api","app":"vendor\/hatframework\/hat-plugin-app","blog":"vendor\/hatframework\/hat-plugin-blog","contato":"vendor\/hatframework\/hat-plugin-simplecontact","files":"vendor\/hatframework\/hat-plugin-files","galeria":"vendor\/hatframework\/hat-plugin-galeria","gerador":"vendor\/hatframework\/hat-plugin-gerador","index":"vendor\/hatframework\/hat-plugin-index","institucional":"vendor\/hatframework\/hat-plugin-institucional","mensagem":"Application\/plugins\/mensagem","notificacao":"vendor\/hatframework\/hat-plugin-notificacao","pagamento":"vendor\/hatframework\/hat-plugin-pagamento","plugins":"vendor\/hatframework\/hat-plugin-plugins","site":"vendor\/hatframework\/hat-plugin-site","usuario":"vendor\/hatframework\/hat-plugin-usuario","carteira":"Application\/plugins\/carteira","derivativo":"Application\/plugins\/derivativo","empresa":"Application\/plugins\/empresa","filtro":"Application\/plugins\/filtro","importacao":"Application\/plugins\/importacao","titulo":"Application\/plugins\/titulo"},"resource":{"api":"vendor\/hatframework\/hat-resource-api","boleto":"vendor\/hatframework\/hat-resource-boleto","charts":"vendor\/hatframework\/hat-resource-charts","curl":"vendor\/hatframework\/hat-resource-curl","database":"vendor\/hatframework\/hat-resource-database","email":"vendor\/hatframework\/hat-resource-email","files":"vendor\/hatframework\/hat-resource-files","formulario":"vendor\/hatframework\/hat-resource-formulario","galerias":"vendor\/hatframework\/hat-resource-galerias","grid":"vendor\/hatframework\/hat-resource-grid","html":"vendor\/hatframework\/hat-resource-html","jqueryui":"vendor\/hatframework\/hat-resource-jqueryui","js":"vendor\/hatframework\/hat-resource-js","menu":"vendor\/hatframework\/hat-resource-menu","mobile":"vendor\/hatframework\/hat-resource-mobile","pagamento":"vendor\/hatframework\/hat-resource-pagamento","pdf":"vendor\/hatframework\/hat-resource-pdf","server":"vendor\/hatframework\/hat-resource-server","slider":"vendor\/hatframework\/hat-resource-slider","sms":"vendor\/hatframework\/hat-resource-sms","upload":"vendor\/hatframework\/hat-resource-upload"},"template":{"core":"vendor\/hatframework\/hat-template-core","area-admin":"vendor\/hatframework\/hat-template-area-admin","rf":"Application\/templates\/rf"}};if(typeof urls[type] === 'undefined' || typeof urls[type][name] === 'undefined'){return '';}return getBaseURL()+'/'+urls[type][name];}