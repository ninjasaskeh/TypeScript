describe('Function', () => {
    it('should support in typescript', () => {
        // klo parameter type ga di jelasin ntar jadi any
        // klo return type harus di kasi return di bawah klo ga error
        //   ↓ func name ↓ parameter type ↓ return type
        const sayHello = (name) => {
            return `Hello ${name}`;
        };
        expect(sayHello("Arief")).toBe("Hello Arief");
        // ini contoh yg ga make return value
        const printHello = (name) => {
            console.info(`Hello ${name}`);
        };
        printHello("Arief");
    });
    it('should support default value', () => {
        // klo data !dikirim ntar di ngirim ↓ => default value
        const sayHello = (name = "Guest") => {
            return `Hello ${name}`;
        };
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Arief")).toBe("Hello Arief");
    });
    it('should support rest parameter', () => {
        // kalo di spread ↓ type nya ↓  harus array
        const sum = (...values) => {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        };
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it('should support optional parameter', () => {
        const sayHello = (firstName, lastName) => {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        };
        expect(sayHello("Arief")).toBe("Hello Arief");
        expect(sayHello("Arief", "Maizaki")).toBe("Hello Arief Maizaki");
    });
    it('should support function overloading', () => {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(100)).toBe(1000);
        expect(callMe("Arief")).toBe("ARIEF");
    });
    it('should support function as parameter', () => {
        const sayHello = (name, filter) => {
            return `Hello ${filter(name)}`;
        };
        const toUpper = (name) => {
            return name.toUpperCase();
        };
        // jalan 1
        expect(sayHello("Arief", toUpper)).toBe("Hello ARIEF");
        // jalan 2 yg lansung versi func biasa  ↓
        expect(sayHello("Arief", function (name) {
            return name.toUpperCase();
        })).toBe("Hello ARIEF");
        // jalan 3 make arrow func
        expect(sayHello("Arief", (name) => name.toUpperCase())).toBe("Hello ARIEF");
        // jalan 2 & 3 => anonymous function(func gapunya nama)
    });
});
export {};
