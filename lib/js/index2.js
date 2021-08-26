$(document).ready(function () {
  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
  $("#btn-j").click(function () {
    window.location.href = "apprentice.html";
  });
});