import { CustomerType } from "../src/enum";
describe('Enum', () => {
    it('should support in Typescript', () => {
        const customer = {
            id: 1,
            name: "Arief",
            type: CustomerType.GOLD
        };
        console.info(customer);
    });
});
