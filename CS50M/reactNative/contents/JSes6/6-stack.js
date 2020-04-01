function a() {
  console.log("hi");
}
function b() {
  a();
}

function c() {
  b();
}

c();
b();
a();

const addOne = num => num + 1;

const getNum = num => addOne(num);

const logNum = () => {
  console.log(getNum(11) + getNum(22));
};

logNum();
