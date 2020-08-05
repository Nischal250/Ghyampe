

if ($(window).width() > 0) {
  $(window).scroll(function(){
     if ($(this).scrollTop() > 129) {
        $('#navbar_top').addClass("fixed-top");
        // add padding top to show content behind navbar
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
        $('#navbar_top').removeClass("fixed-top");
         // remove padding top from body
        $('body').css('padding-top', '0');
      }
  });
}


// $(window).scroll(function(){
//   if($(this).scrollTop()>650){
//
//     $(".g-celeb").addClass("alcohol");
//     $(".logos2").addClass("logos");
//
//   }
// })
