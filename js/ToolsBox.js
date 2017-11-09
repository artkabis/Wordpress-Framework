/* ┌─────────────────────────────────────────────────────────────────────┐ \\
// │ Artkabis 1.3 - JavaScript Library                                   │ \\
// ├─────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright (c) 2015-2016 Gregory NICOLLE (http://urliss35.free.fr)   │ \\
// │ Copyright (c) 20013-2016 Sencha Labs (http://sencha.com)            │ \\
// │ Licensed under the MIT (http://artkabis.com/license.html) license   │ \\
// └─────────────────────────────────────────────────────────────────────┘ \\


/* FRAMEWORK */
/** PROD **
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js" type="text/javascript" defer=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js" type="text/javascript" defer=""></script>
    <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/SplitText.min.js" type="text/javascript" defer=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js" type="text/javascript" defer=""></script>
*/







---------------------------------------------------************************************************************ BASES JQUERY ************************************************----------------------------------------------------

***************************************************** LES SELECTEURS *****************************************************

$('p'); // je sélectionne tous les paragraphes
$('.maClasse'); // je sélectionne les éléments ayant .maClasse pour classe
$('#monId'); // je sélectionne l'élément qui possède l'identifiant #monId


>> SELECTEUR SIMPLE
$('p .lien');/* ici, nous sélectionnons tous les éléments ayant la classe .lien, et contenus dans un paragraphe qui joue le rôle de parent */
$('p > .lien');/* ici, nous sélectionnons seulement les éléments ayant la classe .lien,et descendants directement du paragraphe ! */
$('.lien ~ .visite');/* dans ce cas-là, ce sont tous les éléments .visite,précédés immédiatement ou non par un élément .lien */
$('.lien + .visite');/* la sélection s'effectue sur les éléments ayant pour classe .visite,et qui sont immédiatement précédés d'un élément ayant pour classe .lien */
EXEMPLE UTILISATION :
//Cette forme de sélecteur permet de sélectionner un élément uniquement si celui-ci « suit » un élément donné et que les deux éléments sont les fils d'un même élément parent.
li:first-of-type + li {color: red;}
<ul>
  <li>Un</li>
  <li>Deux</li>// C'est le second li qui sera pris en compte est mis en rouge 
  <li>Trois</li>
</ul>




>> SELECTEUR POUSSE
$('p:first'); // sélection du premier paragraphe trouvé
$('a:last'); // ici, on sélectionne le dernier lien de la page
$('p:eq(2)'); // selectionne les 3eme paragraphe !
$('p:gt(1)')//Éléments p situés après le deuxième Ex: 3, 4, 5
$('p:lt(3)')//Éléments p avant le quatrième EX: 1, 2, 3
$('p:even');// Éléments p pair 1,3,5
$('p:odd');// Éléments p impair 2,4,6
$('p:empty');//Éléments p qui n'ont pas d'enfant
$('a')[0];//retourne le premier lien hypertexte de la page.
$('[width="40"]');//sélectionne tous les éléments qui ont un attribut width égal à 40.
$('p[id]'); // retourne seulement les paragraphes ayant un identifiant
$('input[name=pseudo]'); // cible seulement l'élément de formulaire ayant « pseudo » pour nom
$('p:not(.rouge)'); // sélection de tous les paragraphes, sauf ceux ayant .rouge comme classe
$('input:not(.bleu, .vert)'); // on sélectionne tous les éléments de formulaire sauf ceux ayant .bleu et/ou .vert comme classe
$('tr:not(tr:last)');//Coloration de toutes les lignes tr à l'exception de la dernière

>> SELECTEUR D ATTRIBUTS
['nom*="valeur"']//Éléments qui possèdent un attributnomqui contient (partiellement ou totalement) la valeur spécifiée.
['nom~="valeur"'];//Éléments qui possèdent un attributnomqui contient la valeur spécifiée, délimité par des espaces.
['nom$="valeur"'];//Éléments qui possèdent un attribut 'nom' qui se termine par la valeur spécifiée. 
['nom!="valeur"'];//Éléments qui ne possèdent pas l'attribut 'nom', ou qui possèdent un attributnomdifférent de la valeur spécifiée.
['nom^="valeur"'];//Éléments qui possèdent un attribut 'nom' qui commence par la valeur spécifiée.
> AVEC FILTRAGE DES ATTRIBUTS
$('[border*="1"]');//Image dont l'attribut 'border' contient partiellement ou totalement la valeur « 1 ».
$('[title~="animal"]');//Image dont l'attribut 'title' contient le mot « animal » délimité par une espace.
$('[src$="e.jpg"]');//Image dont l'attribut 'src' se termine par « e.jpg ».
$('[border!="15"]');//Image qui ne possède pas un attribut 'border' égal à « 15 ».
$('[src^="ch"]');//mage dont l'attribut 'src' commence par « ch ».

>> PSEUDO-SELECTEUR SPECIFIQUE AUX FORMULAIRES
$(':image').css('width','100px');//Le champinputde type 'image' est redimensionné pour avoir une largeur de 100 px.
$(':input').css('background','yellow');//Les zones de texte, boutons radio et boutons ont un arrière-plan de couleur jaune.
$(':password').css('background','yellow');//Le champ de typepassworda un arrière-plan de couleur jaune.

document.forms[0].nom.focus(); //La première instruction donne le focus au premier champ de saisie et 
$(':focus').css('background','yellow');//la deuxième colore son arrière-plan en jaune.

>> SELECTEUR PUISSANT
var spans = $('span').get();// permet de regrouper les span dans un Objet jquery, il est possible de recuperer un élément via spans[0].innerHTML


Performance des sélecteurs >>
$('#menu .sections');

// sélection plus rapide que :
$('.sections');

$('div p a');
//15 fois plus lent que :
$('#lien');



Fonction de selection >>

------Selectionner elements voisins ou frère :
$('.elem').siblings('.target');// Selection tous les frère .target de .elem
$('.elem').next();//retourne le frère suivant de l'élément sélectionné.
$('.elem').nextAll();//retourne tous les frères suivants de l'élément sélectionné.
$('.elem').nextUntil();//retourne tous les frères suivants entre les éléments sélectionnés.

$('.elem').prev();// retourne le frère prédédent l'élément sélectionné.
$('.elem').prevAll();// retourne tous les frères prédédents de l'élément sélectionné.
$('.elem').nextUntil();// retourne tous les frères prédédents entre les éléments sélectionnés.


------Selectionner un element de parenté
$('.elem').parents('.target') ou $('.elem').closest('.target')

-------Selectionner element descendance :
$('.elem').find('.target') ou $('.elem').children('.target')


INSTRUCTION DE LECTURE DE VALEURES LIEES AUX FORMULAIRES >>
$('#nom').val()//Lit le nom de l'utilisateur.
$('#pass').val()//Lit le mot de passe.
$(':radio#H:checked').val() //Lit l'état du bouton radio H. Renvoie true si le bouton est sélectionné, sinon false.
$('#fonction').val()//Lit l'élément sélectionné dans la liste déroulante.
$('#nom').val('Michel')//Écrit « Michel » dans la zone de texte Nom d'utilisateur.
$('#pass').val('abcde')//Écrit « abcde » dans la zone de texte Mot de passe.
$(':radio').val(['H']);//Sélectionne le bouton radio H.
$('#fonction').val('retraite')//Sélectionne Retraité dans la liste déroulante.
















***************************************************** LES FONCTIONS *****************************************************

>> ------------- ------------ FONCTIONS FLECHES
// creation d'un tableau
var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// additionne les veleurs du tablerau est renvois >> 66

var even = arr.filter(v => v % 2 == 0);
// Renvois les multiple de 2, soit  >> [6, 0, 18]

var double = arr.map(v => v * 2);       
// Double les valeurs contenus dans le tableau, soit >> [10, 12, 26, 0, 2, 36, 46]


-------Passer un argument dans une fonction :
var arguments = 42;
var arr = () => arguments;

arr(); // 42

-------Passer un argument avec lien implicite dans une fonction :
function toto() {
  var f = (i) => arguments[0] + i; 
  // lien implicite avec arguments de toto
  return f(2);
}

toto(1); // renvoi 3, soit 1(valeur passé (i) puis additionné à 2 f(2) )















**************************************************** MANIPULATION CSS *****************************************************


$('p').css('color'); // ma méthode ira chercher la valeur de la propriété "color" et retournera "green"
$('p').css('color', 'red'); // ma méthode modifiera la propriété "color" et la définira à "red"
$('p').css({
    color : 'red', // couleur rouge
    width : '300px', // largeur de 300px
    height : '200px' // hauteur de 200px
    paddingRight : '30px', // marge intérieure de 30px
    marginLeft : '10px' // marge extérieure de 10px
});

Positionner des éléments >>
$('p').offset().left; // retourne la valeur "left" de l'élément (position absolue)
$('p').position().top; // retourne la valeur "top" de l'élément (position relative)

$('p').offset({left : 30,top : 200}); //positionnement de p left:30 top:200 en position absolute
$('p').position({left : 200});//positionnement de p left:200 en position relative

Gérer les dimensions >>
$('p').height(); // retourne la hauteur stricte du paragraphe
$('p').innerWidth(); // retourne la largeur (avec marges intérieures) du paragraphe
$('p').outerWidth(); // retourne la largeur (avec marges intérieures + bordures) du paragraphe
$('p').outerHeight(true); // retourne la hauteur (avec marges intérieures + bordures + marges extérieures) du paragraphe









**************************************************** MANIPULATION DOM *****************************************************
$('h2').append(' ***');//Ajout d'une espace et de trois astérisques à la suite de chaque titre <h2>
$('h2').prepend('*** ');//Ajout de trois astérisques et d'une espace avant chaque titre <h2>
$('#trois').before('<hr>');//Ajout d'une ligne de séparation horizontale avant le titre <h2> #trois
$('hr').after('<br><br>');//Insertion de deux sauts de ligne après chaque balise <hr>




----------Remplacer des éléments >>
$('hr').replaceWith('<br>');//Remplace les balises <hr> par des sauts de ligne

$('h2').each(function(){//sélectionne tous les éléments <h2> du document 
  var elemH2 = $(this);//définit la variable elemH2 et y mémorise l'élément <h2> en cours de traitement.
  elemH2.replaceWith('<h3>' + elemH2.text() + '</h3>');//remplace elemH2 par une balise <h3>, suivie du texte contenu dans l'élément en cours de traitement  et ajoute une balise fermante </h3>
});

//eai >>element a inserer
eai.appendTo(cible);// insère un élément à la fin de la cible ;
eai.prependTo(cible);// insère un élément au début de la cible ;
eai.insertBefore(cible);// insère un élément avant la cible ;
eai.insertAfter(cible);// insère un élément après la cible.



------------Déplacer du contenu >>
//depl = element à deplacer
// sel = element selectionné
$('sel').append(depl);
$('sel').prepend(depl);
$('sel').before(depl);
$('sel').after(depl);

$('#deux').after($('#un'));// l'id deux sera placé avant l'element #un



------------Dupliquer des éléments >>
$('#deux').clone().insertBefore($('#un'));//duplique le paragraphe #deux et l'insére avant le paragraphe #un

$('<h1>Sommaire</h1>').insertBefore($('h2:first'));//insère le h1 « Sommaire » avant le premier h2 du document
$('h2').clone().insertAfter($('h1')); //sélectionne tous h2, les clone et les insère après le h1



------------ Entourer des éléments >>
$('li').wrap('<i></i>');// mets l'ensemble des li en italique
$('li').wrap('<font color="red"><b><i><u></u></i></b></font>');// Formate les li avec l'ensemble des element situé dans wrap()
$('p').wrapInner('<i></i>');//donnera >> <p><i>Le texte du paragraphe</i></p>
$('p').wrap('<i></i>');// Donnera >> <i><p>Le texte du paragraphe</p></i>
$('p').wrapAll('<div></div>');//donnera >> <div> <p></p> <p></p>  <p></p> <p></p> </div>


------------ Modifier le contenu d un élément  >>
//Getters et setters
$('h2').css('font-size');// Getter
$('h2').css('font-size','2em');//Setter 
var taille = $('h2').css('font-size');


//Exemple de setter pour attribut >> si le lien est local on l'ouvre en _self sinon si lien externe en _blank
$('a').attr('target', function() {
  if(this.host == location.host) return '_self'
  else return '_blank'
});


-----------------Accéder aux attributs des balises HTML >>
$('#plus').attr('src'); //retourne l'attribut src de l'élément d'identifiant plus.
$('div').attr('class'); //retourne l'attribut class du premier <div>.
$('div').attr('class', 'madiv'); //modifie ou crée l'attribut class dans les balises <div> du document et leur affecte la valeur « madiv ».
$('#illustration').attr('src','monimage.jpg'); //modifie ou crée l'attribut src

// suppression attribut
$('div').removeAttr('madiv');

------------------------ Ajouter et supprimer des classes >>

//Trois méthodes consacrées aux classes vont vous permettre d'aller plus loin : 

addClass() //ajoute une classe dans les éléments sélectionnés ;
removeClass() //supprime (si elle existe) une classe des éléments sélectionnés ;
toggleClass() //accomplit deux actions : si la classe spécifiée n'existe pas dans les éléments sélectionnés, elle y est ajoutée. Si elle existe, elle est supprimée.





//Copier coller un element
$( ".hello" ).clone().appendTo( ".goodbye" );
//Couper coller >> first remplacera le third
$( ".first" ).replaceAll( ".third" );
//ou 
$( "div.third" ).replaceWith( $( ".first" ) );// first remplacera third














********************************************************* LES EVENEMENTS ***************************************************

ECOUTE SOURIS >>

Action >>                           Fonction >>
Clic                                click()
Double-clic                         dblclick()
Passage de la souris                hover()
Rentrer dans un élément             mouseenter()
Quitter un élément                  mouseleave()
Presser un bouton de la souris      mousedown()
Relâcher un bouton de la souris     mouseup()
Scroller                            scroll()


$(document).keyup(function(touche){ // on écoute l'évènement keyup()
    var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
    if(appui == 13){ // si le code de la touche est égal à 13 (Entrée)
        alert('Vous venez d\'appuyer sur la touche Entrée !'); // on affiche une alerte
    }
});

//declancher un evenement click
$('p').click(function(){alert('Cliqué !');});
$('p').trigger('click'); // déclenche l'action au chargement du script
$('a').click(function(e){e.preventDefault(); });// annule l'action du lien



***************** LES ECOUTEURS D EVENEMENT  ************************************************
// Utilisation basique de $.fn.live
$('li.text-info').live('hover', function() { ... });// Ecoute evenement hover sur li.text-info
$.fn.die // pour supprimer l'écoute

// Utilisation basique de $.fn.delegate (plus performant)
$('ul#main-navigation').delegate('li.text-info', 'hover', function() { ... });
$.fn.undelegate // pour supprimer l'écoute


******* ON() ************
//-------------------------------------------------------- Methode avec on()  le plus performant
// Utilisation basique de $.fn.on au lieu de $.fn.bind
$('div#main-content').on('click', function() { ... });

// Utilisation basique de $.fn.on au lieu de $.fn.live
$(document).on('hover', 'li.text-info', function() { ... });

// Utilisation basique de $.fn.on au lieu de $.fn.delegate
$('ul#main-nav').on('hover', 'li.text-info', function() { ... });


// Attache des données à l'événement
$("a").each(function(i) {
    $(this).on('click', {index:i}, function(e) {
        alert('My index is ' + e.data.index);
    });
});

// Le callback ou fonction de rappel
$(function() {
    $(".rouge").fadeOut("slow",function(){
      $(this).fadeIn("slow");
    }); 
});


// Deleguer un evement
$('div').on('click', 'p', function(){
    alert('Les paragraphes créés peuvent être cliqués !');
});
//Annuler la délégation
$('body').on('click', 'p', function(){
    // du code ici
});

$('body').off('click', 'p'); // supprime tous les gestionnaires d'évènements délégués sur les paragraphes
$('body').off('click', '**'); // supprime tous les gestionnaires d'évènements délégués




// Espace de noms
$('button').on('click.nom', function(){alert('Premier évènement');});
$('button').on('click.prenom', function(){alert('Second évènement');});
$('button').trigger('click.nom'); // exécute le clic, MAIS ne lance que la première alerte !



// Supression de l'evenement
$('p').on('click', function(){
    // du code icilivelive(('scroll'))
});

$('p').off('click'); // supprime tous les gestionnaires écoutant le clic

$('p').off(); // supprimer tous les gestionnaires de n'importe quel évènement


********************************************************************************************************************************************************************************************************************************






















******************************************** LES DATAS *******************************************************************


----------------------- Associer des données aux balises >>
$.data(el, 'nom', {nom_don1: don1, nom_don2: don2, nom_don3: don3, etc.});
/*
¤ el est le nom de l'élément concerné, sans apostrophes ;
¤ nom est le nom (entre apostrophes) dans lequel sera stockée la donnée ;
¤ nom_don1, nom_don2, nom_don3, etc. sont les noms (sans apostrophes) associés aux données ;
¤ don1, don2, don3, etc. sont des données quelconques. Lorsqu'une de ces données est numérique, ne mettez pas d'apostrophes. Au contraire, lorsqu'une de ces données est une chaîne, mettez-la entre apostrophes.
¤ Pour retrouver une donnée associée à un élément, utilisez la syntaxe suivante :*/






var uneVariable = $.data(el,'nom').nom_don;
/*… où :

¤ uneVariable est une variable quelconque ;
¤ el est le nom de l'élément (sans apostrophes) auquel une donnée a été associée ;
¤ nom est le nom (entre apostrophes) dans lequel a été stockée la donnée ;
¤ nom_don est le nom de la donnée à retrouver, sans apostrophes.
*/


Exemple :
 $(function() {
        var div = $('div')[0];
        $.data(div, 'mesValeurs', {premier: 'bonjour', deuxieme: 12, troisieme: 'http://www.siteduzero.com'});
        var val1 = $.data(div, 'mesValeurs').premier;
        var val2 = $.data(div, 'mesValeurs').deuxieme;
        var val3 = $.data(div, 'mesValeurs').troisieme;
        $('#sp1').text(val1);//bonjour
        $('#sp2').text(val2);//12
        $('#sp3').text(val3);//'http://www.siteduzero.com'
}); 


suppression data :
var div = $('div')[0];
$.removeData(div, 'mesValeurs');

/**********************************************************************************************************************************************************************/
























****************************************************** Utilisation du selecteur css [] *************************************************************************
// les possibilité de filtrer la valeur "choice" du paramètre name ou l'attribut en lui même
$(this).filter("[name='choice']");
$(this).is('[name]');

$(this)[0].hasAttribute("name");
jQObject[0].hasAttribute("name");
/***************************************************************************************************************************************************************/










****************************************************** url contenant '' *************************************************************************
if(window.location.href.indexOf("franky") > -1) {
    alert("your url contains the name franky");
}
ou
if (location.href.match(/franky/)) { }
/****************************************************************************************************************************************************/





****************************************************** Fonction TweenLite pour affichage en blur inevrsé ***********************************************
var $obj  = {
    item : $('.item'),
    delay:1,
    time1:0,
    time2:0.6,
    blur1:"blur(40px)",
    blur2:"blur(0px)"
 };
function bluriz($obj){
    TweenLite.set($obj.item,$obj.time1,{
        filter:$obj.style1,
    });

    TweenLite.to($item, $obj.time2, {
        filter:$obj.blur2,
        delay:$obj.delay
   });
}
bluriz($('.affiche'));
/****************************************************************************************************************************************************/





************************************************************************************************ Picto rotation viewer **********************************************************************

/* HOOK HAUT >>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js" type="text/javascript" defer=""></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js" type="text/javascript" defer=""></script>
<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/SplitText.min.js" type="text/javascript" defer=""></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js" type="text/javascript" defer=""></script>


*/
var img, imgSrc, urlImg, tween, imgOut,imgOver;
$('.icoHover figure').each(function(){ 
     $(this).children().css({pointerEvents:'none'});
});

$('.icoHover figure')
  .mouseenter(function() {
     img = $(this).find('img');
        imgSrc =  img.attr('src');
        urlImg = imgSrc.substring(0, imgSrc.length-4);
        imgOut = urlImg+'.jpg';
        imgOver = urlImg+'-hover.jpg';
        if(imgOver.substring(imgOver.length,imgOver.length- 16) === '-hover-hover.jpg'){ imgOver = imgOver.substring(0,imgOver.length- 16) + '-hover.jpg';}
        if(imgOut.substring(imgOver.length,imgOver.length- 10) === '-hover.jpg'){ imgOver = imgOver.substring(0,imgOver.length- 10) + '.jpg';}
        tween = TweenLite.to(img, 0.4, {rotationY:180, transformOrigin:"50% 50%", onComplete:function(){}});//TweenLite.to(img, 0.2, {rotationY:180, transformOrigin:"50% 50%"});
        setTimeout(function(){img.attr('src',imgOver)},100);
        return false;
  })
  .mouseleave(function() {
        tween = TweenLite.to(img, 0.4, {rotationY:0, transformOrigin:"50% 50%", onComplete:function(){}});//img.attr('src',imgOut);    TweenLite.to(img, 0.2, {rotationY:0, transformOrigin:"50% 50%"})
        setTimeout(function(){img.attr('src',imgOut)},100);
        return false;
  });
  /******************************************************************************************* END Picto Rotation viewer ********************************************************************/







****************************************************************************** Animation lettre du titre dans le slider revolution (une fois celui-ci chargé) *********************************************************
var sliderR = $('#rev_slider_3_1');
sliderR.on('revolution.slide.onloaded', function() {
    console.log('slider loaded');
    var tl = new TimelineLite, mySplitText = new SplitText(".txtTween", {type:"words,chars"}), chars = mySplitText.chars; //an array of all the divs that wrap each character
    TweenLite.set(".txtTween", {perspective:400});
    tl.staggerFrom(chars, 1, {opacity:0, scale:0, y:80, rotationX:360, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.1, "+=0");
});
/***********************************************************************************************************************************************************************************************/





***************************************************************** Inclure un fichier js dans la page html **********************************************
function include(file) {
    var oScript =  document.createElement("script");
    oScript.src = file;
    oScript.type = "text/javascript";
    document.body.appendChild(oScript);
}
 
// On l'utilise :
include("fichier.js");
/***********************************************************************************************************************************************************************************************/




******************************************* Gestion attributs sur pseudo element :before **********************************************************************
// recupération de l'attribut color du pseudo élément >> .element:before
var color = window.getComputedStyle(document.querySelector('.element'), ':before').getPropertyValue('color');

// recupération de l'attribut content du pseudo élément >> .element:before
var content = window.getComputedStyle(document.querySelector('.element'), ':before').getPropertyValue('content');
/*****************************************************************************************************************************************************************/

































********************************************************* Ecouteur live sur changement id ou classe dans un bloc **********************************************************************************
$(function() {
    (function($) {
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

        $.fn.attrchange = function(callback) {
            if (MutationObserver) {
                var options = {subtree: false,attributes: true};
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(e) {
                        callback.call(e.target, e.attributeName);
                    });
                });
                return this.each(function() {observer.observe(this, options);});
            }
        }
    })(jQuery);

    //Ajout de l'écouteur d'évéement attrchange
    $('body *').attrchange(function(attrName) {
        if(attrName=='class'){console.log('class changed');}else if(attrName=='id'){console.log('id changed');}else{/*Autre changement d'attribut*/}
    });
});
/*********************************************************************************************************************************************/
















***************************************************** Envoie (GET) de paramètre depuis une url *************************************************************
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

// ******************* Utilisation
// ajout nouveau select dans form #testform
$('#testform').find('select:last-child').after('<select class="offres" name="filter[offre]"><option value="">type d\'offre</option><option value="1">vente</option><option value="2">location</option></select>');
var offre = getUrlParameter("offre");
if(offre){
    if(offre== 1 || offre == 2){
        if(offre== 1){/*Ventes*/}
        if(offre== 2){/*Locations*/}
    }
}
/****************************************************************************************************************************************************************************************************************************/















********************************************************************* Affichage element en fonction des heures ouvertures******************************************
function dateFr(){
    var jour,mois;
     var joursTab = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
     var moisTab = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
     var date = new Date();

     jour = joursTab[date.getDay()];
     var message = jour + " ";// nom du jour

     message += date.getDate() + " ";// numero du jour
     mois = moisTab[date.getMonth()];
     message += mois + " ";// mois
     message += date.getFullYear();
     console.log('date >> ' + message);
     if(jour === "dimanche" || jour === "samedi"){
         $('.btnRDV').remove();
     }
}
dateFr();

 function Horloge() {
    var date = new Date();
    var heure = date.getHours();
    var minute = date.getMinutes();
    var seconde = date.getSeconds();
    if(minute < 10)minutes = "0" + minute;
    if(seconde < 10)seconde = "0" + seconde;
    var completeHeure = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    if(heure < 9 || heure >13 || heure<14 && heure>18){$('.btnRDV').fadeOut();} else{$('.btnRDV').fadeIn();}
  }
  setInterval(Horloge, 1000);

/*********************************************************************************************************************************************/












































************************************************************************* Gestion des :not **************************************************************************
//Gestion des selecteurs d'une classe non associée à une autre qui est spécifique 
[class *= "foo"] not([class *= "bar"]){
   //l'élement garantie qu'elle est liée à la class 'foo' et sans l'être à 'bar' 
   content: "Do stuff";
}

// Utiliser plusieurs classe non associées à la classe foo
.foo:not(.bar, .baz, .qux);

/*********************************************************************************************************************************************************************/






***************************************************************************** Effet zoom sur background-image de vc_column-inner et redirection vers url au clic ********************************************************

var tabBgImgs = [$('.bgImg0'),$('.bgImg1'),$('.bgImg2'),$('.bgImg3'),$('.bgImg4'),$('.bgImg5')];
//var linkImgsHome = ['scenes-echafaudages/','tribunes/','stands/','decoration/','securite/'];


var $this, bgImgVal,idBg;
$('.imgBg').each(function(i,t) {
    $this = $(this);
    var imgClass = $this.attr('class').split("bgImg").pop();
    var id = imgClass.substr(0,1); // => "1"

    $this.mouseover(function() {
        imgClass = $this.attr('class').split("bgImg").pop();
        console.log('class hover >>'+imgClass);
        id = imgClass.substr(0,1); 
        console.log();
        console.log(tabBgImgs[id].attr('class')+'        id hover >>'+id);
        $(this).css({cursor:'pointer',overflow:'hidden'});
        $(this).children().css({transition:'all .3s',transform:'scale(1.4)'});
    }).mouseout(function() {
        imgClass = $this.attr('class').split("bgImg").pop();
        console.log('class hover >>'+imgClass);
        id = imgClass.substr(0,1); 
        console.log('class out >>'+$(this).attr('class')+'               id out  >>'+id);
        $(this).children().css({transition:'all .3s',transform:'scale(1)'});
    });
    /*if(location.pathname === "/"){
        $this.click(function() {
            imgClass = $this.attr('class').split("bgImg").pop();
            id = imgClass.substr(0,1); // => "1"
            console.log('+++++++++++++++++++++++++++++++++'+'i >> '+i+' class >> '+id);
            console.log("liens >>" +linkImgsHome[id]);
            document.location.href = window.location.origin + window.location.pathname+linkImgsHome[id];
        });
    }*/
});

/******************************************************************************************************************************************************************************************************/
















************************************************************************* Suppression des <p> vide *********************************************************************
$( 'p:empty' ).each(function(i,t){$(this).remove();});

/********************************************************************************************************************************************************************/


























***************************************************************************** Cacher Action_bar si Top_bar is-sticky ********************************************************
var tb = $('#Top_bar');
var ab = $('#Action_bar');
$(window).scroll(function(){
    tb.hasClass('is-sticky') ? ab.fadeOut() : ab.fadeIn();
});
/******************************************************************************************************************************************************************************************/

























***************************************************************************** Vider un champs texte ********************************************************
$('.montext').empty();
/******************************************************************************************************************************************************************************************/






























****************************************************************************** affiche la valeur contenue dans chaque paragraphe du document ***************************************************
$('p').text(function(index,actuel) {
  alert('Paragraphe ' + (index+1) + ' : '+actuel);
});
/******************************************************************************************************************************************************************************************/














***************************************************************************Elestic button ***********************************************************************************************
https://cdnjs.cloudflare.com/ajax/libs/gsap/1.12.1/TweenMax.min.js
var $button = document.querySelector('.button');
$button.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

CSS >> 
.button { background: #3498db; width: 180px; padding: 4px 0; position: absolute; left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%); border-radius: 3px; }
.button p { font-family: 'Roboto'; text-align: center; text-transform: uppercase; color: #FFF; user-select: none; } .button:hover { cursor: pointer; } 
.button:after { content: ""; display: block; position: absolute; width: 100%; height: 10%; border-radius: 50%; background-color: #927608; opacity: 0.4; bottom: -30px; } 


html >>
<div class="button">
  <p>Click me</p>
</div>
/*****************************************************************************************************************************************************************************************/


























******************************************************************************* paramètrage des attributs du logo **************************************************************
    $('#logo[title]').removeAttr('title');// Suppression Title
    $('#logo').find('img').attr('alt','alt du logo');// Ajout de l'attribut alt
/******************************************************************************************************************************************************************************/


























************************************************************************* Positionnement du texte à gauche pour les screen < 1024 sauf pour le footer *****************************
if($w.width() <= 1024 ){
    $('.wpb_wrapper p').each(function(){
        var t = $(this);
        t.css({'text-align':'left'});
        
    });
}
if($w.width() <= 1024 ){
    $('.rowFooter p').each(function(){
          var t = $(this);
          t.css({'text-align':'center'});
    });
}

*******Methode avancé ******************
/**************************** Gestion alignement texte en screen <1024 ***********************************/
if($w.width() <= 1024 ){
    $('.wpb_wrapper p').each(function(){
        var $t = $(this);
        if( !$(this).hasClass('center')){
            $t.css({'text-align':'left'});
        }else{
            $t.css({'text-align':'center'});
        }
    });
}
/**********************************************************************************************************************************************************************************/

/**********************************************************************************************************************************************************************************/




























********************************** Changer le premier picto animé lié a une colonne (dans une rangée ) *********************
setTimeout(changePicto,800);

var firstPicto = $('.colPicto:eq(0) img');
function changePicto (){
    $('.colPicto:eq(0) img').each(function(){
        $('.colPicto:first-child img').attr('src');
            $(this).attr('href','/wp-content/uploads/sites/4643/2017/07/picto-experience2.png');
            $(this).attr('src','/wp-content/uploads/sites/4643/2017/07/picto-experience2.png');
            console.log('colPicto  href : '+$(this).attr('href')+'            >>> src : ' + $(this).attr('src'));
            $(this).css('transform','scale(0.9)');
        
    });
}
/********************************************************************************/













































****************************************************************************** Animation info contact sur mappy ******************************
if($w.width() > 767 ){
    $(".contactInfo").slideUp( 10 );
    $(".contactInfo").css({pointerEvents:'none',position:"absolute"});
    $(".mapZone").hover();
    $(".mapZone").hover(
        function(){
            $(".contactInfo").slideDown( "slow");
            $(".contactInfo").stop().animate({width:'300px',height:'100%',top:'0',opacity:'1'},500);
            //$(this).find('iframe').css({width:'50%'});
        }, 
        function(){
            $(".contactInfo").slideUp( "slow");
            $(".contactInfo").stop().animate({width:'300px',height:'0%',top:$(this).height(),opacity:'0'},500);
            $(this).children().css({position:"relative",left:'0', width:'100%',transition:'all .3s'});
    });
}
/*********************************************************************************************************************************************/














********************************************************************************************** Gestion formulaire de contact (injection mentions et animation li)*******************************
var nbElemForm = 0;
// Mention legales
ml = "<div class='mentionsLegales'><span class='requiredML'>*</span> Mentions obligatoires<p class='contentML'><em>« Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez de droits d'accès, de modification et d’opposition aux données qui vous concernent. Vous pouvez exercer ces droits à tout moment sous réserve de justifier de votre identité par courrier électronique à l’adresse email de contact[at]capexconseilsmlv.fr ou par voie postale à l’adresse suivante Capex Conseils, 14 AVENUE DE SARIA 77700 SERRIS, France. »</em></p></div>";
if( location.pathname === " /contact-plan/ "){
   $(" .box:eq ( 1 ) ").css(' width','32.4px ');
     // Suppression des H3 auto généré par les formulaire dans la page contact et devis
    var myH3 = $('.comment-respond').find('h3');
    myH3.remove();
    $('.comment-respond').find('h3').replaceWith('<span>' + $(this).text + '</span>');
    $('.gform_footer').after(ml);//Ajout mentions obligatoires formulaire de contact
    $('.gform_fields li').each(function() {nbElemForm ++;$(this).css({position: 'relative', left: '-300px', opacity: '0'});});
    sH = $w.scroll( function () {
        target = $('.gform_wrapper');
        st = Math.round($w.scrollTop());
        targetVisiblePos = Math.round(target.offset().top - st);
        if (Math.round($w.scrollTop()) >= targetVisiblePos ){lancementAnimForm();}
    });

}
function lancementAnimForm (){
    $('.gform_fields li ').each(function(j,elem) {
        var lth = $('.gform_fields li').length;
        console.log('animation form lancé n°'+(j+1)+'/'+lth,'target :'+ $('.gform_fields li:eq('+j+')').attr('class'));
        $('.gform_fields li:eq('+j+')').delay(j*100).animate({position: 'relative', transform:'rotateZ(0)', left: '0', opacity: '1',easing: "linear",duration:(j+1000+'')});
       if($('.gform_fields li:eq('+lth+')').hasClass('gfield_visibility_visible')) { $w.off("scroll", sH );}
    });
}
/**********************************************************************************************************************************************************************************/



































******************************************************Changement du lien de la home si positionné dessus ***********************************************************
if(location.pathname === '/'){
    $("#menu li:eq(0) a span").text(" Pôles Capex ");
     $('#menu li:eq(0) a').attr('href','/poles-capex/');
}
/*******************************************************************************************************************************************************************/


































**************************************************** Change la couleur du premier mot (ou lettre) des title en fonction de la classe detecté **************************************************************
$('.myH1,.myH2,.myH3,.myH4').each(function() {
    var h = $(this).html();
    var index = h.indexOf(' ');
    if(index == -1) {index = h.length;}

    if($(this).hasClass('firstBlack') ){$(this).html('<span class="titleBloc"><span class="black">' + h.substring(0, index) + '</span>' + h.substring(index, h.length)+'</span>');}
    if($(this).hasClass('firstRed') ){$(this).html('<span class="titleBloc"><span class="red1">' + h.substring(0, index) + '</span>' + h.substring(index, h.length)+'</span>');}
    if($(this).hasClass('firstWhite') ){$(this).html('<span class="titleBloc"><span class="white">' + h.substring(0, index) + '</span>' + h.substring(index, h.length)+'</span>');}

    if($(this).hasClass('firstLBlack') ){$(this).html('<span class="titleBloc"><span class="black">' + h.substring(0, 1) + '</span>' + h.substring(1, h.length)+'</span>');}
    if($(this).hasClass('firstLRed') ){$(this).html('<span class="titleBloc"><span class="red1">' + h.substring(0, 1) + '</span>' + h.substring(1, h.length)+'</span>');}
    if($(this).hasClass('firstLWhite') ){$(this).html('<span class="titleBloc"><span class="white">' + h.substring(0, 1) + '</span>' + h.substring(1, h.length)+'</span>');}
});
/******************************************************************************************************************************************************************************************/









********************************************************* Recuperation premier caractère pour intergration lettrine **************************************************************
$('.lettrine').each(function(){
    var needle = $(this).find('p').text().substring(0,1);
    console.log(needle);
    $(this).before("<span class='decoLettrine'>"+needle+"</span");
    $(this).find('decolttrine').css({'position':'absolute','font-size':'1500%','line-height':'1em','opacity':'.2','left':'0','top':'0','color':'orange','border-left':'solid 9px white','height':'20%','font-family':'sans-serif'});
});
$('.lettrine2').each(function(){
    var needle = $(this).find('p').text().substring(0,1);
    console.log(needle);
    $(this).before("<span class='decoLettrine2'>"+needle+"</span");
    $(this).find('decolttrine2').css({'position':'absolute','font-size':'1500%','line-height':'1em','opacity':'.2','left':'0','top':'0','color':'orange','border-left':'solid 9px #020202','height':'20%','font-family':'sans-serif'});
    //$(".lettrine-"+needle+':before').css({"content":needle.toString(),"position":"absolute","font-size": "800%","opacity": ".5","left": "0","color": "yellow", "border-left":" solid 9px white","height": "20%"});
});
/********************************************************************************************************************************************************************************/







*************************************************************** Lettrine dynamique via end "caractere class" **************************************************************
// .txtStyle comporte une classe composé de lettrine- "lettre à mettre en valeur"
// Une classe decoLettrine sera ajouté avant le bloc et se verra attribué la lettre indué en fin de classe
var haystack = document.querySelectorAll(".txtStyle");
if($(".txtStyle")){
    for (var h=0; h<haystack.length; h++) {
      for (var i=0; i<haystack[h].classList.length; i++) {
        var c = haystack[h].classList[i];
        if (c.indexOf("lettrine-") === 0) {
          var needle = c.split("-").pop();
          console.log(needle);
          $(".lettrine-"+needle).before("<span class='decoLettrine'>"+needle+"</span");
          //$(".lettrine-"+needle+':before').css({"content":needle.toString(),"position":"absolute","font-size": "800%","opacity": ".5","left": "0","color": "yellow", "border-left":" solid 9px white","height": "20%"});
        }
      }
    }
}
/*************************************************************************************************************************************************************/








*************************************************************** Generateur de degradé **************************************************************
var rgbR = {r:255,g:0,b:0};
function randomArbitraire(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
//var dataArray = ["bgColorAuto1", "bgColorAuto2", "bgColorAuto3", "bgColorAuto4","bgColorAuto5","bgColorAuto6"];
var dataArray = [];
$('.bgColorAuto > .vc_column-inner').each(function(index,elem){
    dataArray[index] = "bgColorAuto"+(index+1);
    console.log(dataArray[index]),
    listItemsHandler(index, $(this), dataArray[index]);
    var  t = $(this);
    colorCalc = ((index+1)*110);//noir>>jaune
    colorCalc = ((index+10)*10);//noir>>vert
    colorCalc = ((index+1)*101);//noir>>violet
    colorCalc = ((index+1)*111);//noir>>gris
    colorCalc = ((index+1)*100);//noir>>rouge
    colorCalc = ((index+100)*1);//noir>>bleu
    rgbR.r = 0;
    rgbR.g =randomArbitraire(1,10);
    rgbR.b= 0;
    //t.css('background-color',"#"+colorCalc).css('filter','brightness(10%)');
    t.css('background-color',"rgb:"+rgbR.r+','+rgbR.g+','+rgbR.b);
    console.log('colorCalc : '+colorCalc +  '|     color 2 >> '+index+''+index+''+index+'   | result rgb color : ' + t.css('background-color') + '   | rgbaRandom : '+rgbR.r+','+rgbR.g+','+rgbR.b);
    
});

function listItemsHandler($index, $item, $data){
    console.log('index >> '+$index + ",   item >>  " + $item + " , data >>  " + $data);
    $item.parent().addClass(dataArray[$index]);
    //$item.eq('.activebgColorAuto').addClass($data[$index]);
}
/*************************************************************************************************************************************************************/







/**** Tooltip animate */

// Appliquer la classe tooltipO sur les "image seule"
var applyTooltip = function(){
    console.log('function applyTooltip lancé !!!');
    clearTimeout(applyTooltip);
    $('.tooltipO').each(function(i,t){
        $(this).find('.vc_single_image-wrapper').after('<div class="myTooltip">'+$(this).find('img').attr('alt')+'</div>');
        console.log('ajout des Tooltip lancé !!!' + 'n°'+(i+1));
    });
};
$('.tooltipO').hover(function(){
    console.log('hover img tooltip !!!');
    var imgWidth = $(this).find('.vc_single_image-wrapper').width();
    console.log('largeur bloc : ' + $(this).width() + ',    largeur image : '+imgWidth);
     $(this).find('.myTooltip').animate({width: imgWidth});
});

var styleTooltip = {background: 'rgba(0, 0, 0, 0.5)',height: '30px',width: '200%',position: 'absolute',left: '100%',bottom: '-30px',color: 'white',lineHeight: '30px',textAlign: 'center',opacity: '0',transition: 'all .6s'};
var styleTooltipHover = {width: '98.3%',left: '50%',transform: 'translateX(-50%)',bottom: '5px',opacity: '1',transition: 'all .6s'};
$('.tooltipO:hover figure .myTooltip').css(styleTooltipHover);
$('.tooltipO figure .myTooltip').css(styleTooltip);
$('.tooltipO:hover > figure > .myTooltip').css({'width': '98.3%','left': '50%','opacity': '1','transform': 'translateX(-50%)','bottom': '5px','transition': 'all .6s'});
$('.tooltipO > figure > .myTooltip').css({'background': 'rgba(0, 0, 0, 0.5)','height': '30px','width': '120%','position': 'absolute','left': '0','bottom': '-30px','color': 'white','line-height': '30px','text-align': 'center','opacity': '1','transition': 'all .6s'});
                                            
applyTooltip();






















****************************************** ELEMENT SLIDOWN & up ********************************************** *
if($w.width() <= 765 && actif === 0){
        console.log("ouverture menu");
        $('.blocAnim').slideDown();
        $(this).addClass('actif');
        actif=1;
    }
if($w.width() >= 766 && actif === 1){
    console.log("fermeture menu");
    $('.blocAnim').slideUp(300,"linear");
    $(this).removeClass('actif');
    actif=0;
}
console.log('actif >> ' + actif);
$(".btnAnim, .btnAnim:after").click(function(e){
    if( $(this).next().hasClass('blocAnim') ){
        console.log('bloc anim est le parent de son bouton');
        $(this).next().slideToggle( 500,"linear");// Pour gérer l'élément situé en dessous du bouton
    }else{
        console.log("utilisation de siblings pour activer l'anim");
        $(this).parent().parent().siblings('.blocAnim').slideToggle( 500,"linear");// Pour cibler le bloc depuis le bouton
    }
});
/**** add slidetoogle in h3 *****/
$(".myH3").each(function(i,e){
    $(this).addClass('btnAnim');
    $(this).next().addClass('blocAnim');
});

CSS >>

.myH3 {
    font: normal normal 700 semi-condensed 16px/20px 'Josefin Sans',serif;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 29px;
    background-color: #8c8c8c;
}
.btnAnim {
    background: rgba(0,0,0,.5);
    padding: 30px 90px;
    position: relative;
    cursor: pointer;
    color: black;
    border-right: solid 1px #4e4e4e;
    border-left: solid 1px #b7b7b7;
    transition: all 0.6s;
}
.btnAnim:hover {
    background: rgba(0,0,0,.8);
    color: white;
    transition: all 0.6s;
}
.btnAnim:hover:before {
    content: '+';
    font-size: 4em;
    line-height: 35px;
    color: white;
    transform: translateY(-50%) rotate(90deg);
    transition: all .4s;
    cursor: pointer;
}
.btnAnim:before {
    content: '+';
    position: absolute;
    font-size: 3em;
    line-height: 35px;
    text-align: center;
    background-color: orange;
    height: 50px;
    width: 50px;
    top: 50%;
    left: 90%;
    z-index: 1;
    border-radius: 50px;
    color: black;
    transform: translateY(-50%) rotate(0deg);
    transition: all .4s;
    cursor: pointer;
}

/* En absolute ***/
.blocAnim {
    position: absolute;
    padding: 30px;
    width: 90.2%;
    background-color: orange;
    color: white;
    border-width: 0 2px 2px 2px;
    border-color: transparent #a75312 #a75312 #a75312;
    border-style: solid inset inset inset;
    z-index: 2;
}
.blocAnim li {
    color: white;
    margin: -11px 0 0 0!important;
    font-size: 1.2em;
    line-height: 1.3em;
    list-style-type: circle;
    top: -30px;
    position: relative;
}
.blocAnim li:before {
    position: relative;
    top: 11px;
    content: '>>';
    left: -9px;
    color: #ffc966;
    font: normal normal 100 semi-condensed 64px/51px 'Josefin Sans',serif;
    z-index: 2;
    text-shadow: 0 0 7px rgb(193, 53, 0);
    font-family: UnifrakturMaguntia;
}
.blocAnim div ul {
    list-style-image:url(/wp-content/uploads/sites/3410/2017/04/liPoint.svg#pointList);
}

/**************************************************************************************************************************/
























************************************************* SUB MENU TOP_BAR SMOOTHSCROLL ANCRE ****************************************
/******************************** SUB Menu *************************************/
if(location.pathname === "/gamme-actifas/") {
    $("#Top_bar").after("<div class='sous-menu'><span class='liens'><a href='#actixane'><span class='element'>Actixane</span></a><a href='#actiquartz'><span class='element'>Actiquartz</span></a><a clas='last-lien' href='#actifuge'><span class='element'>Actifuge</span></a></span></div>");
}
if(location.pathname === "/enduit-chaux/") {
    $("#Top_bar").after("<div class='sous-menu'><span class='liens'><a href='#enduitmonorex'><span class='element'>Enduitmonorex</span></a><a href='#enduitparlumiere'><span class='element'>Enduitparlumiere</span></a><a clas='last-lien' href='#enduitparexal'><span class='element'>Enduitparexal</span></a></span></div>");
}
/*** SMOOTH SCROLL ***/
$('a[href*="#"]:not([href="#"])').click(function() {
  //if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top-60
      }, 1000);
      return false;
    }
  //}
}); 

CSS >>
/************************************** SUB-MENU *****************************************/
.sous-menu {
    position: relative;
    z-index: 2;
    width: 100%;
    background-color: #fff;
    height: 45px;
    box-shadow: 1px 1px 8px rgba(0,0,0,0.3);
}

.sous-menu .liens a:hover::before {
    content: '';
    position: absolute;
    background: orange;
    height: 2px;
    width: 95%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all .6s;
}
.sous-menu .liens a:before {
    content: '';
    position: absolute;
    height: 1px;
    width: 0;
    top: 0;
    left: -50%;
    transform: translateX(-50%);
    background: rgba(255, 165, 0, 0);
    transition: all .9s;
}
span.liens {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
}
@media only screen and (min-width:1240px) {span.liens {left: 228px;}}
@media only screen and (max-width:1239px) {span.liens {left: 20px;}}

.liens a {
    max-height: 100%;
    padding: 15px 13px;
    position: relative;
    top: 25%;
    transform: translateY(-50%);
    transition: all .3s;
    text-decoration: none;
    color: #262626;
    font-size: 14px;
}
.liens a:hover span {
    background-color: #4b4b4b;
    color: orange;
    padding: 15px;
}
.liens a span {
    background-color: #fff;
    color: #333;
    padding: 0 15px;
    transition: all .4s;
}
.liens a:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, rgba(147,145,145,0) 0%,rgba(147,145,145,1) 22%,rgba(147,145,145,1) 50%,rgba(147,145,145,1) 76%,rgba(147,145,145,0) 100%);
    right: 0;
    top: 3px;
    opacity: 0.5;
}
.liens a .last-lien:after{display:none;}
a.last-lien:after {display: none;}

/*************************************************************************************************************************************************************************************/





























****************************************************************************** Deco titre footer ***********************************************************************
.titleFooter:first-letter {color: yellow;font-weight: 600;font-size: 150%;text-decoration: inherit;}
.titleFooter:after {border-bottom: solid 1px white;position: absolute;height: 33px;width: 51%;content: '';left: 50%;transform: translateX(-50%);}
.titleFooter {font-size: 120%;letter-spacing: .3em;color: white;}
/**********************************************************************************************************************************************************************/


















**************************************************************************************Creation de tooltip sur vc grid *************************************************************
    // Ajout de tootltip en recupérant les alt des images
    var to  = setTimeout(applyTooltip,2000);
    var applyTooltip = function(){clearTimeout(applyTooltip);$('.vc_grid-item-mini').each(function(e){$(this).find('.vc_gitem-animated-block').after('<div class="myTooltip">'+$(this).find('img').attr('alt')+'</div>');});};
$('.vc_grid-item').css({padding: '0'});
$('.vc_grid-item-mini > div').css('position','relative');
$('.vc_grid-item-mini:hover > div.myTooltip').css({background:'rgba(0, 0, 0, 0.5)',height: 'auto',width: '94.7%',position:'absolute',left: '0',bottom:'5px',color:'white',lineHeight:'30px',textAlign:'center',opacity:'1',transition:'all .6s'});
$('.vc_grid-item-mini > div.myTooltip').css({background: 'rgba(0, 0, 0, 0.5)',height: 'auto',width: '94.7%',position: 'absolute',left: '0',bottom: '-30px',color: 'white',lineHeight: '30px',textAlign: 'center',opacity: '0',transition: 'all .6s'});


/**********************************************************************************************************************************************************************************/


















********************************************************************* Bouton show hide element **********************************************************************************
if($w.width() < 768){
    $('.blocAvantage,.blocAnim').slideDown();
}else if($w.width() >= 768){
    $('.blocAvantage,.blocAnim').slideUp(300,"linear");
}
//$('.blocAvantage,.blocAnim').slideUp('slow');
var actif = 1;
console.log('actif >> ' + actif);

$(".btnInfo, .btnInfo:after,.btnInfo2, .btnInfo2:after").click(function(e){
     $(this).siblings('.blocAvantage,.blocAnim').slideToggle( 300,"linear");
});

if($w.width() < 768){
    $('.blocAvantage,.blocAnim').slideDown();
    $(this).addClass('actif');
    actif=1;
}else if($w.width() >= 768){
    $('.blocAvantage,.blocAnim').slideUp('slow');
    $(this).removeClass('actif');
    actif=0;
}
/*********************************************************************************************************************************************************************************/





















*********************************************** REMPLACEMENT DU H4 GEBERE DANS LES COLONNES DU FOOTER *****************************************************************************
var h4Content = $(".one-third").find("h4").each(function(){
$(this).replaceWith("<span class='myH4'>"+$(this).text()+"</span>");
});
/********************************************************************************************************************************************************************************/























****************************** ajout de classe pour la premiere lettre du h1 et h2 evite l ajout d un :first-letter pour ne pas interagir avec le before **************************
var x= $(".myH1:eq(0)").text();
var y = $(".myH2:eq(0)").text();
var textH1='<span class="firstL-H1">'+x.charAt(0)+'</span>';
var textH2='<span class="firstL-H2">'+x.charAt(0)+'</span>';
$(".myH1:eq(0)").html(textH1 + x.slice(1,x.length));
$(".myH2:eq(0)").html(textH2 + x.slice(1,x.length));
/********************************************************************************************************************************************************************************/










































****************************************************  modification du premier h2 en h1 si page pack immo *****************************************************************************
if(location.pathname === "/location-immobilier/" || location.pathname === "/vente-immobilier/"){
    console.log('page vente');
    $("#Content").find('h2').eq(0).replaceWith(function() {
         return '<h1 class="myH1">' + $(this).text() + '</h1>';
     });
}
/***************************************************************************************************************************************************************************************/









































****************************************************Remplacement separateur des horaires ****************************************************************************
$('.tabHours td').each(function(){
    var txt = $(this).text();
    txt.replace('00  14h00','00 / 14h00');
     console.log('texte horraires remplacé >> ' + txt);
});
/*******************************************************************************************************************************************************************/






































********************************************************* Generateur de couleur degradé sur colonne **************************************************************
var colorCalc;
var rgbR = {r:255,g:0,b:0};
function randomArbitraire(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
//var dataArray = ["bgColorAuto1", "bgColorAuto2", "bgColorAuto3", "bgColorAuto4","bgColorAuto5","bgColorAuto6"];
var dataArray = [];
$('.bgColorAuto > .vc_column-inner').each(function(index,elem){
    dataArray[index] = "bgColorAuto"+(index+1);
    console.log(dataArray[index]),
    listItemsHandler(index, $(this), dataArray[index]);
    var  t = $(this);
    colorCalc = ((index+1)*110);//noir>>jaune
    colorCalc = ((index+10)*10);//noir>>vert
    colorCalc = ((index+1)*101);//noir>>violet
    colorCalc = ((index+1)*111);//noir>>gris
    colorCalc = ((index+1)*100);//noir>>rouge
    colorCalc = ((index+100)*1);//noir>>bleu
    rgbR.r = 0;
    rgbR.g =randomArbitraire(1,10);
    rgbR.b= 0;
    //t.css('background-color',"#"+colorCalc).css('filter','brightness(10%)');
    t.css('background-color',"rgb:"+rgbR.r+','+rgbR.g+','+rgbR.b);
    console.log('colorCalc : '+colorCalc +  '|     color 2 >> '+index+''+index+''+index+'   | result rgb color : ' + t.css('background-color') + '   | rgbaRandom : '+rgbR.r+','+rgbR.g+','+rgbR.b);
    
});
function listItemsHandler($index, $item, $data){
    console.log('index >> '+$index + ",   item >>  " + $item + " , data >>  " + $data);
    $item.parent().addClass(dataArray[$index]);
    //$item.eq('.activebgColorAuto').addClass($data[$index]);
}
/******************************************************************************************************************************************************************/






























****************************** Creation de nth-of-type en jquery **************************

$.expr[':']['nth-of-type'] = function(elem, i, match) {
    var parts = match[3].split("+");
    return (i + 1 - (parts[1] || 0)) % parseInt(parts[0], 10) === 0;
};

Utilisation >> 
$("textarea:nth-of-type(4n)") pour choisir le 4eme textarea
/****************************************************************************************/


































****************************************** Chercher si une chaine de caractère est presente ou non **********************************************************************************************************

//$('.facebook a').attr("href","https ://www.facebook.com/Permis-de-Conduire-265893070217181/");
//setTimeout(changeFB,1500);
var chaine = "Si ton tonton";
var result = /\bton\b/.exec(chaine); // On cherche à récupérer le mot « ton »

if (result) { // On vérifie que ce n'est pas null
    alert(result); // Affiche « ton »
}


//$('.facebook a').attr("href","https ://www.facebook.com/Permis-de-Conduire-265893070217181/");
//setTimeout(changeFB,1500);
$('.facebook a').html().replace('https://autoecole-permisdeconduire.site-privilege.pagesjaunes.fr', 'https ://www.facebook.com/Permis-de-Conduire-265893070217181/');
function changeFB(){
    $('.facebook a').html(function(i, htm) {
         console.log(htm.split("/")[3]);
        return htm.split("/")[3];
       
    });
}



//Methode 2 : Remplacer un mot dans la chaine
var sentence = 'Je m\'appelle Sébastien';
var result = sentence.replace(/Sébastien/, 'Johann');
alert(result); // Affiche : « Je m'appelle Johann »
/************************************************************************************************************************************************************************************************/


























********************************************************************** Creation objets anime si visible ****************************************************
for(var i=0;i<3;i++){nb=i+1;$('.bloc'+nb).after("<div class='img"+nb+"'></div>");$('.bloc'+nb).addClass('wpb_animate_when_almost_visible')}
$(document).bind('scroll', function(e) {
    if($('.bloc1').hasClass('animated')){$('.img1').animate({opacity: 1,right: "31%",display:"block"}, 2000, function() {$(this).css({display:'block'});});}
    if($('.bloc2').hasClass('animated')){$('.img2').animate({delay: 500,opacity: 1,right: "15%",display:"block"}, 3000, function() {$(this).css({display:'block'});});}
    if($('.bloc3').hasClass('animated')){$('.img3').animate({delay: 500,opacity: 1,right: "73%",display:"block",background: "black"}, 3000, function() {$(this).css({display:'block'});$(document).unbind('scroll');});}
});

/**********************************************************************************************************************************************************************************/


































****************************************************************separation h3 getInTouch avec un h4 pour la description  **********************************************************
$('.get_in_touch h3').text("ONPC");
$('.get_in_touch h3').after("<h4>Bureau d’étude du BTP</h4>");
$(".get_in_touch h4 ").css({'color': 'white!important','text-align': 'left'});
/*********************************************************************************************************************************************************************************/


































*************************************************************** AJOUT Title SUR Bouton du menu principal ***************************************************************************
$("#menu-item-245").attr('title','OPC');
$("#menu-item-244").attr('title','CSPS');
/*********************************************************************************************************************************************************************************/



















********************************************************************** Animation colonne si visible à l écran *********************************************************************
var sH;
var $w = $(window);
var d1 = $('.detect1');
var d2 = $('.detect2');
var d3 = $('.detect3');
var d4 = $('.detect4');
//Anim deco h2 
sH = $w.scroll( function () {
     console.log('scroll event');
    if( d1.hasClass('wpb_start_animation animated')){animT(d1); }
    if( d2.hasClass('wpb_start_animation animated')){animT(d2); }
    if( d3.hasClass('wpb_start_animation animated')){animT(d3); }
    if( d4.hasClass('wpb_start_animation animated')){animT(d4); }
});
function  animT (elem){
    elem.find('.decoLeft').animate({width: '230px'},1500,'easeOutCubic',function () { elem.addClass('end');console.log('end class added !!!');  });
    elem.find('.decoRight').animate({width: '230px'},1500,'easeOutCubic',function () { elem.addClass('end');console.log('end class added !!!');  });
}

function loadScript(url, callback){var head = document.getElementsByTagName('head')[0];var script=document.createElement('script');script.type = 'text/javascript';script.src = url;script.onreadystatechange = callback;script.onload =callback;head.appendChild(script);}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js", sH);

/***
CSS : 
.decoLeft{ left: 0;}.decoRight{right: 0;}
.decoLeft,.decoRight {position: absolute;width: 0;top: 50%;transform: translateY(-50%);border-top: dashed 5px #B3C6F4;border-bottom: dashed 5px #B3C6F4;z-index: 2;}
***/

/****************************************************************************************** END ANIM SCREEN DETECT **************************************************************************/
















********************************************************************************** Paralax element *******************************************************************************
var tof = $('.photo2');
tof.css({"transform":"translateY(0px)"});


$(window).scroll(function(){
var hScroll = $(this).scrollTop()*.55;
console.log(hScroll);
tof.css("transform","translateY(-"+hScroll+"px)"); 
});
/******************************************** END PARALLAX *********************************************************************************************************************/












********************************************** Parallax mouse multi-image  ****************************************************************************************

$('#Parallax').mousemove(
		function(e){
			/* Zone de calcule des mouvements depuis l'id Parallax */
			var offset = $(this).offset();
			var xPos = e.pageX - offset.left;
			var yPos = e.pageY - offset.top;

			/* Get percentage positions */
			var mouseXPercent = Math.round(xPos / $(this).width() * 100);
			var mouseYPercent = Math.round(yPos / $(this).height() * 100);

			/* Position des enfant ayant la class imgBg */
			$(this).children('.imgBg').each(
				function(){
					var diffX = $('#Parallax').width() - $(this).width();
					var diffY = $('#Parallax').height() - $(this).height();

					var myX = diffX * (mouseXPercent / 100); //) / 100) / 2;
					var myY = diffY * (mouseYPercent / 100);
					var cssObj = {
						'left': myX + 'px',
						'top': myY + 'px'
					};
					//$(this).css(cssObj);
					$(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});

				}
			);

		}
	);
/**************************************************************************************************************************************************************/












/******************************************************************** PARALLAX MULTI ELEMENTS *********************************************************************************/
var b1 = $('.box1 > .vc_column-inner ');
var b2 = $('.box2  > .vc_column-inner');
var b3 = $('.box3  > .vc_column-inner');
var tabBox = [$('.box1 > .vc_column-inner'),$('.box2 > .vc_column-inner'),$('.box3 > .vc_column-inner')];

var hScroll1;
var hScroll2;
var hScroll3;

b1.css({'top': '878px','left': '-20px'});
b2.css({'top': '980px','left': '80px'});
b3.css({'top': '900px'});

for (var i = 0; i < tabBox.length; i++) {
    var num=i+1;
   tabBox[i].css({"transform":"translateY(0px)"});
    console.log(tabBox[i].val());
}


$(window).scroll(function(){
    hScroll1 = $(this).scrollTop()*1.15;
    hScroll2 = $(this).scrollTop()*1.1;
    hScroll3 = $(this).scrollTop()*1.3;
    
    console.log('param scroll 1 >>'+hScroll1+' | param scroll 2 >>'+hScroll2 + 'param scroll 3 >>'+hScroll3);
    $('.box1 > .vc_column-inner').css("transform","translateY(-"+hScroll1+"px) rotate(5deg)"); 
    $('.box2 > .vc_column-inner').css("transform","translateY(-"+hScroll2+"px) rotate(-5deg)"); 
    $('.box3 > .vc_column-inner').css("transform","translateY(-"+hScroll3+"px) rotate(15deg)"); 
});
/********************************************************************************** END PARALLAX MULTI ELEMENTS ********************************************************************/



























*** ************************************************************Ajout de champs dans le module get_in_touch conteneur contact ***************************************************
var viss;
var $h3;
var i = 0;

$('.get_in_touch').each(function(){
    i++;
    viss = $(this);
    viss.addClass('git' +i);
    $h3 = viss.find('h3') ;
    
    viss.find('h3').replaceWith("<span class='myH3 green1'>"+$(this).find('h3').text()+"</span>");
    viss.find('ul:first-child').before('<ul class="imageUl"><img src="" class="img-wrapper" /></ul>');
    viss.find('.imageUl').before('<span class="desc-wrapper"></span>');
});
$('.git1 .imageUl img').attr('src','/wp-content/uploads/sites/2831/2017/02/logo-bardage-1.png');
$('.git1 .desc-wrapper').html('Couverture, Bardage, Charpente, Menuiserie');
$('.git2 .imageUl img').attr('src','/wp-content/uploads/sites/2831/2017/02/logo-etancheite-1.png');
$('.git2 .desc-wrapper').html('Étanchéité, Zinguerie, Toit-terrasse');
/************************************************************************************************************************************************************************************/


























********************************* Suppression des h4 de FlatBox par des span formatés avec la classe titleFlatBox **************
$('.desc_wrapper').each(function() {
     var h4 = $(this).find('h4');
     h4.replaceWith('<span class="titleFlatBox blue1">' + h4.text() + '</span>');
});
/*******************************************************************************************************************************/

























**************************************************** Gestion du module Actualités ***************************************************
if(location.pathname === "/actualites/"){
    console.log('page Actu visité !!!');
    jQuery("#Wrapper").find('h2').filter(":empty").remove();// suppression de h2 si celui-ci est vide (generé par actualité)
    $('.event-link a').text('En savoir plus');// Modification du bouton en francais

}
/*************************************************************************************************************************************/
























****************************************LANCEMENT Fonction en fonction de  $(window).width() *******************************************************
    var $w = $(window);
    var resizeHandler = $w.resize( function () {
	console.log( $w.width() );// Sortie en console de notre position en scrollTop
        // Si la fenêtre est plus grande que 1260px et inferieure à 1560px alors ...
        if ($w.width() > 1260 &&  $w.width() < 1560){       
                 console.log("condition remplis");
                $w.off("resize", resizeHandler );// On arrête l'écoute du window.resize
                lancementFonction (); 
          }
	});
	lancementFonction (){
			console.log("fonction lancé et condition remplis");
	} 
/*************************************************************************************************************************************/






























************************************** GESTION Du bouton MEDIA GRID photos (10 visible >> nth-child(9)) *****************************
var inter = setInterval(function(){
    console.log("interval");
    if( $('.vc_pageable-slide-wrapper .vc_grid-item:nth-child(9)').hasClass('animated') ){
        $('.vc_pageable-load-more-btn ').find('.vc_btn3-container').addClass('myBtn');
        $('.vc_pageable-load-more-btn ').find('a').text("charger plus d'image");
        console.log($('.vc_grid-btn-load_more a').text());  
        clearInterval(inter);
    }
},500);




/*** Meilleure Methode ++ */

/****** GESTION Du bouton MEDIA GRID photos (10 visible >> nth-child(9)) **/
if(location.pathname === "/realisations/" || location.pathname === "/photos/" ){
    var refreshIntervalId = setInterval(btnChange, 500);
}


function btnChange (){
        console.log("interval");
        if( $('.vc_pageable-slide-wrapper .vc_grid-item:nth-child(9)').hasClass('animated') ){
            $('.vc_pageable-load-more-btn ').find('.vc_btn3-container').addClass('myBtn');
            $('.vc_pageable-load-more-btn ').find('a').text("charger plus d'image");
            console.log($('.vc_grid-btn-load_more a').text());  
            clearInterval(refreshIntervalId);
        }
    }
/***************************************************************************************************************************************/
























************************************** Multi Media_Grid tooltip and translate button *****************************

var btnMore;
var altImg;
var altImgString;
var to ;
if (location.pathname === "/realisations/" || location.pathname === "/photos/") {
    var intervalId = setInterval(btnChange1, 1000);
    function btnChange1() {
        $('.vc_grid-container-wrapper').each(function(i){
            console.log('id media grid '+'1er each >> '+ $(this).attr('id'));
            if( $(this).find('.vc_visible-item').last().hasClass('animated')){
                console.log('Media Grid n° >> ' +(i+1) +' ,nombre element à traiter >>' + $(this).find('.vc_grid-item-mini').length);
                btnMore = $(this).find('.vc_grid-btn-load_more');
                btnMore.addClass('myBtn');
                btnMore.find('a').text("charger plus d'image");
                clearInterval(intervalId);
                to = setTimeout( applyTooltip($(this)), 2000);
            }
        });
    }
    
    //var to = setTimeout(applyTooltip($('#MediaG1')), 2000);
    function applyTooltip(elem) { 
        console.log('elem grid each >> '+ elem.attr('id'));
        altImg = elem.find('img').attr('alt');
        console.log('avant : alt img >> ' +altImg);
        elem.find('.vc_grid-item-mini').each(function(e) {
            console.log( 'verif elem min grid >> ' + $(this).attr('class') );
            if( $(this).find('a').attr('title') !== '' ||  $(this).find('a').attr('title') !== undefined ){
                altImgString =  $(this).find('a').attr('title').replace(/-/g, " ") ;
                $(this).find('img').attr( 'alt',altImgString );
                console.log('via title a : alt img >> ' + altImgString);
            }
            if( $(this).find('img').attr('title') !== '' ||  $(this).find('img').attr('title') !== undefined ){
                altImgString =  $(this).find('a').attr('title').replace(/-/g, " ");
                $(this).find('img').attr( 'alt',altImgString);
                console.log('via title img : alt img >> ' + altImgString);
            }
            if( $(this).find('img').attr('alt') !== '' ||  $(this).find('img').attr('alt') !== undefined ){
                altImgString = $(this).find('img').attr('alt').replace(/-/g, " ");
                console.log('via alt img : alt img >> ' + altImgString);
            }
            $(this).find('a').removeAttr('title');
            $(this).find('img').attr('alt',altImgString);
            $(this).find('.vc_gitem-animated-block ').after('<div class="myTooltip">' + altImgString + '</div>');
        });
     
        $('.myTooltip').css({
            background: 'rgba(0, 0, 0, 0.5)',
            height: '30px',
            width: '100%',
            position: 'absolute',
            left: '0',
            bottom: '-30px',
            color: 'white',
            'line-height': '30px',
            'text-align': 'center',
            opacity: '1',
            transition: 'all .6s'
        });
         $('.vc_grid-item .vc_grid-item-mini.vc_is-hover:hover .myTooltip').css('bottom', '0!important');// placer le css dans la page si le hover pose problème
         $('.vc_grid-item').css({'padding': '0', 'overflow':'hidden'});
    }
}

























************************************************************* Smooth Scroll amélioré *************************************************
/* SMOOTH SCROLL */
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top-60
      }, 1000);
      return false;
    }
  }
}); 
/*****************************************************************************************************************************************/




























***************************** Animation slideDown avec easing complet et screen detect de l élément à l écran **********************************************************************************
$('.blocPart .p1,.blocPart .p2,.blocPart .p3').slideUp(10);
$('.blocPart').addClass('wpb_animate_when_almost_visible ');


// Fonction permettant de charger une classe externe et de l'utiliser dans une fonction
//  class fonctionnelle >> dans hook <script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"> </script>
function loadScript(url, callback){
	var head = document.getElementsByTagName('head')[0];var script=document.createElement('script');script.type = 'text/javascript';script.src = url;script.onreadystatechange = callback;script.onload = callback;head.appendChild(script);}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js", startListenScroll);
function startListenScroll () {$(document).on("scroll", detectWAV);}


function detectWAV(){
     if($('.blocPart').hasClass('wpb_start_animation')){
        console.log('detect item for animation');
        $('.blocPart').slideDown(10,"linear");
        $('.blocPart .p1').slideDown({duration: 300,easing: "easeOutBack"});
        $('.blocPart .p2').slideDown({duration: 600,easing: "easeOutBack"});
        $('.blocPart .p3').slideDown({duration: 900,easing: "easeOutBack"});
        
        $('.blocPart').removeClass('wpb_animate_when_almost_visible ');
        console.log('when_almost_visible is detected >> ' + $('.blocPart').hasClass('wpb_animate_when_almost_visible '));
       $(document).off("scroll", detectWAV);
    }
}
/****************************************************************************************************************************************************************************************************/















************************************************************************************************* Picto rotation viewer *********************************************************************************
var img, imgSrc, urlImg, tween, imgOut,imgOver;
$('.icoHover figure').each(function(){ 
     $(this).children().css({pointerEvents:'none'});
});
   
$('.icoHover figure').hover(
    function(){
        img = $(this).find('img');
        imgSrc =  img.attr('src');
        urlImg = imgSrc.substring(0, imgSrc.length-4);
        imgOut = urlImg+'.jpg';
        imgOver = urlImg+'-hover.jpg';
        if(imgOver.substring(imgOver.length,imgOver.length- 16) === '-hover-hover.jpg'){ imgOver = imgOver.substring(0,imgOver.length- 16) + '-hover.jpg';}
        if(imgOut.substring(imgOver.length,imgOver.length- 10) === '-hover.jpg'){ imgOver = imgOver.substring(0,imgOver.length- 10) + '.jpg';}
        tween = TweenLite.to(img, 0.2, {rotationY:90, transformOrigin:"50% 50%", onComplete:function(){img.attr('src',imgOver);TweenLite.to(img, 0.2, {rotationY:180, transformOrigin:"50% 50%"});}});
    },// Out
        function(){TweenLite.to(img, 0.2, {rotationY:90, transformOrigin:"50% 50%", onComplete:function(){img.attr('src',imgOut);TweenLite.to(img, 0.2, {rotationY:0, transformOrigin:"50% 50%"});}});
    }
);
/****************************************************************************************************************** END Picto Rotation viewer *************************************************************/























************************************************************************** Del admin plus précis, avec utilisation de addStyle **********************************************************
if($('body').hasClass('admin-bar')){
    $('body').addClass('replaceTopBody');
    if($('#Top_bar').css('top')=== '32px'){console.log('top === 32');addStyles('#Header #Top_bar',{top : '0!important'});}
    console.log('admin bar détécté !!!');
    if($(window).width() < 782){console.log('mobile');addStyles('body', {top: '-46px!important',position: 'relative'});}
    else if($(window).width() > 782){console.log('desktop');addStyles('body', {top: '-32px!important',position: 'relative'});}
    $('#wpadminbar').remove();
}

/* Gestion creation suppression de css sur objet********************************************** */
function addStyle(selector, rulename, value) {
    var stylesheet = getAppStylesheet();
    var cssRules = stylesheet.cssRules || stylesheet.rules;
    var rule = stylesheet.insertRule(selector + ' { ' + rulename + ':' + value + ';}', cssRules.length);
}
function clearStyle(selector, rulename) {
    var stylesheet = getAppStylesheet();
    var cssRules = stylesheet.cssRules || stylesheet.rules;
    for (var i=0; i<cssRules.length; i++) {
        var rule = cssRules[i];
        if (rule.selectorText == selector && rule.style[0] == rulename) {
            stylesheet.deleteRule(i);
            break;
        }
    }       
}

function addStyles(selector, rules) {
    var stylesheet = getAppStylesheet();
    var cssRules = stylesheet.cssRules || stylesheet.rules;
    for (var prop in rules) {
        addStyle(selector, prop, rules[prop]);
    }
}

function getAppStylesheet() {
    var stylesheet = document.getElementById('my-styles');
    if (!stylesheet) {
        stylesheet = $('<style id="my-styles">').appendTo('head')[0];
    }
    stylesheet = stylesheet.sheet;
    return stylesheet;
}
/******************************************************************************************************************************************************************************************************/






















************************************************ Changer le type de lien sous-menu ancre en curent-item si la position est == à l id  ********************************************
var position = $('#actualites').offset(); 
$(document).scroll(function () {
    var y = $(this).scrollTop();

    if(y >= position.top -300){
        console.log("actualité visité");
        $('#menu-item-369').addClass('current-menu-item');
    }else{
        console.log("actualité non visité");
        $('#menu-item-369').removeClass('current-menu-item');
    }
});
/*************************************************************************************************************************************************************************************************/
























************************************************************* EFEETS BOUTON ************************************************************************************************************
// rendre un lien ouvrable dans un nouvel onglet
$('#menu-item-180 a').attr('target','_blank');


// Desactiver bouton (comme menu de sous-menu )
$('#id-bouton-menu').prop(disabled, true);


// Cacher un élément avec animation
$('.btn1').hover(function() {
        $('.bloc1').slideUp(5000, "easeInQuart");
      },
      function(){
        $('.bloc1').slideOut(5000, "easeOutQuart");
      }
   );

// >>>>>>>>>>>  Liste easing : http://easings.net/fr
/*************************************************************************************************************************************************************************************/


























********************************************************recherche et remplace texte dans une page (mentions légales)****************************************************************
$('.page-id-132 .vc_custom_1435138638284 span').each(function() {
    var text = $(this).text();
    $(this).text(text.replace('MATH PREVARIS', 'MATH-PREVARIS')); 
}); 
//******************************************************************************** Fin modification h1***************************************************************************************











***********************************************************************Remplacement de copyright pj**************************************************************************************
$('.pj-shortcode').each(function() {
    var text = $(this).text();
    console.log(text);
    $(this).text(text.replace('Gelmatic France', 'CS-CONCEPT')); 
});  
//******************************************************************************** Fin modification h1***************************************************************************************











*************************************************************************** paramètrage des attributs du logo *************************************************************************
$('#logo[title]').removeAttr('title');// Suppression Title
$('#logo').find('img').attr('alt','alt du logo');// Ajout de l'attribut alt
//******************************************************************************** Fin modification h1***************************************************************************************









********************************************************* Ajout des agences dans le slogan et avant chaque numéro de téléphone*************************************************************
$('.contact_details li:nth-child(2)').prepend( '| Site Bergerac ' );
$('.contact_details li:nth-child(3)').prepend( ' Site Marsac : ' );
//******************************************************************************** Fin modification h1***************************************************************************************







***************************************************************Suppression d un h3 invisible généré par les formulaire d avis***************************************************************
var h3Avis = $(".comment-respond").find("h3")
h3Avis.replaceWith("<span>"+h3Avis.text()+"</span>")
//******************************************************************************** Fin modification h1***************************************************************************************














********************************************************gestion du retour de ligne du h1 de la page d accueil pour ajouter un saut de ligne *************************************************
var titleAccueil = $(".cutH1");
var newtitleAccueil="Christophe levage manutention <br /> Caen / La Haye-du-Puits";
titleAccueil.html(newtitleAccueil);
//******************************************************************************** Fin modification h1***************************************************************************************
















******************************************************** Modification retour à la ligne h1 avec detection de page target ********************************************************
//gestion du retour de ligne du h1 de la page d'accueil pour ajouter un saut de ligne après la virgule

  if(location.pathname === "/"){
       var titleAccueil = $(".title");
      var textTitle = titleAccueil.text();
      var ancienTextAccueil = "Piscines Magiline Water-Ric, maître d'oeuvre des piscines en Dordogne";
      var newtitleAccueil="Piscines Magiline Water-Ric,<br /> maître d'oeuvre des piscines en Dordogne";
}
     
  function modifieH1(){
     if($(window).width() < 1600){
         if(textTitle == ancienTextAccueil ){ titleAccueil.html(newtitleAccueil);}
         modifieH1.off();
        }else{
             if(textTitle == newtitleAccueil){ titleAccueil.html(newtitleAccueil);}
              titleAccueil.html(ancienTextAccueil );
        }
  }
  modifieH1();
  $( window ).resize(function() {
	console.log( "taille fenetre >> "+$(window).width() );
    modifieH1(); 
  });
  //------------------------------ Fin modification h1------------------------------------------------



















******************************************************** Fonction permettant de créer une animation de défilement vers une ancre ************************************************
$('a[href^="#"]').click(function(){
var the_id = $(this).attr("href");
  console.log(the_id);
//verification de l'id si true >> activation scrollTop
  if(the_id === '#nos-programmes'){
  	$('html, body').animate({
  		scrollTop:($(the_id).offset().top -50)
  	}, 'slow');
  	return false;
  }
});
/**********************************************************************************************************************************************************************************/



















********************************************************Remplacement de h2 du TS image overlay par un h3 ********************************************************
  $('.mask').each(function() {
     var h2Overlay = $(this).find('h2');
     h2Overlay.replaceWith('<h3>' + h2Overlay.text() + '</h3>');
    var titleH3 =  $(this).children();
     titleH3.css("cssText", "color: #ffffff!important;");
     console.log('h2Overlay >> '+h2Overlay+',       this.children() >>'+$(this).children().attr('class') );
  });
/***************************************************************************** END REPLACE H2 ******************************************************************/











********************************************************Suppression d un h3 invisible généré par les formulaire d avis *****************************************
var h3Avis = $(".comment-respond").find("h3")
h3Avis.replaceWith("<span>"+h3Avis.text()+"</span>");
/**********************************************************************************************************************************************************************************/











***************************************************gestion du retour de ligne du h1 de la page d accueil pour ajouter un saut de ligne après la virgule************************************
  if(location.pathname === "/"){
       var titleAccueil = $(".title");
      var textTitle = titleAccueil.text();
      var ancienTextAccueil = "Piscines Magiline Water-Ric, maître d'oeuvre des piscines en Dordogne";
      var newtitleAccueil="Piscines Magiline Water-Ric,<br /> maître d'oeuvre des piscines en Dordogne";
}
     
  function modifieH1(){
     if($(window).width() < 1600){
         if(textTitle == ancienTextAccueil ){ titleAccueil.html(newtitleAccueil);}
        }else{
             if(textTitle == newtitleAccueil){ titleAccueil.html(newtitleAccueil);}
              titleAccueil.html(ancienTextAccueil );
        }
  }
  modifieH1();
  $( window ).resize(function() {
console.log( "taille fenetre >> "+$(window).width() );
    modifieH1(); 
  });
/**********************************************************************************************************************************************************************************/








  


*****************************Fonction permettant de créer une animation de défilement vers une ancre : la fonction détecte et applique automatiquement l animation sur les liens ***********
  $('a[href^="#"]').click(function(){
  	var the_id = $(this).attr("href");
  
  	$('html, body').animate({
  		scrollTop:($(the_id).offset().top -50)
  	}, 'slow');
  	return false;
  });
/********************************************************************************************** FIN SMOOTH ANIM CLICK BTN *************************************************************************/











*************************************************************************** remplacement de h2 du TS image overlay par un h3 ***************************************************************
  $('.mask').each(function() {
     var h2Overlay = $(this).find('h2');
     h2Overlay.replaceWith('<h3>' + h2Overlay.text() + '</h3>');
    var titleH3 =  $(this).children();
     titleH3.css("cssText", "color: #ffffff!important;");
     console.log('h2Overlay >> '+h2Overlay+',       this.children() >>'+$(this).children().attr('class') );
  });
/********************************************************************************************** FIN SMOOTH ANIM CLICK BTN *************************************************************************/










*************************************************************************Remplacement h3 de la page contact ********************************************************************************
if(location.pathname === "/contact"){
       var h3Contact= $(".get_in_touch").find('h3');
       var txtH3Contact = h3Contact.text();
       h3Contact.remove();
       // h3Contact.replaceWith("<span>"+txtH3Contact+"</span>")
}
/********************************************************************************************** FIN SMOOTH ANIM CLICK BTN *************************************************************************/












************************************************************** Fonction permettant de charger une classe externe et de l utiliser dans une fonction  ******************************************
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
loadScript("https://raw.githubusercontent.com/zaach/reflect.js/master/standalone/reflect.js", reflectImg);
var reflectImg = function() {

   // Here, do what ever you want
};


// Autre méthode d'importation de framework et d'utilisation localisé
// Ajout d'une blibliothèque jquery transmit et utilisation de celle-ci dans la zone getScript{}
    var url = "https://cdn.jsdelivr.net/jquery.transit/0.9.12/jquery.transit.min.js";
    $.getScript( url, function() {

});
/********************************************************************************************** END LOAD CLASS *************************************************************************/











************************************************************************************* Clone css *********************************************************************************************
// Fonction de copie CSS, possibilité de save l'ensemble des propriétés style et de les réappliquer par la suite à une autre classe    
function css(a) {
    var sheets = document.styleSheets, o = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (a.is(rules[r].selectorText)) {
                o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
            }
        }
    }
    return o;
}

function css2json(css) {
    var s = {};
    if (!css) return s;
    if (css instanceof CSSStyleDeclaration) {
        for (var i in css) {
            if ((css[i]).toLowerCase) {
                s[(css[i]).toLowerCase()] = (css[css[i]]);
            }
        }
    } else if (typeof css == "string") {
        css = css.split("; ");
        for (var i in css) {
            var l = css[i].split(": ");
            s[l[0].toLowerCase()] = (l[1]);
        }
    }
    return s;
}

//--------------------------- Utilisation >>
$('.get_in_touch').find(".spanH3").css(style);
/**********************************************************************************************************************************************************************************/













****************************************************************************** Lancement fonction dans une partie spécifique du site via scrollTop *****************************************
    var $window = $(window);
    var affiche = false;
    var scrollHandler = $window.scroll( function () {
	console.log( $window.scrollTop() );// Sortie en console de notre position en scrollTop
	
        // Si nous somme dans la zone des pictos et si les icones ne sont pas affichés
        if ($window.scrollTop() > 1260 && !affiche && $window.scrollTop() < 1560){       
                 console.log("condition remplis");
                $(window).off("scroll", scrollHandler );// On arrête l'écoute du window.scroll
                lancementFonction (); 
          }
	});
/**********************************************************************************************************************************************************************************/














**************************************** Vider un input au clic et replacer le texte de base hors focus **************************************************************************
<input style="width:100%;height:33px;padding:0!important;font-size:13px!important;height:33px;background-color:#fff"type="text" value="Vannes, 56000, mon agence..." onfocus="if (this.value == 'Vannes, 56000, mon agence...') {this.value = '';}" onblur="if (this.value == '') {this.value = 'Vannes, 56000, mon agence...';}">

/**********************************************************************************************************************************************************************************/











********************************************************Recherche le premier caractère d un href qui commence par '' et le supprimer *********************************************
var str="";
$("a").each(function(){
     str= $(this).attr('href');
    if(str.indexOf("'") > -1){
        var fin = $(this).attr('href').substring(1, str.length);
        $(this).attr('href',fin);
         return false; 
    }
});
/**********************************************************************************************************************************************************************************/











*************************************************************** Technique remplacement des titres H par span stylisé ********************************************************************
$('.how_it_works').each(function() {
     var h4 = $(this).find('h4');
     h4.replaceWith('<span class="myH4">' + h4.text() + '</span>');
     console.log('h4'+h4.text);
  });


var h3Info = $('.infobox h3');
 h3Info.replaceWith('<span class="myH3">'+ h3Info.text()+'</span>');

 if(location.pathname === "/"){
	  $('h3').replaceWith('<span style="color: #fff!important;font-size:25px">'+ $(this).text()+'</span>');
  }

/**********************************************************************************************************************************************************************************/










************************************************************* Gestion logo Top_bar *****************************************************************************
$('.logo a').attr('alt','Mutualia Alliance Santé');
$('.logo a').removeAttr('title');
$('.logo a img').attr('alt', 'Logo Mutualia Alliance Santé');
/**********************************************************************************************************************************************************************************/






***************************************************************Gestion du zoom de la map de la page contact********************************************************
$('.map_canvas1').addClass('scrolloff'); // le style css scrolloff est lié à map_canvas
 $('.canvas1').on('click', function () {
	$('.map_canvas1').removeClass('scrolloff'); // au clic le style est supprimé
});
$(".map_canvas1").mouseleave(function () {
	$('.map_canvas1').addClass('scrolloff'); // au mouse leave la classe scrollof est liée
});
/**********************************************************************************************************************************************************************************/






******************************************Fonction permettan de remettre les texte justifié en alignement left sur mobile*************************************************
$('p').each(function() {
    if($(window).width() < 768 && $('p').css({'text-align' : 'justify'}) ){
        console.log('paragraphe justifié');
        $('p').css({'text-align' : 'left'});
    }
});
/**********************************************************************************************************************************************************************************/









********************************************Scroll clic via ancre avec recupération de l id et nettoyage de l url**************************************************************
$("footer a").click(function(e) {
		e.preventDefault();
		
		// Isole l'ancre id
		var idTab = $(this).attr("href");
		var n=idTab.indexOf("#");
		var m=idTab.substring(n);
		
		//Tests du lien
		//pour agir sur le scrolling		
		if(m === "#top"){
			var target = this.hash,
			$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		}
    });
/**********************************************************************************************************************************************************************************/






********************************************************** RATIO IMAGE ****************************************************************************************
 function objectResize(obj, baseWidth, baseHeight, originalWidth, originalHeight )
        {
            var imageRatio,
                originalWidth,
                originalHeight,
                newImgWidth,
                newImgHeight,
                newImgTop,
                newImgLeft;
    
            imageRatio = originalHeight/originalWidth;
            containerRatio = baseHeight/baseWidth;
    
            if(containerRatio > imageRatio){
                newImgHeight = baseHeight;
                newImgWidth = Math.round( (newImgHeight*originalWidth) / originalHeight );   
            }else{
                newImgWidth = baseWidth;
                newImgHeight = Math.round( (newImgWidth*originalHeight) / originalWidth );
            }
    
            newImgLeft=-(newImgWidth-baseWidth)*.5;
            newImgTop= -(newImgHeight-baseHeight)*.5;
            
            obj.css({width: newImgWidth, height: newImgHeight, marginTop: newImgTop, marginLeft: newImgLeft});
        }
/**********************************************************************************************************************************************************************************/









************************************************************************   GESTION LANCEMENT VIDEO IFRAME ***********************************************************************
$(document).ready(function() {
    $('#play-video').on('click', function(ev) {
        $("#video")[0].src += "&autoplay=1";
        ev.preventDefault();

    });
});
/**********************************************************************************************************************************************************************************/









************************************************************** Controler slider revolution ***************************************************
// revapi + id du slider (dans all slider)
var left; 
var right; 
var totalSlides;
 
// function to fire once the slider has fully loaded
revapi4.on('revolution.slide.onloaded', function() {
    
    // read in the total number of slides
    totalSlides = revapi4.revmaxslide();
    
    // grab the left arrow
    left = jQuery('.tp-leftarrow');
    
    // grab the right arrow
    right = jQuery('.tp-rightarrow');
	revapi4.revnext();
});




// Controle video
$('#rev_slider_3_1_wrapper').on('revolution.slide.onvideostop', function(event, data) {
 
    console.log(data.video);// = The Video API to Manage Video functions
    console.log(data.videotype);// = youtube, vimeo, html5
    console.log(data.settings);// = Video Settings
 
    switch(data.videotype) {
        case 'youtube':
             console.log(data.video);// = YouTube iframe API reference:
        break;
        case 'vimeo':
             console.log(data.video);// Vimeo iframe API reference
        break;
        case 'html5':
            console.log(data.video);// = HTML Video element:
        break;
    }
});
/**********************************************************************************************************************************************************************************/




***********************************************************************Cacher admin-bar  et replacer body*****************************************************************************
if($('body').hasClass('admin-bar')){
     //$("<style type='text/css'> .replaceTopBody{  position:relative!important; top:-32px;} </style>");
     $('body').addClass('replaceTopBody');
     $('#wpadminbar').remove();
}
/************************************************************************************************************************************************************************************/



************************************************************************* DIVERS ******************************************************************************************

//fonction _blank utilisé dans les composants boutons onclick après avoir coché "Advanced on click action
window.open('http://www.atp-pesage.fr/balances_analyse/index.php', '_blank')


$('.searchAgence').click(
    function(){
        $(this).val('');
    });
$('.pj-shortcode').text('Mutualia alliance santé');


// Test pour admin bar
/*
var $w= $(window);
$('#Wrapper').css({'position': 'relative!important','top':'-32px!important'});
$('html').css({'margin': '0!important'});
console.log($('html').text());
$('#wpadminbar').css({'display': 'none!important'});
$('#wpadminbar').fadeOut();
$('.admin-bar').css({'position': 'relative','top': '-32px!important'});
$('.js_active').css({'margin': '0!important'});
/**
 * @param [string]  [styleName] [filename with suffix e.g. "style.css"]
 * @param [boolean] [disabled]  [true disables style]
 *
var disableStyle = function(styleName, disabled) {
    var styles = document.styleSheets;
    var href = "";
    for (var i = 0; i < styles.length; i++) {
        href = styles[i].href.split("/");
        href = href[href.length - 1];

        if (href === styleName) {
            styles[i].disabled = disabled;
            break;
        }
    }
};
document.getElementById("admin-bar-css").disabled = true;
document.getElementById("pj-toolbar-pages-css").disabled = true;
document.getElementById("mfn-dnmc-style-css").disabled = true;
var style = $('html').prop('style');
style.marginTop = 0;
console.log('mt : ' + style.marginTop);
$('.vc_desktop').delay(1000).css({'top':'-32px!important'});
$('html').css({'position':'relative','top':'-32px!important'});
console.log($('html').css('top'));
console.log($('html').css('margin-top'));
$('#wpadminbar').remove();
var _html = document.getElementsByTagName("html")[0];
_html.removeAttribute("style");
$('html body').delay(2000).css('position','relative!important');
$('html body').delay(3000).css('top','-32px!important');
console.log($('html').css('margin-top'));
*/


TEST 2 ADMIN BAR
var screenMob = 782;
var windowsize = $(window).width();
var admH = $('#wpadminbar').height();

// Cacher admin-bar  et replacer body
if($('body').hasClass('admin-bar')){
    console.log('admin bar détécté !!!');
    $('#wpadminbar').remove();
    $('body').addClass('replaceTopBody');
    $('.replaceTopBody').css('top','-'+admH+'px');
    if(windowsize < screenMob){$("<style type='text/css'> .replaceTopBody{position:relative!important; top:-46px!important;}</style>");}
    else  if(windowsize > screenMob){$("<style type='text/css'> .replaceTopBody{position:relative!important; top:-32px!important;}</style>");}
    $("<style type='text/css'> .replaceTopBody{position:relative!important; top:-46px!important;}</style>");
}



/***** Test mouseScroll page externe vers autre page avec ancre */
var target;
var url      = window.location.href;  
var strUrl = "https://piscines-vaucluse.site-privilege.pagesjaunes.fr";
var jump=function(e){
   if(url === strUrl || url === strUrl+'#accueil'){console.log("page accueil")}else if(url != strUrl){console.log('autre page que accueil')}
     console.log("url complete >>" + url.substr(0, strUrl.length));
    console.log('jump location hach >> ' + location.hash);
   if (e){
       e.preventDefault();
       target = $(this).attr("href");
       console.log('$(this).attr("href") >>' + target);
    }else{
       target = location.hash;
       console.log('target >> ' + target);
    }
   $('html,body').animate({
        scrollTop: $(target).offset().top},2000,function(){
        console.log('location.hash >> ' + location.hash);
        location.hash = target;
   });
};

$('html, body').hide();
$(document).ready(function(){
    $('a[href^=#]').bind("click", jump);
   
    if (location.hash){
        console.log('location hach is true !!!   Locationhach === '+location.hash);
        setTimeout(function(){
            $('html, body').scrollTop(0).show();
            console.log('go jump');
            jump();
        }, 0);
    }else{
        $('html, body').show();
        console.log('show body');
    }
});








var to 
if (location.pathname === "/realisations/" || location.pathname === "/photos/") {
    var intervalId = setInterval(btnChange1, 1000);
    function btnChange1() {
        ('.vc_grid-container-wrapper').each(function(){
            if ($(this).find('.vc_pageable-slide-wrapper .vc_visible-item').last().hasClass('animated')) {
                btnMore = $(this).find('.vc_pageable-load-more-btn').find('.vc_grid-btn-load_more');
                btnMore.addClass('myBtn');
                btnMore.find('a').text("charger plus d'image");
                clearInterval(intervalId);
                to = setTimeout(applyTooltip($(this)), 2000);
            }
        });
    }
    
    //var to = setTimeout(applyTooltip($('#MediaG1')), 2000);
    function applyTooltip(elem) { 
        clearTimeout(applyTooltip);
        console.log('elem grid each >> '+ elem.attr('id'));
        altImg = elem.find('img').attr('alt');
        console.log('avant : alt img >> ' +altImg);
        $(elem.find('.vc_grid-item-mini').each(function(e) {
            console.log( 'verif elem min grid >> ' + $(this).attr('class') );
            if( $(this).find('a').attr('title') !== '' ||  $(this).find('a').attr('title') !== undefined ){
                altImgString =  $(this).find('a').attr('title').replace(/-/g, " ") ;
                $(this).find('img').attr( 'alt',altImgString);
                console.log('via title a : alt img >> ' + altImgString);
            }
            if( $(this).find('img').attr('title') !== '' ||  $(this).find('img').attr('title') !== undefined ){
                altImgString =  $(this).find('a').attr('title').replace(/-/g, " ");
                $(this).find('img').attr( 'alt',altImgString);
                console.log('via title img : alt img >> ' + altImgString);
            }
            if( $(this).find('img').attr('alt') !== '' ||  $(this).find('img').attr('alt') !== undefined ){
                altImgString = $(this).find('img').attr('alt').replace(/-/g, " ");
                console.log('via alt img : alt img >> ' + altImgString);
            }
            $(this).find('a').removeAttr('title');
            $(this).find('img').attr('alt',altImgString);
            $(this).find('.vc_gitem-animated-block').after('<div class="myTooltip">' + altImgString + '</div>');
        });
    }
}

