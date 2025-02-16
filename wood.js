/*
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
*/

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
  const perChairWood = 3;
  const perTableWood= 10;
  const perBedWood = 50;

  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;

  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

  return totalWood;
}

const wood = woodQuantity(1, 1, 4);
console.log('Wood needed', wood);

/*
 * Shirt price --> 500
 * Pant price --> 300
 * Shoe price --> 900
*/

function wearablesQuantity(shirtQuantity, pantQuantity, shoeQuantity){
  const perShirtPrice = 500;
  const perPantPrice = 300;
  const perShoePrice = 900;

  const shirtTotalPrice = shirtQuantity * perShirtPrice;
  const pantTotalprice = pantQuantity * perPantPrice;
  const shoeTotalPrice = shoeQuantity * perShoePrice;

  const totalPrice = shirtTotalPrice + pantTotalprice + shoeTotalPrice;
  return totalPrice;
}

const wearablesTotalCost = wearablesQuantity(1,1,1);
console.log('Total cost for your wearables', wearablesTotalCost);