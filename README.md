Digital Voting using Blockchain

Team Members: 
Ritu Patel 885776369
Riya Patel 885652693
Vishvesh Dumbre 885954156

Project Description:
Voting using blockchain will implement smart contracts built in solidity. The focus of this project is to create a platform that is safe and secure for electronic voting. Voter uses their wallet id to login and cast a vote, making it secure and unique. Once Voter has casted a vote the wallet address is stored on blockchain making them unable to cast second vote. The biggest areas of concern for electronic voting are to be able to enable the voters with their voting right yet securing their rights by making sure that there is no manipulation of rights. Our project's main goal is to provide a safe and reliable platform for conducting electronic voting. Ensuring that every voter may exercise their right to vote without jeopardizing their privacy and security is one of the most important concerns with electronic voting. Thus, reducing the likelihood of manipulation and ensuring the accuracy of the voting process are our main priorities. Along with it the voter is able to see real time candidate votes, making it easier for voters to know the status of the voting.

Improvements:
•	Improved UI:
    Added HTML and CSS styling elements to improve the look and layout of the website and to make the frontend visually appealing and easy to use for voters. Also, worked on designing and implementing a user-friendly project flow for the digital voting system.

•	Added declare winner function:
    Added a function to count the votes that are accumulated of all candidates and find out the winner. The "declare winner" function will allow the system to automatically calculate the voting results and determine the winner of the election based on the votes recorded on the blockchain. This will help to ensure the accuracy and transparency of the voting process, and reduce the potential for human error or bias in the vote counting process.

•	Added a tie breaker to pick random candidate if votes are tied:
    Implemented a tie-breaker logic in the ballot contract. The purpose of this logic is to handle edge cases where more than one candidate has received highest number of votes. In this case, the tie-breaker will be utilized to declare a single winner. This would help to ensure that a clear winner is determined in the election, even if the vote counts are equal for multiple candidates. 

•	Made NFTs of candidates logo available for sell on opensea:
    This feature involves creating and making Non-Fungible Tokens (NFTs) of candidates' logos available for sale on a platform such as OpenSea in a digital voting through blockchain project. This would help voters easily recognize and support their preferred candidates while also potentially providing a fundraising opportunity for political campaigns.

•	Tested on Goerli Test Network:
     We have tested this digital voting system on the Gorli test network, a public Ethereum test network, to ensure that the system is secure and reliable for use by voters. By using a test network like gorili, we can identify and address potential issues or vulnerabilities before deploying the system on the main network.

 •	Created blockchain voter profile:
    The "blockchain voter profile" feature of this blockchain-based digital voting platform allows voters to display their blockchain account and ether balance. This provides a layer of transparency and accountability, as it allows the platform to verify that each voter is a legitimate participant in the blockchain ecosystem.

 •	Created blockchain election admin profile:
    This feature of this platform allows election administrators to display their blockchain account and ether balance. It also makes sure that only registered admins have the additionl capabilities like declaring winner, resetting election, etc. functionalities enabled.

 •	Blockchain voter's interface:
    We have safely and securely divided this platform int two section namely, voter's interface and admin interface. This seperation is essential to successfully implement various functions and capabilities of this blockchain based voting platform to respective user only. Meaning, it is necessary to ensure that a voter can safely cast its vote. This is successfully implemented into our system. A valid voter's id is required to enter into the voter's interface and cast vote.

 •	Blockchain election admin interface:
    The admin interface is separate from the voter's interface. A valid admin account is required to access the admin side of the plafrom. The admin interface has features like ending the election, declaring winners, re-starting the election, etc. It is necessary to have a separate admin interface to ensure that admin functionalities like ending elections and declaring winners are performed by admins only. This adds a added layer of security to this digital voting platform.

 •	End election feature:
    This feature is available on the admin side of the platform. Using this feature, the admin can end the election and the system calculates the election result. Note that, this feature does not announce th eletion results.

 •	Vote Distribution:
    Vote distribution chart is created where distribution of votes to candidates can be observed and analysed. This function will show number of votes that each candidate has received. 

 •	candidates registration form:
    We have created a candidate registration form where an individual can fill up a form to register himself/herself as a candidate for the election.

 •	Restart election:
    The reset feature of this platform allows for the system to revert to a previous state and start anew. This feature will reset the vote count and the vote distribution data will be set to 0 again for all the candidates. This is particularly useful in case of a security breach or any other anomaly that compromises the integrity of the voting process. 

 




Instructions to run the project:
1.	Open Ganache and open a new workspace by adding the projects truffle.config.js file
2.	Open the code and run truffle compile on the terminal
3.	Run truffle migrate
4.	Once you run truffle compile and truffle migrate, go to ganache and get the contract address of Ballot contract and paste it in index.js file
5.	Add dummy accounts from the ganache to metamask
6.	Run http-server 
7.	Add in the wallet address, approve the connection 
8.	Proceed to vote

Github Link: 
https://github.com/RituP2054/DigitalVoting-TeamCrypto