//toggle menu "X"

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});
//changing the color of scrolling header

window.onscroll = function(){
	var top = window.pageYOffset || document.documentElement.scrollTop;

	if(top > 120){
		document.querySelector('header').classList.add('fixed-header');
	}else{
		document.querySelector('header').classList.remove('fixed-header');
	}
}
