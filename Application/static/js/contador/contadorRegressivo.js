function atualizaContador(YY,MM,DD,HH,MI,saida) {
	var SS = 00;
	var hoje = new Date();
	var futuro = new Date(YY,MM-1,DD,HH,MI,SS);

	var ss = parseInt((futuro - hoje) / 1000);
	var mm = parseInt(ss / 60);
	var hh = parseInt(mm / 60);
	var dd = parseInt(hh / 24);

	ss = ss - (mm * 60);
	mm = mm - (hh * 60);
	hh = hh - (dd * 24);

	var faltam = '';
	faltam += (dd && dd > 1) ? dd+' dias, ' : (dd==1 ? '1 dia, ' : '');
	faltam += (toString(hh).length) ? hh+':' : '';
	faltam += (toString(mm).length) ? mm+':' : '';
	faltam += ss;

	if (dd+hh+mm+ss > 0) {
		document.getElementById(saida).innerHTML = faltam;
		setTimeout(function(){atualizaContador(YY,MM,DD,HH,MI,saida)},1000);
	} else {
		document.getElementById(saida).innerHTML = '';
		setTimeout(function(){atualizaContador(YY,MM,DD,HH,MI,saida)},1000);
	}
}
// Colocar esses parametros para chamar função
//window.onload=function(){
//	atualizaContador('2012','07','14','23','00','elemento');
//}
