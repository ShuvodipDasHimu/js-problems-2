const phones = [

  {name: 'ASUS ROG', price: 200000, camera: '12mp', color: 'black' },
  {name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
  {name: 'Xiaomi', price: 18000, camera: '12mp', color: 'black' },
  {name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
  {name: 'iPhone', price: 100000, camera: '12mp', color: 'black' },
  {name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
  {name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
]

function getCheapestPhone(phones){
  let min = phones[0];
  for(const phone of phones){
    if(phone.price < min.price){
      min = phone;
    }
  }
  return min;
}

const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is: ', cheap);

// maxPrice

function getExpensivePhone(phones){
  let max = phones[0];
  for(const phone of phones){
    if(phone.price > max.price){
      max = phone;
    }
  }
  return max;
}

const expensive = getExpensivePhone(phones);
console.log('Expensive phone is : ', expensive);