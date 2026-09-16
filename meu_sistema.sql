CREATE DATABASE IF NOT EXISTS meu_sistema;
USE meu_sistema;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (email, senha) VALUES
('anab@email.com', '1234'),
('admin@email.com', '1234');