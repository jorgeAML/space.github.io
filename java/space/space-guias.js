$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de bioqui_guias.html
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Guías de Estudio 2016.").attr({
		title: "Descargar Guías de Estudio 2016.",
		href: "medicinaresources_staticfiles/bioquimica/guias/Bioquimica_guias.zip",
		"class": "aml-anat",
	});
		$(".aml-body").find("a").eq(1).html("<i class='icon-download-alt'></i> Guías de Estudio 2017.").attr({
		title: "Descargar Guías de Estudio 2017.",
		href: "medicinaresources_staticfiles/bioquimica/guias/Guias 2017.zip",
		"class": "aml-anat",
	});
	$(".aml-body").find("p").eq(2).html("Utiliza las guías de estudio para tener conceptos claros, explicar funciones bioquimicas en el cuerpo humano y para relacionar procesos moleculares.");
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
		html: "<tr><th style='color: #007e6c;'>Descargar</th><th style='color: #d2d1d2;'>Guías de Estudio de Bioquímica</th><th style='color: #007e6c;'>Semana</th><th style='color: #d2d1d2;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #353c45;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Guía 2017 Primer parcial",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-primer-parcial1.pdf",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Guía 2017 Primer bloque").attr({
		title: "Descargar Guía 2017 Primer parcial",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-primer-parcial1.pdf",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("1 - 6");
	$("tbody").find("td").eq(3).html("2017S30A203GUI1").attr({
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
		title: " Descarga Guía 2017 Segundo parcial",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-segundo-parcial.pdf",
		"class": "cap-a",
	});
	$(".row2srl").find("a").eq(1).html("Guía 2017 Segundo bloque").attr({
		title: "Descarga Guía 2017 Segundo parcial",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-segundo-parcial.pdf",
		"class": "cap-b",
	});
	$(".row2srl").find("td").eq(2).html("7 - 13");
	$(".row2srl").find("td").eq(3).html("2017S30A203GUI2").attr({
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
		title: " Descarga Guía 2017 Tercer parcial",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-tercer-parcial-a.pdf",
		"class": "cap-a",
	});
	$(".row3").find("a").eq(1).html("Guía 2017 Tercer bloque").attr({
		title: "Descarga Guía 2017 Tercer parcial",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-tercer-parcial-a.pdf",
		"class": "cap-b",
	});
	$(".row3").find("td").eq(2).html("14 - 20");
	$(".row3").find("td").eq(3).html("2017S30A203GUI3").attr({
		"class": "code",
	});
	//row 4
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row4").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Guía 2017 Cuarto parcial",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-cuarto-parcial.pdf",
		"class": "cap-a",
	});
	$(".row4").find("a").eq(1).html("Guía 2017 Cuarto bloque").attr({
		title: "Descarga Guía 2017 Cuarto parcial",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-cuarto-parcial.pdf",
		"class": "cap-b",
	});
	$(".row4").find("td").eq(2).html("21 - 26");
	$(".row4").find("td").eq(3).html("2017S30A203GUI4").attr({
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
		title: " Descarga Guía 2017 Quinto parcial",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-qui-nto-parcial.pdf",
		"class": "cap-a",
	});
	$(".row5").find("a").eq(1).html("Guía 2017 Quinto bloque").attr({
		title: "Descarga Guía 2017 Quinto parcial",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-qui-nto-parcial.pdf",
		"class": "cap-b",
	});
	$(".row5").find("td").eq(2).html("27 - 32");
	$(".row5").find("td").eq(3).html("2017S30A203GUI5").attr({
		"class": "code",
	});
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row6",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row6").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Guía 2017 Derivados del Acido Araquidonico",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-tercer-parcial-eicosanoides.pdf",
		"class": "cap-a",
	});
	$(".row6").find("a").eq(1).html("Guía 2017 Derivados del Acido Araquidonico").attr({
		title: "Descarga Guía 2017 Derivados del Acido Araquidonico",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-tercer-parcial-eicosanoides.pdf",
		"class": "cap-b",
	});
	$(".row6").find("td").eq(2).html("14 - 20");
	$(".row6").find("td").eq(3).html("2017S30A203GUI6").attr({
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
		title: " Descarga Guía 2017 Integración de Vías Metabólicas",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-integracion-documento.pdf",
		"class": "cap-a",
	});
	$(".row7").find("a").eq(1).html("Guía 2017 Integración de Vías Metabólicas").attr({
		title: "Descarga Guía 2017 Integración de Vías Metabólicas",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2017-integracion-documento.pdf",
		"class": "cap-b",
	});
	$(".row7").find("td").eq(2).html("19 - 20");
	$(".row7").find("td").eq(3).html("2017S30A203GUI7").attr({
		"class": "code",
	});
	//row 8
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row8",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row8").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Documento de Apoyo del Acido Araquidonico",
		href: "medicinaresources_staticfiles/bioquimica/guias/derivados-del-acido-araquidonico.pdf",
		"class": "cap-a",
	});
	$(".row8").find("a").eq(1).html("Documento de Apoyo del Acido Araquidonico").attr({
		title: "Descarga Documento de Apoyo del Acido Araquidonico",
		href: "medicinaresources_staticfiles/bioquimica/guias/derivados-del-acido-araquidonico.pdf",
		"class": "cap-b",
	});
	$(".row8").find("td").eq(2).html("16");
	$(".row8").find("td").eq(3).html("2017S30A203GUI8").attr({
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
		title: " Descarga Guía 2016 Primer bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2016-primer-parcial.pdf",
		"class": "cap-a",
	});
	$(".row9").find("a").eq(1).html("Guía 2016 Primer bloque").attr({
		title: "Descarga Guía 2016 Primer bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2016-primer-parcial.pdf",
		"class": "cap-b",
	});
	$(".row9").find("td").eq(2).html("1 - 6");
	$(".row9").find("td").eq(3).html("2017S30A203GUI9").attr({
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
		title: " Descarga Guía 2016 Segundo bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2016-segundo-parcial.pdf",
		"class": "cap-a",
	});
	$(".row10").find("a").eq(1).html("Guía 2016 Segundo bloque").attr({
		title: "Descarga Guía 2016 Segundo bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2016-segundo-parcial.pdf",
		"class": "cap-b",
	});
	$(".row10").find("td").eq(2).html("7 - 13");
	$(".row10").find("td").eq(3).html("2017S30A203GUI10").attr({
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
		title: " Descarga Guía 2016 Tercer bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2016-tercer-parcial.pdf",
		"class": "cap-a",
	});
	$(".row11").find("a").eq(1).html("Guía 2016 Tercer bloque").attr({
		title: "Descarga Guía 2016 Tercer bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/guias-2016-tercer-parcial.pdf",
		"class": "cap-b",
	});
	$(".row11").find("td").eq(2).html("14 - 20");
	$(".row11").find("td").eq(3).html("2017S30A203GUI11").attr({
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
		title: " Descarga Guía 2015 Primer bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/Guias Primer Parcial.pdf",
		"class": "cap-a",
	});
	$(".row12").find("a").eq(1).html("Guía 2015 Primer bloque").attr({
		title: "Descarga Guía 2015 Primer bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/Guias Primer Parcial.pdf",
		"class": "cap-b",
	});
	$(".row12").find("td").eq(2).html("1 - 6");
	$(".row12").find("td").eq(3).html("2017S30A203GUI12").attr({
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
		title: " Descarga Guía 2015 Segundo bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/Guias Segundo Parcial.pdf",
		"class": "cap-a",
	});
	$(".row13").find("a").eq(1).html("Guía 2015 Segundo bloque").attr({
		title: "Descarga Guía 2015 Segundo bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/Guias Segundo Parcial.pdf",
		"class": "cap-b",
	});
	$(".row13").find("td").eq(2).html("7 - 13");
	$(".row13").find("td").eq(3).html("2017S30A203GUI13").attr({
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
		title: " Descarga Guía 2015 Tercer bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/Guias Tercer Parcial.pdf",
		"class": "cap-a",
	});
	$(".row14").find("a").eq(1).html("Guía 2015 Tercer bloque").attr({
		title: "Descarga Guía 2015 Tercer bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/Guias Tercer Parcial.pdf",
		"class": "cap-b",
	});
	$(".row14").find("td").eq(2).html("14 - 20");
	$(".row14").find("td").eq(3).html("2017S30A203GUI14").attr({
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
		title: " Descarga Guía 2015 Cuarto bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/Guias Cuarto Parcial.pdf",
		"class": "cap-a",
	});
	$(".row15").find("a").eq(1).html("Guía 2015 Cuarto bloque").attr({
		title: "Descarga Guía 2015 Cuarto bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/Guias Cuarto Parcial.pdf",
		"class": "cap-b",
	});
	$(".row15").find("td").eq(2).html("21 - 26");
	$(".row15").find("td").eq(3).html("2017S30A203GUI15").attr({
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
		title: " Descarga Guía 2015 Quinto bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/Guias Quinto Parcial.pdf",
		"class": "cap-a",
	});
	$(".row16").find("a").eq(1).html("Guía 2015 Quinto bloque").attr({
		title: "Descarga Guía 2015 Quinto bloque",
		href: "medicinaresources_staticfiles/bioquimica/guias/Guias Quinto Parcial.pdf",
		"class": "cap-b",
	});
	$(".row16").find("td").eq(2).html("27 - 32");
	$(".row16").find("td").eq(3).html("2017S30A203GUI16").attr({
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
		title: " Descarga Guía de Trabajo de Geneticae",
		href: "medicinaresources_staticfiles/bioquimica/guias/Hoja de Trabajo Genetica.pdf",
		"class": "cap-a",
	});
	$(".row17").find("a").eq(1).html("Guía de Trabajo de Genetica").attr({
		title: "Descarga Guía de Trabajo de Genetica",
		href: "medicinaresources_staticfiles/bioquimica/guias/Hoja de Trabajo Genetica.pdf",
		"class": "cap-b",
	});
	$(".row17").find("td").eq(2).html("23");
	$(".row17").find("td").eq(3).html("2017S30A203GUI17").attr({
		"class": "code",
	});
});