const tests = require('../index')

test('Test capitalize', () => {
  //test capitalize on prototype
  expect('hello'.capitalize()).toBe('Hello')
  expect(tests.capitalize('world')).toBe('World')
})

test('Test allCaps', () => {
  //test allcaps on prototype
  expect('hello'.allCaps()).toBe('HELLO')
  expect(tests.allCaps('world')).toBe('WORLD')
})

test('Test capitalizeWords', () => {
  //test capitalizeWords on prototype
  expect('hello world'.capitalizeWords()).toBe('Hello World')
  expect(tests.capitalizeWords('how are you')).toBe('How Are You')
})

test('Test removeExtraSpaces', () => {
  //test removeExtraSpaces on prototype
  expect('hello     world'.removeExtraSpaces()).toBe('hello world')
  expect(tests.removeExtraSpaces('how    are   you')).toBe('how are you')
})

test('Test kabobCase', () => {
  //test kabobCase on prototype
  expect('hello     world'.kabobCase()).toBe('hello-world')
  expect('HELLO    world'.kabobCase()).toBe('hello-world')
  expect(tests.kabobCase('how    are   you')).toBe('how-are-you')
})

test('Test snakeCase', () => {
  //test snakeCase on prototype
  expect('hello     world'.snakeCase()).toBe('hello_world')
  expect('HELLO    world'.snakeCase()).toBe('hello_world')
  expect(tests.snakeCase('how    are   you')).toBe('how_are_you')
})

test('Test camelCase', () => {
  //test camelCase on prototype
  expect('hello     world'.camelCase()).toBe('helloWorld')
  expect('HELLO    world'.camelCase()).toBe('helloWorld')
  expect(tests.camelCase('how    are   you')).toBe('howAreYou')
})

test('Test shift', () => {
  //test shift on prototype
  expect('hello'.shift()).toBe('elloh')
  expect('hello'.shift(num=3)).toBe('lohel')
  expect(tests.shift('ariane',2)).toBe('ianear')
})