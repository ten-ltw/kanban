# Kanban

Fock from [markusenglund/react-kanban](https://github.com/markusenglund/react-kanban)

![react kanban example](https://github.com/yogaboll/react-kanban/blob/master/example.gif?raw=true)

[Check out the live website](https://www.reactkanban.com)

## Full setup

```shell
git clone https://github.com/ten-ltw/kanban.git

cd kanban

npm install
```

You need to add your own mongoDB url as well as auth credentials for the Github sign in. You need to create a file with the name `.env` in the root directory with the following variables:

```
MONGODB_URL
MONGODB_NAME
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
SESSION_SECRET

# Has to be port 1337
ROOT_URL=http://127.0.0.1:1337
```

```shell
npm run build
npm run serve
```

For production deployment run:

```shell
npm run build:prod
npm run serve:prod
```


```
docker build -t=ten/kanban .
docker run --restart=always --name kanban -d -p 1337:1337 ten/kanban
```