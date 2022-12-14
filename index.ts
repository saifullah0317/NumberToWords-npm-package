#! /usr/bin/env node
import inquirer from "inquirer";

function eliminateZero(str:string) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "0") {
      str=str.replace("0", "");
    } 
    else {
      break;
    }
  }
  return str;
}

  
  function convert(x:string) {
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
  
  function single(num:string) {
    let str = "";
    switch (num) {
      case "0":
        str = "zero";
        break;
      case "1":
        str = "one";
        break;
      case "2":
        str = "two";
        break;
      case "3":
        str = "three";
        break;
      case "4":
        str = "four";
        break;
      case "5":
        str = "five";
        break;
      case "6":
        str = "six";
        break;
      case "7":
        str = "seven";
        break;
      case "8":
        str = "eight";
        break;
      case "9":
        str = "nine";
        break;
    }
    return str;
  }
  
  function twoDig(num:string) {
    let str = "";
    if (num[1] == "0") {
      switch (num) {
        case "10":
          str = "ten";
          break;
        case "20":
          str = "twenty";
          break;
        case "30":
          str = "thirty";
          break;
        case "40":
          str = "fourty";
          break;
        case "50":
          str = "fifty";
          break;
        case "60":
          str = "sixty";
          break;
        case "70":
          str = "seventy";
          break;
        case "80":
          str = "eighty";
          break;
        case "90":
          str = "ninety";
          break;
      }
    } 
    else if (num[0] == "1") {
      switch (num) {
        case "11":
          str = "eleven";
          break;
        case "12":
          str = "twelve";
          break;
        case "13":
          str = "thirteen";
          break;
        case "14":
          str = "fourteen";
          break;
        case "15":
          str = "fifteen";
          break;
        case "16":
          str = "sixteen";
          break;
        case "17":
          str = "seventeen";
          break;
        case "18":
          str = "eighteen";
          break;
        case "19":
          str = "nineteen";
          break;
      }
    } 
    else {
      str = twoDig(num[0] + "0") + "-" + single(num[1]);
    }
    return str;
  }
  
  function threeDig(num:string) {
    let str = "";
    if (num.slice(1)=="00") {
      if(num[0] != "0")
      {
        str = single(num[0]) + "-hundred";
      }
    } 
    else if (num[1] == "0") {
      str =
        threeDig(num[0] + "00") + " and " + single(num[2]);
    } 
    else {
      str =
        threeDig(num[0] + "00") + " and " + twoDig(num[1]+num[2]);
    }
    return str;
  }
  
  function fourDig(num:string) {
    let str = "";
    if (num.slice(1)=="000") {
      if(num[0]!="0")
      {
        str = single(num[0]) + "-thousand";
      }
    } 
    else {
      str = fourDig(num[0] + "000") + ", " + convert(num.slice(1));
    }
    return str;
  }
  
  function fiveDig(num:string) {
    let str = "";
    if (num.slice(2)=="000") {
      if(num[0] != "0" || num[1] != "0")
      {
        str = twoDig(num[0] + num[1]) + "-thousand";
      }
    } 
    else {
      str = fiveDig(num[0] + num[1] + "000") + ", " + convert(num.slice(2));
    }
    return str;
  }
  
  function sixDig(num:string) {
    let str = "";
    if (num.slice(1)=="00000") {
      if(num[0] != "0")
      {
        str = single(num[0]) + "-lac";
      }
    } 
    else {
      str = sixDig(num[0] + "00000") + ", " + convert(num.slice(1));
    }
    return str;
  }
  
  function sevenDig(num:string) {
    let str = "";
    if (num.slice(1)=="000000") {
      if(num[0] != "0")
      {
        str = single(num[0]) + "-million";
      }
    } 
    else {
      str = sevenDig(num[0] + "000000") + ", " + convert(num.slice(1));
    }
    return str;
  }
  
  function eightDig(num:string) {
    let str = "";
    if (num.slice(2)=="000000") {
      if(num[0] != "0" || num[1] != "0")
      {
        str = twoDig(num[0] + num[1]) + "-million";
      }
    } 
    else {
      str = eightDig(num[0] + num[1] + "000000") + ", " + convert(num.slice(2));
    }
    return str;
  }
  
  function nineDig(num:string) {
    let str = "";
    if (num.slice(3)=="000000") {
      if(num[0] != "0" || num[1] != "0" || num[2] != "0")
      {
        str = threeDig(num[0] + num[1] + num[2]) + "-million";
      }
    } 
    else {
      str = nineDig(num[0] + num[1] + num[2] +"000000") + ", " + convert(num.slice(3));
    }
    return str;
  }
  
  function tenDig(num:string) {
    let str = "";
    if (num.slice(1)=="000000000") {
      if(num[0] != "0")
      {
        str = single(num[0]) + "-billion";
      }
    } 
    else {
      str = tenDig(num[0] + "000000000") + ", " + convert(num.slice(1));
    }
    return str;
  }
  
  function elevenDig(num:string) {
    let str = "";
    if (num.slice(2)=="000000000") {
      if(num[0] != "0" || num[1] != "0")
      {
        str = twoDig(num[0] + num[1]) + "-billion";
      }
    } 
    else {
      str = elevenDig(num[0] + num[1] + "000000000") + ", " + convert(num.slice(2));
    }
    return str;
  }
  
  function twelveDig(num:string) {
    let str = "";
    if (num.slice(3)=="000000000") {
      if(num[0] != "0" || num[1] != "0" || num[2] != "0")
      {
        str = threeDig(num[0] + num[1] + num[2]) + "-billion";
      }
    } 
    else {
      str = twelveDig(num[0] + num[1] + num[2] + "000000000") + ", " + convert(num.slice(3));
    }
    return str;
  }
  
  function bigDig(str:string) 
  {
    let str1 = str.slice(0, -12);
    let str2 = str.slice(-12);
    return convert(str1) + "-trillion, " + convert(str2);
  }
  
 async function input(){
    let number=inquirer.prompt({
        type:"input",
        name:"num",
        message:"Enter number: "
    })
    return (await number).num;
  }
  var strNumber = await input();
  console.log(strNumber + " converted to: " + convert(strNumber));