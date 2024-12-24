// const rangevalue = document.querySelector('.slider-container .price-slider')
// const rangeInputvalue = document.querySelectorAll('.range-input input')

// let priceGap = 500

// const priceInputvalue = document.querySelectorAll('.price-input input')
// for(let i = 0; i< priceInputvalue.length; i++){
//     priceInputvalue[i].addEventListener('input', (e)=>{
//         let minp = parseInt(priceInputvalue[0].value)
//         let maxp = parseInt(priceInputvalue[1].value)
//         let diff = maxp - minp

//         if(minp < 0){
//             alert('minimum price cannot be less than 0')
//             priceInputvalue[0].value = 0
//         }

//         if(maxp > 10000){
//             alert('Maximum price cannot be greater than 10000')
//             priceInputvalue[1].value = 10000
//             maxp = 10000
//         }
//     })
// }

// Script.js
const rangeValue = document.querySelector(".slider-container .price-slider");
const rangeInputs = document.querySelectorAll(".range-input input");
const priceInputs = document.querySelectorAll(".price-input input");
const priceGap = 500;

const validatePrice = (min, max) => {
  if (min < 0) {
    alert("Minimum price cannot be less than 0");
    return [0, max];
  }
  if (max > 10000) {
    alert("Maximum price cannot be greater than 10000");
    return [min, 10000];
  }
  if (min > max - priceGap) {
    min = max - priceGap;
    if (min < 0) min = 0;
  }
  return [min, max];
};

const updateSlider = (min, max) => {
  const maxRange = parseInt(rangeInputs[1].max);
  rangeValue.style.left = `${(min / maxRange) * 100}%`;
  rangeValue.style.right = `${100 - (max / maxRange) * 100}%`;
};

// Price input event listener
priceInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    let min = parseInt(priceInputs[0].value);
    let max = parseInt(priceInputs[1].value);

    [min, max] = validatePrice(min, max);

    priceInputs[0].value = min;
    priceInputs[1].value = max;

    rangeInputs[0].value = min;
    rangeInputs[1].value = max;

    updateSlider(min, max);
  });
});

// Range input event listener
rangeInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    let min = parseInt(rangeInputs[0].value);
    let max = parseInt(rangeInputs[1].value);

    if (max - min < priceGap) {
      if (index === 0) {
        rangeInputs[0].value = max - priceGap;
        min = max - priceGap;
      } else {
        rangeInputs[1].value = min + priceGap;
        max = min + priceGap;
      }
    }

    priceInputs[0].value = min;
    priceInputs[1].value = max;

    updateSlider(min, max);
  });
});
