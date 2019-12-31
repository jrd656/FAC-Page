//general folder for general js


const parallaxbottom = document.querySelectorAll(".parallax-bottom");
const parallax = document.querySelectorAll(".parallax");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;

    parallax.forEach(function(prllx, i) {
        prllx.style.opacity = (1 - offset/500);
    });




    var body = document.body, html = document.documentElement;
    var heightOfPage = body.scrollHeight - html.clientHeight;

    parallaxbottom.forEach(function(prlxbottom, i) {
    prlxbottom.style.opacity = ((offset / heightOfPage)*10 - 8.4);
    })

    console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
    console.log("heightOfPage: " + heightOfPage);
    // (offset / heightOfPage);
})



// console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
//         prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";