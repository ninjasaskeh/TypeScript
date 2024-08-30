describe('Array', () => {
    it('should same with javascript', () => {

        const names: string[] = ['eko', 'budi', 'ali']
        const values: number[] = [1, 2, 3]

        console.info(names)
        console.info(values)
    });

    it('should support readonly', () => {

        const hobbies: ReadonlyArray<string> = ['Membaca', 'Menulis']
        console.info(hobbies[0])
        console.info(hobbies[1])

        // gabisa diubah karna readonly
        // hobbies[0] = 'Main game'
    });

    it('should support tupple', () => {

        const person: readonly [string, string, number] = ["Arief", "Maizaki", 100]
        console.info(person[0])
        console.info(person[1])
        console.info(person[2])

        // sama gabisa diubah karna readonly
        // person[0] = "Ujang"

    });
});