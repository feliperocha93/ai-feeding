# Customer Chat
- Acts like a e-commerce atendent
- Answer questions about orders
- Instructed to answer only about orders

### Install dependencies

```sh
nvm use

pnpm install
```

### Preparing environment

```sh
docker compose up -d # set up postgres

node data/main.js # create tables, generate data and insert into db
```

### Running
```sh
pnpm start
```
