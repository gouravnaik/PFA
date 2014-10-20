$(document).ready(function(){
	
	
	//When you click on a link with class of poplight and the href starts with a # 
  	var popIdToclose;
	$(".poplight").click(function() {
		popIdToclose = "" ;
		var auto = "auto";
		var popID = $(this).attr('rel'); //Get Popup Name
		$('#' + popID).fadeIn().css({ 'width': auto }).prepend('<a href="#" class="close"></a>');
		var popMargTop = ($('#' + popID).height() + 30) / 2;
		var popMargLeft = ($('#' + popID).width() + 80) / 2;
		$('#' + popID).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		$('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
		$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer 
		//return false;
	});
	
	$(".popup-big").on('click', function() {
		
		var bigPopID = $(this).attr('rel');
		var documentHeight = $(document).outerHeight();
		var windowHeight = $(window).outerHeight();
		var heightOfPopup = $('#' + bigPopID).height();
		$('#' + bigPopID).fadeIn();
		if(heightOfPopup > documentHeight)
		{
			documentHeight = heightOfPopup + 200;
		}
		var bigPopMargTop = ($(window).scrollTop()) + 100;
		var bigPopMargLeft = ($('#' + bigPopID).outerWidth()) / 2;
		$('#' + bigPopID).css({
			'margin-top' : bigPopMargTop,
			'margin-left' : -bigPopMargLeft
		});

		$('body').append('<div id="fadelayerbig"></div>');
		//Add the fade layer to bottom of the body tag.
		$('#fadelayerbig').css({
			'height':documentHeight,
			'filter' : 'alpha(opacity=70)'
		}).fadeIn();
		
		
		$('#fadelayerbig , .close-big-popup , .cancel-pop').on('click', function() {//When clicking on the close or fade layer...
			$('#fadelayerbig, .simple_overlay-big').fadeOut(function() {
				$('#fadelayerbig').remove();
			});
			//fadePopupLayerBig();

		});
		
		var fadePopupLayerBig = function() {
			$('#fadelayerbig, .simple_overlay-big').fadeOut(function() {
				$('#fadelayerbig').remove();
			});
		
		}

		
	});
	
	$('#fadelayerbig , .close-big-popup , .cancel-pop').on('click', function() {//When clicking on the close or fade layer...
			//fadePopupLayerBig();
			$('#fadelayerbig, .simple_overlay-big').fadeOut(function() {
				$('#fadelayerbig').remove();
			});
		});
	
var i;
	$('input.close_continue, #fade,.close').live('click', function() { //When clicking on the close or fade layer...
		fadePopup();
     i = 0;
		return false;
	});
	
	$('.user_cancel').live('click', function() {
		fadePopup();
		i = 0;
		//return false;
		
	});
	
	$(document).bind('keydown.facebox', function(e) {
        if (e.keyCode == 27){
			fadePopup();
			$('#fadelayerbig, .simple_overlay-big').fadeOut(function() {
				$('#fadelayerbig').remove();
			});
        	return true
		}
 	})
	
	//Close Popups and Fade Layer
    var fadePopup = function() {
	$('#fade , .simple_overlay,.simple_overlay-big').fadeOut(function() {
  		$('#fade, a.close').remove();
			
			if(i == 0)
			{
				stopCurrentVideo(popIdToclose)
				i++
			}
			
			
  	});
}


$('#fadelayerbig , .close-big-popup , .cancel-pop').on('click', function() {//When clicking on the close or fade layer...
			//fadePopupLayerBig();
			$('#fadelayerbig, .simple_overlay-big').fadeOut(function() {
				$('#fadelayerbig').remove();
			});
		});
		
});

