// var images = document.getElementsByTagName('img');
// for (var i = 0, l = images.length; i < l; i++) {
//   console.log(images[i].width, images[i].height);
//   //images[i].remove();
//   images[i].src = 'https://placekitten.com/' + images[i].width + '/' + images[i].height;
// }



$('body').on({
  DOMNodeInserted : function(){
    console.log('I have been added dynamically');
    $('img').each(function() {
      $(this).removeAttr('srcset');
      var ht = $(this).height();
      var wd = $(this).width();
      $(this).attr('src', 'https://placekitten.com/' + wd + '/' + ht);
    }); 
  },
  click : function(){
     console.log('I was clicked');
  }
});