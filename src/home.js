const createHome = () => {
	const homeContainer = document.createElement("div");
	homeContainer.className = "homeContainer";

	const homeHeader = document.createElement("div");
	homeHeader.className = "home__header";
	// homeHeader.textContent = "Jakub's German Beer Hall";
	const mainHeader = document.createElement("h1");
	mainHeader.className = "main__header";
	mainHeader.textContent = "Jakub's";

	const subHeader = document.createElement("h3");
	subHeader.className = "sub__header";
	// subHeader.textContent = "German Beer Hall";
	subHeader.textContent = "Bierhalle";

	homeHeader.appendChild(mainHeader);
	homeHeader.appendChild(subHeader);
	homeContainer.appendChild(homeHeader);

	return homeContainer;
};
const loadHome = () => {
	const mainContainer = document.querySelector(".mainContainer");
	mainContainer.textContent = "";
	mainContainer.appendChild(createHome());
};

export default loadHome;
