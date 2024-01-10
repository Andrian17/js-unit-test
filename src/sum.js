
export const sum = (first, second) => {
    return first + second
}

export const sumAll = (numbers) => {
    let result = null;
    numbers.forEach(element => {
        result += element
    });
    return result;
}