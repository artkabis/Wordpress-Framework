/* ┌─────────────────────────────────────────────────────────────────────┐ \\
// │ Artkabis 1.3 - JavaScript Library                               │ \\
// ├─────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright (c) 2015-2016 Gregory NICOLLE (http://urliss35.free.fr)   │ \\
// │ Copyright (c) 20013-2016 Sencha Labs (http://sencha.com)             │ \\
// │ Licensed under the MIT (http://artkabis.com/license.html) license   │ \\
// └─────────────────────────────────────────────────────────────────────┘ \\


/* FRAMEWORK */
/** PROD **
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js" type="text/javascript" defer=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js" type="text/javascript" defer=""></script>
    <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/SplitText.min.js" type="text/javascript" defer=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js" type="text/javascript" defer=""></script>
*/



/**** Variables ***/  
var target, 
    h3Form,
    txtH3,
    sH, 
    targetVisiblePos,
    ml,
    nbElemForm,
    colorCalc,
    actif,
    $w,
    color1,
    st,
    titlePhone1,
    titlePhone2,
    phone1,
    phone2,
    tb,
    ab,
    refreshIntervalId;


actif = 1;
$w = $(window);
color1 = '#0797B7';
st = $w.scrollTop();


/***  ACTION_BAR ********************/
if($('#Action_bar')){
    tb = $('#Top_bar');
    ab = $('#Action_bar');
    //Cacher Action_bar si Top_bar is-sticky
    $(window).scroll(function(){
        tb.hasClass('is-sticky') ? ab.fadeOut() : ab.fadeIn();
    });
    /*********************************************************/
    titlePhone1 = "<span class='titlePhone white'> | VIGILEC Vichy  </span>";
    titlePhone2 = "<span class='titlePhone white'> | VIGILEC Clermont-Ferrand   </span>";
    phone1 = $('.contact_details .phone i:first');
    phone2 = $('.contact_details .phone i:last');

    console.log(phone1,phone2);
    phone1.before(titlePhone1);
    phone2.before(titlePhone2);
}
/**************************************************************************************************/


if( $('.titlePicto') ){
    $('.titlePicto').each(function(){
        $(this).closest( ".wpb_column" ).addClass('center');
    });
}

/**********************************************************************************************************************************************************************************/

if($w.width() <= 1024 ){$('.rowFooter p').each(function(){var t = $(this);t.css({'text-align':'center'});});}
/*******************  Paramètrage des attributs du logo **************************************************/


/*******************  Paramètrage des attributs du logo **************************************************/
$('#logo[title]').removeAttr('title');// Suppression Title
$('#logo').find('img').attr('alt','logo Vigilec');// Ajout de l'attribut alt
    
/************ Remove subheader h1 (si oublié )**************/
$('#Subheader').find('h1').remove();
$('#Subheader').remove();


    
/**************************************************************************************Creation de tooltip sur vc grid *************************************************************/
if(location.pathname === "/photos/" || location.pathname === "/photo/" || location.pathname === "/realisations/" || location.pathname === "/realisation/"){   
    
    refreshIntervalId = setInterval(btnChange, 500);
    console.log('page contenant un media grid ou massonry media grid');
    //GESTION Du bouton MEDIA GRID photos (10 visible >> nth-child(9)) 
    var btnChange = function (){
        console.log("interval");
        if( $('.vc_pageable-slide-wrapper .vc_grid-item:nth-child(9)').hasClass('animated') ){
            $('.vc_pageable-load-more-btn ').find('.vc_btn3-container').addClass('myBtn');
            $('.vc_pageable-load-more-btn ').find('a').text("charger plus d'images");
            console.log($('.vc_grid-btn-load_more a').text());  
            clearInterval(refreshIntervalId);
        }
    };
    // Ajout de tootltip en recupérant les alt des images
    var to  = setTimeout(applyTooltip,2000);
    var applyTooltip = function(){clearTimeout(applyTooltip);$('.vc_grid-item-mini').each(function(e){$(this).find('.vc_gitem-animated-block').after('<div class="myTooltip">'+$(this).find('img').attr('alt')+'</div>');});};
    $('.vc_grid-item').css({padding: '0',position:'relative'});
    $('.vc_grid-item-mini > div').css({position:'relative'});
    $('.vc_grid-item-mini:hover > div.myTooltip').css({background:'rgba(0, 0, 0, 0.5)',height: 'auto',width: '94.7%',position:'absolute',left: '0',bottom:'5px',color:'white',lineHeight:'30px',textAlign:'center',opacity:'1',transition:'all .6s'});
    $('.vc_grid-item-mini > div.myTooltip').css({background: 'rgba(0, 0, 0, 0.5)',height: 'auto',width: '94.7%',position: 'absolute',left: '0',bottom: '-30px',color: 'white',lineHeight: '30px',textAlign: 'center',opacity: '0',transition: 'all .6s'});
}







/*********  Gestion module actualité ****************************************/
if(location.pathname === "/actualites/"){
    console.log('page Actu visité !!!');
    jQuery("#Wrapper").find('h2').filter(":empty").remove();// suppression de h2 si celui-ci est vide (generé par actualité)
    $('.event-link a').text('En savoir plus');// Modification du bouton en francais

}
/***************************************************** END ACTU *************************************************************/


/******************************************** Gestion page contact *****************************************/
//$('a').each(function(){if( $(this).attr('href') == '/contact/'){$(this).attr('href','/contact-plan/');}});// Modifie l'ensemble des contact en contact-plan

var nbElemForm = 0;
// Mention legales
ml = "<div class='mentionsLegales'><span class='requiredML'>*</span> Mentions obligatoires<p class='contentML'><em>« Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez de droits d'accès, de modification et d’opposition aux données qui vous concernent. Vous pouvez exercer ces droits à tout moment sous réserve de justifier de votre identité par courrier électronique à l’adresse email de patrick.lopez34600[at]orange.fr ou par voie postale à l’adresse suivante : Lopez Forage, 102 avenue Jean Jaurès 34600 Bédarieux, France. »</em></p></div>";
if(location.pathname === "/contact/"){
    
    
    /******************************************** Gestion mappy et contact Info *********/
    $(".vc_mappy-map").parent().parent().parent().click(function () {$(".vc_mappy-map, .leaflet-control").css("pointer-events", "auto");});
    $(".vc_mappy-map").parent().parent().parent().mouseleave(function() {$(".vc_mappy-map, .leaflet-control").css("pointer-events", "none"); });
    $(".vc_mappy-map, .leaflet-control").css("pointer-events", "none"); 
    
    $w.on('resize', function(){
        if($w.width() > 767 ){
            $(".contactInfo").slideUp( 10 );
            $(".contactInfo").css({display:'block',pointerEvents:'none',position:"absolute"});
           
            var middleHeight = Math.round( ( $('.mapZone').height() / 2 ) - ($('.contactInfo').height() / 2) );
            $(".mapZone").hover(function(){
                $(".contactInfo").slideDown( 500);
                console.log('hover map !!! ','centre vertical de contactInfo >> '+middleHeight);
                $(".contactInfo").stop().animate({width:'300px',height:'100%',top:middleHeight,opacity:'1'},500);
                $(".contactInfo").css({zIndex:'2'});
                //$(this).find('iframe').css({width:'50%'});
            },function(){
                $(".contactInfo").slideUp(500);
                $(".contactInfo").stop().animate({width:'300px',height:'0%',top:$(this).height(),opacity:'0'},500);
                //$(this).children().css({position:"relative",left:'0', width:'100%',transition:'all .3s'});//Mappy
            });
            $(".mapZone").hover();//lancement de l'affichage du contact info pour que le client puisse voir
        }else{
            $(".contactInfo").slideDown( 500);
            $(".mapZone").css({pointerEvents:'none',position:"relative"});
            $(".contactInfo").css({display:'block',width:'100%',position:"relative"});
        }
    });
    /*************************                      End Mappy & ContactInfo ******************************/
    
    // Suppression des H3 auto généré par les formulaire dans la page contact et devis
    h3Form = $('.comment-respond').find('h3');
    h3Form.remove();

    $('.get_in_touch h3').each(function(i,t){
         txtH3 = $(this).text();
        $(this).replaceWith('<span class="myH3">' + txtH3 + '</span>');
    });

    //Ajout mentions obligatoires formulaire de contact
    $('.gform_footer').after(ml);
    $('#Footer .mentionsLegales').remove();
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
        //var length = $('.gform_fields > *').length;
        var lth = $('.gform_fields li').length;
        console.log('animation form lancé n°'+(j+1)+'/'+lth,'target :'+ $('.gform_fields li:eq('+j+')').attr('class'));
        $('.gform_fields li:eq('+j+')').delay(j*100).animate({position: 'relative', transform:'rotateZ(0)', left: '0', opacity: '1',easing: "linear",duration:(j+1000+'')});
       if($('.gform_fields li:eq('+lth+')').hasClass('gfield_visibility_visible')) { $w.off("scroll", sH );}
    });
}
/********************************************** END CONTACT ******************************************************/



/******************************************** AVIS-CLIENTS  *****************************************/

if(location.pathname === "/avis-client/" || location.pathname === "/avis-clients/"){ 
    var btnMore,nbStars,nbItemFormAvis,sH2,avisDetect,verifAvis,intervalId,btnChange1,myH2;

    /*******  Gestion bouton Load More pour Media Grid des Avis clients ***/
    intervalId = setInterval(btnChange1, 1000);
    btnChange1 = function btnChange1 (){
        if( $('.vc_pageable-slide-wrapper .vc_visible-item').last().hasClass('animated') ){
            btnMore = $('.vc_pageable-load-more-btn').find('.vc_grid-btn-load_more');
            btnMore.addClass('myBtn');
            btnMore.find('a').text("charger plus d'image");
            clearInterval(intervalId);
        }
    };
    /***************************** END LOAD MORE *********************************************/
    /* Replace h2 pas livre d'or */
    $('#respond').each(function() {
        myH2 = $( this ).find('h2');
        myH2.replaceWith('<span style="font:normal 700 1.2em/1.3em;color:white">' + myH2.text() + '</span>');
    });
    //Ajout mentions obligatoires avis clients
    $('#respond').after(ml);

    // Gestion du plugin PJ, si aucun avis le formulaire prend 100% de la surface et au premier commentaire les deux éléments prennent respectivement 50% - 50% soit vc_col-sm-6 / vc_col-sm-6
    // Détecte si un commentaire existe si oui la rangée apparaît et sera accompagné du formulaire, si ce n'est pas le cas seul la rangé avec le formulaire sera visible
    avisDetect = false;
    verifAvis = function(){
        if( $(".pj-reviews").children().length < 1){
            console.log( " Nombre d'avis inférieur à 1  >> " + $('.pj-reviews').children().length );
            $(".avisTous").remove();$(".avisForm").attr('class', 'avisForm bgBlack08 bgPattern p30 wpb_column vc_column_container vc_col-sm-12');
            $(".avisForm").css({margin: '30px 0', width: "100%", backgroundColor: 'rgba(0,0,0,.8)!important', boxShadow:"0 0 21px 0 rgb(0, 47, 81)" });
            $(".avisTous").css("height", '7px');avisDetect =false;
        }else{
            $(".avisTous").attr('class', 'avisTous p30 wpb_column vc_column_container vc_col-sm-6'); $(".avisForm").attr('class', 'avisForm p30 wpb_column vc_column_container vc_col-sm-6'); 
            $(".avisForm").css({"margin" : "auto!important",background: '#B92323!important', boxShadow : "0 0 21px 0 rgb(0, 47, 81)"});$(".avisTous").css("height", "auto!important");avisDetect = true;
        }
        console.log( " Nombre d'avis existant  >> " + $('.pj-reviews').children().length );
    };
    setTimeout(verifAvis, 500);
    if(!avisDetect){
         var target2,st2,targetVisiblePos2,elems1,elems2;
        $('#commentform p').each(function(i,elem) {
            nbItemFormAvis = i;
            console.log('nbItemFormAvis >> ' + nbItemFormAvis);
            $('.comment-form p:nth-child('+i+')').css({position: 'relative', left: '-300px', opacity: '0'});
        });
        sH2 = $w.scroll( function () {
            target2 = $('.comment-form');
            st2 = Math.round($w.scrollTop());
            targetVisiblePos2 = Math.round(target2.offset().top - st2);
            if ($w.scrollTop() >= targetVisiblePos2 ){
                lancementAnimFormAvis();
                setTimeout(lancementAnimStars,1500);
            }
        });
    }
    $('.pj-ratings-input-container label').each(function(i,target) {
        nbStars = i+1;
        console.log('nbStar >> ' + nbStars);
        $(this).css({position: 'relative', left: '-300px', opacity: '0'});
    });
    var lancementAnimFormAvis = function (j,target){
        for(var i=0;i<nbItemFormAvis;i++){
            console.log('animation p avis lancé');
            console.log('element form >> ' + $('.comment-form p:eq('+i+')').attr('class'));
            $('#commentform p:eq('+i+')').delay(i*100).animate({position: 'relative', transform:'rotateZ(0)', left: '0', opacity: '1',easing: "linear",duration:'3000'});
            if(i===nbItemFormAvis) { $w.off("scroll", sH2 );}
        }
    };
    var lancementAnimStars = function (){
        for(var i=0;i<nbStars;i++){
            console.log('i pour stars >> '+i);
            elems1 = $('.pj-ratings-input-container label[for=star'+(i+1)+']');
            elems2 = $('.pj-ratings-input-container label:eq('+i+')');
            console.log(    'elem1 >> ' + elems1 + 'elem2 >> '+elems2 +'    nbStars >> '+nbStars);
            elems1.delay(i*100).animate({position: 'relative', transform:'rotateZ(0)', left: '0', opacity: '1',easing: "linear",duration:'3000'});
            if(i===nbStars) { $w.off("scroll", sH );}
        }
    };
}


/************************************************************ DECORATION *************************************************************/

/************* First letter and word detection *********************/
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


/******* detecte la dernier lettre de la class et l'ajoute en decoration dans le boc contenant le texte ****/
$('.lettrine').each(function(){
    var needle = $(this).find('p').text().substring(0,1);
    $(this).find('.wpb_wrapper').before("<span class='lettrine-"+needle+"'>"+needle+"</span");
    $(".lettrine-"+needle).css({"content":needle.toString(),"position":"absolute","font-size": "800%","opacity": ".5","left": "0","color": "yellow", "border-left":" solid 9px white","height": "20%"});
    console.log(needle);
    
    // si flStyle2 est detecté on applique le style 2
    if($(this).hasClass('flStyle2')){
        $(this).find('.lettrine-'+needle).addClass('flStyle2')
        $(this).find('.flStyle2').css({'position':'absolute','font-size':'1500%',
        'line-height':'1em','opacity':'.2','left':'0','top':'inherit','color':'orange',
        'border-left':'solid 9px #020202','height':'20%','font-family':'sans-serif'});
    }
    // si flStyle3 est detecté on applique le style 3
    if($(this).hasClass('flStyle3')){
         $(this).find('.lettrine-'+needle).addClass('flStyle3')
        $(this).parent().find('.flStyle3').css({'position':'absolute','font-size':'1500%',
        'line-height':'1em','opacity':'.2','left':'0','top': '125px','color':'orange',
        'border-left':'solid 9px white','height':'20%','font-family':'sans-serif'});
    }
    // Repositionnement lettrine  
    if( $(this).hasClass('replaceLettrine') ){
       $(this).parent().find('.decolttrine-'+needle).css({'top':'inherit!important'});
    }
});




/****************************************** ELEMENT SLIDOWN & up ********************************************** */
if($w.width() <= 765 && actif === 0){console.log("ouverture menu");$('.blocAnim').slideDown();$(this).addClass('actif');actif=1;}
if($w.width() >= 766 && actif === 1){console.log("fermeture menu");$('.blocAnim').slideUp(300,"linear");$(this).removeClass('actif');actif=0;}
console.log('actif >> ' + actif);
    
$(".btnAnim, .btnAnim:after").click(function(e){
    if( $(this).next().hasClass('blocAnim') ){console.log('bloc anim est le parent de son bouton');$(this).next().slideToggle( 500,"linear");// Pour gérer l'élément situé en dessous du bouton
    }else{console.log("utilisation de siblings pour activer l'anim");$(this).parent().parent().siblings('.blocAnim').slideToggle( 500,"linear");}
});
