CREATE TABLE Cubo_Users if not exists {
    id INT AUTOINCREMENT PRIMARY KEY, 
    first_name VARCHAR(255) NOT NULL, 
    last_name VARCHAR(255) NOT NULL, 
    participation int NOT NULL
}