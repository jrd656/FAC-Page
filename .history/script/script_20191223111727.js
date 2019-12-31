//general folder for general js


const parallax = document.querySelectorAll(".parallax");
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.forEach(function(prllx, i) {
        prllx.style.opacity = (1 - offset/500);

        var intViewportHeight = window.innerHeight;

        console.log("window.innerHeight: " + intViewportHeight);
        console.log("window.outerHeight: " + window.outerHeight);
        console.log("document.height: " + Document.height);
        console.log("YOffset plus innerHeight: " + window.pageYOffset + window.innerHeight);
        console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);

        var body1 = document.body,
    html1 = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

                       console.log("height, html, body:")
                       console.log(height);
                       console.log(html1)
                       console.log(body1)
    })
})



// console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
//         prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";