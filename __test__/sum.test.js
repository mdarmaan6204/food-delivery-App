import {sum} from "../src/components/sum"

test("Sum function should return th sum of two number" , () =>{

    const result = sum(3,7);
    expect(result).toBe(10);
})