function makeFuncArr() {
  const arr = [];

  for (var i = 0; i < 5; i++) {
    arr.push(
      (function(x) {
        return function() {
          console.log(x);
        };
      })(i)
    );

    // console.log(i);

    return arr;
  }
}

const funcArr = makeFuncArr();

funcArr[0]();
