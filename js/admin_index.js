$(document).ready(function(){
  $(".item").click(function(){
    if($(this).next("ul").hasClass("active")){
      $(this).next("ul").removeClass("active");
      $(this).find("i").last().css("transform","rotate(0deg)")
    }else{
      $(this).next("ul").addClass('active');
      $(this).find("i").last().css("transform","rotate(180deg)")
    }
  });
  var tbody=document.getElementById("table_body");
  var btn1=tbody.querySelectorAll("tr>td>button:first-child");
  console.log(btn1);
});

