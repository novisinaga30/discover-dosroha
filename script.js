// ======================
// BACK TO TOP BUTTON
// ======================

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ======================
// NAVBAR SCROLL EFFECT
// ======================

const navbar =
document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ======================
// LOADER
// ======================

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 1200);

});

// ======================
// ACTIVE MENU
// ======================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});

// ======================
// HERO BUTTON
// ======================

const heroBtn =
document.querySelector(".hero-btn");

heroBtn.addEventListener("click", (e) => {

    e.preventDefault();

    document
    .querySelector("#about")
    .scrollIntoView({

        behavior: "smooth"

    });

});

// ======================
// SIMPLE FADE IN
// ======================

const cards =
document.querySelectorAll(
".explore-card, .team-card, .program-card"
);

const observer =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(30px)";

    card.style.transition =
    "all .8s ease";

    observer.observe(card);

});