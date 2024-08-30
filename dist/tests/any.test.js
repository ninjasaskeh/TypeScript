"use strict";
describe('Any', () => {
    it('should support in TypeScript', () => {
        const person = {
            id: 1,
            name: "Arief Maizaki",
            age: 21,
        };
        person.age = 22;
        person.address = "Indonesia";
        console.info(person);
    });
});
