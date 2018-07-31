This is ronger todo-list api, can get user openId and update todo list with database

# generate local env
postgres version 9.4.0

1. create database

```
CREATE USER "todo" WITH PASSWORD 'password';
CREATE DATABASE "todo-dev";
GRANT ALL PRIVILEGES ON DATABASE "todo-dev" to "todo";
```

2. run `sequelize db:migrate`


# sequelize

User sequelize orm.

# Heroku

To deploy api and database(postgresql)