# Coupon Bazaar Web3.0 dApp
## https://stepik.org/course/54415/syllabus

> This repository contains smart contracts for building a decentralised Web3 coupon marketplace using RIDE programming language. All functions/features of this project should work on top of the Waves blockchain. The whole marketplace should interact with one dApp.

> A dApp, or decentralised application, is an application, that executes in a distributed computer system, for instance, in a blockchain.

> Waves dApp is an application, written in RIDE language and executed on the nodes of the Waves blockchain.

## Contents

- [Features](#features)
- [Installation](#installation)
- [Auto-generated UI for Waves dApps](#Auto-generated-UI-for-Waves-dApps)

## Features

Suppliers should be able to:
- **Register** – dApp should store supplier details
- **Add/remove/update coupons** – Coupon details (name, price, expiration date) should be stored in the dApp’s storage
- **Confirm or reject purchases** – Suppliers should get a request when a customer wants to buy a coupon. If supplier confirms the purchase, customer should get an NFT with a script. The script will allow to trade, use in dApp and transfer by customer, and burn by supplier.
- **Accept coupons from users** – Suppliers should be able to get coupon NFTs and burn them
- **Withdraw funds** – When an NFT is burnt or expired, supplier should be able to withdraw funds (NFTs price)

Customers functionality:
- **Find coupons** – users should be able to see available coupons
- **Purchase** – users should be able to buy coupons in exchange of Waves tokens only and get an NFT for each coupon. 
- **Vote for coupons to delist them or mark as featured** – Coupon owner should be able to vote for coupons using commit-reveal voting
- **Use coupons** – customers should be able to transfer an NFT to supplier (in an exchange of good or service with discount)

## Installation

### Clone

- clone this repo to your local machine.

### Setup 

> Tooling
1. docker for running a node and Waves Explorer. Technically, this step is not necessary. You can use existing testnet / experimental-network, but unless you have your own node, your testing cycle will be dramatically slower because:
    - You might(most likely you will) constantly need new accounts with test tokens. The testnet faucet can give you just 10 WAVES every~10 minutes.
    - Average block time on testnet is 1 minute, while on private node it’s just 10 seconds.
    - Public testnet nodes can have agressive caching turned on
    - Public testnet nodes may be under maintenance.
- Download and install docker : https://www.docker.com/
- Docker Pull Command for wavesplatform node-

```shell
$ docker pull wavesplatform/node
```

2. surfboard command line tool:`nodejs`.
- Download and install Node.js (via ppa, homebrew or exe) : https://nodejs.org/en/download/
- Install surfboard— a tool that will allow you to run your tests on existing node:

```shell
$ npm install -g @waves/surfboard
```

3. Waves Keeper browser extension:
- https://wavesplatform.com/products-keeper

All set!

> Run a private node:

```shell
$ docker run -d -p 6869:6869 wavesplatform/waves-private-node
```

- Observe the node is running through REST API at http://localhost:6869:

> Run an instance of Waves Explorer:

```shell
$ docker run -d -e API_NODE_URL=http://localhost:6869 -e NODE_LIST=http://localhost:6869 -p 3000:8080 wavesplatform/explorer
```
- Open your browser and navigate to http://localhost:3000. You will see an empty chain of you local node rapidly being built.

> RIDE project structure and `surfboard` tool.

- Under ./ride/ folder, you can find *.ride files. This is the directory with the main dApp logic.
- Under ./test/ folder you can find a *.js files. Tests for individual functionalities implemented in the smart contract.
- ./surfboard.config.json is the configuration file for running tests.

- The important section is envs . Each environment is configured by -
    - API_BASE: The REST API endpoint of the node that will be used for running a dApp as well as the CHAIN_ID of the network.
    - SEED: The seed phrase for account with tokens, which will be the source of all the WAVES tokens in your test.

- The default surfboard.config.json supports multiple environments with local being default one (defaultEnv key is the setting to switch between custom and testnet).

> Deploying the Script
- Change the ownerPubKey (base58'address') and the oracle address from both the scripts cb.ride and cboracle.ride.

- If you want to deploy the script on the private node visit http://custom.waves-ide.com/, create few accounts for dApp, Oracle, Supplier and Customer and fund them with waves using transfer transaction test file. You can also deploy the script from there or by using the shell command.

```shell
$ surfboard run scripts/cb.deploy.js  --variables 'dappSeed=seed phrase'
```
- Similarly if you want the script to be deployed on testnet visit https://waves-ide.com/ and follow the same process.

> Running the tests with `surfboard`, analyzing the results in Waves Explorer
- Change the seed phrases and the accounts addresses in each test file according to your case.
- To run the test, execute

```shell
$ surfboard test example.js
```

## Auto-generated UI for Waves dApps

- https://waves-dapp.com/ provides an auto-generated UI from dApp meta information and works via Waves Keeper or other Web3 providers inside the Waves ecosystem.

- It works with mainnet, testnet, stagenet, and even customnet(localhost:6869). Just paste a dApp address in the searchfield, and the app will figure out the network from the bytes of the address and operate with the correct node.

- Search this address '3Mp8VhuJNx5nRcJht416a9VR5sc6KDF9dzi' [here]("https://waves-dapp.com/") to view the functionalities implemented using Coupon Bazaar dApp.
