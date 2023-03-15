import "./reset.css";
import "./index.css";

import loadHome from "./home.js";
import loadFood from "./food.js";
import loadBeer from "./beer.js";
import loadAbout from "./about.js";

const createHeader = () => {
	const headerContainer = document.createElement("header");
	headerContainer.className =
		"headerContainer d-flex justify-content-center align-items-center";

	const ul = document.createElement("ul");
	ul.className = "links d-flex";

	const homeLink = document.createElement("li");
	homeLink.className = "link__item home";
	homeLink.textContent = "Home";
	homeLink.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) {
			return;
		} else {
			setActive(homeLink);
			loadHome();
		}
	});

	const foodLink = document.createElement("li");
	foodLink.className = "link__item food";
	foodLink.textContent = "Food Menu";
	foodLink.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) {
			return;
		} else {
			setActive(foodLink);
			loadFood();
		}
	});

	const beerLink = document.createElement("li");
	beerLink.className = "link__item beer";
	beerLink.textContent = "Beer Menu";
	beerLink.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) {
			return;
		} else {
			setActive(beerLink);
			loadBeer();
		}
	});

	const aboutLink = document.createElement("li");
	aboutLink.className = "link__item about";
	aboutLink.textContent = "About";
	aboutLink.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) {
			return;
		} else {
			setActive(aboutLink);
			loadAbout();
		}
	});

	ul.appendChild(homeLink);
	ul.appendChild(foodLink);
	ul.appendChild(beerLink);
	ul.appendChild(aboutLink);
	headerContainer.appendChild(ul);

	return headerContainer;
};
const setActive = (link) => {
	const links = document.querySelectorAll(".link__item");
	links.forEach((link) => {
		if (link !== this) {
			link.classList.remove("active");
		}
	});
	link.classList.add("active");
};
const createMain = () => {
	const mainContainer = document.createElement("main");
	mainContainer.className =
		// "mainContainer d-flex justify-content-center align-items-center";
		"mainContainer d-flex"

	return mainContainer;
};
const createFooter = () => {
	const footerContainer = document.createElement("footer");
	footerContainer.className = "footerContainer d-flex justify-content-center";

	const p = document.createElement("p");
	p.innerText = "Made by ";

	const websiteLink = document.createElement("a");
	websiteLink.className = "footer__link";
	websiteLink.innerText = "Jake Benz";
	websiteLink.setAttribute("href", "https://jakebenz.dev");

	const githubLink = document.createElement("a");
	githubLink.className = "footer__link";
	githubLink.innerText = "Github";
	githubLink.setAttribute(
		"href",
		"https://github.com/jaketbenz/restaurant-page"
	);

	const githubIcon = document.createElement("i");
	githubIcon.className = "fa-brands fa-github";

	p.appendChild(websiteLink);
	p.appendChild(githubLink);
	p.appendChild(githubIcon);
	footerContainer.appendChild(p);

	return footerContainer;
};
const createPage = () => {
	const container = document.querySelector(".container");
	container.appendChild(createHeader());
	container.appendChild(createMain());
	container.appendChild(createFooter());

	setActive(document.querySelector(".link__item"));
	loadHome();
};

createPage();
