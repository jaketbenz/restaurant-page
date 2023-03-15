const createBeer = () => {
	const beerContainer = document.createElement("div");
	beerContainer.className = "beerContainer";

	return beerContainer;
};
const loadBeer = () => {
	const mainContainer = document.querySelector(".mainContainer");
	mainContainer.textContent = "";
	mainContainer.appendChild(createBeer());
};

export default loadBeer;