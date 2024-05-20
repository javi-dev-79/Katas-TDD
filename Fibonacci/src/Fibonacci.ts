class Fibonacci {
    public static value (position: number): number {
        const numbers = [0, 1]
        for (let index = 2; index <= position; index++) {
            numbers[index] = numbers[index-2] + numbers[index-1]
        }
        return numbers[position]
    }
}

export default Fibonacci