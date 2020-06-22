/* Navbar scroll */
$(function(){

	var nav = $('.navbar'),
		doc = $(document),
		win = $(window);

	win.scroll(function() {

		if (doc.scrollTop() > 80) {
			nav.addClass('scrolled');
		} else {
			nav.removeClass('scrolled');
		}

	});

	win.scroll();

});


/* ***** Btn More-Less ***** */
$("#more").click(function(){
    var $this = $(this);
    $this.toggleClass('more');
    if($this.hasClass('more')){
        $this.text('More');         
    } else {
        $this.text('Less');
    }
});




/* ***** Slideanim  ***** */
 $(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
}); 




/* ***** Smooth Scrolling  ***** */
$(document).ready(function(){ 
  $(".navbar a, #service a").on('click', function(event) {

  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      window.location.hash = hash;
      });
  } 
});


  /* ***** Scroll to Top ***** */ 
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 300) {        
          $('.to-top').fadeIn(200);    
      } else {
          $('.to-top').fadeOut(200);   
      }
  });
  $('.to-top').click(function() {      
      $('.body,html').animate({
          scrollTop : 0                       
      }, 500);
  });

})

   window.alert = function(){};
        var defaultCSS = document.getElementById('bootstrap-css');
        function changeCSS(css){
            if(css) $('head > link').filter(':first').replaceWith('<link rel="stylesheet" href="'+ css +'" type="text/css" />'); 
            else $('head > link').filter(':first').replaceWith(defaultCSS); 
        }
        
$("#submit").click(function() {
    var data = $("#btn-input").val();
        //console.log(data);
        $('chat_log').append('<div class="row msg_container base_sent"><div class="col-md-10 col-xs-10"><div class="messages msg_receive"><p>'+data+'</p></div></div></div><div class="row msg_container base_receive"><div class="col-md-10 col-xs-10"><div class="messages msg_receive"><p>'+data+'</p></div></div></div>');
        clearInput();
        $(".msg_container_base").stop().animate({ scrollTop: $(".msg_container_base")[0].scrollHeight}, 1000);
});

function clearInput() {
    $("#myForm :input").each(function() {
        $(this).val(''); //hide form values
    });
}

$("#myForm").submit(function() {
    return false; //to prevent redirection to save.php
});
         //     Email///

         function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "form_surname":contactForm.surname.value,
        "from_email": contactForm.email.value,
        "restaurant_request": contactForm.comment.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

function popup()
{
  swal("Good job!", "You Feedback is recorded!", "success", {
  button: "Close!",
});
}