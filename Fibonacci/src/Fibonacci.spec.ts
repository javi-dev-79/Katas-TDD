import 'jest'
import Fibonacci from './Fibonacci'

describe('Fibonacci', () => {
    it('value at position 0 should be 0', () => {
        expect(Fibonacci.value(0)).toBe(0)
    })

    it('value at position 1 should be 1', () => {
        expect(Fibonacci.value(1)).toBe(1)
    })

    it('value at position 2 should be 1', () => {
        expect(Fibonacci.value(2)).toBe(1)
    })

    it('value at position 3 should be 2', () => {
        expect(Fibonacci.value(3)).toBe(2)
    })

    it('value at position 4 should be 3', () => {
        expect(Fibonacci.value(4)).toBe(3)
    })

    it('value at position 5 should be 5', () => {
        expect(Fibonacci.value(5)).toBe(5)
    })
})