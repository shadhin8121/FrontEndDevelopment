$(function() {

    $('.circlechart').circlechart();
	$("#topButton").click(function(){
	$("html, body").animate({scrollTop: 0}, 800)
	});

});
var typing = new Typed(".typing", {
    strings: ["Shadhin", "a FrontEnd Developer", "a Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



// function shadhin() {
//     let color = Math.floor(Math.random() * (255 - 1) + 1);
//     return color
// }

// function shadhin2() {
//     let color1 = Math.floor(Math.random() * (255 - 1) + 1);
//     return color1
// }

// function shadhin3() {
//     let color2 = Math.floor(Math.random() * (255 - 1) + 1);
//     return color2
// }

// for (let i = 1; i < 100; i++) {
//     document.write("rgb(" + shadhin() + "," + shadhin2() + "," + shadhin3() + ")<br>")
// }