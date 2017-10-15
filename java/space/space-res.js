$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de bioqui_resumenes.html
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Resumenes 2016.").attr({
		title: "Descargar Resumenes 2016.",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/bioquiresumenes.zip",
		"class": "aml-anat",
	});
	$(".aml-body").find("p").eq(1).html("Utiliza los resumenes para reforzar tus estudiosy prepararte para la siguiente evaluación. Los resumenes son aquellos que incluyen las ideas principales, ir de lo general a lo particular, incluir pocos detalles y tener poca extensión. Recuerda el mejor resumen es aquel hecho por <b>ti mismo!</b>");
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
		html: "<tr><th style='color: #007e6c;'>Descargar</th><th style='color: #d2d1d2;'>Resumenes de Bioquímica</th><th style='color: #007e6c;'>Semana</th><th style='color: #d2d1d2;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #353c45;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Resumen de Vitaminas Hidrosolubles",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/3 Vitaminas Hidrosolubles.docx",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Vitaminas Hidrosolubles").attr({
		title: "Descargar Resumen de Vitaminas Hidrosolubles",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/3 Vitaminas Hidrosolubles.docx",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("3");
	$("tbody").find("td").eq(3).html("2016O11A203RES1").attr({
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
		title: " Descarga Resumen de Síntesis del Glucógeno",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Síntesis y degradación del Glugógeno.docx",
		"class": "cap-a",
	});
	$(".row2srl").find("a").eq(1).html("Síntesis del Glucógeno").attr({
		title: "Descarga Resumen de Síntesis del Glucógeno",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Síntesis y degradación del Glugógeno.docx",
		"class": "cap-b",
	});
	$(".row2srl").find("td").eq(2).html("6");
	$(".row2srl").find("td").eq(3).html("2016O11A203RES2").attr({
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
		title: " Descarga Resumen de Regulación del Glucógeno",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Regulación de la síntesis y degradación de glucógeno.docx",
		"class": "cap-a",
	});
	$(".row3").find("a").eq(1).html("Regulación del Glucógeno").attr({
		title: "Descarga Resumen de Regulación del Glucógeno",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Regulación de la síntesis y degradación de glucógeno.docx",
		"class": "cap-b",
	});
	$(".row3").find("td").eq(2).html("7");
	$(".row3").find("td").eq(3).html("2016O11A203RES3").attr({
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
		title: " Descarga Resumen de Vía de las Pentosas Fosfato",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Vía de las pentosas fosfato y NADPH.docx",
		"class": "cap-a",
	});
	$(".row4").find("a").eq(1).html("Vía de las Pentosas Fosfato").attr({
		title: "Descarga Resumen de Vía de las Pentosas Fosfato",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Vía de las pentosas fosfato y NADPH.docx",
		"class": "cap-b",
	});
	$(".row4").find("td").eq(2).html("8");
	$(".row4").find("td").eq(3).html("2016O11A203RES4").attr({
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
		title: " Descarga Resumen de Catabolismo de Aminoácidos y Esq. carbono",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Metabolismo de Aminoácidos.docx",
		"class": "cap-a",
	});
	$(".row5").find("a").eq(1).html("Catabolismo de Aminoácidos y Esq. carbono").attr({
		title: "Descarga Resumen de Catabolismo de Aminoácidos y Esq. carbono",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Metabolismo de Aminoácidos.docx",
		"class": "cap-b",
	});
	$(".row5").find("td").eq(2).html("10");
	$(".row5").find("td").eq(3).html("2016O11A203RES5").attr({
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
		title: " Descarga Resumen de Ciclo de Krebs",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Ciclo de Krebs- Descarboxilacion del Piruv.docx",
		"class": "cap-a",
	});
	$(".row6").find("a").eq(1).html("Ciclo de Krebs").attr({
		title: "Descarga Resumen de Ciclo de Krebs",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Ciclo de Krebs- Descarboxilacion del Piruv.docx",
		"class": "cap-b",
	});
	$(".row6").find("td").eq(2).html("11");
	$(".row6").find("td").eq(3).html("2016O11A203RES6").attr({
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
		title: " Descarga Resumen de Lanzaderas y Cadena Respiratoria",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Lanzaderas-Cadena Respiratoria.docx",
		"class": "cap-a",
	});
	$(".row7").find("a").eq(1).html("Lanzaderas y Cadena Respiratoria").attr({
		title: "Descarga Resumen de Lanzaderas y Cadena Respiratoria",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Lanzaderas-Cadena Respiratoria.docx",
		"class": "cap-b",
	});
	$(".row7").find("td").eq(2).html("11");
	$(".row7").find("td").eq(3).html("2016O11A203RES7").attr({
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
		title: " Descarga Resumen de β-Oxidación AGL y Cetogénesis",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/β-Oxidación de Ácidos Grasos.docx",
		"class": "cap-a",
	});
	$(".row8").find("a").eq(1).html("β-Oxidación AGL y Cetogénesis").attr({
		title: "Descarga Resumen de β-Oxidación AGL y Cetogénesis",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/β-Oxidación de Ácidos Grasos.docx",
		"class": "cap-b",
	});
	$(".row8").find("td").eq(2).html("13");
	$(".row8").find("td").eq(3).html("2016O11A203RES8").attr({
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
		title: " Descarga Resumen de Metabolismo de Acidos Grasos",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Metabolismo de Acidos Grasos.docx",
		"class": "cap-a",
	});
	$(".row9").find("a").eq(1).html("Metabolismo de Acidos Grasos").attr({
		title: "Descarga Resumen de Metabolismo de Acidos Grasos",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Metabolismo de Acidos Grasos.docx",
		"class": "cap-b",
	});
	$(".row9").find("td").eq(2).html("14");
	$(".row9").find("td").eq(3).html("2016O11A203RES9").attr({
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
		title: " Descarga Resumen de Metabolismo de Fosfolípidos",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Metabolismo Fosfolípidos.docx",
		"class": "cap-a",
	});
	$(".row10").find("a").eq(1).html("Metabolismo de Fosfolípidos").attr({
		title: "Descarga Resumen de Metabolismo de Fosfolípidos",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Metabolismo Fosfolípidos.docx",
		"class": "cap-b",
	});
	$(".row10").find("td").eq(2).html("15");
	$(".row10").find("td").eq(3).html("2016O11A203RES10").attr({
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
		title: " Descarga Resumen de Metabolismo de los TAG",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Metabolismo TAG.docx",
		"class": "cap-a",
	});
	$(".row11").find("a").eq(1).html("Metabolismo de los TAG").attr({
		title: "Descarga Resumen de Metabolismo de los TAG",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Metabolismo TAG.docx",
		"class": "cap-b",
	});
	$(".row11").find("td").eq(2).html("15");
	$(".row11").find("td").eq(3).html("2016O11A203RES11").attr({
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
		title: " Descarga Resumen de Metabolismo del Colesterol",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Metabolismo del colesterol y los esteroides.docx",
		"class": "cap-a",
	});
	$(".row12").find("a").eq(1).html("Metabolismo del Colesterol").attr({
		title: "Descarga Resumen de Metabolismo del Colesterol",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Metabolismo del colesterol y los esteroides.docx",
		"class": "cap-b",
	});
	$(".row12").find("td").eq(2).html("17");
	$(".row12").find("td").eq(3).html("2016O11A203RES12").attr({
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
		title: " Descarga Resumen de Metabolismo de las Lipoproteínas",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Metabolismo de Lipoproteínas.docx",
		"class": "cap-a",
	});
	$(".row13").find("a").eq(1).html("Metabolismo de las Lipoproteínas").attr({
		title: "Descarga Resumen de Metabolismo de las Lipoproteínas",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Metabolismo de Lipoproteínas.docx",
		"class": "cap-b",
	});
	$(".row13").find("td").eq(2).html("18");
	$(".row13").find("td").eq(3).html("2016O11A203RES13").attr({
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
		title: " Descarga Resumen de Integración de Vías Metabólicas",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Integración Vías Metabólicas.docx",
		"class": "cap-a",
	});
	$(".row14").find("a").eq(1).html("Integración de Vías Metabólicas").attr({
		title: "Descarga Resumen de Integración de Vías Metabólicas",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Integración Vías Metabólicas.docx",
		"class": "cap-b",
	});
	$(".row14").find("td").eq(2).html("19 - 20");
	$(".row14").find("td").eq(3).html("2016O11A203RES14").attr({
		"class": "code",
	});
	//row 15-a
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row15a",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row15a").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen de Errores Congénitos del Metabolismo",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Capítulo 20 anomalias de aminoacidos.pdf",
		"class": "cap-a",
	});
	$(".row15a").find("a").eq(1).html("Errores Congénitos del Metabolismo").attr({
		title: "Descarga Resumen de Errores Congénitos del Metabolismos",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Capítulo 20 anomalias de aminoacidos.pdf",
		"class": "cap-b",
	});
	$(".row15a").find("td").eq(2).html("22");
	$(".row15a").find("td").eq(3).html("2016O11A203RES15").attr({
		"class": "code",
	});
	//row 15
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row15",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row15").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen de Metabolismo de las Porfirinas y Bilirrubinas",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Porfirinas y Bilirrubinas.docx",
		"class": "cap-a",
	});
	$(".row15").find("a").eq(1).html("Metabolismo de las Porfirinas y Bilirrubinas").attr({
		title: "Descarga Resumen de Metabolismo de las Porfirinas y Bilirrubinas",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Porfirinas y Bilirrubinas.docx",
		"class": "cap-b",
	});
	$(".row15").find("td").eq(2).html("25 - 26");
	$(".row15").find("td").eq(3).html("2016O11A203RES16").attr({
		"class": "code",
	});
	//row 16
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row16",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row16").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen de Hemoglobina y  Mioglobina",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Hemoglobina y Mioglobina.docx",
		"class": "cap-a",
	});
	$(".row16").find("a").eq(1).html("Hemoglobina y  Mioglobina").attr({
		title: "Descarga Resumen de Hemoglobina y  Mioglobina",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Hemoglobina y Mioglobina.docx",
		"class": "cap-b",
	});
	$(".row16").find("td").eq(2).html("27");
	$(".row16").find("td").eq(3).html("2016O11A203RES17").attr({
		"class": "code",
	});
	//row 17
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row17",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row17").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen de Equilibrio Acido Base",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Propiedades Ácidas y Básicas de los Aminoácidos.docx",
		"class": "cap-a",
	});
	$(".row17").find("a").eq(1).html("Equilibrio Acido Base").attr({
		title: "Descarga Resumen de Equilibrio Acido Base",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Propiedades Ácidas y Básicas de los Aminoácidos.docx",
		"class": "cap-b",
	});
	$(".row17").find("td").eq(2).html("28");
	$(".row17").find("td").eq(3).html("2016O11A203RES18").attr({
		"class": "code",
	});
	//row 18 
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row18",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row18").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen de Coagulación Sanguínea",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Coagulación.docx",
		"class": "cap-a",
	});
	$(".row18").find("a").eq(1).html("Coagulación Sanguínea").attr({
		title: "Descarga Resumen de Coagulación Sanguínea",
		href: "medicinaresources_staticfiles/bioquimica/resumenes/Coagulación.docx",
		"class": "cap-b",
	});
	$(".row18").find("td").eq(2).html("29");
	$(".row18").find("td").eq(3).html("2016O11A203RES19").attr({
		"class": "code",
	});
	//end
})