## Overview

This project is a decentralized voting system built using Cartesi Rollups. It allows users to register as voters, create proposals, and cast votes. The system is designed to be robust, with error handling and validation for all critical operations.

## Features

- **Voter Registration**: Register users as voters.
- **Proposal Creation**: Create new proposals for voting.
- **Vote Casting**: Cast votes on proposals.
- **Cartesi Integration**: Interacts with Cartesi Rollups for blockchain-based state management.

## Project Structure

```
decentralized-voting-system/
├── .dockerignore
├── .gitignore
├── Dockerfile
├── LICENSE
├── README.md
├── package.json
├── yarn.lock
└── src/
    ├── controllers/
    ├── models/
    ├── shared/
    └── storage/
```

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/decentralized-voting-system.git
    cd decentralized-voting-system
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

3. Start the application:
    ```bash
    yarn start
    ```

### API Endpoints

- **POST `/register`**: Register a new voter.
- **POST `/proposal`**: Create a new proposal.
- **POST `/vote`**: Cast a vote on a proposal.

### Cartesi Integration

This project uses Cartesi Rollups for decentralized state management. Interactions such as registering voters, creating proposals, and casting votes are logged using Cartesi's Notice API.

### License

This project is licensed under the MIT License.
