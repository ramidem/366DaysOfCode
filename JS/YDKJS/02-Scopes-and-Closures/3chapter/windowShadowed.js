var special = 30;

function lookingFor(special) {
  // copying is not accessing
  var another = { special };

  function keepLooking() {
    var special = 3.12;
    console.log(special);
    console.log(another.special);
    console.log(window.special);
  }

  keepLooking();
}

lookingFor(123456);
