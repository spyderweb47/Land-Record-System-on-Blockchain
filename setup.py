#!/usr/bin/env python3

import sys
import os
import subprocess
import http.server
import socketserver



def setupBlockchains():
	path = os.getcwd()
	subprocess.call(f"cd {path}/Blockchain/Private Blockchain && truffle mitigate",shell=True)
	subprocess.call(f"cd {path}/Blockchain/Public Blockchain && truffle mitigate",shell=True)
	

def writeTruffleFile(path,port,ip):
	file = open(f'{path}/truffle-config.js','w')
	file.write('''module.exports = {networks: {development: {host: "'''+ip+'''",port:'''+port+''',network_id: "*"} },compilers: {solc: {version: "0.8.16",} },};''')
	file.close()
	print(f"file written succesfully {path}")

def setupTruffleconfig():
	port=input("Blockcahin port (ganache): ")
	ip=input("Enter IP: ")

	mainpath = os.getcwd()
	path = f"{mainpath}/Blockchain/Private Blockchain"
	writeTruffleFile(path,port,ip)
	path = f"{mainpath}/Blockchain/Public Blockchain"
	writeTruffleFile(path,port,ip)

def writePrivateContractAddress(path,pri_address,pub_address):
	file = open(f'{path}/contractAddress.js','w')
	file.write(f'''var PrivateAddress="{pri_address}";''')
	file.write(f'''\nvar PublicAddress="{pub_address}";''')
	file.close()
	print(f"file written succesfully {path}")

def writePublicContractAddress(path,pub_address):
	file = open(f'{path}/contractAddress.js','w')
	file.write(f'''\nvar PublicAddress="{pub_address}";''')
	file.close()
	print(f"file written succesfully {path}")

def rewriteContractAddress():
	private_address=input("Private Contract Address: ")
	public_address=input("Public Contract Address: ")

	mainpath=os.getcwd()
	path=f"{mainpath}/http/Admin"
	writePrivateContractAddress(path,private_address,public_address)

	path=f"{mainpath}/http/User"
	writePublicContractAddress(path,public_address)


# def httpAdminServer():
# 	path = os.getcwd()
	
# 	subprocess.call(f"cd {path}/http/Admin && python -m http.server 8000",shell=True)


setupTruffleconfig()
setupBlockchains()
rewriteContractAddress()
# httpAdminServer()
# print("Admin file is hosted on 127.0.0.1:8080 !")
print("Ready to Host!")

