import sum from '../sum'

describe('true is truthy and false is false', () => {
  test('truth is truthy', () => {
    expect(true).toBe(true)
  })

  test('false is falsy', () => {
    expect(false).toBe(false)
  })
  
  test('should add two numbers', () => {
    expect(sum(2, 2)).toEqual(4)
  })

})