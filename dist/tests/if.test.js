"use strict";
describe('If Statement', () => {
    it('should support in TypeScript', () => {
        // kalo lansung ada value gausa :number (auto tau)
        // klo di ubah ke string => error
        const examValue = 90;
        if (examValue > 80) {
            console.info("Good");
        }
        else if (examValue > 60) {
            console.info("Not Bad");
        }
        else {
            console.info("Try Again");
        }
    });
    it('should support ternary operator', () => {
        const value = 80;
        const say = value >= 75 ? "Congratulations" : "Try Again";
        console.info(say);
    });
    it('should support switch case statement', () => {
        const sayHello = (name) => {
            switch (name) {
                case "Arief":
                    return "Hello Arief";
                case "Joko":
                    return "Hello Joko";
                default:
                    return "Hello";
            }
        };
        console.info(sayHello("Arief"));
        console.info(sayHello("Joko"));
        console.info(sayHello("Anwar"));
    });
});
