"use strict";
let points;

function IsWorthy() {
  for (let trials = 0; trials < 3; trials++) {
    let worthy = confirm(
      "do you love soraka ? \n press ok for yes \n press cancel for no"
    );
    if (worthy) break;
    if (trials != 2) continue;
    // kick the user out if he didnt pass
    if (!worthy) {
      window.close();
    }
  }
}
function howManySkins() {
  let skinsNum;
  skinsNum = prompt(
    "how many skins do you have ( enter a number from 0-11)",
    0
  );
  while (skinsNum < 0 || skinsNum > 11) {
    skinsNum = prompt(
      "how many skins do you have ( enter a number from 0-11)",
      0
    );
    skinsNum = parseInt(skinsNum);
  }
  let element = document.querySelector(".how-many-skins");
  element.innerHTML = `you have ${skinsNum} skins`;
}
function isMaster() {
  points = prompt("how many points do you have with soraka", "0");
  points = parseInt(points);
  // if user have high points call him master else he is noob
  if (points >= 50000)
    document.querySelector(".banner-content h2 span").innerHTML = "Master";
}
function makeOffer() {
  // give offer to the user if he is master of soraka soraka
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
}
IsWorthy();
isMaster();
howManySkins();
makeOffer();
