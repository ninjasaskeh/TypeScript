describe('Interface', () => {
    it('should support in typescript', () => {
        const seller = {
            id: 1,
            name: "Toko Handphone",
            // ↓ readonly
            nib: "1234567890",
            npwp: "987654321"
        };
        seller.name = 'Toko Arip';
        // ↓ gabisa diubah
        // seller.nib = '6543718'
        // seller.npwp = '8736239234647'
        console.info(seller);
    });
    it('should support function interface', () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', () => {
        const names = ['Arief', 'Joko', 'Andi'];
        console.info(names);
    });
    it('should support indexable interface for non number index', () => {
        // jadi ini mirip object
        const dictionary = {
            "name": "Arief",
            "address": "Ciks"
        };
        expect(dictionary.name).toBe('Arief');
        expect(dictionary.address).toBe('Ciks');
    });
    it('should support extends interface', () => {
        const employee = {
            id: "1",
            name: "Arief",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "1",
            name: "Joko",
            division: "IT",
            numberOfEmployees: 10
        };
        console.info(manager);
    });
    it('should support function in interface', () => {
        const person = {
            name: 'Arief',
            sayHello: (name) => {
                return `Hello ${name}!, my name is ${person.name}!`;
            }
        };
        console.info(person.sayHello("Ujang"));
    });
    it('should support intersection types', () => {
        const domain = {
            id: "1",
            name: "Arief",
        };
        console.info(domain);
    });
    it('should support type assertions', () => {
        // harusnya kan kita bikin gini but...
        // const person: Person = {}
        const person = {
            name: "Arief",
            age: 21
        };
        // ini kek TS nya di paksa gitu,
        // kita harus mastiin kalo si data ini ada
        // kalo di akses person2.age itu gabakal ada => di Person itu gaada
        // intinya ini ga aman
        const person2 = person;
        console.info(person2);
    });
});
export {};
