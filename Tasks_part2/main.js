// Task 1
function pow(num, n) {
    if (n == 0) return 1;
    return pow(num, (n - 1)) * num;
}

// console.log(pow(2, 10));

// Task 2
const array = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function flatten(arr) {
    let flattenArr = arr.concat();

    let i = 0;
    while (i <= flattenArr.length) {

        if (Array.isArray(flattenArr[i])) {
            flattenArr.splice(i, 1, ...flattenArr[i])
        } else {
            i++
        }
    }
    return flattenArr;
}

// console.log(flatten(array));
// console.log(array);

// Task 3
/* Требуется создать функцию, получающую на вход число от 0 до 100 000
и показывающее его текстовый эквивалент.
Например: 441 => четыреста сорок один */

const textEquivalentArr = [];
 
textEquivalentArr[0] = new Array("", "один", "два", "три", "четыри", "пять", "шесть", "семь", "восемь", "девять");
 
textEquivalentArr["10-19"] = new Array("десять", "одинадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шеснадцать", "семнадцать", "восемнадцать", "девятнадцать");
 
textEquivalentArr[1] = new Array("", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто");
 
textEquivalentArr[2] = new Array("", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот");
 
textEquivalentArr["одна-две"] = new Array("", "одна", "две");
 
textEquivalentArr[3] = new Array("тысяч", "тысяча", "тысячи", "тысячи", "тысячи", "тысяч", "тысяч", "тысяч", "тысяч", "тысяч", "");
 

function numToWord(number) {
 
    let result = "";
    let numArr = [];
    let flag = true;
 
    if (number == 0) return 'ноль';
    if (isNaN(number)) return 'Вы ввели не число!';
    if (number < 0 || number > 100000) {
        return "Число вне диапазона!";
    }
  
    for (; number > 0; number = Math.floor(number / 10)) {
        numArr.push(number % 10);
    }

    for (let i = numArr.length - 1; i >= 0 ; i--) {
 
        if (flag) {

            if (numArr[i] == 1 && i == 1 || numArr[i] == 1 && i == 4 || numArr[i] == 1 && i == 6) {
                flag = false;
            } else {
                result += digitToWord(i, numArr[i], 0);
            }
 
        } else {
 
            result += digitToWord("10-19", numArr[i], i);
            flag = true;
        }
    }
    return result.trim();
}
 
function digitToWord(digit, offset, char) {
 
    let result = "";

    switch (digit) {
        case 3:
            result += (offset == 1 || offset == 2 ? textEquivalentArr["одна-две"][offset] : textEquivalentArr[0][offset]) + " ";
            break;
 
        case 4:
            digit = 1;
            break;

        case 5:
            digit = 2;
            break;

        case "10-19":
            result += textEquivalentArr[digit][offset] + " ";
            digit = char;
            offset = 0;
            break;
    }
 
    return result + textEquivalentArr[digit][offset] + " ";
}

console.log(numToWord(441));