"use strict";

function log(obj){
    console.log(obj);
}

function max(num1, num2){
    if(num1 > num2){
        return num1;
    }
    return num2;
}

log("max: " + max(1,2.5));

function maxOfThree(num1, num2, num3){
    return Math.max(num1,num2,num3);
}

log("maxOfThree: " + maxOfThree(1.3,2,3));

function isVowel(char){
    return ["a","e","i","o","u"].includes(char.toLowerCase());
}

log("IsVowel: " + isVowel('E'));

function sum(arr){
    return arr.reduce((accumulated, next) => accumulated + next);
}

log("sum: " + sum([1,1,2]));

function multiply(arr){
    return arr.reduce((accumulated, next) => accumulated * next);
}

log("multiply: " + multiply([9,9,9]));

function reverse(str){
    return [...str].reverse().join('');
}

log("reverse: " + reverse(".looc si daerpS"));

function longestLength(str) {   
    return Math.max(...str.split(' ').map(word => word.length));
}  

log("longestLength: " + longestLength("i'm testing my code rn."));

function filterLongWords(str, i){
    return str.split(' ').filter(word => word = word.length > i);
}

log("filterLongWords: " +filterLongWords("lorem ipsum dolor sit amet", 4));

function computeSumOfSquares(arr){
    return arr.reduce((accumulated, square)=> accumulated + square ** 2,0);
}

log("computeSumOfSquares: " + computeSumOfSquares([1,2,3]));


function computeOddNumbersOnly(arr){
    return arr.filter(number => number % 2 != 0);
}

log("computeOddNumbersOnly: " + computeOddNumbersOnly([1,2,3]));


function computeEvenNumbersOnly(arr){
    return arr.filter(number => number % 2 == 0);
}

log("computeEvenNumbersOnly: " + computeEvenNumbersOnly([1,2,3,4,5]));

function computeSumOfSquaresOfEvensOnly(arr){
    return computeSumOfSquares(computeEvenNumbersOnly(arr));
}

log("computeSumOfSquaresOfEvensOnly: " + computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));

function findSecondBiggest(arr){
    arr.sort();
    return arr[arr.length -2];
}

log("findSecondBiggest: " + findSecondBiggest([9, 99, 999, 10]));

function computeFibonacci(length, a, b){
    let arr = [a,b];
    let previous = a;
    let current = b;
    let index = 0;

    while(index < length){
        let temp = previous;
        previous = current;
        current += temp; 
        arr.push(current);
        index++;
    }
    return arr;
}

log("computeFibonacci: " + computeFibonacci(16, 5, 8));