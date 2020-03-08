function range(start, end) {
  start = Number(start) || 0;

  if (end === undefined) {
    return function getEnd(end) {
      return getRange(start, end)
    }
  } else {
    end = Number(end) || 0;
    return getRange(start, end)
  }

  function getRange(start, end) {
    var ret = [];
    for (let i = start; i <= end; i++) {
      ret.push(i)    
    }

    return ret;
  }

  // console.log(start, end)
}

range(3,3)
range(3,8)
range(3,0)
range(3)

let start3 = range(3)
let start1 = range(1)

console.log(start3(5))
console.log(start1(10))
