const createAbout = () => {
	const aboutContainer = document.createElement("div");
	aboutContainer.className = "aboutContainer";

	return aboutContainer;
};
const loadAbout = () => {
	const mainContainer = document.querySelector(".mainContainer");
	mainContainer.textContent = "";
	mainContainer.appendChild(createAbout());
};

export default loadAbout;
