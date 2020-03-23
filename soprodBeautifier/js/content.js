'use strict';

function detectGroupe($g,$t){
  if(window.location.pathname.indexOf($g) == 0){
    console.log($g,$t)
    $("body").attr('id',$t);
  }
}
function loadScript(src, callback){
  var s,r,t;
  r = false;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = src;
  s.onload = s.onreadystatechange = function() {
    console.log( this.readyState );
    if ( !r && (!this.readyState || this.readyState == 'complete') ){
      r = true;
      callback();
    }
  };
  t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
}
var sectionCtg;
detectGroupe("/Consultation/","consult");
detectGroupe("/Operator/","operateur");
detectGroupe("/Request/","demande");

if($('body').hasClass('operateur')){
  loadScript('js/operateur.js',success);
}
function success(){
  console.log('success');
}
  function ucfirst(str,force){
    str=force ? str.toLowerCase() : str;
    return str.replace(/(\b)([a-zA-Z])/,function(firstLetter){return   firstLetter.toUpperCase();});
}                 					
function allEqual(arr) { 
  if(!arr.length) return true; 
  return arr.reduce(function(a, b) {return (a === b)?a:(!b);}) === arr[0]; 
} 
function in_array(string, array){
  var result = false;
  for(i=0; i<array.length; i++){if(array[i] == string){result = true;}
  }
  return result;
}
$.fn.changeElementType = function(newType) {var attrs = {}; $.each(this[0].attributes, function(idx, attr) {attrs[attr.nodeName] = attr.nodeValue;});
  this.replaceWith(function() {
      return $("<" + newType + "/>", attrs).append($(this).contents());
  });
}
var portletBody = $(".portlet-body");
$('.formGroupPortlet .portlet-body').fadeOut();
if($(".operatorElements")){
  portletBody.fadeOut();
  $(".operator-content").css('margin-right',"0px");
}

$('.portlet-body').fadeOut(100);
$(".portlet-title.line").fadeIn()
var btnQualif = $(".btn.btn-lg.qualificationElement");

var infos;
$('.formGroupPortlet').each(function(i,t){
  if($(this).find('.caption').text().trim() === 'INFOS CLIENT'){
    //console.log('infos  >> ' + $(this).find('.caption').text());
    infos=$(this).parent();
  }
});
if($('body').hasClass('consult')){
  $('#recordEdit').fadeIn();
  $('.page-content > .row .portlet >div').fadeIn(300);
 //$('. enterSearch').on
}
var row = $('.operator-content > .row');
var title,finalTitre = [];
var titre,titre2,titre3='';
var order=0;
$('.operator-content > .row > div[class^="col-"]').each(function(i,t){
  /*$(this).parent().changeElementType("ul");
  $(this).changeElementType("li");
  (?!CLES|BUC|MAJ|NDD|DMS|PVI|SITE|BRIEF|M1|BILAN|PHOTO|JOUR|SMS)
 */ 
  // (\w^{CLES|BUC|MAJ|NDD})
  // (?!(CLES|BUC|MAJ|NDD))
  // ^/(?!ignoreme|ignoreme2|ignoremeN)
  console.log(i);
  title = (($(this).find('.caption').text().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toLocaleLowerCase()).replace(/(\b(\w{1,4})\b(\s|$))/g,' ').split(/[ ,._]+/);
  //console.log('caption >> ',$(this).find('.caption').text());
  //console.log('title >> ',title);
  if (title.length < 2){
    titre=title[0];
    finalTitre.push(titre);
  }else if(title.length === 2){
    titre = title[0] +  ucfirst(title[1]);
    finalTitre.push(titre);
    }else if(title.length > 2){
      titre=title[0] +  ucfirst( title[1] ) + ucfirst( title[2] );
      finalTitre.push(titre);
  }
  let op = finalTitre.filter(data => (data == titre));
  if(op.length >1){
    $(this).attr('id',titre+'-'+(parseInt(op.length)-1));
  }else{
    $(this).attr('id',titre);
  }
  console.log('nb qualif '+$("div[id^='qualifications-']").length, $('div[id^="#qualifications-"]'),'op length >> ',op.length);
  console.log(op,op.indexOf('qualifications') !== -1);

  if(op.indexOf('qualifications') !== -1 && op.length===1){
    console.log('un bloc de qualif    ','op >> ',op, 'ccs width 100%');
    $('#'+$('body').attr('id')+'.row  #qualifications').addClass('w100');
  }else  if(op.indexOf('qualifications') !== -1 && op.length===2){
    console.log('deux blocs de qualification');
    $(".row > div[id^='qualifications']").removeClass('w100').addClass('w50');
  }else if(op.indexOf('qualifications') !== -1 && op.length===3){
    console.log('plus de trois blocs de qualification');
    $(".row > div[id^='qualifications']").removeClass('w100').removeClass('w50').addClass('w33');
  }

});

$('.formGroupPortlet').each(function(i,element){
    $(this).find('.portlet-body').fadeOut(200);
    //console.log($(this).parent().attr('id'));
});
$('.portlet-title').on('click',function(me){
  $(this).parent().find('.portlet-body').fadeToggle(300);
});

var elementVisible = ['commentaires','qualifications','qualifications-1','qualifications-2','Mediaisis','contacts','infosClient','liensExternes'];
if($('body').attr('id','operateur')){
  var valQualif = $('#qualifications .portlet-body a').text().trim();
  if(valQualif === 'INITIALISATION SMS REDESIGN'){
    elementVisible.splice(1, 0, 'ModificationDifficulte');
    elementVisible.splice(1, 0, 'renseignerPrepubRefonte');
    elementVisible.splice(1,0,'choixTemplateRefonte');
    elementVisible.splice(1,0,'republicationRefontes');
    elementVisible.splice(1,0,'suiviDemande');
    elementVisible.splice(1,0,'cocherOptionsActiver');
    $('#renseignerPrepubRefonte, #choixTemplateRefonte').addClass('w50');
  }
  elementVisible.push('listeDemandes');
  elementVisible.unshift('complementSuiviDemandes');
  elementVisible.unshift('qualifications');
}
 
 
if($('body').attr('id','consult')){
//debug
/*
$('#SearchTable').on('click',function(me){
  console.log('element ayant deux portlet >> ',$('.col-md-12 .ui-sortable-handle').length);

  console.log( 'annonceurs', $('.table-scrollable tbody > tr'));
  console.log( 'data index des annonceurs', $('.table-scrollable tbody > tr').attr('data-index'));
  console.log('epj annonceur > ',$('.table-scrollable tbody > tr >td:nth-child(5)'));
    $('#SearchTable_table tr').click(function(me){
     $('#recordEdit .col-md-12.ui-sortable-handle').css('display','inline-block');
      console.log('click sur la brique annonceur',$(this).find('td:nth-child(5)').text());
      setTimeout(function(){
        console.log('liste dans annonceur mise à jour');
        if($('.col-md-12 .ui-sortable-handle').length>1){
          $('.col-md-12 .ui-sortable-handle >div:nth-child(2)').appendTo($('.col-md-12 .ui-sortable-handle'));
        }
      },200);
    });
});
*/


  elementVisible.splice(1,0,'listeModificationsEmail');
  elementVisible.splice(1,0,'cocherOptionsActiver');
  elementVisible.push('listeDemandes');
  elementVisible.unshift('qualifications');
  elementVisible.unshift('commentaireSuiviDemandes');
  elementVisible.unshift('complementSuiviDemandes');
  if($('republicationRefontes')){
    elementVisible.splice(2,0,'republicationRefontes');
  }
}



elementVisible.forEach(function(el) {
  $('.operator-content > .row').prepend( $('#'+el+'')[0] );
  $('#'+el+' .portlet-body').fadeIn(100)
});


var styleInfosClients ={'border-left': 'solid transparent 15px','overflow-y': 'scroll','overflow-x': 'hidden','height':$('#contacts > .contactsPortlet').height()+'px'}
$('#infosClient').css(styleInfosClients);
var placeholderHeight,placeholderAnimatorHeight;

$( ".row" ).sortable({
  connectWith: '.row>div',
  placeholder: 'highlight',
  opacity: 0.5,
  revert: true
}).disableSelection();

$('.ui-sortable-handle .portlet-title').each(function(i,t) {
  $(this).before('<span class="btnDrag">X</span>');
  console.log('btnDrag >> '+$(this))
});

$("html, body").animate({ scrollTop: 0 }, 100);


//on referme le calendrier si celui est visible
/*
if($('#toggleUserCalendar').length>0){
  console.log('btn calendrier >> ',$('#toggleUserCalendar'));
  var btnCal = $('#toggleUserCalendar');
  if(btnCal.hasClass('calendaropen')){
    setTimeout(()=>{
      btnCal.trigger('click');
      btnCal.toggleClass('calendaropen');
      $('.userCalendarLayout').fadeToggle();
      console.log('trigger cal')
    },300);
  }  
}
*/
