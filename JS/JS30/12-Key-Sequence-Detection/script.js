const pressed = [];
const secretCode = "med";

window.addEventListener("keyup", e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join("").includes(secretCode)) cornify_add();
});

window.addEventListener("click", () => {
  cornify_add();
});
