#### Exercicio 1
A) Removeria a coluna de salario

B) Mudaria o campo gender para ter o nome sex 

C) Mudaria o campo de gender para ser do formato VARCHAR(255)

D)

#### Exercicio 2

A) UPDATE Actor SET name = "Moacyr Franco", birth_date = "1997-02-14" where id = "003";

B) UPDATE Actor
    SET name = "JULIANA PAES"
    WHERE name = "Juliana Paes";

    UPDATE Actor
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PAES"; 


C) 
UPDATE Actor SET name = "Bruno Gagliasso", birth_date = "2020-02-10", salary = 200000, gender = "male" WHERE id = "005";

#### Exercicio 3

A) DELETE FROM Actor WHERE name = "Fernanda Montenegro"

B) DELETE FROM Actor WHERE gender = "male" AND salary > 10000000

C) 

### Exercicio 4

A) SELECT MAX(salary) FROM Actor

B) SELECT MIN(salary) FROM Actor WHERE gender = "female"

C) SELECT COUNT(*) FROM Actor WHERE gender = "female"

D) SELECT SUM(salary) FROM Actor

### Exercicio 5

A) Ela pega a conta de linhas com essa variabel

B) SELECT id, name FROM ACtor ORDER BY name DESC;

C) SELECT * FROM Actor ORDER BY salary;
