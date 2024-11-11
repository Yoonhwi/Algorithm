var obj = {
  outer: function () {
    console.log("outer", this); // outer
    var innerFunc1 = function () {
      console.log("innerFun", this); // global
    };
    innerFunc1();

    var self = this;
    var innerFunc2 = function () {
      console.log("self", self); //outer
    };
    innerFunc2();
  },
};
obj.outer();

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr1[0] = 3;
console.log(arr2);

console.log(testVar);
var testVar = 1;
console.log(testVar);
