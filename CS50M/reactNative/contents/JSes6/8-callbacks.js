// async
function doSomething(callback) {
  setTimeout(function() {
    callback(1);
  }, 5000);
}

doSomething(console.log);
