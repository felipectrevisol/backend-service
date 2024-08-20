# Backend Service

> É um projeto de portfólio (*muito*) em desenvolvimento :)  
> E sim, eu sei, o .env e o sequelize.config.json foram "commitados" ;)

# Testando o Projeto

> Clonar o projeto git na maquina de preferências pessoal e executar os comandos abaixo. Tô melhorando esse comando ainda :)

### Executando Testes.
```
npm run test
```

### Build das images e criação e execução dos containers.
```
docker compose up
```

### Na máquina local:
```
npm run db:migrate
npm run db:seed
```

### Dentro do container docker:
```
npm run db:migrate --env docker
npm run db:seed --env docker
```

## Limitações que encontrei no Squelize-Cli

> Por limitações do sequelize-cli, adicionei nos diretórios database/migrations e database/seeders o arquivo package.json com exclusiva configuração abaixo:
```
{
  "type":"commonjs"
}
```

## API Rest - URL´s

### Swagger

```
http://localhost:3000/v1/contact/docs
```

### API de Contatos:

```
http://localhost:3000/v1/contact/all
http://localhost:3000/v1/contact/1
http://localhost:3000/v1/contact/1/with/phone/5547974112300
```  

### API de Números de Telefones:

```  
http://localhost:3000/v1/phone/all  
http://localhost:3000/v1/phone/5548974112300  
```
