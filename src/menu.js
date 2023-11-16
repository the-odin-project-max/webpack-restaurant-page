
function populateMenu() {
	const menuItems = [
		{
			name: "Pizza",
			price: "$10",
			description: "A delicious pizza with tomato sauce, cheese, and pepperoni.",
		},
		{
			name: "Burger",
			price: "$12",
			description: "Juicy burger with tomatoes, lettuce, and pickles.",
		},
		{
			name: "Chicken Fingers",
			price: "$8",
			description: "Crispy chicken fingers with honey mustard dipping sauce.",
		}];

	const contentDiv = document.getElementById("content");
	contentDiv.textContent = "";
	// Create a new div to hold the menu items
	const menuDiv = document.createElement("div");
	menuDiv.classList.add("menu");

	// Loop through each menu item and create a new div to hold it
	menuItems.forEach((item) => {
		const itemDiv = document.createElement("div");
		itemDiv.classList.add("menu-item");

		// Add the item name and price to the div
		const name = document.createElement("h3");
		name.textContent = item.name;
		itemDiv.appendChild(name);

		const price = document.createElement("p");
		price.textContent = item.price;
		itemDiv.appendChild(price);

		// Add the item description to the div
		const description = document.createElement("p");
		description.textContent = item.description;
		itemDiv.appendChild(description);

		// Add the item div to the menu div
		menuDiv.appendChild(itemDiv);
	});

	// Add the menu div to the content div
	contentDiv.appendChild(menuDiv);
}


export { populateMenu };
