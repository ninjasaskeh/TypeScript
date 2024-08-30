import {Seller} from "../src/seller";
import {Employee, Manager} from "../src/employee";
import {Person} from "../src/Person";

describe('Interface', () => {
    it('should support in typescript', () => {

        const seller: Seller  ={
            id: 1,
            name: "Toko Handphone",
            // ↓ readonly
            nib: "1234567890",
            npwp: "987654321"

        }

        seller.name = 'Toko Arip'
        // ↓ gabisa diubah
        // seller.nib = '6543718'
        // seller.npwp = '8736239234647'

        console.info(seller)
    });

    it('should support function interface', () => {
        interface AddFunction {
            // ↓ nilai 1      ↓ nilai 2       ↓ return value
            (value1: number, value2: number): number
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2
        }

        expect(add(2,2)).toBe(4)
    });

    it('should support indexable interface', () => {
        interface StringArray  {
            // ↓ type i      ↓ type value
            [index: number]: string
        }

        const names: StringArray = ['Arief', 'Joko', 'Andi']
        console.info(names)
    });

    it('should support indexable interface for non number index', () => {
        interface StringDictionary {
            [key: string]: string
        }

        // jadi ini mirip object
        const dictionary: StringDictionary = {
            "name": "Arief",
            "address": "Ciks"
        }

        expect(dictionary.name).toBe('Arief')
        expect(dictionary.address).toBe('Ciks')
    });

    it('should support extends interface', () => {
        const employee: Employee = {
            id: "1",
            name: "Arief",
            division: "IT"
        }

        console.info(employee)

        const manager: Manager = {
            id: "1",
            name: "Joko",
            division: "IT",
            numberOfEmployees: 10
        }

        console.info(manager)
    });

    it('should support function in interface', () => {
        const person: Person = {
            name: 'Arief',
            sayHello: (name: string): string => {
                return `Hello ${name}!, my name is ${person.name}!`
            }
        }
        console.info(person.sayHello("Ujang"))
    });

    it('should support intersection types', () => {
        // pokoknya ini gabungin 2 interface jadi 1 {kalo gaada nilai tambahan(kalo ada pake extend aja)}
        interface HasName {
            name: string,
        }
        interface HasId{
            id: string,
        }

        // interface Domain extends HasName , HasId{
        //     // kalo make extends ntar disini nya kosong
        // }

        // jadi make ini aja
        type Domain = HasName & HasId

        const domain: Domain = {
            id: "1",
            name: "Arief",
        }

        console.info(domain )
    });

    it('should support type assertions', () => {
        // harusnya kan kita bikin gini but...
        // const person: Person = {}
        const person: any = {
            name: "Arief",
            age: 21
        }

        // ini kek TS nya di paksa gitu,
        // kita harus mastiin kalo si data ini ada
        // kalo di akses person2.age itu gabakal ada => di Person itu gaada
        // intinya ini ga aman
        const person2: Person = person as Person

        console.info(person2)
    });
})