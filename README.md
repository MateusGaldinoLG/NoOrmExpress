# No ORM PostgreSQL connection

Esse é o repositório de um tutorial de conexão sem ORM dentro de uma API Typescript utilizando a biblioteca **pg**.

## Estrutura do src

### Server.ts

Arquivo principal que roda todo o programa

### Router.ts

Arquivo que ldia com as rotas dos UseCases e manda para o Server.ts

### database

Na pasta de database estão os arquivos de conexão com o banco de dados (connection.ts) e de execução das migrações(runMigrations.ts). As migrações estão dentro da pasta migrations em formato .sql.

### Entities

Na pasta de entities estão as classes com os objetos de entidades para o banco de dados

### repositories

Na pasta repositories estão as queries trabalhadas pelo projeto: findById e create, que utilizam o drive do pg a partir do método Pool e fazem comandos sql como INSERT e SELECT.

### UseCases

Na pasta UseCases, estão dois casos de uso que utilizam os métodos feitos na pasta repositori, um router com GET que utiliza o findById e outro com POST que utiliza o create.  
Cada UseCase possui um UseCase que pega o método da interface de repositories, outro Controller que faz o tratamento do dado e retorna JSON e um index que funciona como a implementação da rota do Express.


