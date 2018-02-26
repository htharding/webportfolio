/*   ON   LOAD     */
$(document).ready((function() {
	console.log("Setting Timeout!");
  setTimeout(function(){
  	console.log("Timeout RAN!");
  	$('#introTitle').removeClass('invisible');
  	$('#introTitle').addClass('animated flipInX');
  }
  , 600);
}));

$(document).ready((function() {
	console.log("Setting Timeout!");
  setTimeout(function(){
  	console.log("Timeout RAN!");
  	$('#introSubtitle').removeClass('invisible');
  	$('#introSubtitle').addClass('animated flipInX');
  }
  , 750);
}));

$(document).ready((function() {
	console.log("Setting Timeout!");
  setTimeout(function(){
  	console.log("Timeout RAN!");
  	$('#introLocation').removeClass('invisible');
  	$('#introLocation').addClass('animated flipInX');
  }
  , 900);
}))

$(document).ready((function() {
	console.log("Setting Timeout!");
  setTimeout(function(){
  	console.log("Timeout RAN!");
  	$('#introArrowButton').removeClass('invisible');
  	$('#introArrowButton').addClass('animated flipInX');
  }
  , 1050);
}))
;




/*   SCROLLIES   */



	/*introCol hide content*/
	$(window).scroll(function(){
	    if ($(this).scrollTop() < 35) {	
	   $('#introTitle').removeClass('flipOutX');
	   setTimeout(function(){
	   	$('#introSubtitle').removeClass('flipOutX');
	   }, 150);

	   setTimeout(function(){
	   	$('#introLocation').removeClass('flipOutX');
	   }, 300);

	   setTimeout(function(){
	   	$('#introArrowButton').removeClass('flipOutX');
	   }, 450);


	   console.log("Removing flipOutX");
       $('#introTitle').addClass('flipInX');
       setTimeout(function(){
       	$('#introSubtitle').addClass('flipInX');
       }, 150);
       setTimeout(function(){
       	$('#introLocation').addClass('flipInX');
       }, 300);
       setTimeout(function(){
       	$('#introArrowButton').addClass('flipInX');
       }, 450);
	   console.log("Adding flipInX");
	   /*if($( ".aboutMeCard" ).hasClass( "invisible" )){
		 $('.aboutMeCard').removeClass('invisible');
		 console.log("Removing Invisible");
		 $('.aboutMeCard').addClass('visible');
		 console.log("Adding Visible");
	   }
	   else{
	   };
    } else {
		$('.aboutMeCard').removeClass('fadeIn');
		console.log("Removing FadeIn");
		$('.aboutMeCard').addClass('fadeOut');
		console.log("Adding fadeOut");*/
    };

	if ($(this).scrollTop() > 36) {
		$('#introTitle').removeClass('flipInX');
		setTimeout(function(){
			$('#introSubtitle').removeClass('flipInX');
       }, 150);
		setTimeout(function(){
			$('#introLocation').removeClass('flipInX');
       }, 300);
		setTimeout(function(){
			$('#introArrowButton').removeClass('flipInX');
       }, 450);
		console.log("Removing flipInX");
		if($( "#introTitle" ).hasClass( "flipOutX" )){
		} else{
		 $('#introTitle').addClass('flipOutX');
		setTimeout(function(){
		 $('#introSubtitle').addClass('flipOutX');
       }, 150);
		setTimeout(function(){
		 $('#introLocation').addClass('flipOutX');
       }, 300);
		setTimeout(function(){
		 $('#introArrowButton').addClass('flipOutX');
       }, 450);

		};
    } else {

    };	


	/*show the main body, remove if too early*/
    if ($(this).scrollTop() > 750 && $(this).scrollTop() < 1100) {	
	   $('.aboutMeCard').removeClass('fadeOut');
	   	setTimeout(function(){
		 	$('.aboutMeButton').removeClass('fadeOut');
		 }, 200);
	   console.log("Removing fadeOut");
       $('.aboutMeCard').addClass('fadeIn');
      	setTimeout(function(){
		 	$('.aboutMeButton').addClass('fadeIn');
		 }, 200);
	   console.log("Adding fadeIn");
	   if($( ".aboutMeCard" ).hasClass( "invisible" )){

		 $('.aboutMeCard').removeClass('invisible');
		setTimeout(function(){
		 	$('.aboutMeButton').removeClass('invisible');
		 }, 200);
		 console.log("Removing Invisible");
		 $('.aboutMeCard').addClass('visible');
		setTimeout(function(){
		 	$('.aboutMeButton').addClass('visible');
		 }, 200);
		 console.log("Adding Visible");
	   }
	   else{
	   };
    } else {
		$('.aboutMeCard').removeClass('fadeIn');
		setTimeout(function(){
		 	$('.aboutMeButton').removeClass('fadeIn');
		 }, 200);
		console.log("Removing FadeIn");
		$('.aboutMeCard').addClass('fadeOut');
		setTimeout(function(){
		 	$('.aboutMeButton').addClass('fadeOut');
		 }, 200);
		console.log("Adding fadeOut");
    };



	/* remove main body if too late*/
	if ($(this).scrollTop() > 1100) {
		$('.aboutMeCard').removeClass('fadeIn');
		setTimeout(function(){
		 	$('.aboutMeButton').removeClass('fadeIn');
		 }, 200);
		console.log("Removing FadeIn");
		if($( ".aboutMeCard" ).hasClass( "fadeOut" )){
		} else{
		 $('.aboutMeCard').addClass('fadeOut');
		 setTimeout(function(){
		 	$('.aboutMeButton').addClass('fadeOut');
		 }, 200);
    	} 
    }else {

    }




    /* SCROLL SHOW/HIDE FOR PROJECTS*/



     if ($(this).scrollTop() > 1500) {	
	   $('#projectCard1').removeClass('fadeOut');
	   setTimeout(function(){
	   	$('#projectCard2').removeClass('fadeOut');
	   }, 150);

	   setTimeout(function(){
	   	$('#projectCard3').removeClass('fadeOut');
	   }, 300);

	   /* PLACE HOLDER FOR CONTACT ME
	   setTimeout(function(){
	   	$('#introArrowButton').removeClass('flipOutX');
	   }, 450);*/


	   console.log("Removing flipOutX");
       $('#projectCard1').addClass('fadeIn');
       if($( "#projectCard1" ).hasClass( "invisible" )){
		 $('#projectCard1').removeClass('invisible');
		 console.log("Removing Invisible");
		 $('#projectCard1').addClass('visible');
		};

       setTimeout(function(){
       	$('#projectCard2').addClass('fadeIn');
       	if($( "#projectCard2" ).hasClass( "invisible" )){
		 $('#projectCard2').removeClass('invisible');
		 console.log("Removing Invisible");
		 $('#projectCard2').addClass('visible');
		};
       }, 150);

       setTimeout(function(){
       	$('#projectCard3').addClass('fadeIn');
        if($( "#projectCard3" ).hasClass( "invisible" )){
		 $('#projectCard3').removeClass('invisible');
		 console.log("Removing Invisible");
		 $('#projectCard3').addClass('visible');
		};
       }, 300);
       /* PLACE HOLDER FOR CONTACT ME
       setTimeout(function(){
       	$('#introArrowButton').addClass('flipInX');
       }, 450);
	   console.log("Adding flipInX");*/


	   /*if($( ".aboutMeCard" ).hasClass( "invisible" )){
		 $('.aboutMeCard').removeClass('invisible');
		 console.log("Removing Invisible");
		 $('.aboutMeCard').addClass('visible');
		 console.log("Adding Visible");
	   }
	   else{
	   };
    } else {
		$('.aboutMeCard').removeClass('fadeIn');
		console.log("Removing FadeIn");
		$('.aboutMeCard').addClass('fadeOut');
		console.log("Adding fadeOut");*/
    };

	if ($(this).scrollTop() < 1490) {
		$('#projectCard1').removeClass('fadeIn');
		setTimeout(function(){
			$('#projectCard2').removeClass('fadeIn');
       }, 150);
		setTimeout(function(){
			$('#projectCard3').removeClass('fadeIn');
       }, 300);
		/*PLACE HOLDER FOR CONTACT ME
		setTimeout(function(){
			$('#introArrowButton').removeClass('flipInX');
       }, 450);*/

		console.log("Removing flipInX");
		if($( "#projectCard1" ).hasClass( "fadeOut" )){
		} else{
		 $('#projectCard1').addClass('fadeOut');
		setTimeout(function(){
		 $('#projectCard2').addClass('fadeOut');
       }, 150);
		setTimeout(function(){
		 $('#projectCard3').addClass('fadeOut');
       }, 300);

		/* PLACEHOLDER FOR CONTACT ME
		setTimeout(function(){
		 $('#introArrowButton').addClass('flipOutX');
       }, 450);*/

		};
    } else {

    };	


});



$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 1350 );
});