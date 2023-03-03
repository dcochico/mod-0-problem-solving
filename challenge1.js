// Given an array of strings, return only the strings that have exactly 4 characters.
var firstArray = ["Dan", "Kath", "Jun", "Susan"];

for (var i = 0; i < firstArray.length; i++) {
    if (firstArray[i].length === 4) {
        console.log(firstArray[i]);
    }
}

// Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.
var secondArray = ["DaN", "KaTh", "JuN", "SuSaN"];

for (var i = 0; i < secondArray.length; i++) {
    console.log(secondArray[i].toLowerCase());
}

// Given an array of strings, return only the words that begin with the letter "t".
var thirdArray = ["arthur", "tommy", "john", "ada", "finn"];

for (var i = 0; i < thirdArray.length; i++) {
    if (thirdArray[i].startsWith("t")) {
        console.log(thirdArray[i]);
    }
}

// Start with an array of strings. Print only the words that include the letter combination "ing".
var fourthArray = ["crawl", "crawling", "walk", "walking", "run", "running", "meaningless"];

for (var i = 0; i < fourthArray.length; i++) {
    if (fourthArray[i].includes("ing")) {
        console.log(fourthArray[i]);
    }
}

// Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"
var fifthArray = ["Los Angeles", "New York City", "Miami", "Las Vegas", "San Francisco"];
var sortedArray = fifthArray.sort();

for (var i = 0; i < sortedArray.length; i++) {
    console.log(`The next place I want to visit is ${sortedArray[i]}!`);
}

// Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!
var randomSentence = "turing is the best";

function capitalizeFirstLetter(sentence) {
    var sentenceArray = sentence.split(" ")
    // Comment: The .split() method splits a string, as determined by the parameter, into a list of substrings and puts these substrings into an array.
    // Comment: In this case, the parameter is a blank space, which means that everything in our string that exists between these spaces will become its own element in a new array.
    // Comment: Declaring a variable sentenceArray and assigning it to this array.
    revisedArray = sentenceArray.map(x => x[0].toUpperCase() + x.substr(1))
    // Comment: The .map() method modifies the elements of an array, as determined by the function.
    // Comment: The .substr() method returns the portion of a string beginning with the index position given in the parameter.
    // Comment: In this case, the character in index position zero of each element will be capitalized. We will add this to the portion of the element beginning with the character at index position 1.
    var revisedSentence = revisedArray.join(" ")
    // Comment: Now, we will join each element in the array with the specified parameter.
    // Comment: In this case, we will join each element with a space.
    return revisedSentence;
}

console.log(capitalizeFirstLetter(randomSentence));