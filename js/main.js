"use strict";

const header = document.querySelector(".header");
const targetForm = document.querySelector("#invite-form");

const burgerModalMenu = document.querySelector(".burger-menu");
const buttonOpenModalMenu = document.querySelector(".header__burger-button");
const buttonCloseModalMenu = document.querySelector(
	".burger-menu__header-button"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Header Active
const headerCoords = header.getBoundingClientRect();
window.addEventListener("scroll", function () {
	if (window.scrollY > headerCoords.bottom) {
		header.classList.add("header--active");
	} else {
		header.classList.remove("header--active");
	}
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Smooth scroll from buttons
const scrollFromButtons = function () {
	document.querySelector(".main").addEventListener("click", function (e) {
		e.preventDefault();

		if (e.target.classList.contains("scroll-button")) {
			const href = e.target.getAttribute("href");
			document
				.querySelector(href)
				.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	});
};
scrollFromButtons();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Modal menu
const openModalMenu = function (e) {
	e.preventDefault();
	burgerModalMenu.classList.add("visible");
};

const closeModalMenu = function () {
	burgerModalMenu.classList.remove("visible");
};

buttonOpenModalMenu.addEventListener("click", openModalMenu);
buttonCloseModalMenu.addEventListener("click", closeModalMenu);
document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && burgerModalMenu.classList.contains("visible")) {
		closeModalMenu();
	}
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Smooth scroll from navigation
const scrollFromNavigation = function () {
	document
		.querySelector(".burger-menu__list")
		.addEventListener("click", function (e) {
			e.preventDefault();

			closeModalMenu();

			if (e.target.classList.contains("burger-menu__nav-link")) {
				const href = e.target.getAttribute("href");
				document
					.querySelector(href)
					.scrollIntoView({ behavior: "smooth", block: "center" });
			}
		});
};
scrollFromNavigation();
