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
