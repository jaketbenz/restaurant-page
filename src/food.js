const appetizers = [
	{
		name: "German Potato Pancakes",
		about: "3 German potato pancakes with apple sauce and sour cream",
		price: 10,
	},
	{
		name: "Bavarian Pretzel",
		about: "with salt, stone ground mustard, sweet chili sauce and beer cheese",
		price: 10,
	},
	{
		name: "Cheese Curds",
		about: "deep fried Ellsworth cheese curds with ranch",
		price: 8,
	},
	{
		name: "Bacon Jam Sliders",
		about: "3 angus sliders with bacon jam and beer cheese with haus chips",
		price: 13,
	},
	{
		name: "Chicken Schnitzel Sliders",
		about: "3 breaded chicken sliders with lettuce, tomato, mayo and haus chips",
		price: 12,
	},
	{
		name: "Saurkraut Balls",
		about: "basked of breaded and fried combo of saurkraut, smoked pork service with bavarian mustard",
		price: 10,
	},
	{
		name: "German Brat Bite Basket",
		about: "grilled bratwurst bites with dijon mustard for dipping",
		price: 9,
	},
	{
		name: "Curry Wurst",
		about: "brat bites dressed in curry ketchup served with fresh cut fries",
		price: 9,
	},
	{
		name: "Deep Fried Pickles",
		about: "deep fried dill pickle spears with ranch",
		price: 8,
	},
	{
		name: "Potato Skins",
		about: "potato halves filled with melted cheese, crushed bacon bits, and scallions with sour cream",
		price: 10,
	},
];
const entrees = [];

const createFood = () => {
	const foodContainer = document.createElement("div");
	foodContainer.className = "foodContainer";

	const appetizersHeader = document.createElement("h1");
	appetizersHeader.className = "appetizersHeader";
	appetizersHeader.textContent = "Appetizers";

	const appetizersContainer = document.createElement("div");
	appetizersContainer.className =
		"appetizersContainer d-flex flex-wrap justify-content-center align-content-start";

	appetizers.forEach((foodItem) => {
		const card = document.createElement("div");
		card.className = "card foodCard";

		const cardBody = document.createElement("div");
		cardBody.className =
			"card-body foodBody d-flex flex-column justify-content-between";

		const cardTitle = document.createElement("h5");
		cardTitle.className = "card-title foodTitle";
		cardTitle.innerText = foodItem.name;

		const cardText = document.createElement("p");
		cardText.className = "card-text foodDescription";
		cardText.innerText = foodItem.about;

		const cardPrice = document.createElement("p");
		cardPrice.className = "card-text foodPrice";
		cardPrice.innerText = `$${foodItem.price}`;

		cardBody.appendChild(cardTitle);
		cardBody.appendChild(cardText);
		cardBody.appendChild(cardPrice);
		card.appendChild(cardBody);
		appetizersContainer.appendChild(card);
		foodContainer.appendChild(appetizersHeader);
		foodContainer.appendChild(appetizersContainer);
	});

	const entreeHeader = document.createElement("h1");
	entreeHeader.className = "entreeHeader";
	entreeHeader.textContent = "Entrees";

	const entreeContainer = document.createElement("div");
	entreeContainer.className =
		"entreeContainer d-flex flex-wrap justify-content-center align-content-start";
	entrees.forEach((foodItem) => {
		const card = document.createElement("div");
		card.className = "card foodCard";

		const cardBody = document.createElement("div");
		cardBody.className =
			"card-body foodBody d-flex flex-column justify-content-between";

		const cardTitle = document.createElement("h5");
		cardTitle.className = "card-title foodTitle";
		cardTitle.innerText = foodItem.name;

		const cardText = document.createElement("p");
		cardText.className = "card-text foodDescription";
		cardText.innerText = foodItem.about;

		const cardPrice = document.createElement("p");
		cardPrice.className = "card-text foodPrice";
		cardPrice.innerText = `$${foodItem.price}`;

		cardBody.appendChild(cardTitle);
		cardBody.appendChild(cardText);
		cardBody.appendChild(cardPrice);
		card.appendChild(cardBody);
		entreeContainer.appendChild(card);
		foodContainer.appendChild(entreeHeader);
		foodContainer.appendChild(entreeContainer);
	});
	return foodContainer;
};
const loadFood = () => {
	const mainContainer = document.querySelector(".mainContainer");
	mainContainer.textContent = "";
	mainContainer.appendChild(createFood());
};

export default loadFood;
