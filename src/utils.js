export function spaceToDash(str) {
  return str.replace(/\s+/g, "-").toLowerCase();
}

export function random(size) {
  return Math.floor(Math.random() * size);
}
