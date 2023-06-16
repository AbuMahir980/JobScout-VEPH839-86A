const menuToggle = document.querySelector(".menuToggle");
const nav = document.querySelector("nav");

menuToggle.onclick = function () {
  nav.classList.toggle("open");
};

let data = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Django",
  "Frontend",
  "Backend",
  "SQL",
  "Data Base",
  "Coding",
  "Python",
  "Devops",
  "Sofware Engineering",
  "Computer Science",
  "App Devlopment",
  "Sofware Development",
  "JavaScript",
  "JavaScript",
  "JavaScript",
  "JavaScript",
  "Amazon",
  "Jumia",
  "Konga",
  "Glassdoor",
];

const searchInput = document.getElementById("search-bar");
const resultsList = document.getElementById("autocomplete-results");

// Function to filter search results
const filterResults = (query) => {
  return data.filter((item) =>
    item.toLowerCase().startsWith(query.toLowerCase())
  );
};

// Function to display autocomplete results
const showResults = (results) => {
  resultsList.innerHTML = "";
  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result;
    resultsList.appendChild(li);
    li.addEventListener("click", () => {
      searchInput.value = result;
      resultsList.innerHTML = "";
    });
  });
};

// Function to handle search input
const handleInput = () => {
  const query = searchInput.value;
  if (query) {
    const results = filterResults(query);
    showResults(results);
  } else {
    resultsList.innerHTML = "";
  }
};

// Event listener for search input
searchInput.addEventListener("input", handleInput);

// Event listener for document click (to close results list)
document.addEventListener("click", (event) => {
  if (!event.target.closest(".autocomplete")) {
    resultsList.innerHTML = "";
  }
});

// location search

let locationData = [
  "Afghanistan",
 "Åland Islands",
   "Albania", 
   "Algeria",
   "American Samoa",
   "AndorrA",
   "Angola",
   "Anguilla",
   "Antarctica",
   "Antigua and Barbuda",
   "Argentina",
   "Armenia", 
   "Aruba",
   "Australia",
   "Austria", 
   "Azerbaijan",
   "Bahamas",
   "Bahrain",
   "Bangladesh", 
   "Barbados", 
   "Belarus",
   "Belgium", 
   "Belize", 
   "Benin", 
   "Bermuda",
   "Bhutan",
   "Bolivia",
   "Bosnia and Herzegovina",
   "Botswana",
   "Bouvet Island",
   "Brazil", 
   "British Indian Ocean Territory", 
   "Brunei Darussalam", 
   "Bulgaria",
   "Burkina Faso", 
   "Burundi", 
   "Cambodia",
   "Cameroon",
   "Canada", 
   "Cape Verde",
   "Cayman Islands", 
   "Central African Republic", 
   "Chad", 
   "Chile", 
   "China", 
   "Christmas Island",
   "Cocos (Keeling) Islands",
   "Colombia", 
   "Comoros", 
   "Congo", 
   "Congo, The Democratic Republic of the",
   "Cook Islands", 
   "Costa Rica", 
   "Cote D'Ivoire", 
   "Croatia", 
   "Cuba",
   "Cyprus",
   "Czech Republic",
   "Denmark", 
   "Djibouti", 
   "Dominica", 
   "Dominican Republic",
   "Ecuador", 
   "Egypt", 
   "El Salvador",
   "Equatorial Guinea", 
   "Eritrea", 
   "Estonia", 
   "Ethiopia",,
   "Falkland Islands (Malvinas)", 
   "Faroe Islands", 
   "Fiji", 
   "Finland", 
   "France", 
   "French Guiana", 
   "French Polynesia", 
   "French Southern Territories", 
   "Gabon", 
   "Gambia", 
   "Georgia", 
   "Germany", 
   "Ghana", 
   "Gibraltar", 
   "Greece", 
   "Greenland", 
   "Grenada", 
   "Guadeloupe", 
   "Guam", 
   "Guatemala", 
   "Guernsey", 
   "Guinea", 
   "Guinea-Bissau", 
   "Guyana", 
   "Haiti", 
   "Heard Island and Mcdonald Islands", 
   "Holy See (Vatican City State)", 
   "Honduras", 
   "Hong Kong", 
   "Hungary", 
   "Iceland", 
   "India", 
   "Indonesia", 
   "Iran, Islamic Republic Of", 
   "Iraq", 
   "Ireland", 
   "Isle of Man",
   "Israel",
   "Italy", 
   "Jamaica", 
   "Japan", 
   "Jersey", 
   "Jordan",
   "Kazakhstan",
   "Kenya", 
   "Kiribati", 
   "Korea, Democratic People'S Republic of", 
   "Korea, Republic of", 
   "Kuwait", 
   "Kyrgyzstan", 
   "Lao People'S Democratic Republic", 
   "Latvia", 
   "Lebanon", 
   "Lesotho", 
   "Liberia", 
   "Libyan Arab Jamahiriya", 
   "Liechtenstein", 
   "Lithuania", 
   "Luxembourg", 
   "Macao", 
   "Macedonia, The Former Yugoslav Republic of", 
   "Madagascar",
   "Malawi",  
   "Malaysia", 
   "Maldives", 
   "Mali", 
   "Malta", 
   "Marshall Islands", 
   "Martinique", 
   "Mauritania", 
   "Mauritius", 
   "Mayotte", 
   "Mexico", 
   "Micronesia, Federated States of", 
   "Moldova, Republic of", 
   "Monaco", 
   "Mongolia", 
   "Montserrat", 
   "Morocco", 
   "Mozambique", 
   "Myanmar", 
   "Namibia", 
   "Nauru", 
   "Nepal", 
   "Netherlands", 
   "Netherlands Antilles", 
   "New Caledonia", 
   "New Zealand", 
   "Nicaragua", 
   "Niger", 
   "Nigeria", 
   "Niue", 
   "Norfolk Island", 
   "Northern Mariana Islands", 
   "Norway", 
   "Oman", 
   "Pakistan", 
   "Palau", 
   "Palestinian Territory, Occupied", 
   "Panama", 
   "Papua New Guinea", 
   "Paraguay", 
   "Peru", 
   "Philippines", 
   "Pitcairn", 
   "Poland", 
   "Portugal", 
   "Puerto Rico", 
   "Qatar", 
   "Reunion",
   "Romania", 
   "Russian Federation", 
   "RWANDA", 
   "Saint Helena", 
   "Saint Kitts and Nevis", 
   "Saint Lucia", 
   "Saint Pierre and Miquelon",
   "Saint Vincent and the Grenadines",
   "Samoa", 
   "San Marino", 
   "Sao Tome and Principe", 
   "Saudi Arabia", 
   "Senegal", 
   "Serbia and Montenegro", 
   "Seychelles", 
   "Sierra Leone", 
   "Singapore", 
   "Slovakia", 
   "Slovenia", 
   "Solomon Islands",
   "Somalia",
   "South Africa",
   "South Georgia and the South Sandwich Islands",
   "Spain",
   "Sri Lanka",
   "Sudan",
   "Suriname",
   "Svalbard and Jan Mayen",
   "Swaziland",
   "Sweden",
   "Switzerland",
   "Syrian Arab Republic", 
   "Taiwan, Province of China", 
   "Tajikistan", 
   "Tanzania, United Republic of", 
   "Thailand", 
   "Timor-Leste", 
   "Togo", 
   "Tokelau", 
   "Tonga", 
   "Trinidad and Tobago", 
   "Tunisia", 
   "Turkey", 
   "Turkmenistan",
   "Turks and Caicos Islands", 
   "Tuvalu", 
   "Uganda", 
   "Ukraine", 
   "United Arab Emirates", 
   "United Kingdom", 
   "United States", 
   "United States Minor Outlying Islands", 
   "Uruguay", 
   "Uzbekistan", 
   "Vanuatu", 
   "Venezuela", 
   "Viet Nam", 
   "Virgin Islands, British",
   "Virgin Islands, U.S.", 
   "Wallis and Futuna", 
   "Western Sahara", 
   "Yemen", 
   "Zambia", 
   "Zimbabwe",  
];

const searchInputLocation = document.getElementById("myInput");
const resultsListLoc = document.getElementById("autocomplete-resultsLocation");

// Function to filter search results
const filterResultsLocation = (queryLoc) => {
  return locationData.filter((item) =>
    item.toLowerCase().startsWith(queryLoc.toLowerCase())
  );
};

// Function to display autocomplete results
const showResultsLoc = (resultsLoc) => {
  resultsListLoc.innerHTML = "";
  resultsLoc.forEach((resultL) => {
    const li = document.createElement("li");
    li.textContent = resultL;
    resultsListLoc.appendChild(li);
    li.addEventListener("click", () => {
      searchInputLocation.value = resultL;
      resultsListLoc.innerHTML = "";
    });
  });
};

// Function to handle search input
const handleInputLoc = () => {
  const queryLoc = searchInputLocation.value;
  if (queryLoc) {
    const resultsLoc = filterResultsLocation(queryLoc);
    showResultsLoc(resultsLoc);
  } else {
    resultsListLoc.innerHTML = "";
  }
};

// Event listener for search input
searchInputLocation.addEventListener("input", handleInputLoc);

// Event listener for document click (to close results list)
document.addEventListener("click", (event) => {
  if (!event.target.closest(".autocomplete")) {
    resultsListLoc.innerHTML = "";
  }
});
