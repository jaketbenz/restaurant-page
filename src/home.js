const createHome = () => {
	const homeContainer = document.createElement("div");
	homeContainer.className = "homeContainer";

	// const homeImage = document.createElement("img");
	// homeImage.className = "img-fluid";
	// homeImage.src = "./img/home_image.jpg";

	const homeHeader = document.createElement("h1");
	homeHeader.className = "home__header py-2";
	homeHeader.textContent = "Jakub's German Beer Hall";

	// homeContainer.appendChild(homeImage);
	homeContainer.appendChild(homeHeader);

	return homeContainer;
};
const loadHome = () => {
	const mainContainer = document.querySelector(".mainContainer");
	mainContainer.textContent = "";
	mainContainer.appendChild(createHome());
};

export default loadHome;
