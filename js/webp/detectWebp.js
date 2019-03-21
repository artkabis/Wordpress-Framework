function hasWebP() {
    var rv = $.Deferred(), img = new Image();
    img.onload = function() { rv.resolve(); };
    img.onerror = function() { rv.reject(); };
    img.src = "http://www.gstatic.com/webp/gallery/1.webp";
    return rv.promise();
}

hasWebP().then(function() {
    $('#support').text("WebP est supporté");
  // remplacement .png par .webp
  var allImages = document.body.getElementsByTagName("img");
  var length = allImages.length;
  var i;
  for(i = 0; i < length; i++){
    allImages[i].src.replace("png", "webp");
    console.log(allImages[i]);
  }
}, function() {
    $('#support').text("Votre navigateur ne supporte pas le format webp");
});

$(function() {
  var WebP=new Image();
  WebP.onload=WebP.onerror=function(){
    console.log(WebP.height);
    if(WebP.height!=2){
      console.log("webp non supporté. Conversion webp to jpg enabled",Webp.height)
      $('img[src$=".webp"]').each(function(index,element) {
        element.src = element.src.replace('.webp','.jpg');
      });
    }else{
     $('body').append("<img src='https://www.gstatic.com/webp/gallery/1.webp'/>");
      // WebP.src='http://www.gstatic.com/webp/gallery/1.webp' />;
    }
  };
  
});

