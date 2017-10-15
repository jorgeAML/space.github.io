$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de bioqui_books.html
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
		html: "<p><a/></p><p/>",
	});
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Libros de Bioquímica.").attr({
		title: "Descargar Libros de Bioquímica peso 531MB.",
		href: "medicinaresources_staticfiles/bioquimica/libros/bioqui_libros.zip",
		"class": "aml-anat",
	});
	$(".aml-body").find("p").eq(1).html("Descarga los libros recomendados por Doctores de la USAC, estos cubren lo necesario para un curso básico y avanzado de bioquímica.")
	////////
	///////////containers books
	////////
	//////
	////
	$("<div/>",{
		//"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner book-c1 media_cont",
	});
	$("<div/>", {
		"appendTo": ".book-c1",
		"class": "army-container c1 gradient-aml",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c1").find("a").eq(0).html("<img class='img-army-md4' src='medicinaresources_staticfiles/bioquimica/imagenes_libros/bioquitwoedit.jpg'>").attr({
		title: "Descarga Bioquimica de Harvey 5ta. Edicion",
		href: "medicinaresources_staticfiles/bioquimica/libros/1 Bioquimica Harvey 5a.pdf",
	});
	$(".c1").find("h2").eq(0).html("Bioquimica de Harvey 5ta. Edicion").attr({
		"class": "aml-p-army",
	})
	$(".c1").find("p").eq(0).html("Bibliografía oficial de la cátedra de Bioquímica.").attr({
		"class": "aml-p-army",
	});
	$(".c1").find("a").eq(1).html("Descargar").attr({
		title: "Descarga Bioquimica de Harvey 5ta. Edicion",
		href: "medicinaresources_staticfiles/bioquimica/libros/1 Bioquimica Harvey 5a.pdf",
		"class": "cap-b army-button",
	});
	//container 2
		$("<div/>",{
		//"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner book-c2 media_cont",
	});
	$("<div/>", {
		"appendTo": ".book-c2",
		"insertAfter": "c1",
		"class": "army-container c2 gradient-aml",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c2").find("a").eq(0).html("<img class='img-army-md4' src='medicinaresources_staticfiles/bioquimica/imagenes_libros/bioquioneedit.jpg'>").attr({
		title: "Descarga Bioquimica de Baynes 3ra. Edicion",
		href: "medicinaresources_staticfiles/bioquimica/libros/2 Bioquimica Medica Baynes 3ra.pdf",
	});
	$(".c2").find("h2").eq(0).html("Bioquímica de Baynes 3ra. Edicion").attr({
		"class": "aml-p-army",
	})
	$(".c2").find("p").eq(0).html("Bibliografía oficial de la cátedra de Bioquímica.").attr({
		"class": "aml-p-army",
	});
	$(".c2").find("a").eq(1).html("Descargar").attr({
		title: "Descarga Bioquímica de Baynes 3ra. Edicion",
		href: "medicinaresources_staticfiles/bioquimica/libros/2 Bioquimica Medica Baynes 3ra.pdf",
		"class": "cap-b army-button",
	});
	//container row 1
	$("<div/>", {
		"appendTo": ".book-c2",
		"insertAfter": "c2",
		"class": "army-container c3 gradient-aml aml_banner_containerbooks",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c3").find("a").eq(0).html("<img class='img-army-md4' src='medicinaresources_staticfiles/bioquimica/imagenes_libros/bioquithreeedit.jpg'>").attr({
		title: "Descarga Bioquímica de Horton 4ta. Edicion",
		href: "medicinaresources_staticfiles/bioquimica/libros/4 Principios de bioquimica 4ed Horton.PDF",
	});
	$(".c3").find("h2").eq(0).html("Bioquímica de Horton 4ta. Edicion").attr({
		"class": "aml-p-army",
	})
	$(".c3").find("p").eq(0).html("Bibliografía oficial de la cátedra de Bioquímica.").attr({
		"class": "aml-p-army",
	});
	$(".c3").find("a").eq(1).html("Descargar").attr({
		title: "Descarga Bioquímica de Horton 4ta. Edicion",
		href: "medicinaresources_staticfiles/bioquimica/libros/4 Principios de bioquimica 4ed Horton.PDF",
		"class": "cap-b army-button",
	});
	//container row 2
	$("<div/>", {
		"appendTo": ".book-c1",
		"insertAfter": "c1",
		"class": "army-container c4 gradient-aml aml_banner_containerbooks",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c4").find("a").eq(0).html("<img class='img-army-md4' src='medicinaresources_staticfiles/bioquimica/imagenes_libros/bioquitwoedit.jpg'>").attr({
		title: "Descarga Coagulación Sanguínea de Harvey",
		href: "medicinaresources_staticfiles/bioquimica/libros/coagulacion-harvey.pdf",
	});
	$(".c4").find("h2").eq(0).html("Coagulación Sanguínea de Harvey").attr({
		"class": "aml-p-army",
	})
	$(".c4").find("p").eq(0).html("Bibliografía oficial de la cátedra de Bioquímica.").attr({
		"class": "aml-p-army",
	});
	$(".c4").find("a").eq(1).html("Descargar").attr({
		title: "Descarga Coagulación Sanguínea de Harvey",
		href: "medicinaresources_staticfiles/bioquimica/libros/coagulacion-harvey.pdf",
		"class": "cap-b army-button",
	});
})