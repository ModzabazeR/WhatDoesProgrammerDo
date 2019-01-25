$(document).ready(function(){
$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
  
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

$("#btc").click(function(){
  window.location.href = "About-me.html";
});
$("#btn-p").click(function(){
  window.location.href = "programmer.html";
});
$("#btn-b").click(function(){
  window.location.href = "by-the-time.html";
});
$("#btn-j").click(function(){
  window.location.href = "apprentice.html";
});

});