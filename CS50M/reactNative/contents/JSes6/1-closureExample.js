function makeHelloFunc() {
  const msg = "hello";

  function sayHello() {
    console.log(msg);
  }
  return sayHello;
}

const sayHello = makeHelloFunc();

// console.log(msg); // not defined outside the makeHelloFunc

sayHello();
