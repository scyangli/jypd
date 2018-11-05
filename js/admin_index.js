$(document).ready(function(){
  $(".item").click(function(){
    if($(this).next("ul").hasClass("active")){
      $(this).next("ul").removeClass("active")
    }else{
      $(this).next("ul").addClass('active');
    }
  });
});

