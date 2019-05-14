$(function(){
	// metodo de jQuery...
	$('.carousel').carousel('pause');
	$('[data-toggle="tooltip"]').tooltip();
	$(".nav-link,.dropdown-item").click(function() {
        var t = $(this).attr("href");
        $('.active').removeClass('active');
        $("html, body").animate({
            scrollTop: $(t).offset().top - 50
        }, {
            duration: 1e3,
        });
        $('body').scrollspy({ target: '#menu',offset: $(t).offset().top });
        $(this).parent().addClass('active');
        return false;
    });
});
// alert('Hi!');

window.onload = function () {
	alert('Hi!');
	const work = document.getElementById('work');
	const navItem = document.getElementsByClassName('nav-item');
	console.log(navItem);
	work.setAttribute('style', 'background-color: blue;');
	for (const item in navItem) {
		if (navItem[item]) {
			console.log(navItem[item]);
			navItem[item].setAttribute('style', 'background-color: red;');
		}
	}
}

