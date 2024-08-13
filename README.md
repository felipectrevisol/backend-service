# Backend Service

> É um projeto de portfólio (*muito*) em desenvolvimento :)  
> E sim, eu sei, o .env e o sequelize.config.json foram "commitados" ;)

## Workaround

> No diretório database estão os subdiretórios migrations e seeders e dentro de cada um dele tem um package.json para o uso exclusivo do cli do sequelize: porque por padrão deixei o type como CommonJS.
```
{
  "type":"commonjs"
}
```

## API Url de Contatos:

```  
http://localhost:3000/v1/contact/all  
http://localhost:3000/v1/contact/1  
http://localhost:3000/v1/contact/1/with/phone/5547974112300  
```  

## API Url de Números de Telefones:

```  
http://localhost:3000/v1/phone/all  
http://localhost:3000/v1/phone/5548974112300  
```
