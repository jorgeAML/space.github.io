$(document).ready(function () {
	/*
	Archivo principal da instrucciones a las siguientes páginas:
	--bioqui_inicio.html--
	*/
	$("<div/>", {
		href: "histo_present.html",
		"appendTo": ".list-group-js",
		"class": "container-fluid",
		html: "<div class='row rowjs'><div class='col-sm-3 aml_banner aml-ps'></div></div>",
	});
	$("<div/>", {
		//href: "index_histo.html",
		"appendTo": ".aml_banner",
		//"insertAfter": ".aml_banner",
		"class": "list-group-aml gradient-aml",
		html: "<a/><a/><a/><a/><a/><a/><a/><a/><a/><a/><a/>",
	});
	$(".list-group-aml").find("a").eq(0).html("Programación <span class='badge-aml'>8</span>").attr({
		title: "Programacion de Bioquímica",
		href: "bioqui_inicio.html",
		"class": "list-group-item-aml",
	});
	$(".list-group-aml").find("a").eq(1).html("Libros <span class='badge-aml'>4</span>").attr({
		title: "Libros de Bioquímica",
		href: "bioqui_books.html",
		"class": "list-group-item-aml",
	});
	$(".list-group-aml").find("a").eq(2).html("Laboratorios y Casos Clínicos <span class='badge-aml'>20</span>").attr({
		title: "Laboratorios y Casos Clínicos de Bioquímica",
		href: "bioqui_labcas.html",
		"class": "list-group-item-aml",
	});
	//laboratorios
	$(".list-group-aml").find("a").eq(3).html("Guías de Estudio <span class='badge-aml'>17</span>").attr({
		title: "laboratorios de Bioquímica",
		href: "bioqui_Guias.html",
		"class": "list-group-item-aml",
	});
	$(".list-group-aml").find("a").eq(4).html("Presentaciones 1 <span class='badge-aml'>26</span>").attr({
		title: "Presentaciones de Bioquímica",
		href: "bioqui_present.html",
		"class": "list-group-item-aml",
	});
	//$(".list-group-aml").find("a").eq(5).html("Presentaciones 2 <span class='badge-aml'>38</span>").attr({
		//title: "Presentaciones de Bioquímica",
		//href: "bioqui_present2.html",
		//"class": "list-group-item-aml",
	//});
	$(".list-group-aml").find("a").eq(5).html("Resumenes <span class='badge-aml'>19</span>").attr({
		title: "Resumenes de Bioquímica",
		href: "bioqui_resumenes.html",
		"class": "list-group-item-aml",
	});
	$(".list-group-aml").find("a").eq(6).html("Panuccis <span class='badge-aml'>10</span>").attr({
		title: "Panuccis",
		href: "bioqui_panucci.html",
		"class": "list-group-item-aml",
	});
	$(".list-group-aml").find("a").eq(7).html("Examenes <span class='badge-aml'>35</span>").attr({
		title: "Examenes de Bioquímica",
		href: "bioqui_examenes.html",
		"class": "list-group-item-aml",
	});
	
	////
	//////
	////////
	/////////// AML mode night 
	////////
	//////
	////
	$("<div/>", {
		//href: "index_histo.html",
		"appendTo": ".aml_banner",
		"insertAfter": ".aml-panel",
		"class": "mode-night center modejs gradient-aml",
		html: "<h3><i class='icon-rocket-launch'></i> USpace...</h3><p/>",
	});
	$(".mode-night").find("p").eq(0).html("Navega por el Universo de MedicinaResources con nuestro tema USpace, esperamos que te guste!").attr({
		"class": "p-army",
	});
	////
	//////
	////////
	/////////// Version 1.1 Refresh 
	////////
	//////
	////
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".rowjs",
		"insertAfter": ".col-md-6 .col-sm-3",
		"class": "col-sm-3 aml_banner coljs",
		html: "<div class='mode-night centerio gradient-aml'></div>",
	});
	$("<p/>", {
		href: "index_histo.html",
		"appendTo": ".mode-night",
		html: "<i class='icon-refresh'></i>&nbsp;&nbsp;&nbsp;Actualizado el 30 de Septiembre 2017.",
	});
	////
	//////
	////////
	/////////// Iframe Facebook 
	////////
	//////
	////
	//
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".coljs",
		"insertAfter": ".mode-night",
		html: "<iframe class='iframe-facebook' src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcsuca%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true'></iframe>",
		"class": "mode-night aml_banner ifram1 top-desktop-3 gradient-aml",
		//"style": "border: 1px solid #e8d174;",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".ifram1",
		//"insertAfter": "ifram1",
		html: "<iframe src='https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fcsuca%2F&width=214&layout=button_count&action=like&size=large&show_faces=true&share=true&height=46&appId' width='214' height='28' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true'></iframe>",
		"class": "mode-night aml_banner iframe2 centerio",
	});
	$(".iframe-facebook").attr({
		//"class": "px-gradient",
		"style": "border: 2px solid #212221;",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".col-sm-3",
		"insertAfter": ".iframe1",
		html: "<p>Comparte nuestra página con tus amigos.</p><iframe src='https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fwww.medicinaresources.com%2Findex_histo.html&layout=button&size=large&mobile_iframe=true&width=99&height=28&appId' width='99' height='28' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true'></iframe>",
		"class": "mode-night aml_banner iframe3 centerio top-desktop-3 gradient-aml",
	});
	//Este archivo sera copiado en todas las páginas siguientes.
	/*
	Observar que la clase aml-ps es el contendor para los paneles, la lista y el modo noche,
	si quieres insertar una tabla u algun objeto posicionalo despues de esta clase.
	Insertandolo dentro de la clase: .rowjs y despues en la .aml-ps

	El problema empieza en el REFRESH que debes cambiar el APPENDTO siempre a la clase que elijas en este caso
	fue a /.rowjs/ y colocar una INSERCIONAFTER /col-md-6/ este siempre cambiara a cualquier clase que elijas
	ya sea una como col-sm-3 depende del contendor que quieras meter!

	IFRAME FACEBOOK insertarlo en la clase: /.coljs/ para que quede en la columna de la derecha!

	Las secciones que debes tener cuidado son la de en medio y la columand derecha cuida tus inserciones dentro y despues!

	att. Jorge AML Fundador de MedicinaResources y AML Productions.
	*/
})
