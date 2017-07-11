jQuery(document).ready(function ($) {
    
    //$('body').hide();
    
    
var img = new Image();
img.onload = function() {
    
var calculation = this.height/(this.width/320);     
    $("#login h1 a").css("height",calculation);

}

var bg = $("#login h1 a").css("background-image");
bg = bg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');

img.src = bg;
    
    
});

