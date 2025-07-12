# Customer Chat
- Acts like a e-commerce atendent
- Answer questions about orders
- Instructed to answer only about orders

## How to use
1. Clone repo
2. Install dependencies
3. Feed database
4. Run apps
5. Login with an e-mail from db
6. Start to chat

## API (back-end)

### Install dependencies

```sh
cd api

nvm use

pnpm install
```

### Runs DB
```sh
docker compose up -d # runs database
```

### Feed DB (only first time)
```sh
node data/main.js # create tables, generate data and insert into db
```

### Setup environment
```sh
# .env file

GOOGLE_GENAI_API_KEY="" # Gemini, how to generate a GOOGLE_GENAI_API_KEY?
```
###

### Running
```sh
pnpm dev
```

## Chat (front-end)

### Install dependencies

```sh
cd chat

nvm use

pnpm install
```

### Running
```sh
pnpm dev
```
