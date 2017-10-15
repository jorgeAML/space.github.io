$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de bioqui_labcas.html
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Laboratorios y Casos Clínicos.").attr({
		title: "Descargar Laboratorios y Casos Clínicos.",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/bioquimica_lab_casos.zip",
		"class": "aml-anat",
	});
	$(".aml-body").find("p").eq(1).html("Todos los laboratorios y Casos Clínicos pertenecen a la programación del año 2017, se espera que los documentos tengan un enfoque dinámico con el profesor guía.");
	$(".aml-body").find("p").eq(2).html("Para Terceros: Los documentos disponibles son laboratorios con base experimental, llevados a cabo en un laboratorio de nivel 1. Los casos clínicos estan a disposición para resolverlos individualmente.");
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
		html: "<tr><th style='color: #007e6c;'>Descargar</th><th style='color: #d2d1d2;'>Laboratorios de Bioquímica</th><th style='color: #007e6c;'>Semana</th><th style='color: #d2d1d2;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #353c45;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Laboratorio de Hidrólisis de Almidón",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab1_hidrolisis_almidon.pdf",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Hidrólisis de Almidón").attr({
		title: "Descargar Laboratorio de Hidrólisis de Almidón",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab1_hidrolisis_almidon.pdf",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("2");
	$("tbody").find("td").eq(3).html("2017S30A203LAB1").attr({
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
		title: " Descarga Laboratorio Fotometria y Bioseguridad",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab2_fotometria.pdf",
		"class": "cap-a",
	});
	$(".row2srl").find("a").eq(1).html("Fotometria y Bioseguridad").attr({
		title: "Descarga Laboratorio Fotometria y Bioseguridad",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab2_fotometria.pdf",
		"class": "cap-b",
	});
	$(".row2srl").find("td").eq(2).html("4 - 5");
	$(".row2srl").find("td").eq(3).html("2017S30A203LAB2").attr({
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
		title: " Descarga Laboratorio de Glicemia",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab3_glicemia.pdf",
		"class": "cap-a",
	});
	$(".row3").find("a").eq(1).html("Glicemia").attr({
		title: "Descarga Laboratorio de Glicemia",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab3_glicemia.pdf",
		"class": "cap-b",
	});
	$(".row3").find("td").eq(2).html("6 - 7");
	$(".row3").find("td").eq(3).html("2017S30A203LAB3").attr({
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
		title: " Descarga Laboratorio de Integración de Proteínas",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab_integracion_proteinas.pdf",
		"class": "cap-a",
	});
	$(".row4").find("a").eq(1).html("Integración de Proteínas").attr({
		title: "Descarga Laboratorio de Integración de Proteínas",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab_integracion_proteinas.pdf",
		"class": "cap-b",
	});
	$(".row4").find("td").eq(2).html("11");
	$(".row4").find("td").eq(3).html("2017S30A203LAB4").attr({
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
		title: " Descarga Laboratorio de Triacilgliceroles",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab4_tag.pdf",
		"class": "cap-a",
	});
	$(".row5").find("a").eq(1).html("Triacilgliceroles").attr({
		title: "Descarga Laboratorio de Triacilgliceroles",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab4_tag.pdf",
		"class": "cap-b",
	});
	$(".row5").find("td").eq(2).html("15 - 16");
	$(".row5").find("td").eq(3).html("2017S30A203LAB5").attr({
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
		title: " Descarga Laboratorio de Colesterolemia",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab5_colesterolemia.pdf",
		"class": "cap-a",
	});
	$(".row6").find("a").eq(1).html("Colesterolemia").attr({
		title: "Descarga Laboratorio de Colesterolemia",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab5_colesterolemia.pdf",
		"class": "cap-b",
	});
	$(".row6").find("td").eq(2).html("17");
	$(".row6").find("td").eq(3).html("2017S30A203LAB6").attr({
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
		title: " Descarga Laboratorio de Genética",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab6_genetica.pdf",
		"class": "cap-a",
	});
	$(".row7").find("a").eq(1).html("Genética").attr({
		title: "Descarga Laboratorio de Genética",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab6_genetica.pdf",
		"class": "cap-b",
	});
	$(".row7").find("td").eq(2).html("23");
	$(".row7").find("td").eq(3).html("2017S30A203LAB7").attr({
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
		title: " Descarga Laboratorio de Ácido Úrico",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab7_acido_urico.pdf",
		"class": "cap-a",
	});
	$(".row8").find("a").eq(1).html("Ácido Úrico").attr({
		title: "Descarga Laboratorio de Ácido Úrico",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab7_acido_urico.pdf",
		"class": "cap-b",
	});
	$(".row8").find("td").eq(2).html("24 - 25");
	$(".row8").find("td").eq(3).html("2017S30A203LAB8").attr({
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
		title: " Descarga Laboratorio de Hemoglobina",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab8_hemoglobina.pdf",
		"class": "cap-a",
	});
	$(".row9").find("a").eq(1).html("Hemoglobina").attr({
		title: "Descarga Laboratorio de Hemoglobina",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab8_hemoglobina.pdf",
		"class": "cap-b",
	});
	$(".row9").find("td").eq(2).html("27");
	$(".row9").find("td").eq(3).html("2017S30A203LAB9").attr({
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
		title: " Descarga Laboratorio de Coagulación",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab9_coagulacion.pdf",
		"class": "cap-a",
	});
	$(".row10").find("a").eq(1).html("Coagulación").attr({
		title: "Descarga Laboratorio de Coagulación",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/lab9_coagulacion.pdf",
		"class": "cap-b",
	});
	$(".row10").find("td").eq(2).html("29");
	$(".row10").find("td").eq(3).html("2017S30A203LAB10").attr({
		"class": "code",
	});
	//head 2
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "table2",
		html: "<tr><th style='color: #007e6c;'>Descargar</th><th style='color: #d2d1d2;'>Casos Clínicos de Bioquímica</th><th style='color: #007e6c;'>Semana</th><th style='color: #d2d1d2;'>Código</th> </tr>"
	});
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		"class": "table2a",
		html: "<tr style='background-color: #353c45;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$(".table2a").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Caso Clínico de Anemia Megaloblastica",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc1_anemia_megalob.pdf",
		"class": "cap-a",
	});
	$(".table2a").find("a").eq(1).html("Anemia Megaloblastica").attr({
		title: "Descargar Caso Clínico de Anemia Megaloblastica",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc1_anemia_megalob.pdf",
		"class": "cap-b",
	});
	$(".table2a").find("td").eq(2).html("3");
	$(".table2a").find("td").eq(3).html("2017S30A203CC1").attr({
		"class": "code",
	});
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".table2a",
		"class": "row11",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row11").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Caso Clínico de Anemia Hemolítica",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc2_anemia_hemolitica.pdf",
		"class": "cap-a",
	});
	$(".row11").find("a").eq(1).html("Anemia Hemolítica").attr({
		title: "Descarga Caso Clínico de Anemia Hemolítica",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc2_anemia_hemolitica.pdf",
		"class": "cap-b",
	});
	$(".row11").find("td").eq(2).html("8");
	$(".row11").find("td").eq(3).html("2017S30A203CC2").attr({
		"class": "code",
	});
	//row 12
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".table2a",
		"class": "row12",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row12").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Caso Clínico de Intoxicación por Monóxido de Carbono",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc3_intox_monoxido.pdf",
		"class": "cap-a",
	});
	$(".row12").find("a").eq(1).html("Intoxicación por Monóxido de Carbono").attr({
		title: "Descarga Caso Clínico de Intoxicación por Monóxido de Carbono",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc3_intox_monoxido.pdf",
		"class": "cap-b",
	});
	$(".row12").find("td").eq(2).html("12");
	$(".row12").find("td").eq(3).html("2017S30A203CC3").attr({
		"class": "code",
	});
	//row 13
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".table2a",
		"class": "row13",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row13").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Caso Clínico de Coma Hepático",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc4_coma_hepatico.pdf",
		"class": "cap-a",
	});
	$(".row13").find("a").eq(1).html("Coma Hepático").attr({
		title: "Descarga Caso Clínico de Coma Hepático",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc4_coma_hepatico.pdf",
		"class": "cap-b",
	});
	$(".row13").find("td").eq(2).html("10");
	$(".row13").find("td").eq(3).html("2017S30A203CC4").attr({
		"class": "code",
	});
	//row 14
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".table2a",
		"class": "row14",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row14").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Caso Clínico de Dislipidemia",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc5_dislipidemia.pdf",
		"class": "cap-a",
	});
	$(".row14").find("a").eq(1).html("Dislipidemia").attr({
		title: "Descarga Caso Clínico de Dislipidemia",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc5_dislipidemia.pdf",
		"class": "cap-b",
	});
	$(".row14").find("td").eq(2).html("14");
	$(".row14").find("td").eq(3).html("2017S30A203CC5").attr({
		"class": "code",
	});
	//row 15
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".table2a",
		"class": "row15",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row15").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Caso Clínico de Carnitina",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc6_carnitina.pdf",
		"class": "cap-a",
	});
	$(".row15").find("a").eq(1).html("Carnitina").attr({
		title: "Descarga Caso Clínico de Carnitina",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc6_carnitina.pdf",
		"class": "cap-b",
	});
	$(".row15").find("td").eq(2).html("13");
	$(".row15").find("td").eq(3).html("2017S30A203CC6").attr({
		"class": "code",
	});
	//row 16
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".table2a",
		"class": "row16",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row16").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Caso Clínico de Bilirrubinas",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc7_bilirrubinas.pdf",
		"class": "cap-a",
	});
	$(".row16").find("a").eq(1).html("Bilirrubinas").attr({
		title: "Descarga Caso Clínico de Bilirrubinas",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc7_bilirrubinas.pdf",
		"class": "cap-b",
	});
	$(".row16").find("td").eq(2).html("26");
	$(".row16").find("td").eq(3).html("2017S30A203CC7").attr({
		"class": "code",
	});
	//row 17
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".table2a",
		"class": "row17",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row17").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Caso Clínico de Cetoacidosis Diabetica",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc8_cetoacidosis.pdf",
		"class": "cap-a",
	});
	$(".row17").find("a").eq(1).html("Cetoacidosis Diabetica").attr({
		title: "Descarga Caso Clínico de Cetoacidosis Diabetica",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc8_cetoacidosis.pdf",
		"class": "cap-b",
	});
	$(".row17").find("td").eq(2).html("28");
	$(".row17").find("td").eq(3).html("2017S30A203CC8").attr({
		"class": "code",
	});
	//row 18
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".table2a",
		"class": "row18",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #353c45;",
	});
	$(".row18").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Caso Clínico de Xenobióticos",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc9_xenobioticos.pdf",
		"class": "cap-a",
	});
	$(".row18").find("a").eq(1).html("Xenobióticos").attr({
		title: "Descarga Caso Clínico de Xenobióticos",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/cc9_xenobioticos.pdf",
		"class": "cap-b",
	});
	$(".row18").find("td").eq(2).html("30");
	$(".row18").find("td").eq(3).html("2017S30A203CC9").attr({
		"class": "code",
	});
	//row 19
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".table2a",
		"class": "row19",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #353c45;",
	});
	$(".row19").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Informe de Casos Clínicos",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/informe-caso-clinico.pdf",
		"class": "cap-a",
	});
	$(".row19").find("a").eq(1).html("Informe de Casos Clínicos").attr({
		title: "Descarga Informe de Casos Clínicos",
		href: "medicinaresources_staticfiles/bioquimica/laboratorios/informe-caso-clinico.pdf",
		"class": "cap-b",
	});
	$(".row19").find("td").eq(2).html("1");
	$(".row19").find("td").eq(3).html("2017S30A203CC10").attr({
		"class": "code",
	});
	//end
})