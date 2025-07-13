# On Chain Ally



## Setup

To setup, install dependencies from the root of the monorepo:

```bash
npm install
```

This will install all dependencies required by both the frontend and backend projects. You can also run shared commands from the root of the project:

```bash
npm run build

npm start
```

## Environment variables

### Backend

The backend requires Tavily and OpenAI API keys to run. Sign up here:

- Tavily: https://tavily.com/
- IoNet: https://ai.io.net/ai/api-keys
- Etherscan: https://etherscan.io/apidashboard

Once you have your API keys, create a `.env` file in the [`./backend`](`./backend`) directory and add the following:

```bash
TAVILY_API_KEY=YOUR_API_KEY
IO_NET_KEY=YOUR_API_KEY
ETHERSCAN_API_KEY=YOUR_API_KEY

```

### Frontend


Set the variables in a `.env` file inside [`./frontend`](./frontend):

```bash
NEXT_PUBLIC_API_URL="http://localhost:8080"
```
