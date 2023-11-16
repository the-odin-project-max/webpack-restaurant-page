import { createHomePage } from "./pages/home.js";
import { populateMenu } from "./pages/menu.js";
import { listContacts } from "./pages/contact.js";
import "./css/style.css";

const homePageButton = document.createElement("button");
homePageButton.textContent = "Home Page";
homePageButton.addEventListener("click", () => {
	createHomePage();
});

const secondPageButton = document.createElement("button");
secondPageButton.textContent = "Menu";
secondPageButton.addEventListener("click", () => {
	populateMenu();
});

const thirdPageButton = document.createElement("button");
thirdPageButton.textContent = "Contact";
thirdPageButton.addEventListener("click", () => {
	listContacts();
});

document.body.prepend(homePageButton);
document.body.prepend(secondPageButton);
document.body.prepend(thirdPageButton);

createHomePage();

console.log("This is a test");