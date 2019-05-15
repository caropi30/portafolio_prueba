$(function(){
	// metodo de jQuery...
	$('.carousel').carousel('pause');
	$('[data-toggle="tooltip"]').tooltip();
	$(".nav-link,.dropdown-item").click(function() {
        var link = $(this).attr("href");
        $('.active').removeClass('active');
        $("html, body").animate({
            scrollTop: $(link).offset().top - 50
        }, {
            duration: 1e3,
        });
        $('body').scrollspy({ target: '#menu',offset: $(link).offset().top });
        $(this).parent().addClass('active');
        return false;
    });
});
// alert('Hi!');

window.onload = function () {
	const work = document.getElementById('work');
	const navItem = document.getElementsByClassName('nav-item');
	//console.log(navItem);
	work.setAttribute('style', 'background-color: #4ABCD5;');
	for (const item in navItem) {
		if (navItem[item]) {
			//console.log(navItem[item]);
			navItem[item].setAttribute('style', 'background-color: #4ABCD5;');
		}
	}
}

