//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
//scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");


//scroll section
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; //window.scrollY gives the current scroll position
        console.log("top " + top)
        let offset = sec.offsetTop - 100; //offsetTop gives the top position of the element in the window
        console.log("offset " + offset)
        let height = sec.offsetHeight; //offsetHeight gives the height of the element
        console.log("height  " + height)
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animation onscroll
             sec.classList.add('show-animate');
        }
        // animation that repeat onscroll
        else {
            sec.classList.remove('show-animate');
        }

    });
    //sticky header
    let header = document.querySelector('header')
    // console.log("milla")
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when user clicks navbar links 
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");



}