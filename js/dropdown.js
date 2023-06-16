const rangeInput = document.querySelectorAll(".range-input input"),
  minPrice = document.querySelector(".price-range .min-price .c-number"),
  maxPrice = document.querySelector(".price-range .max-price .c-number"),
  progress = document.querySelector(".slider .progress");
//   rangeValue = document.getElementById('range-value');
//   rangeLabel = document.getElementById('range-label');
let priceGap = 1000;

rangeInput.forEach((input) => {
  input;
  input.addEventListener("input", (e) => {
    // rangeLabel.textContent +=  rangeValue.value;
    // Get two range value and parsing them to numbers
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    let percent = (minVal / rangeInput[0].max * 100)
    console.log(percent);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      minPrice.innerText = minVal;
      maxPrice.innerText = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// SALARY VARIABLES
const salaryDropBtn = document.querySelector(".salary.dropbtn");
const salaryDropCon = document.querySelector(".salary-dropdown-content");
const salaryCaret = document.querySelector(".fa-angle-up");
const salarySelected = document.querySelector(".salary-selected");

salaryDropBtn.onclick = function () {
  salaryDropCon.classList.toggle("show");
  salaryCaret.classList.toggle("rotate");
};

// CURRENCY VARIABLES

const currencyDropBtn = document.querySelector(".currency-dropbtn");
const currencyCaret = document.querySelector(".currency .fa-angle-up");
const currencyDropCon = document.querySelector(".currency-dropdown-content");
const currencyDropOption = document.querySelectorAll(
  ".currency-dropdown-content li"
);
const currencySelected = document.querySelector(".currency-selected");

currencyDropBtn.onclick = function () {
  currencyDropCon.classList.toggle("show");
  currencyCaret.classList.toggle("rotate");
};

currencyDropOption.forEach((option) => {
  option.addEventListener("click", () => {
    currencySelected.innerHTML = option.innerHTML;
    salarySelected.innerHTML = option.innerHTML;
    currencyDropCon.classList.remove("show");
    currencyCaret.classList.remove("rotate");
  });
});



// DROPDOWN MENU

const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
    let current = '';
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdown_content = dropdown.querySelector('.dropdown-content');
    const caret = dropdown.querySelector('.fa-angle-up');
    const dropdown_options = dropdown.querySelectorAll('.dropdown-content li');
    const selected = dropdown.querySelector('.selected');
    
    dropdown_options.forEach(option1 =>{
        option1.addEventListener('click', ()=>{
            selected.innerHTML = option1.innerHTML;
            // current = option1.innerHTML;
            dropdown_content.classList.contains('show');
            dropdown_content.classList.remove('show');

            caret.classList.remove('rotate');
        })
        // if(dropdown_content.classList.contains('show')){
        //     dropdown_content.classList.remove('show')
        // }
    })

    dropbtn.onclick = function(){
        dropdown_content.classList.toggle('show');
        caret.classList.toggle('rotate');
    }
    dropdown_options.forEach(option => {
        option.addEventListener('click', () => {
            // selected.innerHTML = option.innerHTML;
            // dropdown_content.classList.remove('show');
            // caret.classList.remove('rotate');

            dropdown_options.forEach(option => {
                option.classList.remove('active');
            })

            option.classList.add('active');

        })
    
    });

})
