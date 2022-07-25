"use strict";
function stringCompression(originalString) {
    let compressedString = "";
    originalString = originalString.toLowerCase();
    let previousChar = originalString[0];
    let charRepetitions = 0;
    for (let char of originalString) {
        if (previousChar === char) {
            charRepetitions++;
        }
        else {
            compressedString = compressedString + `${previousChar}${charRepetitions}`;
            previousChar = char;
            charRepetitions = 1;
        }
    }
    compressedString = compressedString + `${previousChar}${charRepetitions}`;
    if (compressedString.length > originalString.length) {
        return originalString;
    }
    else {
        return compressedString;
    }
}
console.log(stringCompression("aabbb"));
console.log(stringCompression("aabccccaaa"));
console.log(stringCompression("accurate"));
console.log(stringCompression("escola"));
console.log(stringCompression("accuraaaaaaaaaate"));
//# sourceMappingURL=Exercicio2.js.map