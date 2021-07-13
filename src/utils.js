export function spaceToDash(str) {
  return str.replace(/\s+/g, "-").toLowerCase();
}

export function random(size) {
  return Math.floor(Math.random() * size);
}

export function countTrueValues(dict) {
  let count = 0;

  for (let i in dict) {
    if (dict[i] === true) {
      count++;
    }
  }

  return count;
}
