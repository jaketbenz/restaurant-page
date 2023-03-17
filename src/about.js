const createAbout = () => {
	const aboutContainer = document.createElement("div");
	aboutContainer.className = "aboutContainer d-flex flex-column";

	const aboutHeader = document.createElement("h1");
	aboutHeader.className = "about__header";
	aboutHeader.textContent = "About Jakub's";

	const aboutBody = document.createElement("div");
	aboutBody.className = "about__body d-flex justify-content-evenly";
	// aboutBody.textContent = "";

	const aboutLocationContainer = document.createElement("div");
	aboutLocationContainer.className = "about__location";

	const aboutLocationTitle = document.createElement("h4");
	aboutLocationTitle.className = "about__title";
	aboutLocationTitle.textContent = "Location";

	const aboutLocationStreet = document.createElement("p");
	aboutLocationStreet.className = "about__text";
	aboutLocationStreet.textContent = "1919 W. Randolph Street";

	const aboutLocationCity = document.createElement("p");
	aboutLocationCity.className = "about__text";
	aboutLocationCity.textContent = "West Loop, Chicago, IL";

	const aboutHoursContainer = document.createElement("div");
	aboutHoursContainer.className = "about__hours";

	const aboutHoursTitle = document.createElement("h4");
	aboutHoursTitle.className = "about__title";
	aboutHoursTitle.textContent = "Hours";

	const aboutHoursWeekday = document.createElement("p");
	aboutHoursWeekday.className = "about__text";
	aboutHoursWeekday.textContent = "Mon - Thu, 3pm - 2am";

	const aboutHoursWeekend = document.createElement("p");
	aboutHoursWeekend.className = "about__text";
	aboutHoursWeekend.textContent = "Fri - Sun, 6am - 2am";

	const aboutContactContainer = document.createElement("div");
	aboutContactContainer.className = "about__contact";

	const aboutContactTitle = document.createElement("h4");
	aboutContactTitle.className = "about__title";
	aboutContactTitle.textContent = "Contact";

	const aboutContactNumber = document.createElement("p");
	aboutContactNumber.className = "about__text";
	aboutContactNumber.textContent = "847-847-8478";

	const aboutContactEmail = document.createElement("p");
	aboutContactEmail.className = "about__text";
	aboutContactEmail.textContent = "contact@jakubsbeirhalle.com";

	aboutLocationContainer.appendChild(aboutLocationTitle);
	aboutLocationContainer.appendChild(aboutLocationStreet);
	aboutLocationContainer.appendChild(aboutLocationCity);
	aboutHoursContainer.appendChild(aboutHoursTitle);
	aboutHoursContainer.appendChild(aboutHoursWeekday);
	aboutHoursContainer.appendChild(aboutHoursWeekend);
	aboutContactContainer.appendChild(aboutContactTitle);
	aboutContactContainer.appendChild(aboutContactNumber);
	aboutContactContainer.appendChild(aboutContactEmail);

	aboutBody.appendChild(aboutLocationContainer);
	aboutBody.appendChild(aboutHoursContainer);
	aboutBody.appendChild(aboutContactContainer);

	aboutContainer.appendChild(aboutHeader);
	aboutContainer.appendChild(aboutBody);
	return aboutContainer;
};

const loadAbout = () => {
	const mainContainer = document.querySelector(".mainContainer");
	mainContainer.textContent = "";
	mainContainer.appendChild(createAbout());
};

export default loadAbout;
