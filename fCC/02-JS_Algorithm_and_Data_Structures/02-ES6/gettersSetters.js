class Thermostat {
  constructor(f) {
    this.f = f;
  }

  get temperature() {
    return (5 / 9) * (this.f - 32);
  }

  set temperature(c) {
    this.f = (c * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
