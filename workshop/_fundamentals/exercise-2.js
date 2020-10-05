// Exercise 2
//
// 1. Write a function accepts 2 arrays of strings and returns a new combined array of the strings in alphabetical order.
// e.g. combineArrays(["crisp", "bacon"], ['zuchini', 'apple']) returns ['apple', 'bacon', 'crispy', 'zuchini']

// - if any of the values in either array is not strings, return undefined.

const combineArrays = (arr1, arr2) => {
  // Insert missing solution please

  let new_arr = []
  if((typeof(arr1) != "string"|| typeof(arr2) != "string" ) && ( !Array.isArray(arr1)|| !Array.isArray(arr2))){
  	return undefined;
  }
 



  arr1.forEach((item)=>{
  	new_arr.push(item);
  	new_arr.sort();
  });


  arr2.forEach((item)=>{
  	new_arr.push(item);
  	new_arr.sort();
  });


  return new_arr; 
};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = combineArrays;
