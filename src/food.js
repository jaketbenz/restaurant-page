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
		name: "Sauerkraut Balls",
		about: "basked of breaded and fried combo of sauerkraut, smoked pork service with bavarian mustard",
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
const entrees = [
	{
		name: "Brauhaus Chicken Schnitzel",
		about: "freshly breaded cutlets with spaetzle, red cabbage and hunter sauce",
		price: 16,
	},
	{
		name: "Brauhaus Pork Schnitzel",
		about: "freshly breaded cutlets with spaetzle, red cabbage and hunter sauce",
		price: 18,
	},
	{
		name: "Branhaus Veal Schnitzel",
		about: "freshly breaded cutlets with spaetzle, red cabbage and hunter sauce",
		price: 20,
	},
	{
		name: "Oss Buco Pork Shank",
		about: "marinated pork with yukon gold mashed potatoes and buttered green beans",
		price: 22,
	},
	{
		name: "Beef Goulash",
		about: "tender marinated beef tips with spaetzle and sour cream",
		price: 18,
	},
	{
		name: "Sauerbraten",
		about: "slices of tender marinated beef dressed with gravy with yukon gold mashed potatoes with buttered green beans",
		price: 16,
	},
	{
		name: "Sausage Platter",
		about: "grilled german bratwurst, knackwurst, thuringer and kielbasa served with german potato salad, sauerkraut, spaetzle and hunter sauce",
		price: 20,
	},
	{
		name: "Beef Rouladin",
		about: "tender beef rolled with carrots, pickles and seasoning served with yukon gold mashed potatoes and buttered green beans",
		price: 18,
	},
];
const sandwiches = [
	{
		name: "Jakub's Schnitzel Sandwich",
		about: "breaded and seasoned to order with lettuce, tomato, onion and mayo on a brioche bun",
		price: "13/chicken, $14/pork",
	},
	{
		name: "Brauhaus Bratwurst Sandwich",
		about: "caramelized onions, sauerkraut and dijon mustard on a brat bun",
		price: 10,
	},
	{
		name: "Bacon Wrapped Brat",
		about: "applewood smoked bacon wrapped bratwurst with caramelized onions, dijon mustard server on a brat bun",
		price: 12,
	},
	{
		name: "The Big Bertha",
		about: "kielbasa, german potato salad, beer cheese, grilled onions served on a brat bun",
		price: 13,
	},
	{
		name: "Jakub's Schnitzel Burger",
		about: "1/2 pound angus patty breaded and deep fried, german potato salad and beer cheese served on a brioche bun",
		price: 14,
	},
	{
		name: "Bacon Jam Burger",
		about: "1/2 pound angus patty, bacon jam, beer cheese served on a brioche bun",
		price: 13,
	},
];
const sideOptions = [
	{
		name: "German Potato Salad",
	},
	{
		name: "Spaetzle",
	},
	{
		name: "Buttered Green Beans",
	},
	{
		name: "Braised Red Cabbage",
	},
	{
		name: "Sauerkraut",
	},
	{
		name: "Yukon Gold Mashed Potatoes",
	},
	{
		name: "Fresh Cut French Fries",
	},
	{
		name: "Tater Tots",
	},
	{
		name: "Onion Rings",
	},
	{
		name: "Haus Chips",
	},
];
const desserts = [
	{
		name: "Apple Strudel",
		about: "home made apple strudel with a scoop of vanilla ice cream",
		price: 7,
	},
	{
		name: "Bread Pudding",
		about: "homemade bread pudding topped with vanillas cream sauce",
		price: 8,
	},
];

const createFood = () => {
	const foodContainer = document.createElement("div");
	foodContainer.className = "foodContainer";

	// Appetizers
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

	// Entrees
	const entreesHeader = document.createElement("h1");
	entreesHeader.className = "entreeHeader";
	entreesHeader.textContent = "Entrees";

	const entreesContainer = document.createElement("div");
	entreesContainer.className =
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
		entreesContainer.appendChild(card);
		foodContainer.appendChild(entreesHeader);
		foodContainer.appendChild(entreesContainer);
	});

	// Sandwiches
	const sandwichHeader = document.createElement("h1");
	sandwichHeader.className = "sandwichHeader";
	sandwichHeader.textContent = "Sandwiches";

	const sandwichContainer = document.createElement("div");
	sandwichContainer.className =
		"sandwichContainer d-flex flex-wrap justify-content-center align-content-start";
	sandwiches.forEach((foodItem) => {
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
		sandwichContainer.appendChild(card);
		foodContainer.appendChild(sandwichHeader);
		foodContainer.appendChild(sandwichContainer);
	});

	// Side Options
	const sidesHeader = document.createElement("h1");
	sidesHeader.className = "sidesHeader";
	sidesHeader.textContent = "Sides";

	const sidesContainer = document.createElement("div");
	sidesContainer.className =
		"sidesContainer d-flex flex-wrap justify-content-center align-content-start";
	sideOptions.forEach((foodItem) => {
		const card = document.createElement("div");
		card.className = "card sideCard";

		const cardBody = document.createElement("div");
		cardBody.className =
			"card-body foodBody d-flex flex-column justify-content-center";

		const cardTitle = document.createElement("h5");
		cardTitle.className = "card-title foodTitle";
		cardTitle.innerText = foodItem.name;

		cardBody.appendChild(cardTitle);
		card.appendChild(cardBody);
		sidesContainer.appendChild(card);
		foodContainer.appendChild(sidesHeader);
		foodContainer.appendChild(sidesContainer);
	});

	// Desserts
	const dessertsHeader = document.createElement("h1");
	dessertsHeader.className = "dessertsHeader";
	dessertsHeader.textContent = "Desserts";

	const dessertsContainer = document.createElement("div");
	dessertsContainer.className =
		"sidesContainer d-flex flex-wrap justify-content-center align-content-start";
	desserts.forEach((foodItem) => {
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
		card.appendChild(cardBody);

		dessertsContainer.appendChild(card);
		cardBody.appendChild(cardText);
		cardBody.appendChild(cardPrice);
		card.appendChild(cardBody);
		foodContainer.appendChild(dessertsHeader);
		foodContainer.appendChild(dessertsContainer);
	});

	return foodContainer;
};
const loadFood = () => {
	const mainContainer = document.querySelector(".mainContainer");
	mainContainer.textContent = "";
	mainContainer.appendChild(createFood());
};

export default loadFood;
