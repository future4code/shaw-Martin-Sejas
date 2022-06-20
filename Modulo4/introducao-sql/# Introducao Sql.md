# Introducao Sql 

## Exercicio 1

### A.
 * FLOAT representa floating number serve pra numeros decimais,
 * VARCHAR representa uma string de caracteres de 8-bit 
 * DATE tem a data YYYY/MM/DD e o timestamp hh:mm:ss
 
### B.
 *  Eles me mostram as base de dados existentes e as tabelas existentes
 
### c.
 * Ela me mostra em detalhe os  conteudos da tabela Actor
 
## Exercicio 2

### A.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Gloria Pires",
1200000,
"1963-08-23",
"female"
);
```
 
### B.
 * Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
 * Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMÁRIO'. 

### c.
```
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);
```
 
### d.
```
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
"004", 
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
); 
```

### e.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

### f. 

```
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
"006", 
"Paolla Oliveira", 
500000, 
"1982-04-14",
"female"
);
```


```
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUE(
"007", 
"Rodrigo Santoro", 
1000000, 
"1975-08-22",
"male"
);
```

## Exercicio 3

### A.
```
SELECT * FROM Actor WHERE gender = "female";
```
 
### B.

```
SELECT * FROM Actor WHERE name = "Tony Ramos";
```
### c.
```
0 rows returned, NULL, NULL, NULL
```
Tudo nullo
 
### d.

```
SELECT * FROM Actor WHERE salary <500000;
```
 
### e. 

Campo nome nao reconhecido.  nome-> name

```
SELECT id, name from Actor WHERE id = "002";
```


## Exercicio 4

### A.
 LIKE significa similar
 WHERE signfica odne
 Between significa entre
 NOT significa nao

 Selecionne tudo da tabela Actor aonde o nome comeca com a ou comeca com j e o salario eh maior que 300000

### B.
```
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND (salary > 350000);
```
### c.

```
SELECT * FROM Actor WHERE (name LIKE "%g%") OR (name LIKE "%G%"); 
```
 
### d.
```
SELECT * FROM Actor WHERE ( ((name LIKE "%g%") OR (name LIKE "%G%")) OR ( (name LIKE "%a%") OR (name LIKE "%A%") )) AND salary BETWEEN 350000 AND 900000; 

```
 
## Exercicio 5
 TEXT eh usado para string bem compridas, aguenta ate 1GB. 

 ```
CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY, 
name VARCHAR(255) NOT NULL, 
synopsis TEXT NOT NULL, 
release_date DATE NOT NULL, 
rating INT NOT NULL
);

INSERT INTO Movie(id, name, synopsis, release_date, rating)
VALUES(
"001", 
" Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/06/01",
7
);

INSERT INTO Movie(id, name, synopsis, release_date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
10
);

INSERT INTO Movie(id, name, synopsis, release_date, rating)
VALUES(
"003", 
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02", 
8
);

INSERT INTO Movie(id, name, synopsis, release_date, rating)
VALUES(
"004", 
"Tropa de Elite", 
"Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
"2007/10/05",
9
);

 ```
## Exercicio 6
```
SELECT id, name, rating FROM Movie WHERE id = "003";
```
 
## Exercicio 7

### A.
```
SELECT * FROM Movie WHERE name LIKE "%vida%";
```

### B.
```
SELECT * FROM Movie
WHERE name LIKE "%Tropa%" OR synopsis LIKE "%Tropa%";
```

### C.
```
SELECT * FROM Movie WHERE release_date < "2022/06/06";
```

### D.
```
SELECT * FROM Movie WHERE (name LIKE "%Tropa%" OR synopsis LIKE "%Tropa%") AND (rating > 7);

```
 
## Exercicio 8
 