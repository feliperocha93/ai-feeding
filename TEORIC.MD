- IA Knowledge is limited by training data, remember like chatGPT didn't know things after Sep 21.

### Acessing external data

- chatbots to talk to customers, they know your orders and can bring insights about demography data.
- code copilots read the repository.
- FAQ with relevant docs.

#### Agents

- Tools: Function to access external data
- Define when to use what Tool

### How to feed

Make the model read data troughout the input.

DB -> Load -> proccess -> input

- Direct: When data is structured and easy to find, Agent can query directly. Highly recommended avoid Agente create a query.
- RAG: When data is not structured and there isn't a query.

#### Implementing

1. Convert data to text
2. Error handling
3. Reosurce management (cost, performance)

#### Result

1. Ensure data relevancy
2. Correctly describe the data meaning
3. Prompt engineering is powerful
