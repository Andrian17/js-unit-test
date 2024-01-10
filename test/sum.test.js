import { sum } from "../src/sum";

test("test sum function sum(1, 2) must be 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
})

describe("Test it function", () => {
    it("SUM test", () => {
        expect(sum(20, 30)).toBe(50);
    });
});