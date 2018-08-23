var figure = $('.hovereffect').hover( hoverVideo, hideVideo );
$('video', this).get(0).load();
function hoverVideo(e) {  

    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}

$(document).ready(function(){
	$('video').bgVideo();
});


