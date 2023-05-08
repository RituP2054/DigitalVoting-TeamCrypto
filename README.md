Voting using Blockchain

Team Members: 
Ritu Patel 885776369
Riya Patel 885652693
Vishvesh Dumbre 885954156

Project Description:
Voting using blockchain will implement smart contracts built in solidity. The focus of this project is to create a platform that is safe and secure for electronic voting. Voter uses their wallet id to login and cast a vote, making it secure and unique. Once Voter has casted a vote the wallet address is stored on blockchain making them unable to cast second vote. The biggest areas of concern for electronic voting are to be able to enable the voters with their voting right yet securing their rights by making sure that there is no manipulation of rights. Our project's main goal is to provide a safe and reliable platform for conducting electronic voting. Ensuring that every voter may exercise their right to vote without jeopardizing their privacy and security is one of the most important concerns with electronic voting. Thus, reducing the likelihood of manipulation and ensuring the accuracy of the voting process are our main priorities. Along with it the voter is able to see real time candidate votes, making it easier for voters to know the status of the voting.

Improvements:
•	Improved UI
•	Added declare winner function
•	Added a tie breaker to pick random candidate if votes are tied
•	Made NFTs of candidates logo available for sell on opensea
•	Tested on Goerli Test Network

Instructions to run the project:
1.	Open Ganache and open a new workspace by adding the projects truffle.config.js file
2.	Open the code and run truffle compile on the terminal
3.	Run truffle migrate
4.	Once you run truffle compile and truffle migrate, go to ganache and get the contract address of Ballot contract and paste it in index.js file
5.	Add dummy accounts from the ganache to metamask
6.	Run http-server 
7.	Add in the wallet address, approve the connection 
8.	Proceed to vote
