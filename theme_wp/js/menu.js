$(document).ready(function() {
	var altura = $('.navbar-border').offset().top;
	$(window).on('scroll', function() {
		if ($(window).scrollTop()>altura){
			$('.navbar-border').addClass('menu-fixed');
		} else {
			$('.navbar-border').removeClass('menu-fixed');
		}
	});


var contador =1;
$('.menu_bar').click(function() {

		//$('nav').toggle();
		if (contador==1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
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







      
