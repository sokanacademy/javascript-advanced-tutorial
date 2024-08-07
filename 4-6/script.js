let text = `A Regular expression is a sequence of characters that forms a search pattern.
When you search for data in a text, you can use this search pattern to describe what you are searching for.
A regular expression can be a single character, or a more complicated pattern.
Regular expressions can be used to perform all types of text search and text replace operations.`;

let regExp = /re/gi;

let matchIndex = [];
while ((match = regExp.exec(text))) {
  matchIndex.push(match.index);
}
console.log(`result: ${matchIndex}`);
