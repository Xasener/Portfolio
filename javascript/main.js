$(document).ready(function () {
  $(".mode").click(function () {
    $(".mode_item").slideToggle("fast");
    $(".mode").slideToggle("fast");
  });

  $(".night_mode").click(function(){
    $(".s_contacts, .s_university, .s_certifications, .s_languages, .s_intro").css({"background-color": "#121212" ,"color": "#fff"});
    $(".icon_intro").attr("src", "img/icons8-circled-down-right-24-white.png");
    $(".icon_university").attr("src", "img/icons8-circled-up-right-24-white.png");
    $(".icon_language").attr("src", "img/icons8-below-24-white.png");
    $(".icon_certification").attr("src", "img/icons8-redo-24-white.png");
    $(".icon_github").attr("src", "img/icons8-github-24-white.png");
    $(".icon_facebook").attr("src", "img/icons8-facebook-24-white.png");
    $(".icon_telegram").attr("src", "img/icons8-telegram-app-24-white.png");
    $(".s_contacts a").css("color", "#fff");
    $(".mode_item").slideToggle("fast");
    $(".mode").slideToggle("fast");
  });
  $(".day_mode").click(function(){
    $(".s_contacts, .s_university, .s_certifications, .s_languages, .s_intro").css({"background-color": "#fff" ,"color": "#121212"});
    $(".icon_intro").attr("src", "img/icons8-circled-down-right-24.png");
    $(".icon_university").attr("src", "img/icons8-circled-up-right-24.png");
    $(".icon_language").attr("src", "img/icons8-below-24.png");
    $(".icon_certification").attr("src", "img/icons8-redo-24.png");
    $(".icon_github").attr("src", "img/icons8-github-24.png");
    $(".icon_facebook").attr("src", "img/icons8-facebook-24.png");
    $(".icon_telegram").attr("src", "img/icons8-telegram-app-24.png");
    $(".s_contacts a").css("color", "#121212");
    $(".mode_item").slideToggle("fast");
    $(".mode").slideToggle("fast");
  });
});
