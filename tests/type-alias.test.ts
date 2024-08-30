import {Category, Product} from "../src/type-alias";

describe('Type Alias', () => {
    it('should support in TypeScript', () => {

        const category: Category = {
            id: 1,
            name: "Handphone"

        }

        const product: Product = {
            id: "1",
            name: "Iphone 13",
            price: 11000000,
            category: category
        }
        console.info(category)
        console.info(product)
    });
});