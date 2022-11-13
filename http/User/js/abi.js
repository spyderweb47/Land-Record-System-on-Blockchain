async function loadContract() {
    return await new window.web3.eth.Contract([
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "landid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "ownername",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "landtype",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "geolocation",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "amount",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "regdate",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "pincode",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "phoneno",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "aadharno",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "dob",
            "type": "string"
          }
        ],
        "name": "addLand",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "pincode",
            "type": "uint256"
          }
        ],
        "name": "getlandids",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "landid",
            "type": "uint256"
          }
        ],
        "name": "getOwner",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "landid",
            "type": "uint256"
          }
        ],
        "name": "getLandtype",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "landid",
            "type": "uint256"
          }
        ],
        "name": "getGeolocation",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "landid",
            "type": "uint256"
          }
        ],
        "name": "getAmount",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "landid",
            "type": "uint256"
          }
        ],
        "name": "getRegdate",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "landid",
            "type": "uint256"
          }
        ],
        "name": "getPincode",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "landid",
            "type": "uint256"
          }
        ],
        "name": "getPhoneno",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "landid",
            "type": "uint256"
          }
        ],
        "name": "getAadharno",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "landid",
            "type": "uint256"
          }
        ],
        "name": "getDob",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ],'0xD5B80Aa0b5E8e2341D76718Af2964f59CF01ffcB');
}