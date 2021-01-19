$(function () {
///////////////////// アコーディオン ///////////////////////
    $(".faq-contents-item01").click(function() {
      
      var $answer = $(this).find($(".answer"));
      if ($answer.hasClass("open")) {
        $answer.addClass("open");
        $answer.slideToggle(200);
      } else {
        $answer.removeClass("open");
        $answer.slideToggle(200);
      };
    });

    $(".faq-contents-item02").click(function() {
      
        var $answer = $(this).find($(".answer"));
        if ($answer.hasClass("open")) {
          $answer.addClass("open");
          $answer.slideToggle(200);
        } else {
            $answer.removeClass("open");
            $answer.slideToggle(200);
        };
    });

    $(".faq-contents-item03").click(function() {
      
        var $answer = $(this).find($(".answer"));
        if ($answer.hasClass("open")) {
          $answer.addClass("open");
          $answer.slideToggle(200);
        } else {
            $answer.removeClass("open");
            $answer.slideToggle(200);
        };
    });
  
    ////////////// ページ内スクロール ///////////////
  $("header a").click(function() {
    var Scroll = $(this).attr("href");
    var position = $(Scroll).offset().top-94;
    $("html,body").animate({
      "scrollTop" : position
    },300)
  });

  /////////////////// フォーム内入力チェック ///////////////////
  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

  ////////////////////////🍔//////////////////////////
  $(".hamburger").click(function() {
    if($(".hamburger-menu").hasClass("open")) {
      $(".hamburger-menu").removeClass("open");
      $(".hamburger-menu").slideUp(200);
    } else {
      $(".hamburger-menu").addClass("open");
      $(".hamburger-menu").slideDown(200);
    }
  });
///////////🍔以外をクリックしても閉じる//////////////
  $(document).click(function() {　$('.hamburger-menu').slideUp();　});
  ///////////🍔クリックで一旦イベント停止/////////////
  $('.hamburger').click(function() {　event.stopPropagation();　});
});