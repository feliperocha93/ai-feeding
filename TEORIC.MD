# AI Feeding for Chat Attendants

## Context
- AI Knowledge is limited by training data, remember like ChatGPT didn't know things after Sep 21.
- For chat attendants, we need to provide real-time, contextual data about customers and their orders.

## Accessing External Data

### Use Cases
- **Customer Service Chatbots**: Access customer orders, demographics, and purchase history
- **Code Copilots**: Read repository context and documentation
- **FAQ Systems**: Provide relevant documentation and knowledge base

### Implementation Approaches

#### Agents with Tools
- **Tools**: Functions to access external data dynamically
- **Strategy**: Define when to use which tool based on user intent
- **Example**: Customer asks about order status → Query database for specific order details

## How to Feed Data to AI

### Core Principle
Make the model read data through the input context.

**Flow**: Database → Load → Process → Input to AI

### Two Main Approaches

#### 1. Direct Data Injection
- **When to use**: Data is structured and easily queryable
- **Implementation**: Inject customer data directly into system prompt
- **Best Practice**: Avoid letting AI create queries; provide pre-processed data
- **Example from codebase**: Customer info and purchase history injected into system instructions

#### 2. RAG (Retrieval-Augmented Generation)
- **When to use**: Data is unstructured or requires semantic search
- **Implementation**: Use vector embeddings and similarity search
- **Use case**: Large knowledge bases, documentation, FAQs

## Implementation Guidelines

### 1. Data Conversion
- Convert database records to natural language
- Format data meaningfully for AI consumption
- Include relevant context (customer age, location, purchase history)

### 2. Error Handling
- Handle missing customer data gracefully
- Provide fallback responses when data is unavailable
- Log errors for debugging

### 3. Resource Management
- **Cost**: Monitor API calls and token usage
- **Performance**: Cache frequently accessed data
- **Scalability**: Optimize database queries

## Best Practices

### Data Relevance
- Only include data relevant to the conversation
- Filter out sensitive information
- Provide context that helps AI understand customer situation

### Data Description
- Clearly describe what each data field represents
- Use consistent formatting across different data types
- Include metadata when helpful (dates, status, etc.)

### Prompt Engineering
- Structure system prompts clearly with sections
- Use specific instructions for the AI's role
- Include conversation history for context continuity

## Real-World Example (from this codebase)

### System Prompt Structure
```
<SYSTEM_INSTRUCTIONS>
  You are the customer support of an e-commerce.
  You must answer only about orders and products.
  For other topics, say you cannot help.
</SYSTEM_INSTRUCTIONS>

<CUSTOMER_INSTRUCTIONS>
  Name: John Doe
  Email: john@example.com
  State: California
  Age: 25 years old
  Purchases:
    Product: Wireless Headphones - Price: $89.99 - Date: 2024-01-15 - Status: delivered
    Product: Smart Watch - Price: $199.99 - Date: 2024-01-20 - Status: in transit
</CUSTOMER_INSTRUCTIONS>
```

### Key Implementation Details
- Customer data retrieved from PostgreSQL database
- Purchase history formatted as readable text
- Age calculated from birth date
- Conversation history maintained for context
- Real-time data injection for each request

## Results and Benefits

1. **Contextual Responses**: AI can answer specific questions about customer orders
2. **Personalized Experience**: Responses tailored to customer's purchase history
3. **Accurate Information**: Real-time data ensures up-to-date responses
4. **Scalable Solution**: Easy to extend with more data sources
