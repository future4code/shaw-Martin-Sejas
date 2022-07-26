### Exercicio 1 

```typescript
const findFirstRecurringCharacter = (input) => {
  const charHashMap = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
}; 
```

#### Resposta 1

Complexidade: O(n)


### Exercicio 2

```typescript 
export const func = (
  source: string,
  comparison: string
): boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
};
```

#### Resposta 2
Complexidade O(n)


### Exercicio 3 

```typescript 
export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};
```

#### Resposta 3
Complexidade O(2)

Obs: Evaluação do if é um ciclo do processador, igualmente como o throw new Error ou adicionar o valor na matriz, então para mim
a complexidade é 2, e não 1 como o gabarito. 

### Exercicio 4

```typescript 
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}
```

#### Resposta 4 

Complexidade O(N^2)

### Exercicio 5 e Resposta

Mais eficiente primeiro

1) Exercicio 3
2) Exercicio 1
3) Exercicio 2
4) Exercicio 4


## DESAFIOS

### Exercicio 6

```typescript 
function product(a: number, b: number): number {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum
}
```

#### Resposta 6

Complexidade: O(b)

### Exercicio 7 

```typescript 
function mod(a: number, b: number): number {
  if (b <= a) {
    return -1;
  }
  let div = a / b;
  return a - div * b;
}
```

#### Resposta 7

Complexidade: O(1)


### Exercicio 8

```typescript 
function copyArray(array: number[]): number[] {
  let copy: number[] = [];
  for (const value of array) {
    copy = appendToNew(copy, value);
  }
  return copy;
}

function appendToNew(array: number[], value: number) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.push(value);
  return newArray;
}
```

#### Resposta 8 

Complexidade: O(n^2) 
