const tapBeers = [
	{
		name: "Weihenstephaner Vitus",
		type: "Weisse",
		about: "Freising, Germany",
		percentage: 7.7,
	},
	{
		name: "Hacker Pschorr",
		type: "Weisse",
		about: "Munich, Germany",
		percentage: 5.5,
	},
	{
		name: "Franziskaner Hefe",
		type: "Weisse",
		about: "Munich, Germany",
		percentage: 5,
	},
	{
		name: "Tucher Hefe Weizen",
		type: "Weisse",
		about: "Nurnberg, Germany",
		percentage: 5.3,
	},
	{
		name: "Radeberger",
		type: "Pilsner",
		about: "Radeberger, Germany",
		percentage: 4.8,
	},
	{
		name: "Warsteiner",
		type: "Pilsner",
		about: "Warstein, Germany",
		percentage: 4.8,
	},
	{
		name: "Stella Artois",
		type: "Pilsner",
		about: "Leuven, Belgium",
		percentage: 5.2,
	},
	{
		name: "Ayinger Rotating",
		type: "Bock/DoppleBock",
		about: "Aying, Germany",
		percentage: "Celebrator - 6.9% Dark - 5% OktoberFest - 5.8",
	},
	{
		name: "Spaten Lager",
		type: "Lager",
		about: "Munich, Germany",
		percentage: 5.1,
	},
	{
		name: "Spaten Lager",
		type: "Lager",
		about: "Munich, Germany",
		percentage: 5.9,
	},
	{
		name: "Spaten Oktoberfest / Marzen",
		type: "Lager",
		about: "Munich, Germany",
		percentage: 5.2,
	},
	{
		name: "Dab",
		type: "Lager",
		about: "Darmnund, Germany",
		percentage: 5,
	},
];
// Maybe I'll add bottles and wines. Maybe
const bottleBeers = [
	{
		name: "Paulaner Hefe Weizen",
	},
	{
		name: "Blue Moon",
	},
	{
		name: "Heineken",
	},
	{
		name: "Miller Lite",
	},
	{
		name: "Miller Highlife",
	},
	{
		name: "Coors Light",
	},
	{
		name: "Old Style",
	},
	{
		name: "Bud Light",
	},
	{
		name: "Budweiser",
	},
	{
		name: "Michelob Ultra",
	},
	{
		name: "Corona Extra",
	},
	{
		name: "Modelo Especial",
	},
	{
		name: "Modelo Negra",
	},
	{
		name: "Guiness",
	},
	{
		name: "Wyder's Pear Cider",
	},
	{
		name: "Wyder's Raspberry Cider",
	},
	{
		name: "Angry Orchard",
	},
	{
		name: "Finch's Tacocat",
	},
	{
		name: "Schofferhofer Grapefruit",
	},
];
const wines = [
	{
		name: "Sauvignon Blanc",
		type: "White Wine",
		about: "Fire Road, New Zealand",
		price: 8,
	},
	{
		name: "Chardonnay",
		type: "White Wine",
		about: "Deloach, California",
		price: 9,
	},
	{
		name: "Pinot Grigio",
		type: "White Wine",
		about: "Riff, Italy",
		price: 9,
	},
	{
		name: "Sparkling Wine",
		type: "White Wine",
		about: "Segura Viuda Brut Splits",
		price: 7,
	},
	{
		name: "Cabernet Sauvignon",
		type: "Red Wine",
		about: "Four Vines, Paso Robles",
		price: 9,
	},
	{
		name: "Pinot Noir",
		type: "Red Wine",
		about: "Deloach California",
		price: 9,
	},
	{
		name: "Malbec",
		type: "Red Wine",
		about: "Santa Julia, Argentina",
		price: 8,
	},
];

const createBeer = () => {
	const beerContainer = document.createElement("div");
	beerContainer.className = "beerContainer";

	// Tap beers
	const tapHeader = document.createElement("h1");
	tapHeader.className = "tapHeader";
	tapHeader.textContent = "Beers on Tap";

	const tapContainer = document.createElement("div");
	tapContainer.className =
		"tapContainer d-flex flex-wrap justify-content-center align-content-start";

	tapBeers.forEach((foodItem) => {
		const card = document.createElement("div");
		card.className = "card beerCard";

		const cardBody = document.createElement("div");
		cardBody.className =
			"card-body beerBody d-flex flex-column justify-content-between";

		const cardTitle = document.createElement("h5");
		cardTitle.className = "card-title beerTitle";
		cardTitle.innerText = foodItem.name;

		const cardType = document.createElement("p");
		cardType.className = "card-text beerType";
		cardType.innerText = foodItem.type;

		const cardText = document.createElement("p");
		cardText.className = "card-text beerDescription";
		cardText.innerText = foodItem.about;

		const cardPrice = document.createElement("p");
		cardPrice.className = "card-text beerPercentage";
		cardPrice.innerText = `${foodItem.percentage}%`;

		cardBody.appendChild(cardTitle);
		cardBody.appendChild(cardType);
		cardBody.appendChild(cardText);
		cardBody.appendChild(cardPrice);
		card.appendChild(cardBody);
		tapContainer.appendChild(card);
		beerContainer.appendChild(tapHeader);
		beerContainer.appendChild(tapContainer);
	});

	// Bottled Beers
	const bottleHeader = document.createElement("h1");
	bottleHeader.className = "bottleHeader";
	bottleHeader.textContent = "Bottled Drink";

	const bottleContainer = document.createElement("div");
	bottleContainer.className =
		"bottleContainer d-flex flex-wrap justify-content-center align-content-start";

	bottleBeers.forEach((foodItem) => {
		const card = document.createElement("div");
		card.className = "card bottleCard";

		const cardBody = document.createElement("div");
		cardBody.className =
			"card-body beerBody d-flex flex-column justify-content-between";

		const cardTitle = document.createElement("h5");
		cardTitle.className = "card-title beerTitle";
		cardTitle.innerText = foodItem.name;

		cardBody.appendChild(cardTitle);
		card.appendChild(cardBody);
		bottleContainer.appendChild(card);
		beerContainer.appendChild(bottleHeader);
		beerContainer.appendChild(bottleContainer);
	});

	// Wine
	const wineHeader = document.createElement("h1");
	wineHeader.className = "wineHeader";
	wineHeader.textContent = "Wines";

	const wineContainer = document.createElement("div");
	wineContainer.className =
		"tapContainer d-flex flex-wrap justify-content-center align-content-start";

	wines.forEach((foodItem) => {
		const card = document.createElement("div");
		card.className = "card beerCard";

		const cardBody = document.createElement("div");
		cardBody.className =
			"card-body beerBody d-flex flex-column justify-content-between";

		const cardTitle = document.createElement("h5");
		cardTitle.className = "card-title beerTitle";
		cardTitle.innerText = foodItem.name;

		const cardType = document.createElement("p");
		cardType.className = "card-text beerType";
		cardType.innerText = foodItem.type;

		const cardText = document.createElement("p");
		cardText.className = "card-text beerDescription";
		cardText.innerText = foodItem.about;

		const cardPrice = document.createElement("p");
		cardPrice.className = "card-text beerPercentage";
		cardPrice.innerText = `$${foodItem.price}`;

		cardBody.appendChild(cardTitle);
		cardBody.appendChild(cardType);
		cardBody.appendChild(cardText);
		cardBody.appendChild(cardPrice);
		card.appendChild(cardBody);
		wineContainer.appendChild(card);
		beerContainer.appendChild(wineHeader);
		beerContainer.appendChild(wineContainer);
	});

	return beerContainer;
};
const loadBeer = () => {
	const mainContainer = document.querySelector(".mainContainer");
	mainContainer.textContent = "";
	mainContainer.appendChild(createBeer());
};

export default loadBeer;
