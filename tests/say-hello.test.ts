import {sayHello} from "../src/say-hello";

describe('sayHello', () => {
    it('should return hello arief', () => {
            expect(sayHello('arief')).toBe('Hello arief');
    });
})