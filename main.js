var lastPage;

document.addEventListener("DOMContentLoaded", function () {
	        
    if (localStorage.getItem('steps') !== null || localStorage.getItem('steps') !== null) {        
		lastPage = localStorage.getItem('steps');
    } else {        
lastPage = "#Equipment";     
    }

    $("#start").on("click", function (ev) {
        ev.preventDefault();
console.log(lastPage);
        $.mobile.changePage(lastPage);            
    }); 
    $(".next").on("click", clickHandler);
    $(".back").on("click", clickHandler);
});
function clickHandler(ev) { 
    ev.preventDefault();
	lastPage = $(this).attr("href");
    $.mobile.changePage(lastPage);
    localStorage.setItem("steps", lastPage);
}

$(document).ready(function(ev) {
	$('body').bind('orientationchange', function(ev){
		//console.log( ev.orientation );
	});
	$("body").trigger('orientationchange');
});