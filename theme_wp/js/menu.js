$(document).ready(function() {
	var altura = $('.navbar-border').offset().top;
	$(window).on('scroll', function() {
		if ($(window).scrollTop()>altura){
			$('.navbar-border').addClass('menu-fixed');
		} else {
			$('.navbar-border').removeClass('menu-fixed');
		}
	});
});

function mostrarModal (){
$("#mostrarmodalAcceso").modal("show");	
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







      
