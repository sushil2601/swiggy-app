import { Sum } from "../Sum";

test('Sum function should caculate the sum of two numbers', () => {
    
    const result = Sum(3,4);

    //Assertion
    expect(result).toBe(7);

});