# Desafio Node.js com MySQL, Nginx e Docker

Este projeto é um exemplo de aplicação Node.js que utiliza MySQL como banco de dados e Nginx como proxy reverso, tudo rodando em contêineres Docker.

## Estrutura do Projeto

- **Node.js**: Servidor que insere e lista nomes no banco de dados.
- **MySQL**: Banco de dados para armazenar os nomes.
- **Nginx**: Proxy reverso para o servidor Node.js.
- **Docker**: Contêineres para cada componente.

## Pré-requisitos

- Docker
- Docker Compose

## Configuração

1. Clone o repositório:

    ```sh
    git clone https://github.com/Lt-lopes1994/desafio_node.git
    cd desafio_node_fc
    ```

2. Crie e inicie os contêineres Docker:

    ```sh
    docker-compose up -d
    ```

3. Verifique se os contêineres estão em execução:

    ```sh
    docker-compose ps
    ```

## Inicializar a Tabela no Banco de Dados

1. Acesse o contêiner do MySQL:

    ```sh
    docker-compose exec db mysql -u root -p
    ```

2. Insira a senha `root` (ou a senha especificada no `MYSQL_ROOT_PASSWORD`).

3. Execute os seguintes comandos para criar a tabela e inserir alguns dados:

    ```sql
    USE nodedb;
    CREATE TABLE nomes (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255) NOT NULL);
    INSERT INTO nomes (nome) VALUES ('Alice'), ('Bob'), ('Charlie');
    ```

## Testar a Aplicação

1. Acesse `http://localhost/nomes` no seu navegador. Você deve ver a mensagem `<h1>Full Cycle Rocks!</h1>` seguida pela lista de nomes cadastrados no banco de dados.

## Estrutura do Código

- **index.js**: Código principal do servidor Node.js.
- **docker-compose.yml**: Configuração dos serviços Docker.
- **nginx.conf**: Configuração do Nginx.
- **Dockerfile**: Configuração do contêiner Node.js.

