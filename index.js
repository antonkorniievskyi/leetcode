/**
 * @param {string} s
 * @return {number}
 */
const minDeletions = (s) => {
  let res = 0;
  const frequency = new Map();
  const used = new Set();

  for (char of s)
    frequency.set(char, frequency.has(char) ? frequency.get(char) + 1 : 1)

  const iterator = frequency.values();

  let currentIteration = iterator.next();

  while (!currentIteration.done) {
    while (used.has(currentIteration.value) && currentIteration.value > 0) {
      currentIteration.value--;
      res++;
    }

    used.add(currentIteration.value);
    currentIteration = iterator.next();
  }

  return res;
};

console.log(minDeletions("aab")); // expected output: 0
console.log(minDeletions("aaabbbcc")); // expected output: 2
console.log(minDeletions("ceabaacb")); // expected output: 2
console.log(minDeletions("ceabaacbb")); // expected output: 3
