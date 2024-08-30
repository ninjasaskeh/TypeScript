describe('Type Alias', () => {
    it('should support in TypeScript', () => {
        const category = {
            id: 1,
            name: "Handphone"
        };
        const product = {
            id: "1",
            name: "Iphone 13",
            price: 11000000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
