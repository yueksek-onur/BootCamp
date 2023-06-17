function zipStrings(strA, strB) {
  // Add you solution here
  let result = "";
  let i = 0;
  while (true) {
    if (strA[i]) {
      result += strA[i];
    }
    if (strB[i]) {
      result += strB[i];
    }
    if (i > strA.length && i > strB.length) {
      break;
    }
    i++;
  }
  return result;
}
