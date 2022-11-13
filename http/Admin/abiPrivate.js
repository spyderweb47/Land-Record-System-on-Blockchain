var abiPrivate = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "landid",
				"type": "uint256"
			}
		],
		"name": "Checkid",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "landid",
				"type": "uint256"
			}
		],
		"name": "TrackLand",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
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
				"internalType": "uint256",
				"name": "kycno",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "contact",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "surveyno",
				"type": "uint256"
			}
		],
		"name": "addLand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkAdmin",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "landid",
				"type": "uint256"
			}
		],
		"name": "getContact",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "landid",
				"type": "uint256"
			}
		],
		"name": "getKyc",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "kycno",
				"type": "uint256"
			}
		],
		"name": "getKyclandids",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
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
		"type": "function"
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
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
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
		"name": "getPincodelandids",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "surveyno",
				"type": "uint256"
			}
		],
		"name": "getSurveylandids",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "landid",
				"type": "uint256"
			}
		],
		"name": "getSurveyno",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gettotalLandids",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]