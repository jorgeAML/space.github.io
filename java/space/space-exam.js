$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de bioqui_examenes.html
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Examenes v1.1.").attr({
		title: "Descargar Examenes.",
		href: "medicinaresources_staticfiles/bioquimica/parciales/bioquiparciales.zip",
		"class": "aml-anat",
	});
	$(".aml-body").find("p").eq(1).html("Utiliza los examenes para estudiar los tipos de pregunta hechos en examenes reales y así preparate mucho mejor para la próxima evaluación.");
	////
	//////
	////////
	/////////// container for parciales 'histo_examenes.html' 
	////////
	//////
	////
		$("<div/>",{
		"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner contpar",
	});
	$("<div/>", {
		"appendTo": ".contpar",
		"class": "cont1 army-container gradient-aml",
		html:"<h3/><hr class='ultimate-aml-hr'><ol><li/></ol><a/>",
	});
	$(".cont1").find("h3").eq(0).html("Parciales 2007").attr({
		"class": "aml-p-army",
	});
	$(".cont1").find("li").eq(0).html("Segundo parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont1").find("a").eq(0).html("Descargar Parcial 2007").attr({
		title: "Descargar Segundo Parcial 2007",
		href: "medicinaresources_staticfiles/bioquimica/parciales/Segundo Parcial 2007.pdf",
		"class": "cap-b army-button",
	});
	//container 1a
	$("<div/>", {
		"appendTo": ".contpar",
		"class": "cont1a army-container gradient-aml aml_banner_containerbooks",
		html:"<h3/><hr class='ultimate-aml-hr'><ol><li/></ol><a/>",
	});
	$(".cont1a").find("h3").eq(0).html("Parciales 2008").attr({
		"class": "aml-p-army",
	});
	$(".cont1a").find("li").eq(0).html("Segundo parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont1a").find("a").eq(0).html("Descargar Parcial 2008").attr({
		title: "Descargar Segundo Parcial 2008",
		href: "medicinaresources_staticfiles/bioquimica/parciales/Segundo Parcial 2008.pdf",
		"class": "cap-b army-button",
	});
	//conatiner 1b
	$("<div/>", {
		"appendTo": ".contpar",
		"class": "cont1b army-container gradient-aml aml_banner_containerbooks",
		html:"<h3/><hr class='ultimate-aml-hr'><ol><li/><li/></ol><a/>",
	});
	$(".cont1b").find("h3").eq(0).html("Parciales 2009").attr({
		"class": "aml-p-army",
	});
	$(".cont1b").find("li").eq(0).html("Segundo parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont1b").find("li").eq(1).html("Examen Final.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont1b").find("a").eq(0).html("Descargar Parcial 2009").attr({
		title: "Descargar Segundo Parcial 2009",
		href: "medicinaresources_staticfiles/bioquimica/parciales/2009.zip",
		"class": "cap-b army-button",
	});
	//container 1c
	$("<div/>", {
		"appendTo": ".contpar",
		"class": "cont1c army-container gradient-aml aml_banner_containerbooks",
		html:"<h3/><hr class='ultimate-aml-hr'><ol><li/></ol><a/>",
	});
	$(".cont1c").find("h3").eq(0).html("Parciales 2010").attr({
		"class": "aml-p-army",
	});
	$(".cont1c").find("li").eq(0).html("Examen Final.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont1c").find("a").eq(0).html("Descargar Parcial 2010").attr({
		title: "Descargar Segundo Parcial 2010",
		href: "medicinaresources_staticfiles/bioquimica/parciales/2010 Final Bioquímica 60.pdf",
		"class": "cap-b army-button",
	});
	//container 1d
	$("<div/>", {
		"appendTo": ".contpar",
		"class": "cont1d army-container gradient-aml aml_banner_containerbooks",
		html:"<h3/><hr class='ultimate-aml-hr'><ol><li/><li/><li/><li/></ol><a/>",
	});
	$(".cont1d").find("h3").eq(0).html("Parciales 2011").attr({
		"class": "aml-p-army",
	});
	$(".cont1d").find("li").eq(0).html("Segundo Parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont1d").find("li").eq(1).html("Tercer Parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont1d").find("li").eq(2).html("Examen Final.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont1d").find("li").eq(3).html("Examen de Recuperación 1.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont1d").find("a").eq(0).html("Descargar Parcial 2011").attr({
		title: "Descargar Segundo Parcial 2011",
		href: "medicinaresources_staticfiles/bioquimica/parciales/2011.zip",
		"class": "cap-b army-button",
	});
	//container 1e
	$("<div/>", {
		"appendTo": ".contpar",
		"class": "cont1e army-container gradient-aml aml_banner_containerbooks",
		html:"<h3/><hr class='ultimate-aml-hr'><ol><li/><li/></ol><a/>",
	});
	$(".cont1e").find("h3").eq(0).html("Parciales 2012").attr({
		"class": "aml-p-army",
	});
	$(".cont1e").find("li").eq(0).html("Segundo Parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont1e").find("li").eq(1).html("Tercer Parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont1e").find("a").eq(0).html("Descargar Parcial 2012").attr({
		title: "Descargar Segundo Parcial 2012",
		href: "medicinaresources_staticfiles/bioquimica/parciales/2012.zip",
		"class": "cap-b army-button",
	});
	//container 2
	//
	//
	//second container
	//
	//
	$("<div/>",{
		"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner contpar2",
	});
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont2 army-container gradient-aml",
		html:"<h3/><hr class='ultimate-aml-hr'><ol><li/><li/><li/><li/><li/></ol><a/>",
	});
		$(".cont2").find("h3").eq(0).html("Parciales 2017").attr({
		"class": "aml-p-army",
	});
	$(".cont2").find("li").eq(0).html("Primer parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2").find("li").eq(1).html("Segundo parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2").find("li").eq(2).html("Tercer parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2").find("li").eq(3).html("Cuarto parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2").find("li").eq(4).html("Quinto parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2").find("a").eq(0).html("Descargar Parciales 2017").attr({
		title: "Descargar Segundo Parciales 2017",
		href: "medicinaresources_staticfiles/bioquimica/parciales/Parciales 2017.zip",
		"class": "cap-b army-button",
	});
	//container 2-A
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont2a army-container gradient-aml aml_banner_containerbooks",
		html:"<h3/><hr class='ultimate-aml-hr'><ol><li/><li/><li/><li/></ol><a/>",
	});
	$(".cont2a").find("h3").eq(0).html("Parciales 2016").attr({
		"class": "aml-p-army",
	});
	$(".cont2a").find("li").eq(0).html("Primer parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2a").find("li").eq(1).html("Segundo parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2a").find("li").eq(2).html("Tercer parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2a").find("li").eq(3).html("Cuarto parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2a").find("a").eq(0).html("Descargar Parciales 2016").attr({
		title: "Descargar Segundo Parciales 2016",
		href: "medicinaresources_staticfiles/bioquimica/parciales/Parciales B. 2016.zip",
		"class": "cap-b army-button",
	});
	//container 2b
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont2b army-container gradient-aml aml_banner_containerbooks",
		html:"<h3/><hr class='ultimate-aml-hr'><ol><li/><li/><li/><li/><li/><li/><li/><li/></ol><a/>",
	});
	$(".cont2b").find("h3").eq(0).html("Parciales 2015").attr({
		"class": "aml-p-army",
	});
	$(".cont2b").find("li").eq(0).html("Primer parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2b").find("li").eq(1).html("Segundo parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2b").find("li").eq(2).html("Tercer parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2b").find("li").eq(3).html("Cuarto parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2b").find("li").eq(4).html("Quinto parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2b").find("li").eq(5).html("Examen Final.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2b").find("li").eq(6).html("Examen de Recuperación 1.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2b").find("li").eq(7).html("Examen de Recuperación 2.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2b").find("a").eq(0).html("Descargar Parciales 2015").attr({
		title: "Descargar Segundo Parciales 2015",
		href: "medicinaresources_staticfiles/bioquimica/parciales/2015.zip",
		"class": "cap-b army-button",
	});
	//container 2c
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont2c army-container gradient-aml aml_banner_containerbooks",
		html:"<h3/><hr class='ultimate-aml-hr'><ol><li/><li/><li/></ol><a/>",
	});
	$(".cont2c").find("h3").eq(0).html("Parciales 2014").attr({
		"class": "aml-p-army",
	});
	$(".cont2c").find("li").eq(0).html("Segundo parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2c").find("li").eq(1).html("Examen Final.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2c").find("li").eq(2).html("Examen de Recuperación 2.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2c").find("a").eq(0).html("Descargar Parciales 2014").attr({
		title: "Descargar Segundo Parciales 2014",
		href: "medicinaresources_staticfiles/bioquimica/parciales/2014.zip",
		"class": "cap-b army-button",
	});
	//container 2d
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont2d army-container gradient-aml aml_banner_containerbooks",
		html:"<h3/><hr class='ultimate-aml-hr'><ol><li/><li/><li/><li/></ol><a/>",
	});
	$(".cont2d").find("h3").eq(0).html("Parciales 2013").attr({
		"class": "aml-p-army",
	});
	$(".cont2d").find("li").eq(0).html("Segundo parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2d").find("li").eq(1).html("Tercer Parcial.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2d").find("li").eq(2).html("Examen Final.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2d").find("li").eq(3).html("Examen de Recuperación 2.").attr({
		"class": "aml-p-army-left",
	});
	$(".cont2d").find("a").eq(0).html("Descargar Parciales 2013").attr({
		title: "Descargar Segundo Parciales 2013",
		href: "medicinaresources_staticfiles/bioquimica/parciales/2013.zip",
		"class": "cap-b army-button",
	});
})