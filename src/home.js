
import restaurantImage from "./img/restaurant-image.svg";

export function createHomePage() {
	const content = document.getElementById('content');
	content.textContent = '';

	const image = document.createElement('img');
	image.src = restaurantImage;

	const title = document.createElement('h1');
	title.textContent = 'Le restaurant merveilleux';

	const description = document.createElement('p');
	description.textContent = 'Notre restaurant est le meilleur endroit pour manger de délicieux plats. Nous avons une grande variété de plats pour tous les goûts. Venez nous rendre visite dès aujourd\'hui !';

	content.appendChild(image);
	content.appendChild(title);
	content.appendChild(description);

	return content;
}

export { createHomePage as default };
