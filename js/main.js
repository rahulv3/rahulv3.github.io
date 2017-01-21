jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 5000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	// Contact form
	// var form = $('#main-contact-form');
	// form.submit(function(event){
	// 	event.preventDefault();
	// 	var form_status = $('<div class="form_status"></div>');
	// 	$.ajax({
	// 		url: $(this).attr('action'),

	// 		beforeSend: function(){
	// 			form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
	// 		}
	// 	}).done(function(data){
	// 		alert("Hello");
	// 		form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
	// 	});
	// });

	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});

$(function() {
  $('#main-contact-form').submit(function(event) {
    var submit_btn = $('.contact-submit-btn');
  	submit_btn.addClass('disabled');
		event.preventDefault();
		if($('#main-contact-form').valid()){
	    var form = $(this);
	    var form_status = $('.form_status');
	    var v = grecaptcha.getResponse();
	    form_status.removeClass('alert-success').removeClass('alert-danger').addClass('alert-info');
	    form_status.html('<i class="fa fa-spinner fa-spin"></i> Message is sending...').fadeIn();
	    form_status.show();
	    if(v.length == 0)
	    {
	    	form_status.removeClass('alert-info').removeClass('alert-success').addClass('alert-danger');
	      form_status.html("You can't leave Captcha Code empty").delay(3000).fadeOut();
	      submit_btn.removeClass('disabled');
	    }
	    else
	    {
		    $.ajax({
		      type: form.attr('method'),
		      url: form.attr('action'),
		      data: form.serialize()
		    }).done(function(data) {
		      form_status.removeClass('alert-info').removeClass('alert-danger').addClass('alert-success');
		      form_status.html('Your message was sent successfully!').delay(3000).fadeOut();
		      submit_btn.removeClass('disabled');
		    }).fail(function(data) {
		      form_status.removeClass('alert-info').removeClass('alert-success').addClass('alert-danger');
		      form_status.html('Something went wrong!').delay(3000).fadeOut();
		      submit_btn.removeClass('disabled');
		    });
		    form[0].reset();
		    grecaptcha.reset();
	    }
		}
		else{
			submit_btn.removeClass('disabled');
	    $('.form_status').hide();
		}
  });
});
