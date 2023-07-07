function isPangram(sentence) {
  // Convert the sentence to lowercase
  sentence = sentence.toLowerCase();
  
  // Create a set to store the unique letters in the sentence
  var letters = new Set();
  
  // Iterate over each character in the sentence
  for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i];
    
    // Check if the character is a letter (a-z)
    if (char >= 'a' && char <= 'z') {
      // Add the letter to the set
      letters.add(char);
    }
  }
  
  // Check if the number of unique letters in the set is equal to 26 (total number of English alphabets)
  return letters.size === 26;
}

// Test the function
var sentence1 = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(sentence1)); // Output: true

var sentence2 = "Pack my box with five dozen liquor jugs";
console.log(isPangram(sentence2)); // Output: true

var sentence3 = "Hello world";
console.log(isPangram(sentence3)); // Output: false