$(document).ready(function() {
	var altura = $('.menu').offset().top;
	$(window).on('scroll', function() {
		if ($(window).scrollTop()>altura){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});


var contador =1;
$('.menu_bar').click(function() {

		//$('nav').toggle();
		if (contador==1){
			$('nav').animate({
				top: '0'
			});
			contador = 0;
			$('#slideshow').addClass('menuslide-fixed');
		} else {
			contador = 1;
			$('nav').animate({
				top: '-100%'
			});
			$('#slideshow').removeClass('menuslide-fixed');
		}
	});
});


function reFresh()
{
  $("#mostrarmodal").modal("show");
}
function reset()
{
  window.clearInterval(repeticion);
  repeticion = window.setInterval("reFresh()",30000);  
}

var repeticion = window.setInterval("reFresh()",30000);







      
