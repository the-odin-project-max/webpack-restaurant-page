/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listContacts: () => (/* binding */ listContacts)\n/* harmony export */ });\nfunction listContacts() {\n\tconst contacts = [\n\t\t{ name: \"John Doe\", email: \"johndoe@example.com\", phone: \"555-555-5555\" },\n\t\t{ name: \"Jane Smith\", email: \"janesmith@example.com\", phone: \"555-555-5556\" },\n\t\t{ name: \"Bob Johnson\", email: \"bobjohnson@example.com\", phone: \"555-555-5557\" }\n\t];\n\n\tconst contentDiv = document.getElementById(\"content\");\n\tcontentDiv.textContent = \"\";\n\tconst contactsList = document.createElement(\"ul\");\n\n\tcontacts.forEach(contact => {\n\t\tconst listItem = document.createElement(\"li\");\n\t\tlistItem.textContent = `${contact.name} - Email: ${contact.email}, Phone: ${contact.phone}`;\n\t\tcontactsList.appendChild(listItem);\n\t});\n\n\tcontentDiv.appendChild(contactsList);\n}\n\n\n\n\n//# sourceURL=webpack://webpack-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage),\n/* harmony export */   \"default\": () => (/* binding */ createHomePage)\n/* harmony export */ });\n\nfunction createHomePage() {\n\tconst content = document.getElementById('content');\n\tcontent.textContent = '';\n\t\n\tconst image = document.createElement('img');\n\timage.src = 'restaurant-image.jpg';\n\n\tconst title = document.createElement('h1');\n\ttitle.textContent = 'Le restaurant merveilleux';\n\n\tconst description = document.createElement('p');\n\tdescription.textContent = 'Notre restaurant est le meilleur endroit pour manger de délicieux plats. Nous avons une grande variété de plats pour tous les goûts. Venez nous rendre visite dès aujourd\\'hui !';\n\n\tcontent.appendChild(image);\n\tcontent.appendChild(title);\n\tcontent.appendChild(description);\n\n\treturn content;\n}\n\n\n\n\n//# sourceURL=webpack://webpack-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst homePageButton = document.createElement(\"button\");\nhomePageButton.textContent = \"Home Page\";\nhomePageButton.addEventListener(\"click\", () => {\n\t(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\n});\n\nconst secondPageButton = document.createElement(\"button\");\nsecondPageButton.textContent = \"Menu\";\nsecondPageButton.addEventListener(\"click\", () => {\n\t(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.populateMenu)();\n});\n\nconst thirdPageButton = document.createElement(\"button\");\nthirdPageButton.textContent = \"Contact\";\nthirdPageButton.addEventListener(\"click\", () => {\n\t(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.listContacts)();\n});\n\ndocument.body.prepend(homePageButton);\ndocument.body.prepend(secondPageButton);\ndocument.body.prepend(thirdPageButton);\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\n\nconsole.log(\"This is a test\");\n\n//# sourceURL=webpack://webpack-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   populateMenu: () => (/* binding */ populateMenu)\n/* harmony export */ });\n\nfunction populateMenu() {\n\tconst menuItems = [\n\t\t{\n\t\t\tname: \"Pizza\",\n\t\t\tprice: \"$10\",\n\t\t\tdescription: \"A delicious pizza with tomato sauce, cheese, and pepperoni.\",\n\t\t},\n\t\t{\n\t\t\tname: \"Burger\",\n\t\t\tprice: \"$12\",\n\t\t\tdescription: \"Juicy burger with tomatoes, lettuce, and pickles.\",\n\t\t},\n\t\t{\n\t\t\tname: \"Chicken Fingers\",\n\t\t\tprice: \"$8\",\n\t\t\tdescription: \"Crispy chicken fingers with honey mustard dipping sauce.\",\n\t\t}];\n\n\tconst contentDiv = document.getElementById(\"content\");\n\tcontentDiv.textContent = \"\";\n\t// Create a new div to hold the menu items\n\tconst menuDiv = document.createElement(\"div\");\n\tmenuDiv.classList.add(\"menu\");\n\n\t// Loop through each menu item and create a new div to hold it\n\tmenuItems.forEach((item) => {\n\t\tconst itemDiv = document.createElement(\"div\");\n\t\titemDiv.classList.add(\"menu-item\");\n\n\t\t// Add the item name and price to the div\n\t\tconst name = document.createElement(\"h3\");\n\t\tname.textContent = item.name;\n\t\titemDiv.appendChild(name);\n\n\t\tconst price = document.createElement(\"p\");\n\t\tprice.textContent = item.price;\n\t\titemDiv.appendChild(price);\n\n\t\t// Add the item description to the div\n\t\tconst description = document.createElement(\"p\");\n\t\tdescription.textContent = item.description;\n\t\titemDiv.appendChild(description);\n\n\t\t// Add the item div to the menu div\n\t\tmenuDiv.appendChild(itemDiv);\n\t});\n\n\t// Add the menu div to the content div\n\tcontentDiv.appendChild(menuDiv);\n}\n\n\n\n\n\n//# sourceURL=webpack://webpack-restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;