const dogs = [{
  name: 'Snickers',
  age: 2
}, {
  name: 'hugo',
  age: 8
}];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello')

// Interpolated
console.log('I am %s interpolated', 'poop!')

// Styled
console.log('%cstyled text', 'background: red; text-shadow: 1px 1px 0 white; color: maroon;')

// warning!
console.warn('console.warn')

// Error :|
console.error('console.error')

// Info
console.info('console.info')

// Testing
console.assert(true === false, 'it is false!')

// clearing
// console.clear() // clears the console

// Viewing DOM Elements
const parag = document.querySelector('p')
// console.dir(parag)
console.log(parag)

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`${dog.name} is ${dog.age} dog years old`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.groupCollapsed('poop')
console.count('poop')
console.count('cake')
console.count('poop')
console.count('cake')
console.count('poop')
console.count('cake')
console.count('cake')
console.count('poop')
console.count('poop')
console.count('poop')
console.groupEnd()

// timing
console.time('fetching...')
fetch('https://api.github.com/users/ramidem')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching...')
    console.table(data)
  })
