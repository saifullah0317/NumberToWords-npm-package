#! /usr/bin/env node
import inquirer from "inquirer";
function eliminateZero(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "0") {
            str = str.replace("0", "");
        }
        else {
            break;
        }
    }
    return str;
}
function convert(x) {
    x = eliminateZero(x);
    let str = "";
    let digits = x.length;
    switch (digits) {
        case 1:
            str = single(x);
            break;
        case 2:
            str = twoDig(x);
            break;
        case 3:
            str = threeDig(x);
            break;
        case 4:
            str = fourDig(x);
            break;
        case 5:
            str = fiveDig(x);
            break;
        case 6:
            str = sixDig(x);
            break;
        case 7:
            str = sevenDig(x);
            break;
        case 8:
            str = eightDig(x);
            break;
        case 9:
            str = nineDig(x);
            break;
        case 10:
            str = tenDig(x);
            break;
        case 11:
            str = elevenDig(x);
            break;
        case 12:
            str = twelveDig(x);
            break;
        default:
            str = bigDig(x);
            break;
    }
    return str;
}
function single(num) {
    let str = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return str[Number(num) - 1];
}
function twoDig(num) {
    let str;
    if (num[1] == "0") {
        str = ["ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        return str[(Number(num) / 10) - 1];
    }
    else if (num[0] == "1") {
        str = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        return str[(Number(num[1])) - 1];
    }
    else {
        return twoDig(num[0] + "0") + "-" + single(num[1]);
    }
}
function threeDig(num) {
    let str = "";
    if (num.slice(1) == "00") {
        if (num[0] != "0") {
            str = single(num[0]) + "-hundred";
        }
    }
    else if (num[1] == "0") {
        str =
            threeDig(num[0] + "00") + " and " + single(num[2]);
    }
    else {
        str =
            threeDig(num[0] + "00") + " and " + twoDig(num[1] + num[2]);
    }
    return str;
}
function fourDig(num) {
    let str = "";
    if (num.slice(1) == "000") {
        if (num[0] != "0") {
            str = single(num[0]) + "-thousand";
        }
    }
    else {
        str = fourDig(num[0] + "000") + " " + convert(num.slice(1));
    }
    return str;
}
function fiveDig(num) {
    let str = "";
    if (num.slice(2) == "000") {
        if (num[0] != "0" || num[1] != "0") {
            str = twoDig(num[0] + num[1]) + "-thousand";
        }
    }
    else {
        str = fiveDig(num[0] + num[1] + "000") + " " + convert(num.slice(2));
    }
    return str;
}
function sixDig(num) {
    let str = "";
    if (num.slice(1) == "00000") {
        if (num[0] != "0") {
            str = single(num[0]) + "-lac";
        }
    }
    else {
        str = sixDig(num[0] + "00000") + " " + convert(num.slice(1));
    }
    return str;
}
function sevenDig(num) {
    let str = "";
    if (num.slice(1) == "000000") {
        if (num[0] != "0") {
            str = single(num[0]) + "-million";
        }
    }
    else {
        str = sevenDig(num[0] + "000000") + " " + convert(num.slice(1));
    }
    return str;
}
function eightDig(num) {
    let str = "";
    if (num.slice(2) == "000000") {
        if (num[0] != "0" || num[1] != "0") {
            str = twoDig(num[0] + num[1]) + "-million";
        }
    }
    else {
        str = eightDig(num[0] + num[1] + "000000") + " " + convert(num.slice(2));
    }
    return str;
}
function nineDig(num) {
    let str = "";
    if (num.slice(3) == "000000") {
        if (num[0] != "0" || num[1] != "0" || num[2] != "0") {
            str = threeDig(num[0] + num[1] + num[2]) + "-million";
        }
    }
    else {
        str = nineDig(num[0] + num[1] + num[2] + "000000") + " " + convert(num.slice(3));
    }
    return str;
}
function tenDig(num) {
    let str = "";
    if (num.slice(1) == "000000000") {
        if (num[0] != "0") {
            str = single(num[0]) + "-billion";
        }
    }
    else {
        str = tenDig(num[0] + "000000000") + " " + convert(num.slice(1));
    }
    return str;
}
function elevenDig(num) {
    let str = "";
    if (num.slice(2) == "000000000") {
        if (num[0] != "0" || num[1] != "0") {
            str = twoDig(num[0] + num[1]) + "-billion";
        }
    }
    else {
        str = elevenDig(num[0] + num[1] + "000000000") + " " + convert(num.slice(2));
    }
    return str;
}
function twelveDig(num) {
    let str = "";
    if (num.slice(3) == "000000000") {
        if (num[0] != "0" || num[1] != "0" || num[2] != "0") {
            str = threeDig(num[0] + num[1] + num[2]) + "-billion";
        }
    }
    else {
        str = twelveDig(num[0] + num[1] + num[2] + "000000000") + " " + convert(num.slice(3));
    }
    return str;
}
function bigDig(str) {
    let str1 = str.slice(0, -12);
    let str2 = str.slice(-12);
    return convert(str1) + "-trillion, " + convert(str2);
}
async function input() {
    let number = inquirer.prompt({
        type: "input",
        name: "num",
        message: "Enter number: "
    });
    return (await number).num;
}
var strNumber = await input();
console.log(strNumber + " converted to: " + convert(strNumber));
