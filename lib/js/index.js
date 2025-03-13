$(document).ready(function () {
  //if (confirm("โปรดสละเวลาทำแบบประเมินเว็บไซต์ของเรา")==true) {
  //  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSekuaAvMvpb-gwf5zwR_V0aPI4gTX9mRmtir7QIHwZdL2e8LA/viewform?usp=sf_link-me.html";
  //} else {
  //}
  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  $("#btc").click(function () {
    window.location.href = "About-me.html";
  });
  $("#btn-p").click(function () {
    window.location.href = "programmer.html";
  });
  $("#btn-b").click(function () {
    window.location.href = "by-the-time.html";
  });
  $("#btn-j").click(function () {
    window.location.href = "apprentice.html";
  });

});