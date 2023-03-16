const createHome = () => {
	const homeContainer = document.createElement("div");
	homeContainer.className = "homeContainer";

	const homeHeader = document.createElement("h1");
	homeHeader.className = "home__header py-2";
	homeHeader.textContent = "Jakub's German Beer Hall";
	// homeHeader.textContent = "JAKUB'S GERMAN BEER HALL";

	homeContainer.appendChild(homeHeader);

	return homeContainer;
};
const loadHome = () => {
	const mainContainer = document.querySelector(".mainContainer");
	mainContainer.textContent = "";
	mainContainer.appendChild(createHome());
};

export default loadHome;
