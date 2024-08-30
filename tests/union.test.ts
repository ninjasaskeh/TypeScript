describe('Union Type', () => {
    it('should support at typescript', () => {

        let sample: number | string | boolean = 'Arief'
        console.info(sample)

        sample = 100
        console.info(sample)

        sample = true
        console.info(sample)
    });

    // Semisal kalo gatau type datanya ntar apa bia pake 'typeof'
    it('should support at typescript', () => {
        const process = (value: number | string | boolean) => {
            if (typeof value === 'string') {
                return value.toUpperCase()
            }else if(typeof value === 'number') {
                return value + 2
            }else {
                return !value
            }
        }
        expect(process("arief")).toBe("ARIEF")
        expect(process(100)).toBe(102)
        expect(process(true)).toBe(false)
    })
});