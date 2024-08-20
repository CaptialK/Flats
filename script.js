

function showPicture() {
    var sourceOfPicture = "./images/menu.png";
    var img = document.getElementById('myImg')
    img.src = sourceOfPicture.replace('50vw', '25vw');
    img.style.display = "block";
}

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visiblity = nav.getAttribute("data-visible");

    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }  else if (visiblity === "true") {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);

    }
        
});