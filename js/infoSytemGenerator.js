/************************************* Detection de l'ensemble des informations sur le système de l'utilisateur :
************************************* Type de navigateur, d'OS *************************************************/
$.extend({
	browser: function(){
		var ua= navigator.userAgent, tem, 
		M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		if(/trident/i.test(M[1])){tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];M[1] = "Internet Explorer";M[2] = tem[1];}
		if(M[1]=== 'Chrome'){tem= ua.match(/\b(OPR|Edge)\/(\d+)/);if(tem!== null) M[1] = tem.slice(1).join(' ').replace('OPR', 'Opera'); else M[1] = "Chrome";}
		M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		if((tem= ua.match(/version\/(\d+)/i))!== null) M.splice(1, 1, tem[1]);
		var firefox = /firefox/.test(navigator.userAgent.toLowerCase()) && !/webkit    /.test(navigator.userAgent.toLowerCase());
		var webkit  = /webkit/.test(navigator.userAgent.toLowerCase());
		var opera   = /opera/.test(navigator.userAgent.toLowerCase());
		var msie    = /msie/.test(navigator.userAgent.toLowerCase())||/msie (\d+\.\d+);/.test(navigator.userAgent.toLowerCase())||/trident.*rv[ :]*(\d+\.\d+)/.test(navigator.userAgent.toLowerCase());
		var prefix  = msie?"":(webkit?'-webkit-':(firefox?'-moz-':''));
		return {name: M[0], version: M[1], firefox: firefox, opera: opera, msie: msie, chrome: webkit, prefix: prefix};
	}
});

//On crée un objet de type date stockant la date actuelle
var d = new Date();

//On récupère les informations relatives à notre date
var dh = d.getHours();
var dmi = d.getMinutes();
var ds = d.getSeconds();
var ddate = d.getDate();
var dday = d.getDay();
var dmo = d.getMonth();
var dy = d.getFullYear();

/*On se rappelle que le premier élément d'un tableau
 *possède l'indice 0*/
var mois = ['janvier', 'février', 'mars', 'avril', 'mai','juin', 'juillet', 'août', 'septembre','octobre', 'novembre', 'décembre'];
var jour = ['dimanche', 'lundi', 'mardi', 'mercredi','jeudi', 'vendredi', 'samedi'];


/***************** Récupération des coordonées géographique via la geolocalisation **************************************/
var posLa,posLon,noPosition;
function geo_success(position) {
  noPosition=false;
  posLa = position.coords.latitude;
  posLon =  position.coords.longitude;
  console.log(posLa,posLon);
}
function geo_error() {
  noPosition=true;
  console.log("Sorry, no position available.");
}
var geo_options = {enableHighAccuracy: true, maximumAge: 30000, timeout: 27000};
var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
setTimeout(logInfos,300);// Délais pour la récupération des coordonnées
if($.browser().name==='Firefox'){
  navigator.geolocation.getCurrentPosition(function(position) {
  //do_something(position.coords.latitude, position.coords.longitude);
    posLa = position.coords.latitude;
    posLon = position.coords.longitude;
});
}


var ua = navigator.userAgent;
var isMobileScreen = window.matchMedia("only screen and (max-width:768px)").matches;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var broswer = $.browser().name;// Nom du navigateur
var broswerVersion=$.browser().version;//try{ broswerVersion = ($.browser.version === undefined) ? 'unknown': $.browser.version;}catch(err){console.log(err);}
var OS = navigator.platform;// os
var regExp = /\(([^)]+)\)/;//regex pour récupérer l'element entre parantheses
var appOS = String(regExp.exec(String(ua))[1]).split(' ')[0];// Récupération du premier élément entre  parentheses (OS infos)
console.log(appOS);
var osVersion =String(ua).split(';')[0].split(' ')[3];
if(ua.indexOf('windows') >= -1){
    switch(osVersion){case('10.0') :OS = 'Windows 10';break;case ('6.3'):OSname = 'Windows 8.1';break;case ('6.2'):OSname =  'Windows 8';break;case ('6.1'):OSname = ' Windows 7';break;case ('6'):OSname = ' Windows Vista';break;case ('5.1'):OSname = ' Windows XP';break;case ('5'):OSname = ' Windows 2000';break;default:'Unknow';}
}

var pos
function logInfos(){
  pos = (!noPosition) ? ' Latitude:'+posLa+'°, Longitude:'+posLon+'°' :  "position non disponnible";
    $('.infos').html('<span class="bigTitle">Informations techniques --></span>'+
        '<br /> <span class="title">Date :</span> '+jour[dday]+' '+ddate+' '+mois[dmo]+' '+dy+'   -    '+dh+':'+dmi+':'+ds+
        '<br /> <span class="title">Dimensions :</span> '+$(window).width()+'px'+
        '<br /> <span class="title">Support :</span> '+navigator.userAgent+
        '<br /> <span class="title">Navigateur :</span> '+broswer +' <span class="title">version :</span>'+ broswerVersion+
        '<br /> <span class="title">OS :</span> '+ OSname+ ' <span class="title">  | Version OS :</span> '+osVersion+
        '<br /> <span class="title">Processeur :</span> '+String(ua).split(';')[1].split('WOW')[1].substr(0,2)+'bytes'+
        '<br /> <span class="title">Mobile detected :</span> '+isMobile+
        '<br /> <span class="title">Résolution mobile :</span> '+isMobileScreen+
        '<br /> <span class="title">Location : </span>'+ pos
        );
}
