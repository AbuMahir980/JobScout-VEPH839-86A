
function toggleBorder(image) {
    // Remove the "clicked" class from all image containers
    var containers = document.querySelectorAll('.image-container');
    containers.forEach(function(container) {
      container.classList.remove('clicked');
    });
  
    // Add the "clicked" class to the image container of the clicked image
    var container = image.parentNode;
    container.classList.add('clicked');
  }
  


//   Location Input 
// var locationInput = document.getElementById('location-input');

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(showPosition);
// } else {
//   console.log("Geolocation is not supported by this browser.");
// }

// function showPosition(position) {
//   var latitude = position.coords.latitude;
//   var longitude = position.coords.longitude;
//   var locationString = latitude + longitude;
//   locationInput.value = locationString;
// }




// let data = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "PHP",
//   "Django",
//   "Frontend",
//   "Backend",
//   "SQL",
//   "Data Base",
//   "Coding",
//   "Python",
//   "Devops",
//   "Sofware Engineering",
//   "Computer Science",
//   "App Devlopment",
//   "Sofware Development",
//   "JavaScript",
//   "JavaScript",
//   "JavaScript",
//   "JavaScript",
//   "Amazon",
//   "Jumia",
//   "Konga",
//   "Glassdoor",
// ];

// const searchInput = document.getElementById("search-bar");
// const resultsList = document.getElementById("autocomplete-results");

// // Function to filter search results
// const filterResults = (query) => {
//   return data.filter((item) =>
//     item.toLowerCase().startsWith(query.toLowerCase())
//   );
// };

// // Function to display autocomplete results
// const showResults = (results) => {
//   resultsList.innerHTML = "";
//   results.forEach((result) => {
//     const li = document.createElement("li");
//     li.textContent = result;
//     resultsList.appendChild(li);
//     li.addEventListener("click", () => {
//       searchInput.value = result;
//       resultsList.innerHTML = "";
//     });
//   });
// };

// // Function to handle search input
// const handleInput = () => {
//   const query = searchInput.value;
//   if (query) {
//     const results = filterResults(query);
//     showResults(results);
//   } else {
//     resultsList.innerHTML = "";
//   }
// };

// // Event listener for search input
// // recentJob.addEventListener()
// searchInput.addEventListener("input", handleInput);

// // Event listener for document click (to close results list)
// document.addEventListener("click", (event) => {
//   if (!event.target.closest(".autocomplete")) {
//     resultsList.innerHTML = "";
//   }
// });