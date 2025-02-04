const web3 = new Web3(Web3.givenProvider); 
const contractAddress = "<YOUR_CONTRACT_ADDRESS>";
const abi = <ABI of the smart contract>; 

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
