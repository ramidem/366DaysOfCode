(function wrappingOuterScope() {
  var moduleOne = (function one() {
    // code
  })();

  var moduleTwo = (function two() {
    // code

    function callModuleOne() {
      moduleOne.someMethod();
    }

    // code
  })();
})();
