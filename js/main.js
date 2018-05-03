$(document).ready(()=>{
  $("#toggle").click(()=>{
    $("#nav-mobile").css({
      visibility:'visible',
    }).addClass("slide")
  })
  $("#close").click(()=>{
    $("#nav-mobile").css({
      visibility:'hidden'
    }).removeClass("slide")
  })

  $(".home-link").click(()=>{
    const path=$("#showcase").offset().top;
    $("body,html").animate({
      scrollTop:path
    })
    $("#nav-mobile").css({
      visibility:'hidden'
    }).removeClass("slide")
  })
  $(".about-link").click(()=>{
    const path=$("#section-1").offset().top;
    $("body,html").animate({
      scrollTop:path
    })
    $("#nav-mobile").css({
      visibility:'hidden'
    }).removeClass("slide")
  })
  $(".coaches-link").click(()=>{
    const path=$("#coaches").offset().top;
    $("body,html").animate({
      scrollTop:path
    })
    $("#nav-mobile").css({
      visibility:'hidden'
    }).removeClass("slide")
  })
  $(".contact-link").click(()=>{
    const path=$("footer").offset().top;
    $("body,html").animate({
      scrollTop:path
    })
    $("#nav-mobile").css({
      visibility:'hidden'
    }).removeClass("slide")
  })
})
