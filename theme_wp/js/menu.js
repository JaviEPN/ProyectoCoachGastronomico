$(document).ready(function() {
	var altura = $('.menu').offset().top;
	$(window).on('scroll', function() {
		if ($(window).scrollTop()>altura){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
});

function mostrarModalRepetidamente() {
  
}

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







      
