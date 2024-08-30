"use strict";
describe('Loop', () => {
    it('should for loop', () => {
        const names = ["Arief", "Joko", "Ujang"];
        // for biasa(i)
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
        // for of
        for (const name of names) {
            console.info(name);
        }
        // for in
        for (const index in names) {
            console.info(names[index]);
        }
    });
    it('should support while loop', () => {
        let counter = 0;
        while (counter <= 10) {
            console.info(counter);
            counter++;
        }
    });
    it('should support do while loop', () => {
        let counter = 0;
        do {
            console.info(counter);
            counter++;
        } while (counter <= 10);
    });
});
