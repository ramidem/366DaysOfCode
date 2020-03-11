function saySomething() {
  var greeting = "hello";

  {
    greeting = "howdy"; // Cannot access 'greeting' before initialization
    let greeting = "hi";
    console.log(greeting);
  }
}

saySomething();
// Cannot access 'greeting' before initialization
