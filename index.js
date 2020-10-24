// Challenge 1 capitalize() - makes the first character of a given string uppercase.
// Challenge 2 allCaps() - makes all characters uppercase. (this is the same as str.toUppercase())
// Challenge 3 capitalizeWords() - makes the first character of each word uppercase. Imagine that each word is separated 
// by a space.
// Challenge 4 removeExtraSpaces() - Removes all spaces from the beginning and end of a String along with any extra spaces 
// in the middle. If more than one space appears in the middle of a string it is replaced by a single space.
// Challenge 5 kabobCase() - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
// Challenge 6 snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
// Challenge 7 camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other 
// words, and removes all spaces.
// Challenge 8 shift() this method will take the first character of a string and move to the end of a string.

const string = "hello world"

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

// const result = string.capitalize()
// console.log(result)

String.prototype.allCaps = function() {
    return this.toUpperCase()
}

// const result = string.allCaps()
// console.log(result)

String.prototype.capitalizeWords = function() {
    let result = ""
    let words = this.split(" ")
    words.map(word => result += word.capitalize() + ' ')
    return result
}

// const result = string.capitalizeWords()
// console.log(result)

// const string2 = "     hello   world    "

String.prototype.removeExtraSpaces = function(pattern) {
    return this.replace(/\s+/g, pattern).trim()
}

// const result = string2.removeExtraSpaces(' ')
// console.log(result)

String.prototype.kabobCase = function(pattern) {
    return this.toLowerCase().removeExtraSpaces().replace(/\s+/g, pattern)
}

// const result = string2.removeExtraSpaces('-')
// console.log(result)

String.prototype.snakeCase = function(pattern) {
    return this.toLowerCase().removeExtraSpaces().replace(/\s+/g, pattern)
}

// const result = string2.removeExtraSpaces('_')
// console.log(result)

String.prototype.camelCase = function() {
    let string = this.capitalizeWords()
    let string2 = this.charAt(0).toLowerCase()
    let string3 = string2 + string.slice(1)
    return string3.removeExtraSpaces('')
}

// const result = string.camelCase()
// console.log(result)

String.prototype.shift = function(num) {
    return this.slice(num) + this.substring(0, num)
}

const result = string.shift(2)
console.log(result)