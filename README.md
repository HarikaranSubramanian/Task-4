# Programs using anonymous function , IIFE and arrow function.

** In this Repository i have added three JavaScript files for each functions **

1 In the anonymous.js file i jave added all the program using anonymous function.
`
1) a.
let num = [10,100,7,35,59,3,1,9,5];

let oddNumbers = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
`

2 In the arrow.js file i jave added all the program using arrow function.
`
2) a.
let num = [10,100,7,35,59,3,1,9,5];

const oddNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  };

oddNumbers(num);
`
3 In the IIFE.js file i jave added all the program using IIFE function.
`
1) a.
let num = [10,100,7,35,59,3,1,9,5];

(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(num);
`