$(document).ready(function () {
  $(".use-img .play-pause-btn").on("click", function () {
    if ($(this).attr("data-click") == 1) {
      $(this).attr("data-click", 0);
      $("#video")[0].pause();
    } else {
      $(this).attr("data-click", 1);
      $("#video")[0].play();
    }
  });
});

$(".benefits-no-1").click(function() {
    $('html, body').animate({
      scrollTop: $(".contents-5").offset().top
    }, 3000);

});
  $(".benefits-no-2").click(function() {
    $('html, body').animate({
      scrollTop: $(".contents-3").offset().top
    }, 3000);
});
   $(".benefits-no-3").click(function() {
    $('html, body').animate({
      scrollTop: $(".faq-section").offset().top
    }, 3000);

});
if ($(window).width() < 767) {
    $('.guidelines-cont.do li.do-4').css('display','none');
    $('.guidelines-cont.do li.do-5').css('display','none');
    $('.guidelines-cont.do li.do-6').css('display','none');
    $('.guidelines-cont.do li.do-7').css('display','none');
    $('.guidelines-cont.do li.do-8').css('display','none');
    $('.guidelines-cont.do li.do-9').css('display','none');
    $('.guidelines-cont.do li.do-10').css('display','none');
      var a;
      function deskshowhide1(){
      if(a==0){
        $('.guidelines-cont.do li.do-4').css('display','none');
        $('.guidelines-cont.do li.do-5').css('display','none');
        $('.guidelines-cont.do li.do-6').css('display','none');
        $('.guidelines-cont.do li.do-7').css('display','none');
        $('.guidelines-cont.do li.do-8').css('display','none');
        $('.guidelines-cont.do li.do-9').css('display','none');
        $('.guidelines-cont.do li.do-10').css('display','none');
        var txt = $("a.do-content").hasClass('visible') ? 'Read Less' : 'Read More';
        $("a.do-content").text(txt);
        return a=1;
      }
        else{
        $('.guidelines-cont.do li.do-4').css('display','block');
        $('.guidelines-cont.do li.do-5').css('display','block');
        $('.guidelines-cont.do li.do-6').css('display','block');
        $('.guidelines-cont.do li.do-7').css('display','block');
        $('.guidelines-cont.do li.do-8').css('display','block');
        $('.guidelines-cont.do li.do-9').css('display','block');
        $('.guidelines-cont.do li.do-10').css('display','block');
        var txt = $("a.do-content").hasClass('visible') ? 'Read More' : 'Read Less';
        $("a.do-content").text(txt);
        return a=0;
      }
    }
}
  if ($(window).width() < 767) {
  	  $('.guidelines-cont.dont li.dont-5').css('display','none');
      $('.guidelines-cont.dont li.dont-6').css('display','none');
      $('.guidelines-cont.dont li.dont-7').css('display','none');
      $('.guidelines-cont.dont li.dont-8').css('display','none');
      $('.guidelines-cont.dont li.dont-9').css('display','none');
      $('.guidelines-cont.dont li.dont-10').css('display','none');
      $('.guidelines-cont.dont li.dont-11').css('display','none');
      $('.guidelines-cont.dont li.dont-12').css('display','none');
      $('.guidelines-cont.dont li.dont-13').css('display','none');
	var a;
  function deskshowhide(){
    if(a==0){
  	  $('.guidelines-cont.dont li.dont-5').css('display','none');
      $('.guidelines-cont.dont li.dont-6').css('display','none');
      $('.guidelines-cont.dont li.dont-7').css('display','none');
      $('.guidelines-cont.dont li.dont-8').css('display','none');
      $('.guidelines-cont.dont li.dont-9').css('display','none');
      $('.guidelines-cont.dont li.dont-10').css('display','none');
      $('.guidelines-cont.dont li.dont-11').css('display','none');
      $('.guidelines-cont.dont li.dont-12').css('display','none');
      $('.guidelines-cont.dont li.dont-13').css('display','none');
      var txt = $("a.do-content").hasClass('visible') ? 'Read Less' : 'Read More';
      $("a.do-content").text(txt);
      return a=1;
    }
    else{
      $('.guidelines-cont.dont li.dont-5').css('display','block');
      $('.guidelines-cont.dont li.dont-6').css('display','block');
      $('.guidelines-cont.dont li.dont-7').css('display','block');
      $('.guidelines-cont.dont li.dont-8').css('display','block');
      $('.guidelines-cont.dont li.dont-9').css('display','block');
      $('.guidelines-cont.dont li.dont-10').css('display','block');
      $('.guidelines-cont.dont li.dont-11').css('display','block');
      $('.guidelines-cont.dont li.dont-12').css('display','block');
      $('.guidelines-cont.dont li.dont-13').css('display','block');
      var txt = $("a.dont-content").hasClass('visible') ? 'Read More' : 'Read Less';
      $("a.dont-content").text(txt);
      return a=0;
    }
  }
}

  $(".contents-link-1").click(function() {
    $('html, body').animate({
      scrollTop: $(".contents-1").offset().top
    }, 500);
  });
  $(".contents-link-2").click(function() {
    $('html, body').animate({
      scrollTop: $(".contents-2").offset().top
    }, 800);
  });
    $(".contents-link-3").click(function() {
    $('html, body').animate({
      scrollTop: $(".contents-3").offset().top
    }, 1000);
  });
      $(".contents-link-4").click(function() {
    $('html, body').animate({
      scrollTop: $(".contents-4").offset().top
    }, 2000);
  });
  $(".contents-link-5").click(function() {
    $('html, body').animate({
      scrollTop: $(".contents-5").offset().top
    }, 2500);
  });
   $(".contents-link-6").click(function() {
    $('html, body').animate({
      scrollTop: $(".post-cont").offset().top
    }, 3000);
  });
     $(".contents-link-7").click(function() {
    $('html, body').animate({
      scrollTop: $(".post-trea").offset().top
    }, 3000);
  });
  $(".contents-link-8").click(function() {
    $('html, body').animate({
      scrollTop: $(".contents-7").offset().top
    }, 3000);
  });
    $(".contents-link-9").click(function() {
    $('html, body').animate({
      scrollTop: $(".contents-8").offset().top
    }, 3000);
  });
  $(".contents-link-10").click(function() {
    $('html, body').animate({
      scrollTop: $(".faq-section.deks-view").offset().top
    }, 3000);
  });



