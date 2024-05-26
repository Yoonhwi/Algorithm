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
