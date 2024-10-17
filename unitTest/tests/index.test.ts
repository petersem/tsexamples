import { add, welcome } from '../index';

describe('testing index file', () => {
    test('empty string should result in zero', () => {
        expect(add('')).toBe(0);
    });
});

describe('add function', () => {
    it('should return 5', () => {
        const result = add('1,4,1001');
        expect(result).toEqual(5);
    });
});

describe('test for negatives', () => {
    test('negative values should throw a range exception', () => {
        expect(() => add('1,2,3,-1,3')).toThrow(RangeError);
    });
});

describe('Welcome function working', () =>
    test('should correctly greet', () => {
        const result = welcome();
        expect(result).toBe('Hello world');
    })
)
