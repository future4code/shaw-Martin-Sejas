

CREATE TABLE Cookenu_Users (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL, 
    name VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL
); 

CREATE TABLE Cookenu_Recipes (
    id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255)  NOT NULL, 
    description VARCHAR(255) NOT NULL, 
    createdAt DATE NOT NULL
)