```sql
CREATE TABLE Cep (
cep varchar(255) primary key,
logradouro varchar(255) not null, 
numero int not null, 
complemento varchar(255),
bairro varchar(255) not null,
cidade varchar(255) not null, 
estado varchar(255) not null

);
```