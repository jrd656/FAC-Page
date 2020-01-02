//general folder for general js


const parallaxbottom = document.querySelectorAll(".parallax-bottom");
const parallax = document.querySelectorAll(".parallax");
var body = document.body, html = document.documentElement;
var heightOfPage = body.scrollHeight - html.clientHeight;

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;

    parallax.forEach(function(prllx) {
        prllx.style.opacity = (1 - offset/500);
    });

    var body = document.body, html = document.documentElement;
    var heightOfPage = body.scrollHeight - html.clientHeight;

    parallaxbottom.forEach(function(prlxbottom) {
    prlxbottom.style.opacity = ((offset / heightOfPage)*10 - 7);
    })


    console.log("current height from top: "+ offset);

})

console.log("heightOfPage: " + heightOfPage);

// console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
//         prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";