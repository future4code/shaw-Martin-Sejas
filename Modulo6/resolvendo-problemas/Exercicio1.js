"use strict";
console.log("Exercicio1 funcionando");
function isOneEdit(originalString, editedString) {
    let isOneEdit = true;
    if (originalString.length - editedString.length === 1) {
        for (let i = 0; i < editedString.length; i++) {
            if (originalString[i] !== editedString[i])
                isOneEdit = false;
        }
        return isOneEdit;
    }
    else if (editedString.length - originalString.length === 1) {
        for (let i = 0; i < originalString.length; i++) {
            if (originalString[i] !== editedString[i])
                isOneEdit = false;
        }
        return isOneEdit;
    }
    else if (editedString.length === originalString.length) {
        let changedCharacters = 0;
        for (let i = 0; i < originalString.length; i++) {
            if (originalString[i] !== editedString[i])
                changedCharacters++;
        }
        return changedCharacters === 1;
    }
    else {
        return false;
    }
}
console.log(isOneEdit("banana", "banan"));
console.log(isOneEdit("banana", "bananak"));
console.log(isOneEdit("banana", "panana"));
console.log(isOneEdit("banana", "bananaaa"));
//# sourceMappingURL=Exercicio1.js.map