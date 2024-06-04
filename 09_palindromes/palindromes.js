const palindromes = function (string) {
    // Convert to lowercase, remove non-alphanumeric characters using regex, then rejoin as new string
    const cleanedString = string
      .toLowerCase()
      .replace(/[\W_]/g, '');
  
    // Create a new reversed string for comparison
    const reversedString = cleanedString.split('').reverse().join('');
    console.log(cleanedString);
    console.log(reversedString);
    // Return the outcome of the comparison which will either be true or false
    return cleanedString === reversedString;
  };
  console.log(palindromes('A car, a man, a maraca_!.'));
  module.exports = palindromes;
  