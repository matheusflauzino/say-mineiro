import { helloWorld, goodBye } from "../src";

describe('Happyy flow', () => {
    test('Hello', () => {
        expect(helloWorld()).toBe('Hello World from my example modern npm package!');
    });

    test('Goodbye', () => {
        expect(goodBye()).toBe('Goodbye from my example modern npm package!');
    });
});