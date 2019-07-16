// --declaration of global variables START

const searchCountry = document.querySelector('.search-country__input'),
	ulAllCountries = document.querySelector('.search-country__list'),
	numberCountries = document.querySelector('.counter__number'),
	percentCountries = document.querySelector('.counter__percent'),
	africaCounter = document.querySelector('.counter--africa'),
	americaNCounter = document.querySelector('.counter--americaN'),
	americaSCounter = document.querySelector('.counter--americaS'),
	asiaCounter = document.querySelector('.counter--asia'),
	europeCounter = document.querySelector('.counter--europe'),
	oceaniaCounter = document.querySelector('.counter--oceania');


const svg = document.getElementById('map');
const paths = svg.querySelectorAll('path')


const colorVisited = "#68f442"
const colorUnvisited = "#f2f2f2"


// declare continents code
const af = "africa",
	amN = "americaN",
	amS = "americaS",
	asi = "asia",
	eu = "europe",
	oa = "oceaniaAntarctica";

// declare visited country arrays 
const visitedCountries = [],
	visitedAfrica = [],
	visitedAmericaN = [],
	visitedAmericaS = [],
	visitedAsia = [],
	visitedEurope = [],
	visitedOceaniaAntarctica = [];

// -- declaration of global variables END

// show/hide instruction

const btnInstr = document.querySelector(".header__btn");
const instr = document.querySelector('.instr')

const showInstr = (e) => {
	e.target.classList.toggle('header__btn--active');
	if (instr.style.maxHeight) {
		instr.style.maxHeight = null;
		btnInstr.textContent = "click me for instruction of use!"
	} else {
		instr.style.maxHeight = instr.scrollHeight + "px"
		btnInstr.textContent = "hide instruction";
		instr.setAttribute("aria-expanded", true);
		btnInstr.setAttribute("aria-pressed", true);
	}
}

btnInstr.addEventListener('click', showInstr)


// ARRAY OF OBJECTS OF ALL COUNTRIES

const allCountriesList = []

// get countries details from json

	
	fetch(`./data/country_list`)
	.then(response => response.json())
	.then(data => allCountriesList.push(data))



// Add all countries to HTML 
allCountriesList.forEach(country => {
	const countryLi = document.createElement('li');
	ulAllCountries.appendChild(countryLi);
	countryLi.classList.add("list__country", "flex")
	countryLi.dataset.id = country.code
	countryLi.dataset.name = country.name
	countryLi.dataset.continent = country.continent
	countryLi.innerHTML = country.name + `<img src="flag\/${countryLi.dataset.id.toLowerCase()}.png" class="country-flag" alt="country-flag">`
	//Add data-continent to country on map
	paths.forEach(item2 => {
		if (country.code === item2.id) item2.dataset.continent = country.continent
	})
})

// get all countries from HTML
const allCountriesLi = document.querySelectorAll('.list__country')


// search box 
const searchTask = (e) => {

	const searchText = e.target.value.toLowerCase();
	if (searchText === "") {
		for (li of allCountriesLi) {
			li.style.display = "none"
		}
	} else {
		for (li of allCountriesLi) {
			let txt = li.textContent;
			let countryID = li.dataset.id;
			if (txt.toLowerCase().includes(searchText) || countryID.toLowerCase() == searchText) {
				li.style.display = "flex"
			} else {
				li.style.display = "none"
			}
		}
	}
}

// START - add selected country to visited list
const addToVisited = (e) => {
	// check if selected country has already added => if yes show popup
	if (
		visitedCountries.some(country => country.name === e.target.dataset.name)) {
		const popup = document.querySelector('.overlay');
		document.querySelector('.content__country').textContent = e.target.dataset.name;
		popup.classList.toggle("active");
		const closePopup = (e) => {
			if (e.target !== e.currentTarget) return;
		    popup.classList.remove("active")
		}
		document.querySelector('.popup__close').addEventListener('click', closePopup)	
		popup.addEventListener('click', closePopup)	
		
	} else {
		// when selected country hasn't allready added to visisted
		if (e.target !== e.currentTarget) return;
		visitedCountries.push({
			name: e.target.dataset.name,
			id: e.target.dataset.id
		})


		let countryID = e.target.dataset.id

		// add color on map
		for (let i = 0; i < paths.length; i++) {
			if (paths[i].dataset.id === countryID) {
				changeColor(i, colorVisited);
			}
		}

		// get ul of data-continent of selected country
		const ul = document.querySelector(`ul.visited--${e.target.dataset.continent}`)

		// add the country to the relevant table
		const addCountryToTable = (country) => {
			const countryLi = document.createElement('li');
			ul.appendChild(countryLi);
			countryLi.innerHTML = country.flag + country.name + `<button class="remove" aria-label="remove country"><span class="icon icon-bin" aria-hidden="true"></span></button>`;
			countryLi.classList.add("visited__country", "flex");
			countryLi.dataset.id = country.id
			countryLi.dataset.name = country.name
			countryLi.querySelector('button.remove').addEventListener('click', removeCountry);
		}

		// dynamic sort of visited country
		const dynamicSort = (property) => {
			let sortOrder = 1;
			if (property[0] === "-") {
				sortOrder = -1;
				property = property.substr(1);
			}

			return (a, b) => {
				if (sortOrder == -1) {
					return b[property].localeCompare(a[property]);
				} else {
					return a[property].localeCompare(b[property]);
				}
			}
		}

		const visitedDetails = {
			name: e.target.dataset.name,
			id: e.target.dataset.id,
			flag: `<img src="flag\/${e.target.dataset.id.toLowerCase()}.png" class="country-flag" alt="country-flag">`
		}

		//check the continent of selected country and push to relevant array of visited countries by continent
		switch (e.target.dataset.continent) {
			case af:
				visitedAfrica.push(visitedDetails);
				visitedAfrica.sort(dynamicSort("name"));
				ul.textContent = "";
				visitedAfrica.forEach(country => addCountryToTable(country));
				break;
			case amN:
				visitedAmericaN.push(visitedDetails);
				visitedAmericaN.sort(dynamicSort("name"));
				ul.textContent = "";
				visitedAmericaN.forEach(country => addCountryToTable(country));
				break;
			case amS:
				visitedAmericaS.push(visitedDetails);
				visitedAmericaS.sort(dynamicSort("name"));
				ul.textContent = "";
				visitedAmericaS.forEach(country => addCountryToTable(country));
				break;
			case asi:
				visitedAsia.push(visitedDetails);
				visitedAsia.sort(dynamicSort("name"));
				ul.textContent = "";
				visitedAsia.forEach(country => addCountryToTable(country));
				break;
			case eu:
				visitedEurope.push(visitedDetails);
				visitedEurope.sort(dynamicSort("name"));
				ul.textContent = "";
				visitedEurope.forEach(country => addCountryToTable(country));
				break;
			case oa:
				visitedOceaniaAntarctica.push(visitedDetails);
				visitedOceaniaAntarctica.sort(dynamicSort("name"));
				ul.textContent = "";
				visitedOceaniaAntarctica.forEach(country => addCountryToTable(country));
				break;
		}
	}
	showNumberOfVisisted()
	//clear input value and search result
	searchCountry.value = "";
	for (li of allCountriesLi) {
		li.style.display = "none"
	}
}
// END- add selected country to visited list 


// show the current number of visited countries
const showNumberOfVisisted = () => {
	africaCounter.textContent = `(${visitedAfrica.length})`;
	americaNCounter.textContent = `(${visitedAmericaN.length})`;
	americaSCounter.textContent = `(${visitedAmericaS.length})`;
	asiaCounter.textContent = `(${visitedAsia.length})`;
	europeCounter.textContent = `(${visitedEurope.length})`;
	oceaniaCounter.textContent = `(${visitedOceaniaAntarctica.length})`;
	numberCountries.textContent = visitedCountries.length
	percentCountries.textContent = (visitedCountries.length * 100 / allCountriesList.length).toFixed(2) + "%";

}

// remove country form visisted list
const removeCountry = (e) => {
	let txt = e.target.parentNode.dataset.name
	visitedCountries.splice(visitedCountries.findIndex(country => country.name == txt), 1); // get index of removing country  from visited list and remove country from the list

	// remove color on map
	for (let i = 0; i < paths.length; i++) {
		if (paths[i].dataset.name === txt) {
			changeColor(i, colorUnvisited);
		}
	}

	// render visited lists 
	visitedAfrica.forEach((country, index) => {
		country.name === txt ? visitedAfrica.splice(index, 1) : false;
	});
	visitedAmericaN.forEach((country, index) => {
		country.name === txt ? visitedAmericaN.splice(index, 1) : false;
	});
	visitedAmericaS.forEach((country, index) => {
		country.name === txt ? visitedAmericaS.splice(index, 1) : false;
	});
	visitedAsia.forEach((country, index) => {
		country.name === txt ? visitedAsia.splice(index, 1) : false;
	});
	visitedEurope.forEach((country, index) => {
		country.name === txt ? visitedEurope.splice(index, 1) : false;
	});
	visitedOceaniaAntarctica.forEach((country, index) => {
		country.name === txt ? visitedOceaniaAntarctica.splice(index, 1) : false;
	});

	e.target.parentNode.remove(); // remove form table list
	showNumberOfVisisted() // update the number of visited countries in HTML
}

function changeColor(index, color) {
	if (index >= 0) {
		paths[index].style.fill = color
	} else {
		this.style.fill = color;
	}
}

allCountriesLi.forEach(li => li.addEventListener('click', addToVisited));
searchCountry.addEventListener('input', searchTask);

//stop reloading page with 'Enter Key'//
searchCountry.addEventListener('keypress', function (e) {
	if ((e.keyCode || e.which) == 13) {
		e.preventDefault();
		return false;
	}
});


paths.forEach(path => path.addEventListener("click", addToVisited));


//TOOLTIP - show country name on map - only on min-widht 960px

const tooltip = document.querySelector(".tooltip");
const tooltipTxt = document.querySelector(".tooltip__text");
const showCountryName = (e) => {
	if (window.innerWidth > 960) {
		tooltip.classList.remove('hidden')
		tooltipTxt.textContent = e.target.dataset.name;

		const windowWidth = window.innerWidth;
		const mapWidth = document.querySelector(".container--svg").clientWidth
		let x = e.clientX;
		let y = e.offsetY;

		tooltip.style.top = `${y+ 10}px`;
		tooltip.style.left = `${x+ 20 -((windowWidth - mapWidth)/2)}px`;
	}
}

//show tooltip when mouse is on country path 

paths.forEach(path => path.addEventListener("mousemove", showCountryName))


//hide tooltip when mouse isn't on country path
svg.addEventListener("mouseover", function () {
	tooltip.classList.add('hidden')
})