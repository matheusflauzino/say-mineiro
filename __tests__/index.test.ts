import { random, all } from "../src";

describe('Happy flow', () => {
    test('get all dialects', () => {
        expect(all().length).toBe(18);
    });

    test('get random dialects', () => {
        expect(random()).toEqual(expect.any(String));
    });
});