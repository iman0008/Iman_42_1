let numbers = [1500, 400, 800, 750, 250, 8000, 150, 640, 100, 370];
let discount = numbers.map((number) => number * 0.6);
console.log(discount);

let tenge = numbers.map((number) => number / 0.18);
console.log(tenge);

let afford = numbers.filter((number) => number <= 1000);
console.log(afford);

let even = numbers.filter((number) => number % 100 === 0);
console.log(even);

let maxPrice = numbers.reduce(
  (max, number) => (number > max ? number : max),
  0
);
console.log(maxPrice);

let minPrice = numbers.reduce(
  (min, number) => (number < min ? number : min),
  numbers[0]
);
console.log(minPrice);
