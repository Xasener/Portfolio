$(document).ready(function () {
  $(".mode").click(function () {
    $(".mode_item").slideToggle("fast");
    $(".mode").slideToggle("fast");
  });

  $(".night_mode").click(function(){
    $(".s_contacts, .s_university, .s_certifications, .s_languages, .s_intro").css({"background-color": "#121212" ,"color": "#fff"});
    $(".mode_item").slideToggle("fast");
    $(".mode").slideToggle("fast");
  });
  $(".day_mode").click(function(){
    $(".s_contacts, .s_university, .s_certifications, .s_languages, .s_intro").css({"background-color": "#fff" ,"color": "#121212"});
    $(".mode_item").slideToggle("fast");
    $(".mode").slideToggle("fast");
});
});
