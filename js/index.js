"use strict";

let passed = confirm(
  "do you love soraka ? \n press ok for yes \n press cancel for no"
);
// kick the user out if he didnt pass
if (!passed) window.close();

let points = prompt("how many points do you have with soraka", "0");

// if user have high points call him master else he is noob

if (points >= 50000)
  document.querySelector(".banner-content h2 span").innerHTML = "Master";

// give offer to the user if he is master of soraka soraka
points = parseInt(points);
let prices = [520, 1350];
prices = prices.map((price) => {
  if (points >= 50000) {
    return Math.floor(price / 2);
  }
  return price;
});
console.log(prices);

const StarGuardianSkin = document.querySelector(
  ".StarGuardianSkin .price span"
);

const DryadSkin = document.querySelector(".DryadSkin .price span");
DryadSkin.innerHTML = prices[0];
StarGuardianSkin.innerHTML = prices[1];
console.log(DryadSkin);
console.log(StarGuardianSkin);
