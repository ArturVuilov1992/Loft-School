$(document).ready(r => {
    //$(".btn").click( e =>{
                //let link = $(".menu-link").width();
        //$(".menu-link").width("1%")
        //$(".container").html(link);
        //console.log(link);
       // $(".btn").toggle("btn")
   // })
 // let radio = $(".radio-element:checked");
  //let value = radio.val();
//let text = $(".menu-link").css(
   // {
       // "font-weight": 1000,
      //  "font-size": "15rem",
     //   "color":"red"
   // });
   //let radio = $(".menu-link");
  //console.log(radio.length);
  $(".btn").on("click", function (e) {
   //$(this).css("color", "green");//c this не исполeьзуются стрелочные функции, только стандарт function(e){...}
//let err = $(e.currentTarget);
$(".menu-link").eq(1).css("color", "brown");
    //console.log();

    })
})
