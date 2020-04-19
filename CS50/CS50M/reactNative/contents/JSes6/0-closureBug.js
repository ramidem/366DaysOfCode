let i = 50;

function makeFuncArr() {
  const arr = [];

  for (let i = 0; i < 5; i++) {
    arr.push(function() {
      console.log(i);
    });

    console.log(i);

    return arr;
  }
}

console.log(i);

const funcArr = makeFuncArr();

funcArr[0]();
