// --declaration of global variables START

const searchCountry = document.querySelector('.search-country__input')
const ulAllCountries = document.querySelector('.search-country__list')
const numberCountries = document.querySelector('.counter__number')
const percentCountries = document.querySelector('.counter__percent')
const africaCounter = document.querySelector('.counter--africa')
const americaNCounter = document.querySelector('.counter--americaN')
const americaSCounter = document.querySelector('.counter--americaS')
const asiaCounter = document.querySelector('.counter--asia')
const europeCounter = document.querySelector('.counter--europe')
const oceaniaCounter = document.querySelector('.counter--oceania')


const svg = document.getElementById('map');
const paths = svg.querySelectorAll('path')


let colorVisited = "#68f442"
let colorUnvisited = "#f2f2f2"


// declare continents code
const af = "africa";
const amN = "americaN";
const amS = "americaS";
const asi = "asia";
const eu = "europe";
const oa = "oceaniaAntarctica"

// declare visited country arrays 
const visitedCountries = [];
const visitedAfrica = [];
const visitedAmericaN = [];
const visitedAmericaS = [];
const visitedAsia = [];
const visitedEurope = [];
const visitedOceaniaAntarctica = [];

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
const allCountriesList = [{
		name: "Afghanistan",
		code: "AF",
		continent: asi
	},
	{
		name: "Albania",
		code: "AL",
		continent: eu
	},
	{
		name: "Algeria",
		code: "DZ",
		continent: af
	},
	{
		name: "American Samoa",
		code: "AS",
		continent: af
	},
	{
		name: "Andorra",
		code: "AD",
		continent: eu
	},
	{
		name: "Angola",
		code: "AO",
		continent: af,
		continent: af
	},
	{
		name: "Anguilla",
		code: "AI",
		continent: amN
	},
	{
		name: "Antarctica",
		code: "AQ",
		continent: oa
	},
	{
		name: "Antigua and Barbuda",
		code: "AG",
		continent: amN
	},
	{
		name: "Argentina",
		code: "AR",
		continent: amS
	},
	{
		name: "Armenia",
		code: "AM",
		continent: asi
	},
	{
		name: "Aruba",
		code: "AW",
		continent: amN
	},
	{
		name: "Australia",
		code: "AU",
		continent: oa
	},
	{
		name: "Austria",
		code: "AT",
		continent: eu
	},
	{
		name: "Azerbaijan",
		code: "AZ",
		continent: asi
	},
	{
		name: "Bahamas",
		code: "BS",
		continent: amN
	},
	{
		name: "Bahrain",
		code: "BH",
		continent: asi
	},
	{
		name: "Bangladesh",
		code: "BD",
		continent: asi
	},
	{
		name: "Barbados",
		code: "BB",
		continent: amN
	},
	{
		name: "Belarus",
		code: "BY",
		continent: eu
	},
	{
		name: "Belgium",
		code: "BE",
		continent: eu
	},
	{
		name: "Belize",
		code: "BZ",
		continent: amN
	},
	{
		name: "Benin",
		code: "BJ",
		continent: af
	},
	{
		name: "Bermuda",
		code: "BM",
		continent: amN
	},
	{
		name: "Bhutan",
		code: "BT",
		continent: asi
	},
	{
		name: "Bolivia",
		code: "BO",
		continent: amS
	},
	{
		name: "Bosnia and Herzegovina",
		code: "BA",
		continent: eu
	},
	{
		name: "Botswana",
		code: "BW",
		continent: af
	},
	{
		name: "Bouvet Island",
		code: "BV",
		continent: oa
	},
	{
		name: "Brazil",
		code: "BR",
		continent: amS
	},
	{
		name: "British Indian Ocean Territory",
		code: "IO",
		continent: asi
	},
	{
		name: "Brunei Darussalam",
		code: "BN",
		continent: asi
	},
	{
		name: "Bulgaria",
		code: "BG",
		continent: eu
	},
	{
		name: "Burkina Faso",
		code: "BF",
		continent: af
	},
	{
		name: "Burundi",
		code: "BI",
		continent: af
	},
	{
		name: "Cambodia",
		code: "KH",
		continent: asi
	},
	{
		name: "Cameroon",
		code: "CM",
		continent: af
	},
	{
		name: "Canada",
		code: "CA",
		continent: amN
	},
	{
		name: "Cape Verde",
		code: "CV",
		continent: af
	},
	{
		name: "Cayman Islands",
		code: "KY",
		continent: amN
	},
	{
		name: "Central African Republic",
		code: "CF",
		continent: af
	},
	{
		name: "Chad",
		code: "TD",
		continent: af
	},
	{
		name: "Chile",
		code: "CL",
		continent: amS
	},
	{
		name: "China",
		code: "CN",
		continent: asi
	},
	{
		name: "Christmas Island",
		code: "CX",
		continent: asi
	},
	{
		name: "Colombia",
		code: "CO",
		continent: amS
	},
	{
		name: "Comoros",
		code: "KM",
		continent: af
	},
	{
		name: "Congo",
		code: "CG",
		continent: af
	},
	{
		name: "Congo, The Democratic Republic of the",
		code: "CD",
		continent: af
	},
	{
		name: "Cook Islands",
		code: "CK",
		continent: oa
	},
	{
		name: "Costa Rica",
		code: "CR",
		continent: amN
	},
	{
		name: "Cote D'Ivoire",
		code: "CI",
		continent: af
	},
	{
		name: "Croatia",
		code: "HR",
		continent: eu
	},
	{
		name: "Cuba",
		code: "CU",
		continent: amN
	},
	{
		name: "Cyprus",
		code: "CY",
		continent: eu
	},
	{
		name: "Czech Republic",
		code: "CZ",
		continent: eu
	},
	{
		name: "Denmark",
		code: "DK",
		continent: eu
	},
	{
		name: "Djibouti",
		code: "DJ",
		continent: af
	},
	{
		name: "Dominica",
		code: "DM",
		continent: amN
	},
	{
		name: "Dominican Republic",
		code: "DO",
		continent: amN
	},
	{
		name: "Ecuador",
		code: "EC",
		continent: amS
	},
	{
		name: "Egypt",
		code: "EG",
		continent: af
	},
	{
		name: "El Salvador",
		code: "SV",
		continent: amN
	},
	{
		name: "Equatorial Guinea",
		code: "GQ",
		continent: af
	},
	{
		name: "Eritrea",
		code: "ER",
		continent: af
	},
	{
		name: "Estonia",
		code: "EE",
		continent: eu
	},
	{
		name: "Ethiopia",
		code: "ET",
		continent: af
	},
	{
		name: "Falkland Islands (Malvinas)",
		code: "FK",
		continent: amS
	},
	{
		name: "Faroe Islands",
		code: "FO",
		continent: eu
	},
	{
		name: "Fiji",
		code: "FJ",
		continent: oa
	},
	{
		name: "Finland",
		code: "FI",
		continent: eu
	},
	{
		name: "France",
		code: "FR",
		continent: eu
	},
	{
		name: "French Guiana",
		code: "GF",
		continent: amS
	},
	{
		name: "French Polynesia",
		code: "PF",
		continent: oa
	},
	{
		name: "French Southern Territories",
		code: "TF",
		continent: oa
	},
	{
		name: "Gabon",
		code: "GA",
		continent: af
	},
	{
		name: "Gambia",
		code: "GM",
		continent: af
	},
	{
		name: "Georgia",
		code: "GE",
		continent: asi
	},
	{
		name: "Germany",
		code: "DE",
		continent: eu
	},
	{
		name: "Ghana",
		code: "GH",
		continent: af
	},
	{
		name: "Gibraltar",
		code: "GI",
		continent: eu
	},
	{
		name: "Greece",
		code: "GR",
		continent: eu
	},
	{
		name: "Greenland",
		code: "GL",
		continent: amN
	},
	{
		name: "Grenada",
		code: "GD",
		continent: amN
	},
	{
		name: "Guadeloupe",
		code: "GP",
		continent: amN
	},
	{
		name: "Guam",
		code: "GU",
		continent: oa
	},
	{
		name: "Guatemala",
		code: "GT",
		continent: amN
	},
	{
		name: "Guernsey",
		code: "GG",
		continent: eu
	},
	{
		name: "Guinea",
		code: "GN",
		continent: af
	},
	{
		name: "Guinea-Bissau",
		code: "GW",
		continent: af
	},
	{
		name: "Guyana",
		code: "GY",
		continent: amS
	},
	{
		name: "Haiti",
		code: "HT",
		continent: amN
	},
	{
		name: "Heard Island and Mcdonald Islands",
		code: "HM",
		continent: oa
	},
	{
		name: "Holy See (Vatican City State)",
		code: "VA",
		continent: eu
	},
	{
		name: "Honduras",
		code: "HN",
		continent: amN
	},
	{
		name: "Hong Kong",
		code: "HK",
		continent: asi
	},
	{
		name: "Hungary",
		code: "HU",
		continent: eu
	},
	{
		name: "Iceland",
		code: "IS",
		continent: eu
	},
	{
		name: "India",
		code: "IN",
		continent: asi
	},
	{
		name: "Indonesia",
		code: "ID",
		continent: asi
	},
	{
		name: "Iran, Islamic Republic Of",
		code: "IR",
		continent: asi
	},
	{
		name: "Iraq",
		code: "IQ",
		continent: asi
	},
	{
		name: "Ireland",
		code: "IE",
		continent: eu
	},
	{
		name: "Isle of Man",
		code: "IM",
		continent: eu
	},
	{
		name: "Israel",
		code: "IL",
		continent: asi
	},
	{
		name: "Italy",
		code: "IT",
		continent: eu
	},
	{
		name: "Jamaica",
		code: "JM",
		continent: amN
	},
	{
		name: "Japan",
		code: "JP",
		continent: asi
	},
	{
		name: "Jersey",
		code: "JE",
		continent: eu
	},
	{
		name: "Jordan",
		code: "JO",
		continent: asi
	},
	{
		name: "Kazakhstan",
		code: "KZ",
		continent: asi
	},
	{
		name: "Kenya",
		code: "KE",
		continent: af
	},
	{
		name: "Kiribati",
		code: "KI",
		continent: oa
	},
	{
		name: "Korea, Democratic People'S Republic of",
		code: "KP",
		continent: asi
	},
	{
		name: "Korea, Republic of",
		code: "KR",
		continent: asi
	},
	{
		name: "Kuwait",
		code: "KW",
		continent: asi
	},
	{
		name: "Kyrgyzstan",
		code: "KG",
		continent: asi
	},
	{
		name: "Lao People'S Democratic Republic",
		code: "LA",
		continent: asi
	},
	{
		name: "Latvia",
		code: "LV",
		continent: eu
	},
	{
		name: "Lebanon",
		code: "LB",
		continent: asi
	},
	{
		name: "Lesotho",
		code: "LS",
		continent: af
	},
	{
		name: "Liberia",
		code: "LR",
		continent: af
	},
	{
		name: "Libyan Arab Jamahiriya",
		code: "LY",
		continent: af
	},
	{
		name: "Liechtenstein",
		code: "LI",
		continent: eu
	},
	{
		name: "Lithuania",
		code: "LT",
		continent: eu
	},
	{
		name: "Luxembourg",
		code: "LU",
		continent: eu
	},
	{
		name: "Macao",
		code: "MO",
		continent: asi
	},
	{
		name: "Macedonia, The Former Yugoslav Republic of",
		code: "MK",
		continent: eu
	},
	{
		name: "Madagascar",
		code: "MG",
		continent: af
	},
	{
		name: "Malawi",
		code: "MW",
		continent: af
	},
	{
		name: "Malaysia",
		code: "MY",
		continent: asi
	},
	{
		name: "Maldives",
		code: "MV",
		continent: asi
	},
	{
		name: "Mali",
		code: "ML",
		continent: af
	},
	{
		name: "Malta",
		code: "MT",
		continent: eu
	},
	{
		name: "Marshall Islands",
		code: "MH",
		continent: oa
	},
	{
		name: "Martinique",
		code: "MQ",
		continent: amN
	},
	{
		name: "Mauritania",
		code: "MR",
		continent: af
	},
	{
		name: "Mauritius",
		code: "MU",
		continent: af
	},
	{
		name: "Mayotte",
		code: "YT",
		continent: af
	},
	{
		name: "Mexico",
		code: "MX",
		continent: amN
	},
	{
		name: "Micronesia, Federated States of",
		code: "FM",
		continent: oa
	},
	{
		name: "Moldova, Republic of",
		code: "MD",
		continent: eu
	},
	{
		name: "Monaco",
		code: "MC",
		continent: eu
	},
	{
		name: "Mongolia",
		code: "MN",
		continent: asi
	},
	{
		name: "Montenegro",
		code: "ME",
		continent: eu
	},
	{
		name: "Montserrat",
		code: "MS",
		continent: amN
	},
	{
		name: "Morocco",
		code: "MA",
		continent: af
	},
	{
		name: "Mozambique",
		code: "MZ",
		continent: af
	},
	{
		name: "Myanmar",
		code: "MM",
		continent: asi
	},
	{
		name: "Namibia",
		code: "NA",
		continent: af
	},
	{
		name: "Nauru",
		code: "NR",
		continent: oa
	},
	{
		name: "Nepal",
		code: "NP",
		continent: asi
	},
	{
		name: "Netherlands",
		code: "NL",
		continent: eu
	},
	{
		name: "Netherlands Antilles",
		code: "AN",
		continent: amN
	},
	{
		name: "New Caledonia",
		code: "NC",
		continent: oa
	},
	{
		name: "New Zealand",
		code: "NZ",
		continent: oa
	},
	{
		name: "Nicaragua",
		code: "NI",
		continent: amN
	},
	{
		name: "Niger",
		code: "NE",
		continent: af
	},
	{
		name: "Nigeria",
		code: "NG",
		continent: af
	},
	{
		name: "Niue",
		code: "NU",
		continent: oa
	},
	{
		name: "Norfolk Island",
		code: "NF",
		continent: oa
	},
	{
		name: "Northern Mariana Islands",
		code: "MP",
		continent: oa
	},
	{
		name: "Norway",
		code: "NO",
		continent: eu
	},
	{
		name: "Oman",
		code: "OM",
		continent: asi
	},
	{
		name: "Pakistan",
		code: "PK",
		continent: asi
	},
	{
		name: "Palau",
		code: "PW",
		continent: oa
	},
	{
		name: "Palestinian Territory, Occupied",
		code: "PS",
		continent: asi
	},
	{
		name: "Panama",
		code: "PA",
		continent: amN
	},
	{
		name: "Papua New Guinea",
		code: "PG",
		continent: oa
	},
	{
		name: "Paraguay",
		code: "PY",
		continent: amS
	},
	{
		name: "Peru",
		code: "PE",
		continent: amS
	},
	{
		name: "Philippines",
		code: "PH",
		continent: asi
	},
	{
		name: "Pitcairn",
		code: "PN",
		continent: oa
	},
	{
		name: "Poland",
		code: "PL",
		continent: eu
	},
	{
		name: "Portugal",
		code: "PT",
		continent: eu
	},
	{
		name: "Puerto Rico",
		code: "PR",
		continent: amN
	},
	{
		name: "Qatar",
		code: "QA",
		continent: asi
	},
	{
		name: "Reunion",
		code: "RE",
		continent: af
	},
	{
		name: "Romania",
		code: "RO",
		continent: eu
	},
	{
		name: "Russian Federation",
		code: "RU",
		continent: asi
	},
	{
		name: "Rwanda",
		code: "RW",
		continent: af
	},
	{
		name: "Saint Helena",
		code: "SH",
		continent: af
	},
	{
		name: "Saint Kitts and Nevis",
		code: "KN",
		continent: amN
	},
	{
		name: "Saint Lucia",
		code: "LC",
		continent: amN
	},
	{
		name: "Saint Pierre and Miquelon",
		code: "PM",
		continent: amN
	},
	{
		name: "Saint Vincent and the Grenadines",
		code: "VC",
		continent: amN
	},
	{
		name: "Samoa",
		code: "WS",
		continent: oa
	},
	{
		name: "San Marino",
		code: "SM",
		continent: eu
	},
	{
		name: "Sao Tome and Principe",
		code: "ST",
		continent: af
	},
	{
		name: "Saudi Arabia",
		code: "SA",
		continent: asi
	},
	{
		name: "Senegal",
		code: "SN",
		continent: af
	},
	{
		name: "Serbia",
		code: "RS",
		continent: eu
	},
	{
		name: "Seychelles",
		code: "SC",
		continent: af
	},
	{
		name: "Sierra Leone",
		code: "SL",
		continent: af
	},
	{
		name: "Singapore",
		code: "SG",
		continent: asi
	},
	{
		name: "Slovakia",
		code: "SK",
		continent: eu
	},
	{
		name: "Slovenia",
		code: "SI",
		continent: eu
	},
	{
		name: "Solomon Islands",
		code: "SB",
		continent: oa
	},
	{
		name: "Somalia",
		code: "SO",
		continent: af
	},
	{
		name: "South Africa",
		code: "ZA",
		continent: af
	},
	{
		name: "South Georgia and the South Sandwich Islands",
		code: "GS",
		continent: oa
	},
	{
		name: "Spain",
		code: "ES",
		continent: eu
	},
	{
		name: "Sri Lanka",
		code: "LK",
		continent: asi
	},
	{
		name: "Sudan",
		code: "SD",
		continent: af
	},
	{
		name: "Suriname",
		code: "SR",
		continent: amS
	},
	{
		name: "Svalbard and Jan Mayen",
		code: "SJ",
		continent: eu
	},
	{
		name: "Swaziland",
		code: "SZ",
		continent: af
	},
	{
		name: "Sweden",
		code: "SE",
		continent: eu
	},
	{
		name: "Switzerland",
		code: "CH",
		continent: eu
	},
	{
		name: "Syrian Arab Republic",
		code: "SY",
		continent: asi
	},
	{
		name: "Taiwan, Province of China",
		code: "TW",
		continent: asi
	},
	{
		name: "Tajikistan",
		code: "TJ",
		continent: asi
	},
	{
		name: "Tanzania, United Republic of",
		code: "TZ",
		continent: af
	},
	{
		name: "Thailand",
		code: "TH",
		continent: asi
	},
	{
		name: "Timor-Leste",
		code: "TL",
		continent: asi
	},
	{
		name: "Togo",
		code: "TG",
		continent: af
	},
	{
		name: "Tokelau",
		code: "TK",
		continent: oa
	},
	{
		name: "Tonga",
		code: "TO",
		continent: oa
	},
	{
		name: "Trinidad and Tobago",
		code: "TT",
		continent: amN
	},
	{
		name: "Tunisia",
		code: "TN",
		continent: af
	},
	{
		name: "Turkey",
		code: "TR",
		continent: asi
	},
	{
		name: "Turkmenistan",
		code: "TM",
		continent: asi
	},
	{
		name: "Turks and Caicos Islands",
		code: "TC",
		continent: amN
	},
	{
		name: "Tuvalu",
		code: "TV",
		continent: oa
	},
	{
		name: "Uganda",
		code: "UG",
		continent: af
	},
	{
		name: "Ukraine",
		code: "UA",
		continent: eu
	},
	{
		name: "United Arab Emirates",
		code: "AE",
		continent: asi
	},
	{
		name: "United Kingdom",
		code: "GB",
		continent: eu
	},
	{
		name: "United States",
		code: "US",
		continent: amN
	},
	{
		name: "United States Minor Outlying Islands",
		code: "UM",
		continent: oa
	},
	{
		name: "Uruguay",
		code: "UY",
		continent: amS
	},
	{
		name: "Uzbekistan",
		code: "UZ",
		continent: asi
	},
	{
		name: "Vanuatu",
		code: "VU",
		continent: oa
	},
	{
		name: "Venezuela",
		code: "VE",
		continent: amS
	},
	{
		name: "Viet Nam",
		code: "VN",
		continent: asi
	},
	{
		name: "Virgin Islands, British",
		code: "VG",
		continent: amN
	},
	{
		name: "Virgin Islands, U.S.",
		code: "VI",
		continent: amN
	},
	{
		name: "Wallis and Futuna",
		code: "WF",
		continent: oa
	},
	{
		name: "Western Sahara",
		code: "EH",
		continent: af
	},
	{
		name: "Yemen",
		code: "YE",
		continent: asi
	},
	{
		name: "Zambia",
		code: "ZM",
		continent: af
	},
	{
		name: "Zimbabwe",
		code: "ZW",
		continent: af
	}
]

// Add all countries to HTML 
allCountriesList.forEach(country => {
	const countryLi = document.createElement('li');
	ulAllCountries.appendChild(countryLi);
	countryLi.classList.add("list__country", "flex")
	countryLi.dataset.id = country.code
	countryLi.dataset.name = country.name
	countryLi.dataset.continent = country.continent
	countryLi.innerHTML = country.name + `<img src="flag\/${countryLi.dataset.id.toLowerCase()}.png" class="country-flag" alt="country-flag">`
})

//Add data-continent to country on map
allCountriesList.forEach(item1 => {
	paths.forEach(item2 => {
		if (item1.code === item2.id) item2.dataset.continent = item1.continent
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
	// check if selected country has already added
	if (
		visitedCountries.some(country => country.name === e.target.dataset.name)) {
		alert(`${e.target.dataset.name} is already added to visited`)
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
			countryLi.innerHTML = country.flag + country.name + `<button class="remove" aria-label="remove country"><span class="fas fa-trash-alt" aria-hidden="true"></span></button>`;
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