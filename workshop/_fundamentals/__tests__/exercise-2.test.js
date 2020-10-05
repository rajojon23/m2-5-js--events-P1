const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...

  expect(
    combineArrays(["walter", "white"], ["woke", "win"])
  ).toStrictEqual(["walter", "white", "win", "woke"]);


  expect(
    combineArrays(["flag", "hit"], ["plain", "stop", "thaw"])
  ).toStrictEqual(["flag", "hit", "plain", "stop", "thaw"]);

  expect(
    combineArrays(["grateful", "gem", "thesis"], ["friendly", "courtship"])
  ).toStrictEqual(["courtship", "friendly", "gem", "grateful", "thesis"]);


  
});
