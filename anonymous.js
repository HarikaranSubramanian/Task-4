// Programs using Anonymous functions.
// 1) a.print odd numbers in an array using anonymous function .
let num = [10,100,7,35,59,3,1,9,5];

let oddNumbers = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

oddNumbers(num);

//b.convert all the strings to title caps in a string array using anonymous function.
let array = ["hari", "karan"];

let titleCaps = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
};

titleCaps(array);
console.log(array);

//c.sum of all the numbers in an array using anonymous function 
let numbers = [1, 2, 3, 4, 5];

let sum = function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

console.log(sum(numbers));

// d.return all the prime numbers in an array using anonymous function.
let numbers = [41,7,3,10,8,15,5,2,11];

let findPrimes = function(arr) {
  let primes = [];
  
  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    
    if (arr[i] < 2) {
      isPrime = false;
    } else {
      for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    
    if (isPrime) {
      primes.push(arr[i]);
    }
  }
  
  return primes;
};

console.log(findPrimes(numbers));

// e.return all the palindromes in an array using anonymous function.
let names = ["level", "hari", "racecar", "amma", "madam","malayalam"];

let findPalindromes = function(arr) {
  let palindromes = [];
  
  for (let i = 0; i < arr.length; i++) {
    let reversed = arr[i].split('').reverse().join('');
    
    if (arr[i] === reversed) {
      palindromes.push(arr[i]);
    }
  }
  
  return palindromes;
};

console.log(findPalindromes(names));


// f.return median of two sorted arrays of the same size using anonymous function.
let array1 = [10,30,40];
let array2 = [50,60,70];

let findMedian = function(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  let sortedArray = mergedArray.sort((a, b) => a - b);
  let length = sortedArray.length;

  if (length % 2 === 0) {
    let mid1 = sortedArray[length / 2 - 1];
    let mid2 = sortedArray[length / 2];
    return (mid1 + mid2) / 2;
  } else {
    return sortedArray[Math.floor(length / 2)];
  }
};

console.log(findMedian(array1, array2));



// g.remove duplicates from an array using anonymous function.
let array = [2,2,4,5,6,5,8,4];

let duplicates = function(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

console.log(duplicates(array));

// h.rotate an array by k times using anonymous function.
let array = [1, 2, 3, 4, 5];
let k = 2;

let rotate = function(arr, k) {
  let len = arr.length;
  k = k % len; 

  let rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  return rotatedArray;
};

console.log(rotate(array, k));

