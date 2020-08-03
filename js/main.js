// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 0){
//             $(".topBar").css({"opacity" : "0"})
//         }
//         else {
//             $(".topBar").css({"opacity" : "1"})
//         }
//     })

// })



function myFunction() {
    document.getElementById('bigSearch').style.cssText = 'background-color: red; display: block; color: white; font-size: 44px';
}


$(document).ready(function () {
    $('#nav > li > a').click(function(){
      if ($(this).attr('class') != 'active'){
        $('#nav li ul').slideUp();
        $(this).next().slideToggle();
        $('#nav li a').removeClass('active');
        $(this).addClass('active');
      }
    });
  });


  var er = document.getElementsByClassName(".navList"); 

  if (scroll) {
      er.style.cssText = 'background-color: red; display: block; color: white; font-size: 44px';
  }
  else {
    console.log("eror eenen");
  }