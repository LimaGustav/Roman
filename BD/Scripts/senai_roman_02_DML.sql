USE ROMAN_GEN
GO

INSERT INTO TEMA (titulo)
VALUES	('Gest�o'),('HQs'),('Linguagens de programa��o')
GO

INSERT INTO TIPOUSUARIO (titulo)
VALUES ('PROFESSOR'),('ADMINISTRADOR')
GO

INSERT INTO USUARIO(idTipoUsuario,nome,email,senha)
VALUES	(1,'Saulo','saulo@gmail.com','saulo123'),
		(1,'Lucas','lucas@gmail.com','lucas123'),
		(1,'Odirlei','odirlei@gmail.com','odirlei123'),
		(2,'ADM','adm@gmail.com','adm123')
GO

INSERT INTO PROJETO (idUsuario,idTema,titulo,descricao)
VALUES	(1,1,'Controle de estoque','Organiza��o de estoques corporativos'),
		(2,2,'Listagem de Personagens','Listagem de personagens de HQs famosas'),
		(1,3,'Gufi','Administra��o de eventos em geral')
GO
