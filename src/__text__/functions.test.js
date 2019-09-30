import { add } from '../utils/functions'

test('add sums 2 integers correctly', () => {
    expect(add(2, 3)).toBe(5)
})

test('will add number and string correctly', () => {
    expect(add(2, '3')).toBe(5)
})

test('passing two strings that dont equate to numbers will return NAN', () => {
    expect(add('blah', 'blah')).toBeNaN()
})