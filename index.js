const string = "hello world"

String.prototype.capitalize = function() {
    return this[0].toUpperCase() + this.slice(1)
}

// const result = string.capitalize()
// console.log(result)

String.prototype.allCaps = function() {
    return this.toUpperCase()
}

// const result = string.allCaps()
// console.log(result)

String.prototype.capitalizeWords = function() {
    let words = this.split(" ")
    return words.map(word => word.capitalize()).join(' ')
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
    const string = this.capitalizeWords()
    const string2 = this.charAt(0).toLowerCase()
    const string3 = string2 + string.slice(1)
    return string3.removeExtraSpaces('')
}

// const result = string.camelCase()
// console.log(result)

String.prototype.shift = function(num) {
    return this.slice(num) + this.substring(0, num)
}

// const result = string.shift(2)
// console.log(result)