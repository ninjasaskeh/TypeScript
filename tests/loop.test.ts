describe('Loop', () => {
    it('should for loop', () => {
        const names: string[] = ["Arief", "Joko", "Ujang"]

        // for biasa(i)
        for (let i = 0; i < names.length; i++) {
            console.info(names[i])
        }

        // for of
        for (const name of names) {
            console.info(name)
        }

        // for in
        for (const index in names) {
            console.info(names[index])
        }
    });

    it('should support while loop', () => {
        let counter: number = 0
        while (counter <= 10) {
            console.info(counter)
            counter++;
        }
    });

    it('should support do while loop', () => {
        let counter: number = 0
        do {
            console.info(counter)
            counter++;
        } while (counter <= 10)
    });

    it('should support break and continue', () => {
        let counter: number = 0

        do {
            counter++;

            if (counter == 10){
                break
            }

            if (counter % 2 == 0) {
                continue;
            }
            // cuma muncul yg ganjil
            console.info(counter)
        }while (true)
    });
});