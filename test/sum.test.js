import { sum } from "../src/sum";

test("test sum function sum(1, 2) must be 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
})