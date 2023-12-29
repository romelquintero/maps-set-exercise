// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str) {
  const lowerStr = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  const newVowelMap = new Map();

  for (let char of lowerStr) {
    if (vowels.includes(char)) {
      newVowelMap.set(char, (newVowelMap.get(char) || 0) + 1);
    }
  }
  return newVowelMap;
}
