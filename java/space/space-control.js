$(document).ready(function () {
	//
	/////
	////////
	////////////The nav of bootstrap.
	////////
	/////
	//
	$("<nav/>", {
		href: "index_histo.html",
		"appendTo": "#space-nav",
		"class": "navbar navbar-inverse navbar-fixed-top nav-insert space-nav1",
		"style": "background-color: #20242c; border-bottom: 2px solid #e8702a; box-shadow: 0px 1px 1px 1px #111111;",
	});
	$("<div/>",{
		href: "index_histo.html",
		"appendTo": ".nav-insert",
		"class": "container nav-insert2",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".nav-insert2",
		"class": "navbar-header nav-insert3",
		html: "<button><span/><span/><span/><span/></button><img><a/>",
	});
	$(".nav-insert3").find("button").eq(0).attr({
		"class": "navbar-toggle collapsed",
		"type": "button",
		"data-toggle": "collapse",
		"data-target": "#navbar",
		"aria-expanded": "false",
		"aria-controls": "navbar",
	});
	$(".nav-insert3").find("span").eq(0).html("Toggle navigation").attr({
		"class": "sr-only",
	});
	$(".nav-insert3").find("span").eq(1).html("").attr({
		"class": "icon-bar",
	});
	$(".nav-insert3").find("span").eq(2).html("").attr({
		"class": "icon-bar",
	});
	$(".nav-insert3").find("span").eq(3).html("").attr({
		"class": "icon-bar",
	});
	$(".nav-insert3").find("img").eq(0).attr({
		"class": "imgspace",
		"src": "pictures/space4.png",
	});
	$(".nav-insert3").find("a").eq(0).html("MedicinaResources.com").attr({
		"class": "navbar-brand",
		href: "index.html",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".nav-insert2",
		"insertAfter": ".nav-insert3",
		"id": "navbar",
		"class": "collapse navbar-collapse nav-insert4",
		html: "<ul> <li><a/></li><li><a/></li><li><a/></li> <li><a/> <ul><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li> <li/><li/> <li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li> </ul>   </li>   </ul>",
	});
	$(".nav-insert4").find("ul").eq(0).attr({
		"class": "nav navbar-nav",
	});
	$(".nav-insert4").find("a").eq(0).html("ayuda").attr({
		"class": "asphalt-nav tron-nav-control",
		href: "ayuda2.html",
	});
	$(".nav-insert4").find("a").eq(1).html("contacto").attr({
		href: "contacto.html",
		"class": "tron-nav-control",
	});
	$(".nav-insert4").find("a").eq(2).html("Información").attr({
		href: "informacion.html",
		"class": "tron-nav-control",
	});
	$(".nav-insert4").find("li").eq(3).attr({
		"class": "dropdown",
	});
	$(".nav-insert4").find("a").eq(3).html("Cátedras y Libros <span class='caret'></span>").attr({
		"class": "dropdown-toggle tron-nav-control",
		"data-toggle": "dropdown",
		"role": "button",
		"aria-haspopup": "true",
		"aria-expanded": "false",
	});
	$(".nav-insert4").find("ul").eq(1).attr({
		"class": "dropdown-menu",
	});
	$(".nav-insert4").find("a").eq(4).html("Cátedra de Anatomía").attr({
		href: "https://sites.google.com/site/medusacanatomia/",
	});
	$(".nav-insert4").find("a").eq(5).html("Cátedra de Fisiología").attr({
		href: "http://areafisiologiausac.blogspot.com/",
	});
	$(".nav-insert4").find("a").eq(6).html("Cátedra de Histología").attr({
		href: "http://histologiayembriologiausac.blogspot.com/",
	});
	$(".nav-insert4").find("a").eq(7).html("Cátedra de Bioquímica").attr({
		href: "https://bioquimica11usac.wordpress.com/",
	});
	$(".nav-insert4").find("a").eq(8).html("Cátedra de Salud Pública").attr({
		href: "salud_inicio.html",
	});
	$(".nav-insert4").find("a").eq(9).html("Cátedra de Semiología").attr({
		href: "http://moodle.sgifacmed.net/",
	});
	$(".nav-insert4").find("li").eq(10).html("").attr({
		"class": "divider",
		"role": "separator",
	});	
	$(".nav-insert4").find("li").eq(11).html("Libros para descargar").attr({
		"class": "dropdown-header",
	});	
	$(".nav-insert4").find("a").eq(10).html("Anatomía").attr({
		href: "index_ana_libros.html",
	});	
	$(".nav-insert4").find("a").eq(11).html("Fisiología").attr({
		href: "index_fisio_libros.html",
	});	
	$(".nav-insert4").find("a").eq(12).html("Histología").attr({
		href: "histo_books.html",
	});	
	$(".nav-insert4").find("a").eq(13).html("Bioquímica").attr({
		href: "bioqui_books.html",
	});	
	$(".nav-insert4").find("a").eq(14).html("Salud Pública").attr({
		href: "salud_books.html",
	});	
	$(".nav-insert4").find("a").eq(15).html("Semiología").attr({
		href: "semio_books.html",
	});	
	////
	//////
	////////
	/////////// footer 
	////////
	//////
	////
	$("<footer/>", {
		href: "index_histo.html",
		"appendTo": "#space-footer",
		"id": "asphalt-footer",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": "#asphalt-footer",
		"class": "container-fluid",
		"style": "background-image: url(./textures/noisy_net.png);",
		//"style": "background-color: #252528;",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".container-fluid",
		"class": "row",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".row",
		"class": "col-md-3 insert1",
		html: "<img class='img-footer' src='pictures/space4.png'>",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".row",
		"insertAfter": "insert1",
		"class": "col-md-9 insert2",
		"style": "margin-left: 20%; margin-top: -16%;",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".insert2",
		//"insertAfter": ".insert2",
		"class": "col-md-2 top-mobile insert3",
		html :"<p/><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p>",
	});
	$(".insert3").find("p").eq(0).html("<b>MedicinaResources</b>").attr({
		"style": "color: #eb8c00",
		"class": "box-control-footer",
	});
	$(".insert3").find("a").eq(0).html("Información").attr({
		title: "Información de MedicinaResources",
		href: "informacion.html",
		//"style": "color: #999999",
		"class": "tron-footerp-control c9",
	});
	$(".insert3").find("a").eq(1).html("Ayuda").attr({
		title: "Ayuda en MedicinaResources",
		href: "ayuda2.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert3").find("a").eq(2).html("Aviso Legal").attr({
		title: "Aviso Legal de MedicinaResources",
		href: "aviso_legal_licencia.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert3").find("a").eq(3).html("Contacto").attr({
		title: "Contacta a MedicinaResources",
		href: "contacto.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert3").find("a").eq(4).html("Logos").attr({
		title: "Los logos de MedicinaResources",
		href: "logos.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert3").find("a").eq(5).html("Politica de Seguridad").attr({
		title: "Politica de seguridad de MedicinaResources",
		href: "aviso_politico_usario.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$
	//row 2 footer
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".insert2",
		//"insertAfter": ".insert2",
		"class": "col-md-3 insert4",
		html :"<p/><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p>",
	});
	$(".insert4").find("p").eq(0).html("<b>Cátedras</b>").attr({
		"style": "color: #eb8c00",
	});
	$(".insert4").find("a").eq(0).html("Cátedra de Anatomía").attr({
		title: "Cátedra Oficial de Anatomía",
		href: "https://sites.google.com/site/medusacanatomia/",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert4").find("a").eq(1).html("Cátedra de Fisiología").attr({
		title: "Cátedra Oficial de Fisiología",
		href: "http://areafisiologiausac.blogspot.com/",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert4").find("a").eq(2).html("Cátedra de Histología").attr({
		title: "Cátedra Oficial de Histología",
		href: "http://histologiayembriologiausac.blogspot.com/",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert4").find("a").eq(3).html("Cátedra de Bioquímica").attr({
		title: "Cátedra Oficial de Bioquímica",
		href: "https://bioquimica11usac.wordpress.com/",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert4").find("a").eq(4).html("Cátedra de Salud Pública").attr({
		title: "Cátedra Oficial de Salud Pública",
		href: "salud_inicio.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert4").find("a").eq(5).html("Cátedra de Semiología").attr({
		title: "Cátedra Oficial de Semiología Médica",
		href: "http://moodle.sgifacmed.net/",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	//Row footer 3
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".insert2",
		//"insertAfter": ".insert2",
		"class": "col-md-2 insert5",
		html :"<p/><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p>",
	});
	$(".insert5").find("p").eq(0).html("<b>Cursos</b>").attr({
		"style": "color: #eb8c00",
	});
	$(".insert5").find("a").eq(0).html("Anatomía").attr({
		title: "Anatomía en Medicinaresources",
		href: "anatomia.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert5").find("a").eq(1).html("Fisiología").attr({
		title: "Fisiología en Medicinaresources",
		href: "index_fisio.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert5").find("a").eq(2).html("Histología").attr({
		title: "Histología en Medicinaresources",
		href: "index_histo.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert5").find("a").eq(3).html("Bioquímica").attr({
		title: "Bioquímica en Medicinaresources",
		href: "bioqui_inicio.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert5").find("a").eq(4).html("Salud Pública").attr({
		title: "Salud Pública en Medicinaresources",
		href: "salud_inicio.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert5").find("a").eq(5).html("Semiología").attr({
		title: "Semiología en Medicinaresources",
		href: "semio_inicio.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	//row footer 4
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".insert2",
		//"insertAfter": ".insert2",
		"class": "col-md-3 insert6",
		html :"<p/><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p>",
	});
	$(".insert6").find("p").eq(0).html("<b>Extras Educativos</b>").attr({
		"style": "color: #eb8c00",
	});
	$(".insert6").find("a").eq(0).html("Mapa del sitio").attr({
		title: "Mapa de Medicinaresources",
		href: "mapa.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert6").find("a").eq(1).html("CERN").attr({
		title: "Tecnología Europea",
		href: "http://www.cern.ch/",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert6").find("a").eq(2).html("SOCIG").attr({
		title: "Sociedad Cientifica de Guatemala",
		href: "http://sociggt.wix.com/socig",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert6").find("a").eq(3).html("Euro-Fusion").attr({
		title: "Tecnología Europea",
		href: "http://www.euro-fusion.org",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert6").find("a").eq(4).html("Science in School").attr({
		title: "science in school",
		href: "http://www.scienceinschool.org",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert6").find("a").eq(5).html("Wageningen University").attr({
		title: "Universidad Holandesa",
		href: "http://www.wur.nl/",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert6").find("a").eq(6).html("Instituto Nacional de Salud").attr({
		title: "Instituto Nacional de Salud",
		href: "http://www.nlm.nih.gov",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert6").find("a").eq(7).html("European Southern Observatory").attr({
		title: "European Southern Observatory",
		href: "http://www.eso.org/public/outreach/eduoff/",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert6").find("a").eq(8).html("European Molecular Biology Laboratory").attr({
		title: "European Molecular Biology Laboratory",
		href: "http://www.embl.org/",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	//Row footer 5
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".insert2",
		//"insertAfter": ".insert2",
		"class": "col-md-2 insert7",
		html :"<p/><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p>",
	});
	$(".insert7").find("p").eq(0).html("<b>Blogs</b>").attr({
		"style": "color: #eb8c00",
	});
	$(".insert7").find("a").eq(0).html("Blog de Jonathan Molina").attr({
		title: "Blog de Jonathan Molina",
		href: "http://johnnymd100.blogspot.com/",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	$(".insert7").find("a").eq(1).html("Blog de Silvia Gonzales").attr({
		title: "Blog de Silvia Gonzales",
		href: "http://histosgo225c12.blogspot.com/2016/01/este-es-el-enlace-para-bajar-la-guia.html",
		//"style": "color: #f7f7f7",
		"class": "tron-footerp-control c9",
	});
	////
	//////
	////////
	/////////// Footer media and contacts 
	////////
	//////
	////
	//
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".row",
		"insertAfter": ".insert2",
		"class": "media-aml",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".media-aml",
		"class": "col-md-3 spanfooter centerio",
		"style": "float: left; font-family: 'Raleway', sans-serif; margin-top: -4%; padding: 8px;",
		html: "<p/>&nbsp;<span/>&nbsp;&nbsp;<span/>&nbsp;&nbsp;<span/>&nbsp;&nbsp;<span/>&nbsp;&nbsp;<span/>&nbsp;<span/>&nbsp;<span/>&nbsp;<span/>&nbsp;<span/>&nbsp;<span/>&nbsp;<span/>",
	});
	$(".spanfooter").find("p").eq(0).html("Contacto").attr({
		"style": "color: #a1a09f; font-size: 12px;"
	});
	$(".spanfooter").find("span").eq(0).html("medicinaofficialmail@gmail.com").attr({
		"style": "color: #c0c5ce; font-size: 12px;"
	});
	$(".spanfooter").find("span").eq(1).html("Santiago-Guatemala").attr({
		"style": "color: #c0c5ce; font-size: 12px;"
	});
	$(".spanfooter").find("span").eq(3).html("&reg;2017 MedicinaResources.").attr({
		"style": "color: #a1a09f; font-size: 12px;"
	});
	$(".spanfooter").find("span").eq(4).html("&reg;2014-2017 AML Productions.").attr({
		"style": "color: #a1a09f; font-size: 12px;"
	});
	$(".spanfooter").find("span").eq(5).html("&reg;2004-2017 Solarin Industries.").attr({
		"style": "color: #a1a09f; font-size: 12px;"
	});
	$(".spanfooter").find("span").eq(6).html("<i class='icon-htmlfive'</i>").attr({
		"style": "color: #65737e; font-size: 12px;",
		"class": "icon-color",
		title: "this page was created with html 5",
	});
	$(".spanfooter").find("span").eq(7).html("<i class='icon-cssthree'</i>").attr({
		"style": "color: #65737e; font-size: 12px;",
		title: "this page was created with css 3",
	});
	$(".spanfooter").find("span").eq(8).html("<i class='icon-jquery'</i>").attr({
		"style": "color: #65737e; font-size: 12px;",
		title: "this page was created with jquery-3",
	});
	$(".spanfooter").find("span").eq(9).html("<i class='icon-ruby'</i>").attr({
		"style": "color: #65737e; font-size: 12px;",
		title: "this page was created with ruby Gems",
	});
	$(".spanfooter").find("span").eq(10).html("Version: 1.1").attr({
		"style": "color: #eb8c00; font-size: 12px;",
	});
	//
	/////
	////////
	////////////The ultimate footer section Copyright.
	////////
	/////
	//
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".container-fluid",
		//"insertAfter": ".row",
		html: "<hr>",
		"class": "ultimate-hr",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".container-fluid",
		"insertAfter": ".ultimate-hr",
		"class": "container ultimate1",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".ultimate1",
		"class": "row ultimaterow",	
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".ultimaterow",
		"class": "copyright centerio",
		html: "Copyright &reg; 2017 Medicinaresources. all rigths reserved.",
		"style": "color: #c0c5ce;",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".ultimaterow",
		"class": "copyright centerio",
		html: "Made with <i class='icon-rocket-launch' style='color: #eb8c00;'></i> and <i class='icon-heart' style='color: #e0301e;'></i> by <a class='cap-gold' href='https://github.com/jorgeAML'> <i class='icon-squaregithub'></i> AML Productions.</a>",
		"style": "color: #c0c5ce;",
		title: "this moment is only about you in another World in my mind and love of Jorge AML.",
	});		
	/*
	flows 
	*/
	$(".tron-nav-control").mouseenter(function () {
		$(this).addClass('nav-tron');
	});
	$(".tron-nav-control").mouseleave(function () {
		$(this).removeClass('nav-tron');
	});
	/*
	flows footer
	*/
	$(".tron-footerp-control").mouseenter(function () {
		$(this).addClass('footerp-tron');
	});
	$(".tron-footerp-control").mouseleave(function () {
		$(this).removeClass('footerp-tron');
	});
	/*
	flows footer titles
	*/
	$(".box-control-footer").mouseenter(function () {
		$(this).addClass('box-controlf');
	});
	$(".box-control-footer").mouseleave(function () {
		$(this).removeClass('box-controlf');
	});
});
