//The Encoder function takes two arrays as its parameters, raw and code_words.
//This function replaces the words in `raw` with the words in `code_words` such that the first occurrence of
//each word in `raw` is assigned the first unassigned word in `code_words`

function encoderSolution(raw, coded_words) {
  mapping = {}
  ans = []
  var uniqueRaw = Array.from(new Set(raw));
  for (i=0; i<uniqueRaw.length; i++) {
    mapping[uniqueRaw[i]] = coded_words[i]
  }
  for (i of raw) {
    ans.push(mapping[i]);
  }
  return ans
}
module.exports = encoderSolution;