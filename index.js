// String Method Tasks

// 1. Capitalize the first letter of a given string.
// Example: "hello" → "Hello"

// let text = "Hello"
// const textUpper = text.charAt(0).toUpperCase() + text.slice(1)
// console.log(textUpper)

// 2. Check if a string contains a specific substring.
// Example: "Hello World", substring "World" → true

// let text2 = "Hello World"
// let substring = "World"
// if(text2.includes(substring))
// {
//     console.log(true)
// }

// 3. Repeat a given string 'n' times.
// Example: "abc", 3 → "abcabcabc"

// let text3 = "abc"
// console.log(text3.repeat(3))

// 4. Replace all occurrences of a specific word in a string with another word.
// Example: "I love apples", replace "apples" with "oranges" → "I love oranges"

// let text4 = "I love apples"
// let newText = text4.replace("apples","oranges")
// console.log(newText)

// 5. Count the number of words in a sentence.
// Example: "Hello World!" → 2

// let text5 = "Hello World"
// let textSplit = text5.split(" ").length
// console.log(textSplit)

// 6. Reverse the characters in a given string.
// Example: "hello" → "olleh"

// let text6 ="hello"
// let newText2 = text6.split("").reverse().join("")
// console.log(newText2)

// 7. Extract the text between two characters.
// Example: "Hello [World]", characters "[" and "]" → "World"

// let text7 = "Hello [World]"
// let newText3 = text7.split("[")[1].split("]")[0]
// console.log(newText3)

// 8. Convert a string to snake_case format.
// Example: "Hello World" → "hello_world"

// let text8 = "Hello World"
// let newText4 = text8.toLowerCase().replace(" ", "_")
// console.log(newText4)

// 9. Remove leading, trailing, and extra spaces in a string.
// Example: "   Hello    World   " → "Hello World"

// let text9 = "   Hello    World   "
// let newText5 = text9.trim().replace(/ +/g, " ")
// console.log(newText5)

// 10. Identify the longest word in a given sentence.
// Example: "I love programming" → "programming"

// let text10 = "I love programming"
// let words = text10.split(" ")
// let longestWord = ""
// for (let word of words) 
// {
//     if (word.length > longestWord.length) 
//     {
//         longestWord = word
//     }
// }
// console.log(longestWord)


// Number Method Tasks

// 1. Convert a string to a number and handle invalid cases.
// Example: "123" → 123, "abc" → NaN

// let str1 = "123"
// let str2 = "abc"
// let num1 = Number(str1)
// let num2 = Number(str2) 
// console.log(num1)
// console.log(num2) 

// 2. Round a decimal number to two decimal places.
// Example: 3.14159 → 3.14

// let decimal = 3.14159
// let roundDecimal = Number(decimal.toFixed(2))
// console.log(roundDecimal)

// 3. Write a function that returns the square root of a given number.
// Example: 5 → 25

// function square(num) 
// {
//     return num * num
// }
// let num = 5
// let result = square(num)
// console.log(result)

// 4. Write a function that converts a string to a floating-point number.
// Example: "2.454" → 2.454

// function stringToFloat(str) 
// {
//     return parseFloat(str)
// }
// let floatString = "2.454"
// let result = stringToFloat(floatString)
// console.log(result)

// 5. Parse a string to an integer
// Example: "55" → 55

// function stringToInteger(str) 
// {
//     return parseInt(str)
// }
// let intString = "55"
// let result = stringToInteger(intString)
// console.log(result)

// 6. Write a function that checks if a given value is NaN (Not-a-Number)
// Example: "ereferf" → true, "23" → false

// function isValueNaN(value)
// {
//     return isNaN(value)
// }
// let text11 = "ereferf"
// let text12 = "23"
// let result11 = isValueNaN(text11)
// let result12 = isValueNaN(text12)
// console.log(result11) 
// console.log(result12) 

// 7. Calculate the sum of the digits of a given number.
// Example: 123 → 6

// let num = 123
// let numString = String(num)
// let sum = 0
// for (let i = 0; i < numString.length; i++) 
// {
//     sum += Number(numString[i])
// }
// console.log(sum)

// 8. Find the number of digits in a given number.
// Example: 1234 → 4

// let num = 123
// let numString = String(num)
// let count = numString.length
// console.log(count + 1)

// 9. Find the sum of array items
// Example: [1, 3, "5"] → 9

// let arr = [1, 3, "5"] 
// let sum = 0
// for (let i = 0; i < arr.length; i++) 
// {
//     sum += Number(arr[i])
// }
// console.log(sum)

// 10. Write a function that rounds a given decimal number to the nearest integer.
// Example: 3.12 → 3

// function roundToInteger(decimal) 
// {
//     return Math.round(decimal)
// }
// let decimalNumber = 3.12
// let result = roundToInteger(decimalNumber)
// console.log(result)

