$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el space-buil.js
	//////Este archivo corresponde a la página de bioqui_inicio.html
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
		html: "<p><a/></p><p/><p/>",
	});
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Programación del curso 2016.").attr({
		title: "Descargar Programación del curso 2016.",
		href: "medicinaresources_staticfiles/bioquimica/programacion/bioquiProgramacion.zip",
		"class": "aml-anat",
	});
	$(".aml-body").find("p").eq(1).html("Descarga la Programación 2017 al final de la tabla.");
	$(".aml-body").find("p").eq(2).html("Utiliza la programación para llevar una secuencia logica del curso de Bioquímica y para obtener una mejor preparación del siguiente examen.");
	////
	//////
	////////
	/////////// tables tables, all this tables will be in the 'index_histo.html' 
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
		html: "<tr><th style='color: #007e6c;'>Descargar</th><th style='color: #d2d1d2;'>Programación de Bioquímica</th><th style='color: #007e6c;'>Semana</th><th style='color: #d2d1d2;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #353c45;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Cronograma de Bioquímica 2016",
		href: "medicinaresources_staticfiles/bioquimica/programacion/1 Cronograma Bioquímica 2016.pdf",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Cronograma de Bioquímica 2016").attr({
		title: "Descargar Cronograma de Bioquímica 2016",
		href: "medicinaresources_staticfiles/bioquimica/programacion/1 Cronograma Bioquímica 2016.pdf",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("1");
	$("tbody").find("td").eq(3).html("2016S30A203PRO1").attr({
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
		title: " Descarga Programación Oficial 2016",
		href: "medicinaresources_staticfiles/bioquimica/programacion/2 progra_2016_blog.docx",
		"class": "cap-a",
	});
	$(".row2srl").find("a").eq(1).html("Programación Oficial 2016").attr({
		title: "Descarga Programación Oficial 2016",
		href: "medicinaresources_staticfiles/bioquimica/programacion/2 progra_2016_blog.docx",
		"class": "cap-b",
	});
	$(".row2srl").find("td").eq(2).html("1");
	$(".row2srl").find("td").eq(3).html("2016S30A203PRO2").attr({
		"class": "code",
	});
	//row 3
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row3srl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row3srl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Programación General 2016",
		href: "medicinaresources_staticfiles/bioquimica/programacion/2 12548971_978210535551109_6307103453058457013_n.jpg",
		"class": "cap-a",
	});
	$(".row3srl").find("a").eq(1).html("Resumen Programación General 2016").attr({
		title: "Descarga Resumen Programación General 2016",
		href: "medicinaresources_staticfiles/bioquimica/programacion/2 12548971_978210535551109_6307103453058457013_n.jpg",
		"class": "cap-b",
	});
	$(".row3srl").find("td").eq(2).html("1");
	$(".row3srl").find("td").eq(3).html("2016S30A203PRO3").attr({
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
		title: " Descarga Instrucciones para Informes de Casos",
		href: "medicinaresources_staticfiles/bioquimica/programacion/informe-caso-clinico-2016-1.pdf",
		"class": "cap-a",
	});
	$(".row4").find("a").eq(1).html("Instrucciones para Informes de Casos").attr({
		title: "Descarga Instrucciones para Informes de Casos",
		href: "medicinaresources_staticfiles/bioquimica/programacion/informe-caso-clinico-2016-1.pdf",
		"class": "cap-b",
	});
	$(".row4").find("td").eq(2).html("1");
	$(".row4").find("td").eq(3).html("2016S30A203PRO4").attr({
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
		title: " Descarga Programación Oficial 2015",
		href: "medicinaresources_staticfiles/bioquimica/programacion/programa-2015.pdf",
		"class": "cap-a",
	});
	$(".row5").find("a").eq(1).html("Programación Oficial 2015").attr({
		title: "Descarga Programación Oficial 2015",
		href: "medicinaresources_staticfiles/bioquimica/programacion/programa-2015.pdf",
		"class": "cap-b",
	});
	$(".row5").find("td").eq(2).html("1");
	$(".row5").find("td").eq(3).html("2016S30A203PRO5").attr({
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
		title: " Descarga Componentes para Mapa Metabolico",
		href: "medicinaresources_staticfiles/bioquimica/programacion/Mapa Metabolico.docx",
		"class": "cap-a",
	});
	$(".row6").find("a").eq(1).html("Componentes para Mapa Metabolico").attr({
		title: "Descarga Componentes para Mapa Metabolico",
		href: "medicinaresources_staticfiles/bioquimica/programacion/Mapa Metabolico.docx",
		"class": "cap-b",
	});
	$(".row6").find("td").eq(2).html("1");
	$(".row6").find("td").eq(3).html("2016S30A203PRO6").attr({
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
		title: " Descarga Programación Oficial 2017",
		href: "medicinaresources_staticfiles/bioquimica/programacion/programa_2017-corregido.docx",
		"class": "cap-a",
	});
	$(".row7").find("a").eq(1).html("Programación Oficial 2017").attr({
		title: "Descarga Programación Oficial 2017",
		href: "medicinaresources_staticfiles/bioquimica/programacion/programa_2017-corregido.docx",
		"class": "cap-b",
	});
	$(".row7").find("td").eq(2).html("1");
	$(".row7").find("td").eq(3).html("2016S30A203PRO7").attr({
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
		title: " Descarga Programación Semanal 2017",
		href: "medicinaresources_staticfiles/bioquimica/programacion/programacion-semanal.pdf",
		"class": "cap-a",
	});
	$(".row8").find("a").eq(1).html("Programación Semanal 2017").attr({
		title: "Descarga Programación Semanal 2017",
		href: "medicinaresources_staticfiles/bioquimica/programacion/programacion-semanal.pdf",
		"class": "cap-b",
	});
	$(".row8").find("td").eq(2).html("1");
	$(".row8").find("td").eq(3).html("2016S30A203PRO8").attr({
		"class": "code",
	});
})
