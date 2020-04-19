const sayHello = (function() {
  const msg = "hello";

  function sayHello() {
    console.log(msg);
  }
  return sayHello;
})();

sayHello();

const counter = (function() {
  let count = 0;

  return {
    inc: function() {
      count = count + 1;
    },
    get: function() {
      console.log(count);
    }
  };
})();

counter.get();
counter.inc();
counter.get();
counter.inc();
counter.get();
counter.inc();
counter.get();
counter.inc();
counter.get();
counter.inc();
counter.get();
