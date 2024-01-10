import { RequestName } from "../src/async_test";

test("Async unit test", async () => {
    const result = await RequestName("Andrian");
    expect(result).toEqual({
        message: "success",
        code: 200
    });
});

test("Async unit test2", async () => {
    await expect(RequestName("Andrian")).resolves.toEqual({
        message: "success",
        code: 200
    });

    await expect(RequestName("Andrian")).resolves.not.toEqual({
        message: "success",
        code: 404
    });

    await expect(RequestName("Cimen")).rejects.not.toEqual({
        message: "success",
        code: 200
    });

    await expect(RequestName("Cimen")).rejects.toEqual({
        message: "failed",
        code: 404
    });
});


