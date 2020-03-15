function something() {
  var special = "JavaScript";

  {
    let special = 45;
  }
}

function another() {
  {
    let special = "JavaScript";
    //  ^ here

    {
      var special = "JavaScript";
      //  ^ SyntaxError: Identifier 'special' has already been declared
    }
  }
}
