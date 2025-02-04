 # My Token Faucet

This project is a simple application for requesting and depositing tokens on the Ethereum network through a smart contract written in Solidity. The application uses MetaMask to connect to an Ethereum wallet and interact with the smart contract.

## Technologies Used

- **Solidity**: Programming language for writing smart contracts.
- **Web3.js**: JavaScript library for interacting with the Ethereum blockchain.
- **MetaMask**: Ethereum wallet for connecting to the application and executing transactions.
- **Remix IDE**: Integrated development environment (IDE) for writing, compiling, and deploying smart contracts.

## Setup and Running the Application

### 1. Deploy the Smart Contract

1. Open [Remix IDE](https://remix.ethereum.org/).
2. Create a new file named `Contract.sol` and paste the smart contract code into it.
3. Compile the contract by selecting the "Solidity Compiler" tab and clicking "Compile Contract.sol".
4. Deploy the contract to the Ethereum network by selecting the "Deploy & Run Transactions" tab, choosing the environment (e.g., JavaScript VM or Injected Web3 if using MetaMask), and clicking "Deploy".

### 2. Configure the Web Application

1. Copy the contract address after deployment and replace `<YOUR_CONTRACT_ADDRESS>` in the `script.js` file with this address.
2. Copy the ABI of the contract from Remix IDE (under the "Solidity Compiler" tab) and replace `<ABI of the smart contract>` in the `script.js` file with the ABI.

### 3. Run the Web Application

1. Open the `index.html` file in your browser.
2. Connect to MetaMask and select the account you want to use.
3. Use the buttons on the interface to interact with the smart contract:
   - **Get Balance**: View your token balance.
   - **Request Tokens**: Request tokens (maximum 100 tokens per request, and requests can only be made at even timestamps).
   - **Deposit Tokens**: Deposit Ether into the contract (only the contract owner can perform this function).

## Directory Structure

- `Contract.sol`: Smart contract written in Solidity.
- `index.html`: Simple user interface.
- `script.js`: JavaScript for interacting with the smart contract via Web3.js.
- `style.css`: CSS file for styling the user interface (if applicable).

## License

This project is distributed under the MIT License. See the [MIT License](https://opensource.org/licenses/MIT) for more details.
