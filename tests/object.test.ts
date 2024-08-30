describe('Object', () => {
    it('should support in Typescript', () => {

        const person: {id: string, name: string, hobbies?: string[]} = {
            id: "1",
            name: "Arief",
        }

        console.info(person)

        person.id ="2"
        person.name = "John"

        console.info(person)

    });
});