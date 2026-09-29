"use strict";

document.addEventListener("DOMContentLoaded", function () {

    /* MOBILE MENU */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("open");

            const icon = menuBtn.querySelector("i");

            if (navbar.classList.contains("open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        const links = navbar.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("open");

                const icon = menuBtn.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

    }


    /* HEADER */

    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {

        if (!header) return;

        if (window.scrollY > 50) {
            header.style.background = "rgba(20,16,13,0.98)";
        } else {
            header.style.background = "rgba(20,16,13,0.92)";
        }

    });


    /* YEAR */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* SMOOTH SCROLL */

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });


    console.log("Maisha website loaded successfully.");

});