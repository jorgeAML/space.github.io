$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de bioqui_present.html
	////////
	///////////AML panels navigations 
	////////
	//////
	////
	$("<div/>", {
		//href: "index_histo.html",
		"appendTo": ".aml_banner",
		"insertAfter": ".list-group-aml",
		"class": "aml-panel gradient-aml",
		html: "<div class='aml-heading'><h1 class='aml-title'>Descargar</h1></div>",
	});
	$("<div/>", {
		//href: "index_histo.html",
		"appendTo": ".aml-panel",
		"insertAfter": ".aml-heading",
		"class": "aml-body",
		html: "<p><a/></p><p><a/></p><p/>",
	});
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Presentaciones 1.").attr({
		title: "Descargar Presentaciones 2016.",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/Bioquipresentaciones.zip",
		"class": "aml-anat",
	});
	$(".aml-body").find("p").eq(1).html("Preparate para la siguiente clase utilizando las presentaciones del curso de Bioquímica hechas por Profesores de la Universidad de San Carlos de Guatemala.");
	////
	//////
	////////
	/////////// tables tables, all this tables will be in the 'bioqui_labcas.html' 
	////////
	//////
	////
	$("<div/>", {
		href: "index_present.html",
		"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-md-6 aml_banner",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".col-md-6", 
		//"insertAfter": ".col-md-6",
		"class": "table-responsive",
	});
	$("<table/>", {
		href: "index_histo.html",
		"appendTo": ".table-responsive",
		"class": "table table-striped",
	});
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		html: "<tr><th style='color: #007e6c;'>Descargar</th><th style='color: #d2d1d2;'>Presentaciones 1</th><th style='color: #007e6c;'>Semana</th><th style='color: #d2d1d2;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #353c45;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar presentacion de Enzimas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/2 clase-enzimas-15.pdf",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Enzimas").attr({
		title: "Descargar presentacion de Enzimas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/2 clase-enzimas-15.pdf",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("2");
	$("tbody").find("td").eq(3).html("2016O11A203PRES1").attr({
		"class": "code",
	});
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2srl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2srl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Vitaminas Hidrosolubles",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/3 vitaminas-hidro-2015.pdf",
		"class": "cap-a",
	});
	$(".row2srl").find("a").eq(1).html("Vitaminas Hidrosolubles").attr({
		title: "Descarga presentación de Vitaminas Hidrosolubles",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/3 vitaminas-hidro-2015.pdf",
		"class": "cap-b",
	});
	$(".row2srl").find("td").eq(2).html("3");
	$(".row2srl").find("td").eq(3).html("2016O11A203PRES2").attr({
		"class": "code",
	});
	//row 3
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row3",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row3").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Vitaminas Liposolubles",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/4 vitaminas-liposolubles-2015.pdf",
		"class": "cap-a",
	});
	$(".row3").find("a").eq(1).html("Vitaminas Liposolubles").attr({
		title: "Descarga presentación de Vitaminas Liposolubles",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/4 vitaminas-liposolubles-2015.pdf",
		"class": "cap-b",
	});
	$(".row3").find("td").eq(2).html("4");
	$(".row3").find("td").eq(3).html("2016O11A203PRES3").attr({
		"class": "code",
	});
	//row 4
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row4").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Glucólisis y Descarboxilación del Piruvato",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/5- 6 glucolisis-y-dp-15.pdf",
		"class": "cap-a",
	});
	$(".row4").find("a").eq(1).html("Glucolisis y Descarboxilación del Piruvato").attr({
		title: "Descarga presentación de Glucolisis y Descarboxilación del Piruvato",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/5- 6 glucolisis-y-dp-15.pdf",
		"class": "cap-b",
	});
	$(".row4").find("td").eq(2).html("5");
	$(".row4").find("td").eq(3).html("2016O11A203PRES4").attr({
		"class": "code",
	});
	//row 5
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row5",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row5").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Síntesis y Degradación del Glucógeno",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/7 metabolismo-glucogeno-2015.pdf",
		"class": "cap-a",
	});
	$(".row5").find("a").eq(1).html("Síntesis y Degradación del Glucógeno").attr({
		title: "Descarga presentación de Síntesis y Degradación del Glucógeno",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/7 metabolismo-glucogeno-2015.pdf",
		"class": "cap-b",
	});
	$(".row5").find("td").eq(2).html("6");
	$(".row5").find("td").eq(3).html("2016O11A203PRES5").attr({
		"class": "code",
	});
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row6",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row6").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Regulación del GLucógeno y Glucogenosis",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/8 regulacion-del-glucogeno-15.pdf",
		"class": "cap-a",
	});
	$(".row6").find("a").eq(1).html("Regulación del GLucógeno y Glucogenosis").attr({
		title: "Descarga presentación de Regulación del GLucógeno y Glucogenosis",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/8 regulacion-del-glucogeno-15.pdf",
		"class": "cap-b",
	});
	$(".row6").find("td").eq(2).html("7");
	$(".row6").find("td").eq(3).html("2016O11A203PRES6").attr({
		"class": "code",
	});
	//row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row7",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row7").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Vía de las Pentosas Fosfato",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/10 Via de las Pentosas Fosfato.pdf",
		"class": "cap-a",
	});
	$(".row7").find("a").eq(1).html("Vía de las Pentosas Fosfato").attr({
		title: "Descarga presentación de Vía de las Pentosas Fosfato",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/10 Via de las Pentosas Fosfato.pdf",
		"class": "cap-b",
	});
	$(".row7").find("td").eq(2).html("8");
	$(".row7").find("td").eq(3).html("2016O11A203PRES7").attr({
		"class": "code",
	});
	//row 8
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row8",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row8").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Gluconeogénesis",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/11 Gluconeogenesis.pdf",
		"class": "cap-a",
	});
	$(".row8").find("a").eq(1).html("Gluconeogénesis").attr({
		title: "Descarga presentación de Gluconeogénesis",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/11 Gluconeogenesis.pdf",
		"class": "cap-b",
	});
	$(".row8").find("td").eq(2).html("9");
	$(".row8").find("td").eq(3).html("2016O11A203PRES8").attr({
		"class": "code",
	});
	//row 9
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row9",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row9").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Catabolismo de Aminoácidos y Esq. carbono",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/12 Metabolismo de Aminoacidos.pdf",
		"class": "cap-a",
	});
	$(".row9").find("a").eq(1).html("Catabolismo de Aminoácidos y Esq. carbono").attr({
		title: "Descarga presentación de Catabolismo de Aminoácidos y Esq. carbono",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/12 Metabolismo de Aminoacidos.pdf",
		"class": "cap-b",
	});
	$(".row9").find("td").eq(2).html("10");
	$(".row9").find("td").eq(3).html("2016O11A203PRES9").attr({
		"class": "code",
	});
	//row 10
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row10",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row10").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Ciclo de Krebs",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/13-14 krebs-15.pdf",
		"class": "cap-a",
	});
	$(".row10").find("a").eq(1).html("Ciclo de Krebs").attr({
		title: "Descarga presentación de Ciclo de Krebs",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/13-14 krebs-15.pdf",
		"class": "cap-b",
	});
	$(".row10").find("td").eq(2).html("11");
	$(".row10").find("td").eq(3).html("2016O11A203PRES10").attr({
		"class": "code",
	});
	//row 11
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row11",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row11").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Lanzaderas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/13-14 lanza-y-cr-yfo.pdf",
		"class": "cap-a",
	});
	$(".row11").find("a").eq(1).html("Lanzaderas").attr({
		title: "Descarga presentación de Lanzaderas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/13-14 lanza-y-cr-yfo.pdf",
		"class": "cap-b",
	});
	$(".row11").find("td").eq(2).html("11");
	$(".row11").find("td").eq(3).html("2016O11A203PRES11").attr({
		"class": "code",
	});
	//row 12
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row12",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row12").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Beta-Oxidación AGL y Cetogénesis",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/15-16 Acidos Grasos.pdf",
		"class": "cap-a",
	});
	$(".row12").find("a").eq(1).html("Beta-Oxidación AGL y Cetogénesis").attr({
		title: "Descarga presentación de Beta-Oxidación AGL y Cetogénesis",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/15-16 Acidos Grasos.pdf",
		"class": "cap-b",
	});
	$(".row12").find("td").eq(2).html("13");
	$(".row12").find("td").eq(3).html("2016O11A203PRES12").attr({
		"class": "code",
	});
	//row 13
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row13",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row13").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Síntesis de Ácidos Grasos y Lipogénesis",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/17 sint-ac-grasos.pdf",
		"class": "cap-a",
	});
	$(".row13").find("a").eq(1).html("Síntesis de Ácidos Grasos y Lipogénesis").attr({
		title: "Descarga presentación de Síntesis de Ácidos Grasos y Lipogénesis",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/17 sint-ac-grasos.pdf",
		"class": "cap-b",
	});
	$(".row13").find("td").eq(2).html("14");
	$(".row13").find("td").eq(3).html("2016O11A203PRES13").attr({
		"class": "code",
	});
	//row 14
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row14",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row14").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Síntesis de Metabolismo de TAG y Fosfolípidos",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/18 Metabolismo triacilgliceroles.pdf",
		"class": "cap-a",
	});
	$(".row14").find("a").eq(1).html("Metabolismo de TAG y Fosfolípidos").attr({
		title: "Descarga presentación de Síntesis de Metabolismo de TAG y Fosfolípidos",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/18 Metabolismo triacilgliceroles.pdf",
		"class": "cap-b",
	});
	$(".row14").find("td").eq(2).html("16");
	$(".row14").find("td").eq(3).html("2016O11A203PRES14").attr({
		"class": "code",
	});
	//row 15
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row15",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row15").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Metabolismo del Colesterol",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/18 metabolismo-del-colesterol1.pdf",
		"class": "cap-a",
	});
	$(".row15").find("a").eq(1).html("Metabolismo del Colesterol").attr({
		title: "Descarga presentación de Metabolismo del Colesterol",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/18 metabolismo-del-colesterol1.pdf",
		"class": "cap-b",
	});
	$(".row15").find("td").eq(2).html("17");
	$(".row15").find("td").eq(3).html("2016O11A203PRES15").attr({
		"class": "code",
	});
	//row 16
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row16",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row16").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Vías de Formación de Lípidos",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/18 Tema 5B-Bloque I-Vias Formacion Lipidos.pdf",
		"class": "cap-a",
	});
	$(".row16").find("a").eq(1).html("Vías de Formación de Lípidos").attr({
		title: "Descarga presentación de Vías de Formación de Lípidos",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/18 Tema 5B-Bloque I-Vias Formacion Lipidos.pdf",
		"class": "cap-b",
	});
	$(".row16").find("td").eq(2).html("13 - 15");
	$(".row16").find("td").eq(3).html("2016O11A203PRES16").attr({
		"class": "code",
	});
	//row 17
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row17",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row17").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Metabolismo de las Lipoproteínas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/20 lipoproteinas.pdf",
		"class": "cap-a",
	});
	$(".row17").find("a").eq(1).html("Metabolismo de las Lipoproteínas").attr({
		title: "Descarga presentación de Metabolismo de las Lipoproteínas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/20 lipoproteinas.pdf",
		"class": "cap-b",
	});
	$(".row17").find("td").eq(2).html("18");
	$(".row17").find("td").eq(3).html("2016O11A203PRES17").attr({
		"class": "code",
	});
	//row 18
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row18",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row18").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Integración del Metabolismo",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/21 integracion-metabolismo.pdf",
		"class": "cap-a",
	});
	$(".row18").find("a").eq(1).html("Integración del Metabolismo").attr({
		title: "Descarga presentación de Integración del Metabolismo",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/21 integracion-metabolismo.pdf",
		"class": "cap-b",
	});
	$(".row18").find("td").eq(2).html("19 - 20");
	$(".row18").find("td").eq(3).html("2016O11A203PRES18").attr({
		"class": "code",
	});
	//row 19
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row19",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row19").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Síntesis de Proteínas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/22 catabolismo-de-proteinas.pdf",
		"class": "cap-a",
	});
	$(".row19").find("a").eq(1).html("Síntesis de Proteínas").attr({
		title: "Descarga presentación de Síntesis de Proteínas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/22 catabolismo-de-proteinas.pdf",
		"class": "cap-b",
	});
	$(".row19").find("td").eq(2).html("21");
	$(".row19").find("td").eq(3).html("2016O11A203PRES19").attr({
		"class": "code",
	});
	//row 20
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row20",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row20").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Codigo Genético",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/22-23 bioquimica-de-la-genc3a9tica-15.pdf",
		"class": "cap-a",
	});
	$(".row20").find("a").eq(1).html("Codigo Genético").attr({
		title: "Descarga presentación de Codigo Genético",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/22-23 bioquimica-de-la-genc3a9tica-15.pdf",
		"class": "cap-b",
	});
	$(".row20").find("td").eq(2).html("21");
	$(".row20").find("td").eq(3).html("2016O11A203PRES20").attr({
		"class": "code",
	});
	//row 21
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row21",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row21").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Metabolismo de Purinas y Pirimidinas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/24 metabolismo-de-nuclec3b3tidos.pdf",
		"class": "cap-a",
	});
	$(".row21").find("a").eq(1).html("Metabolismo de Purinas y Pirimidinas").attr({
		title: "Descarga presentación de Metabolismo de Purinas y Pirimidinas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/24 metabolismo-de-nuclec3b3tidos.pdf",
		"class": "cap-b",
	});
	$(".row21").find("td").eq(2).html("23 - 24");
	$(".row21").find("td").eq(3).html("2016O11A203PRES21").attr({
		"class": "code",
	});
	//row 22
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row22",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row22").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Metabolismo de las Porfirinas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/26 porfirinas16.pdf",
		"class": "cap-a",
	});
	$(".row22").find("a").eq(1).html("Metabolismo de las Porfirinas").attr({
		title: "Descarga presentación de Metabolismo de las Porfirinas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/26 porfirinas16.pdf",
		"class": "cap-b",
	});
	$(".row22").find("td").eq(2).html("25");
	$(".row22").find("td").eq(3).html("2016O11A203PRES22").attr({
		"class": "code",
	});
	//row 23
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row23",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row23").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Metabolismo de las Bilirrubinas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/27 degradacic3b3n-del-grupo-hem.pdf",
		"class": "cap-a",
	});
	$(".row23").find("a").eq(1).html("Metabolismo de las Bilirrubinas").attr({
		title: "Descarga presentación de Metabolismo de las Bilirrubinas",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/27 degradacic3b3n-del-grupo-hem.pdf",
		"class": "cap-b",
	});
	$(".row23").find("td").eq(2).html("26");
	$(".row23").find("td").eq(3).html("2016O11A203PRES23").attr({
		"class": "code",
	});
	//row 24
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row24",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row24").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Hemoglobina y Mioglobina",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/28 hemoglobina-16.pdf",
		"class": "cap-a",
	});
	$(".row24").find("a").eq(1).html("Hemoglobina y Mioglobina").attr({
		title: "Descarga presentación de Hemoglobina y Mioglobina",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/28 hemoglobina-16.pdf",
		"class": "cap-b",
	});
	$(".row24").find("td").eq(2).html("27");
	$(".row24").find("td").eq(3).html("2016O11A203PRES24").attr({
		"class": "code",
	});
	//row 25
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row25",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row25").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Equilibrio Acido Base",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/29 acido-base-20141.pdf",
		"class": "cap-a",
	});
	$(".row25").find("a").eq(1).html("Equilibrio Acido Base").attr({
		title: "Descarga presentación de Equilibrio Acido Base",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/29 acido-base-20141.pdf",
		"class": "cap-b",
	});
	$(".row25").find("td").eq(2).html("28");
	$(".row25").find("td").eq(3).html("2016O11A203PRES25").attr({
		"class": "code",
	});
	//row 26
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row26",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row26").find("a").eq(0).html("Descargar").attr({
		title: " Descarga presentación de Coagulación Sanguínea",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/30 hemostasia-141.pdf",
		"class": "cap-a",
	});
	$(".row26").find("a").eq(1).html("Coagulación Sanguínea").attr({
		title: "Descarga presentación de Coagulación Sanguínea",
		href: "medicinaresources_staticfiles/bioquimica/presentaciones/30 hemostasia-141.pdf",
		"class": "cap-b",
	});
	$(".row26").find("td").eq(2).html("29");
	$(".row26").find("td").eq(3).html("2016O11A203PRES26").attr({
		"class": "code",
	});
	//end
})