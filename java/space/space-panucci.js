$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de bioqui_panucci.html
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Panuccis 2016.").attr({
		title: "Descargar Panuccis 2016.",
		href: "medicinaresources_staticfiles/bioquimica/panucci/bioquipanucci.zip",
		"class": "aml-anat",
	});
	$(".aml-body").find("p").eq(1).html("Utiliza los Panuccis para mejorar en la comprensión y resolución de exámenes de bioquímica, los Panuccis son solo una recopilación de examenes de años anteriores del 2016.");
	////
	//////
	////////
	/////////// tables tables, all this tables will be in the 'bioqui_panucci.html' 
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
		html: "<tr><th style='color: #007e6c;'>Descargar</th><th style='color: #d2d1d2;'>Panuccis de Bioquímica</th><th style='color: #007e6c;'>Semana</th><th style='color: #d2d1d2;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #353c45;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Panucci para Primer parcial",
		href: "medicinaresources_staticfiles/bioquimica/panucci/1 Panucci.pdf",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Primer parcial").attr({
		title: "Descargar Panucci para Primer parcial",
		href: "medicinaresources_staticfiles/bioquimica/panucci/1 Panucci.pdf",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("1 - 9");
	$("tbody").find("td").eq(3).html("2016O12A203PAN1").attr({
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
		title: " Descarga Panucci para Segundo parcial",
		href: "medicinaresources_staticfiles/bioquimica/panucci/2 Bioquimica panucci 2do parcial(1).pdf",
		"class": "cap-a",
	});
	$(".row2srl").find("a").eq(1).html("Segundo Parcial").attr({
		title: "Descarga Panucci para Segundo parcial",
		href: "medicinaresources_staticfiles/bioquimica/panucci/2 Bioquimica panucci 2do parcial(1).pdf",
		"class": "cap-b",
	});
	$(".row2srl").find("td").eq(2).html("10 - 13");
	$(".row2srl").find("td").eq(3).html("2016O12A20PAN2").attr({
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
		title: " Descarga Panucci para Tercer parcial",
		href: "medicinaresources_staticfiles/bioquimica/panucci/3 Bioqui Panucci - 3er Parcial.pdf",
		"class": "cap-a",
	});
	$(".row3").find("a").eq(1).html("Tercer Parcial").attr({
		title: "Descarga Panucci para Tercer parcial",
		href: "medicinaresources_staticfiles/bioquimica/panucci/3 Bioqui Panucci - 3er Parcial.pdf",
		"class": "cap-b",
	});
	$(".row3").find("td").eq(2).html("14 - 20");
	$(".row3").find("td").eq(3).html("2016O12A20PAN3").attr({
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
		title: " Descarga Panucci para Tercer parcial II",
		href: "medicinaresources_staticfiles/bioquimica/panucci/3 Bioqui TERCEREXAMENPARCIAL Panuchi.pdf",
		"class": "cap-a",
	});
	$(".row4").find("a").eq(1).html("Tercer Parcial II").attr({
		title: "Descarga Panucci para Tercer parcial II",
		href: "medicinaresources_staticfiles/bioquimica/panucci/3 Bioqui TERCEREXAMENPARCIAL Panuchi.pdf",
		"class": "cap-b",
	});
	$(".row4").find("td").eq(2).html("14 - 20");
	$(".row4").find("td").eq(3).html("2016O12A20PAN4").attr({
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
		title: " Descarga Panucci para Cuarto parcial",
		href: "medicinaresources_staticfiles/bioquimica/panucci/Panucci 4to Parcial 2016 (depurado).docx",
		"class": "cap-a",
	});
	$(".row5").find("a").eq(1).html("Cuarto Parcial").attr({
		title: "Descarga Panucci para Cuarto parcial",
		href: "medicinaresources_staticfiles/bioquimica/panucci/Panucci 4to Parcial 2016 (depurado).docx",
		"class": "cap-b",
	});
	$(".row5").find("td").eq(2).html("21 - 26");
	$(".row5").find("td").eq(3).html("2016O12A20PAN5").attr({
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
		title: " Descarga Panucci para Examen Final",
		href: "medicinaresources_staticfiles/bioquimica/panucci/PANUCCI FINAL.docx",
		"class": "cap-a",
	});
	$(".row6").find("a").eq(1).html("Examen Final").attr({
		title: "Descarga Panucci para Examen Final",
		href: "medicinaresources_staticfiles/bioquimica/panucci/PANUCCI FINAL.docx",
		"class": "cap-b",
	});
	$(".row6").find("td").eq(2).html("1 - 32");
	$(".row6").find("td").eq(3).html("2016O12A20PAN6").attr({
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
		title: " Descarga Panucci para Examen Final II",
		href: "medicinaresources_staticfiles/bioquimica/panucci/Bioqui Panucci - Final 01.doc",
		"class": "cap-a",
	});
	$(".row7").find("a").eq(1).html("Examen Final II").attr({
		title: "Descarga Panucci para Examen Final II",
		href: "medicinaresources_staticfiles/bioquimica/panucci/Bioqui Panucci - Final 01.doc",
		"class": "cap-b",
	});
	$(".row7").find("td").eq(2).html("1 - 32");
	$(".row7").find("td").eq(3).html("2016O12A20PAN7").attr({
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
		title: " Descarga Panucci para Examen Final III",
		href: "medicinaresources_staticfiles/bioquimica/panucci/Bioqui Panucci - Final 02.doc",
		"class": "cap-a",
	});
	$(".row8").find("a").eq(1).html("Examen Final III").attr({
		title: "Descarga Panucci para Examen Final III",
		href: "medicinaresources_staticfiles/bioquimica/panucci/Bioqui Panucci - Final 02.doc",
		"class": "cap-b",
	});
	$(".row8").find("td").eq(2).html("1 - 32");
	$(".row8").find("td").eq(3).html("2016O12A20PAN8").attr({
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
		title: " Descarga Panucci para Examen Final IV",
		href: "medicinaresources_staticfiles/bioquimica/panucci/Panucci - Tratado Bioquimica FINAL.doc",
		"class": "cap-a",
	});
	$(".row9").find("a").eq(1).html("Examen Final IV").attr({
		title: "Descarga Panucci para Examen Final IV",
		href: "medicinaresources_staticfiles/bioquimica/panucci/Panucci - Tratado Bioquimica FINAL.doc",
		"class": "cap-b",
	});
	$(".row9").find("td").eq(2).html("1 - 32");
	$(".row9").find("td").eq(3).html("2016O12A20PAN9").attr({
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
		title: " Descarga Panucci para Examen Final V",
		href: "medicinaresources_staticfiles/bioquimica/panucci/Panucci - Recuperaciones.doc",
		"class": "cap-a",
	});
	$(".row10").find("a").eq(1).html("Examen Final V").attr({
		title: "Descarga Panucci para Examen Final V",
		href: "medicinaresources_staticfiles/bioquimica/panucci/Panucci - Recuperaciones.doc",
		"class": "cap-b",
	});
	$(".row10").find("td").eq(2).html("1 - 32");
	$(".row10").find("td").eq(3).html("2016O12A20PAN10").attr({
		"class": "code",
	});
})