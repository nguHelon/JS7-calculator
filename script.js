const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation-btn button");
const clear = document.querySelector("#clear");
const input = document.querySelector("#input");
const ans = document.querySelector(".ans");

let arrayNumbers = [];
let latestInputValue;

window.addEventListener("DOMContentLoaded", () => {
    input.value = 0;
})

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        let value = number.value;
        arrayNumbers.push(value);
        latestInputValue = arrayNumbers.join("");
        input.value = latestInputValue;
    });
});

function getNumberOperation(input) {
    let splitedInput;
    let number1;
    let number2;

    if (input.includes("+")) {
        splitedInput = input.split("+");
        number1 = splitedInput[0];
        number2 = splitedInput[1];
    } else if (input.includes("-")) {
        splitedInput = input.split("-");
        number1 = splitedInput[0];
        number2 = splitedInput[1];
    } else if (input.includes("X")) {
        splitedInput = input.split("X");
        number1 = splitedInput[0];
        number2 = splitedInput[1];
    } else if (input.includes("/")) {
        splitedInput = input.split("/");
        number1 = splitedInput[0];
        number2 = splitedInput[1];
    } else if (input.includes("%")) {
        splitedInput = input.split("%");
        number1 = splitedInput[0];
        return { number1 };
    }

    else {
        alert("Sorry operation can't solved");
    }

    number1 = Number(number1);
    number2 = Number(number2)

    return { number1, number2 };
}

function add(number1, number2) {
    let result = number1 + number2;
    arrayNumbers = [];
    return result;
}

function multiply(number1, number2) {
    let result = number1 * number2;
    arrayNumbers = [];
    return result;
}

function subtract(number1, number2) {
    let result = number1 - number2;
    arrayNumbers = [];
    return result;
}

function divide(number1, number2) {
    let result = number1 / number2;
    arrayNumbers = [];
    return result;
}

function percentage(number1) {
    let result = number1 / 100;
    arrayNumbers = [];
    return result;
}

ans.addEventListener("click", () => {
    let result;
    let value = input.value;
    const { number1, number2 } = getNumberOperation(value);

    if (value.includes("+")) {
        result = add(number1, number2);
    } else if (value.includes("X")) {
        result = multiply(number1, number2);
    } else if (value.includes("-")) {
        result = subtract(number1, number2);
    } else if (value.includes("/")) {
        result = divide(number1, number2);
    } else if (value.includes("%")) {
        result = percentage(number1);
    }

    if (Number.isInteger(result) === false) {
        result = result.toFixed(2);
    }

    input.value = result;
});

clear.addEventListener("click", () => {
    input.value = 0;
});