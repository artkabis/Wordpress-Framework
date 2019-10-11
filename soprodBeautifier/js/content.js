
'use strict';

var portletBody = document.querySelectorAll(".portlet-body");
document.querySelector(".operatorElements").style.display = "none";
document.querySelector(".operator-content").style.marginRight = "0px";


portletBody.forEach(function(element) {
  element.style.display = "none";
});

function displayBox() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
}

var portletBox =  document.querySelectorAll(".portlet-title.line");

portletBox.forEach(function(element) {
	element.addEventListener("click",displayBox , false);
});

var btnQualif = document.querySelectorAll(".btn.btn-lg.qualificationElement");

/*** qualif */
/*var qualif;

$('.qualificationsPortlet').each(function(i,element){
  if($.trim($(this).find('.caption').text()) === 'Qualifications'){

    console.log('qualif >> ' + $(this).find('.qualificationsPortlet').parentElement);
    qualif = $(this).find('.qualificationsPortlet').parentElement;
    qualif=$(this).parent();
  }
});*/

/*btnQualif.forEach(function(element) {
  qualif.prepend(element);
});*/
/*qualif.css('order','0');
qualif.find('.portlet-title').trigger('click');
qualif.find('.portlet-title').trigger('click');
*/
/************************************************* */
/* infos formGroupPortlet **/
var infos;
$('.formGroupPortlet').each(function(i,t){
  if($(this).find('.caption').text().trim() === 'INFOS CLIENT'){
    //console.log('infos  >> ' + $(this).find('.caption').text());
    infos=$(this).parent();
  }
});

var row = document.querySelector('.operator-content .row');

$('.qualificationsPortlet').each(function(i,element){
    row.prepend(element.parentElement);
});

$('.qualificationsPortlet .portlet-body').each(function(i,element){
  element.style.display = "block";
});


row.prepend(document.querySelector(".historyPortlet").parentElement);
/*row.prepend(document.querySelector(".qualificationsPortlet").parentElement);*/
row.prepend(document.querySelector(".externalPortlet").parentElement);
row.prepend(document.querySelector(".externalPortlet").parentElement);
row.prepend(document.querySelector(".commentsAreaDiv").parentElement);
row.prepend(document.querySelector(".historyPortlet").parentElement);
row.prepend(document.querySelector(".contactsPortlet").parentElement);
row.prepend(document.querySelector(".formGroupPortlet").parentElement);

document.querySelector(".contactsPortlet .portlet-body").style.display = "block";
document.querySelector(".historyPortlet .portlet-body").style.display = "block";
document.querySelector(".formGroupPortlet .portlet-body").style.display = "block";
document.querySelector(".commentsAreaDiv .portlet-body").style.display = "block";
document.querySelector(".qualificationsPortlet  .portlet-body").style.display = "block";
document.querySelector(".externalPortlet .portlet-body").style.display = "block";
document.querySelector(".historyPortlet .portlet-body").style.display = "block";
document.querySelector(".formGroupPortlet .portlet-body").style.display = "block";
document.querySelector(".commentsAreaDiv .portlet-body").style.display = "block";
document.querySelector(".qualificationsPortlet  .portlet-body").style.display = "block";
document.querySelector(".externalPortlet .portlet-body").style.display = "block";

/*var order=0;
$('.operator-content > .row > div[class^="col-"]').each(function(i,t){
  $(this).parent().wrap('<ul class="row">').contents().unwrap();
  $(this).wrap('<li class='+$(this).attr('class')+'>').contents().unwrap();
	$(this).css('order',i+'');
});
*/
/*
var placeholderHeight,placeholderAnimatorHeight;
$("ul.row").sortable({
  placeholder: 'slide-placeholder',
  axis: "y",
  revert: 150,
  start: function(e, ui){
      placeholderHeight = ui.item.outerHeight();
      ui.placeholder.height(placeholderHeight + 35);
      $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
  },
  change: function(event, ui) {
      
      ui.placeholder.stop().height(0).animate({
          height: ui.item.outerHeight() + 35
      }, 300);
      
      placeholderAnimatorHeight = parseInt($(".slide-placeholder-animator").attr("data-height"));
      
      // $(".slide-placeholder-animator").stop().height(placeholderAnimatorHeight + 15).animate({
      //     height: 0
      // }, 300, function() {
      //     $(this).remove();
      //     placeholderHeight = ui.item.outerHeight();
      //     $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
      // });
      
  },
  stop: function(e, ui) {
      $(".slide-placeholder-animator").remove();
      
  },
});
$('.ui-sortable-handle:after').on('mousedown',function(me){
  console.log('test')
})
$('.ui-sortable-handle .portlet-title').each(function(i,t) {
  $(this).before('<span class="btnDrag">X</span>');
  console.log('btnDrag >> '+$(this))
});*/

// $(".operator-content > ul").sortable({
//     connectWith: 'ul.row',
//     stop: function(event, ui) {
//         //alert("New position: " + ui.item.index());
//         order = ui.item.index();
//         console.log(this,event.target.nodeName,ui.item[0]);
//        ui.item[0].style.order=order;
//     },
//     sortactivate:function(event, ui){
//     console.log(ui.item[1]);
//     }
// });
/*$('.operator-content > li[class^="col-"]').disableSelection();*/