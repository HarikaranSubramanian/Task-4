// programs using Arrow functions.

// 2) a.
let num = [10,100,7,35,59,3,1,9,5];

const oddNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  };

oddNumbers(num);

// b. 
let array = ["hari", "karan"];

const titleCaps = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
};

titleCaps(array);
console.log(array);

// c.
let numbers = [1, 2, 3, 4, 5];

const sum = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
};

console.log(sum(numbers));

//d.

let numbers = [41,7,3,10,8,15,5,2,11];
const findPrimes = (arr) => {
  return arr.filter((num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
};

console.log(findPrimes(numbers));

// e.
let names = ["level", "hari", "racecar", "amma", "madam","malayalam"];
const findPalindromes = (arr) => {
  return arr.filter((word) => {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
  });
};

console.log(findPalindromes(names));


