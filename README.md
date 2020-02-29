# Node - SQL

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/osvaldokalvaitir/node-tindev/blob/master/LICENSE)
![](https://img.shields.io/github/package-json/v/osvaldokalvaitir/node-sql.svg)
![](https://img.shields.io/github/last-commit/osvaldokalvaitir/node-sql.svg?color=red)
![](https://img.shields.io/github/languages/top/osvaldokalvaitir/node-sql.svg?color=yellow)
![](https://img.shields.io/github/languages/count/osvaldokalvaitir/node-sql.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/osvaldokalvaitir/node-sql.svg)
![](https://img.shields.io/github/repo-size/osvaldokalvaitir/node-sql.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)  
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Node.js%20SQL&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fosvaldokalvaitir%2Fnode-sql%2Fmaster%2FInsomnia.json%3Ftoken%3DAJUPLGNANF54J6LTP62KRE26LKIMI)

Aplicação usando Node.js, Express, Nodemon, Sequelize, pg e pg-hstore.

## Índice

- [Desenvolvimento](#desenvolvimento)

  - [Configuração do Ambiente](#configuração-do-ambiente)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto](#execução-do-projeto)

- [Utilizados no Projeto](#utilizados-no-projeto)

  - [Bibliotecas](#bibliotecas)
  
  - [APIs](#apis)  

  - [Ferramentas](#ferramentas)

## Desenvolvimento

### Configuração do Ambiente

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga `Configuração de Ambiente`.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga `Instalação de Projeto`.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga `Execução de Projeto para Desenvolvimento` ou `Execução de Projeto para Produção`.

## Utilizados no Projeto

### Bibliotecas

- [Express](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/express.md)

- [Nodemon](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/nodemon.md)

- [pg](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/pg.md)

- [pg-hstore](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/pg-hstore.md)

- [Sequelize](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/sequelize.md)

- [sequelize-cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/sequelize-cli.md)

### APIs

- **Interna**

  - **Rotas**

    - Usuários

      - Lista todos os usuários
      - Adiciona novos usuários

    - Endereços

      - Lista todos os endereços de um usuário
      - Adiciona novos endereços para um usuário

    - Tecnologias

      - Lista todas as tecnologias de um usuário
      - Adiciona novas tecnologias para um usuário
      - Deleta tecnologias para um usuário

    - Relatório

      - Lista todos os usuários que tem email que termina com "@outlook.com" e que moram na rua "Rua Coronel Macedo" e que tem tecnologias que começam com "React"

### Ferramentas

- [Docker](https://github.com/osvaldokalvaitir/projects-settings/blob/master/virtualization/docker/docker.md)

  - Imagem do PostgreSQL: [kartoza/postgis](https://github.com/osvaldokalvaitir/projects-settings/blob/master/virtualization/docker/images/kartoza-postgis.md)

- [Insomnia](https://github.com/osvaldokalvaitir/projects-settings/blob/master/api/insomnia.md)

- [Postbird](https://github.com/osvaldokalvaitir/projects-settings/blob/master/database/postgresql/postbird.md)