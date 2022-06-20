### Exercicio 1

a) Uma chave estrangeira eh uma coluna que pega os dados diretamente de outra tabela, e assim relaciona as bases de dados. 


B) 
```sql
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"004",
"Tem que ver!",
8.1,
"004");
```

C) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shaw-21814948-sejas`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

nao existe


D) 
```sql
ALTER TABLE Movie DROP COLUMN rating;
```

E) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`shaw-21814948-sejas`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))


### Exercicio 2

A) Eh uma tabela que vai referenciar um filme e varios atores para definir o elenco. 

B) 

C) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shaw-21814948-sejas`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
nao existe, tem existir

D) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`shaw-21814948-sejas`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))


### Exercicio 3

A) Se unem nesse sentido, igualando o id

B) SELECT Movie.name, Movie.id, Rating.rate FROM Movie INNER JOIN Rating ON Movie.id = Rating.movie_id; 