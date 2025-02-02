const web3 = new Web3(Web3.givenProvider); 
const contractAddress = "0x9DC8d8D8D6BD562aA890FDA5311F743DFfEa57F8";
const abi = [
	{
		"inputs": [],
		"name": "depositTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "requestTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TokensDeposited",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TokensRequested",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; 

const contract = new web3.eth.Contract(abi, contractAddress);

// Hàm kết nối ví MetaMask
async function connectWallet() {
    const accounts = await web3.eth.requestAccounts();
    return accounts[0];
}

// Xử lý sự kiện "Get Balance"
document.getElementById("getBalance").addEventListener("click", async () => {
    const account = await connectWallet();
    const balance = await contract.methods.getBalance(account).call();
    alert(`Your balance: ${balance}`);
});

// Xử lý sự kiện "Request Tokens"
document.getElementById("requestTokens").addEventListener("click", async () => {
    const account = await connectWallet();
    const amount = prompt("Enter the amount (<=100):");
    try {
        await contract.methods.requestTokens(amount).send({ from: account });
        alert("Tokens requested!");
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});

// Xử lý sự kiện "Deposit Tokens"
document.getElementById("depositTokens").addEventListener("click", async () => {
    const account = await connectWallet();
    const amount = prompt("Enter the amount of Ether to deposit:");
    try {
        await contract.methods.depositTokens().send({
            from: account,
            value: web3.utils.toWei(amount, "ether"),
        });
        alert("Tokens deposited!");
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});
