# API REST em Node.JS
# rentalx - Locadora de carros.

**RF** - Requesito Funcional.
**RNF** - Requesito não funcional
**RN** - Regra de negócio.


# Cadastro do Carro.
**RF**
Deve ser possível cadastrar um carro.

**RN**
Não deve ser possível cadastrar um carro com uma placa existente.
O carro deve ser cadastrado por padrão como disponível para locação.
O usuário responsável pelo cadastrado deve ser administrador.


# Listagem dos carros
**RF**
Deve ser possível listar todos os carros disponível.
Deve ser possível listar todos os carros disponível por categorias.
Deve ser possível listar todos os carros disponível pelo nome da marca.
Deve ser possível listar todos os carros disponível pelo nome do carro.

**RN**
Usuário não precisa está logado no sistema.

# Cadastro de Espeficicações no carro
**RF**
Deve ser possível cadastrar uma especificação para o carro.
Deve ser possível listar todas as especificações.
Deve ser listar todos os carros.

**RN**
Não deve ser possivel cadastrar um especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser administrador.


# Cdastro de Imagem de Carro
**RF**
Deve ser possivel cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o Multer para upload das imagens.

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel

**RN**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo usuário. 
Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo carro.