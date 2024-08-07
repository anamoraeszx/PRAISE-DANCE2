-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
DROP DATABASE PRAISE_DANCE;
CREATE DATABASE PRAISE_DANCE;

USE PRAISE_DANCE;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR (45),
	cpf CHAR (11),
	email VARCHAR (45),
	senha VARCHAR (45)
);

select * from usuario;

CREATE TABLE Categoria (
	idCategoria INT PRIMARY KEY,
	categoria VARCHAR (45)
);

INSERT INTO Categoria VALUES
(1, 'ballet'),
(2, 'Hip Hop'),
(3, 'Jazz'); 

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

	/*Respostas do Usuario e Corretas*/
CREATE TABLE Resposta (
    idResposta INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
    erros INT,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    fkCategoria INT,
    FOREIGN KEY (fkCategoria) REFERENCES Categoria(idCategoria)
);

select * from Resposta;


/* TABELA PARA AVISOS (25/06)*/
CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);