# Backend Service

> É um projeto de portfólio (*muito*) em desenvolvimento :)  
> E sim, eu sei, o .env e o sequelize.config.json foram "commitados" ;)

## Limitações que encontrei no Squelize-Cli

> Por limitações do sequelize-cli, adicionei nos diretórios database/migrations e database/seeders o arquivo package.json com exclusiva configuração abaixo:
```
{
  "type":"commonjs"
}
```

## API Url de Contatos:

```
http://localhost:3000/v1/contact/docs
http://localhost:3000/v1/contact/all
http://localhost:3000/v1/contact/1
http://localhost:3000/v1/contact/1/with/phone/5547974112300
```  

## API Url de Números de Telefones:

```  
http://localhost:3000/v1/phone/all  
http://localhost:3000/v1/phone/5548974112300  
```
