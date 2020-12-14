## Sequelize 

### Create Database
```
$ yarn sequelize db:create
```

### Create migration
```
$ yarn sequelize migration:create --name=create-users
```

### Run migration
```
$ yarn sequelize db:migrate
```

### Goback last run migrate
```
$ yarn sequelize db:migrate:undo
```





## Docker DB

### Download image
```
$ docker pull postgres
```

### Create a directory to data
```
$ mkdir ~/tmp && cd ~/tmp && mkdir databse
```

### Run postgres container with a volume
```
$ docker run -p 5432:5432 -v /tmp/database:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 postgres
```