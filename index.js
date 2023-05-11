const ballotAbi = [
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "proposalNames",
        "type": "string[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "chairperson",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
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
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "proposals",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "voteCount",
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
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "voters",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "weight",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "voted",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "vote",
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
        "internalType": "address",
        "name": "voter",
        "type": "address"
      }
    ],
    "name": "giveRightToVote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "delegate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "proposal",
        "type": "uint256"
      }
    ],
    "name": "vote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "winningProposal",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "winningProposal_",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "winnerName",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "voteCount",
            "type": "uint256"
          }
        ],
        "internalType": "struct Ballot.Proposal",
        "name": "winnerName_",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "viewProposalsName",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "viewChairperson",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "summaryOfVotes",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "voteCount",
            "type": "uint256"
          }
        ],
        "internalType": "struct Ballot.Proposal[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "resetVoters",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

var Ballot;
var NFT;
var Market;
var userAccount;
var userAccountBalance;
var chairPerson;
var lastTokenId;
var lastListingId;
var ballotAddress = "0xfA112262487981162780BA0d2cD6fa867a3B495a";

var proposal_name = document.querySelector("#proposal_name");
var alertPlaceholder = document.getElementById("txStatus");
var candidates = ['Ronal', 'Abraham','Abastain'];
var div;

function startApp() {
  
  Ballot = new web3.eth.Contract(ballotAbi, ballotAddress);
  NFT = new web3.eth.Contract(nftAbi, ntfAddress);
  Market = new web3.eth.Contract(marketAbi, marketAddress);

  document.getElementById("vAccountvalue").innerHTML = `${userAccount}`;
  document.getElementById("voterEtherValue").innerHTML = `${userAccountBalance} Ether `;

  document.getElementById(
    "adminAddress"
  ).innerHTML = `<i class="bi bi-person-fill me-1"></i>  ${userAccount}`;
  document.getElementById(
    "adminBalance"
  ).innerHTML = `<i class="bi bi-currency-dollar me-1"></i>
    ${userAccountBalance} Ether `;

  if (window.location.href == "http://127.0.0.1:5500/Voter.html") {
    if (JSON.parse(sessionStorage.getItem("pause"))) {
      $(".votingSection").hide();
      $(".resultSection").show();
      $(".resultSection").html(`<p>Voting paused</p>`);
    } else if (JSON.parse(sessionStorage.getItem("endVote"))) {
      $(".votingSection").hide();
      $(".resultSection").show();
      winner();
    }
  }

}

function displayProposalsName() {
  getProposalsName().then(function (value) {
    value.forEach((element) => {
      console.log(element);
      $(".name1").append(`<p>${element}</p>`);
    });
  });
}

function getProposalsName() {
  return Ballot.methods.viewProposalsName().call();
}

function vote(index) {
  Ballot.methods
    .vote(index)
    .send({
      from: userAccount,
    })
    .on("receipt", function (receipt) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>Congratulations!! you have successfully voted.</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log("success");
    })
    .on("error", function (error) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>Sorry!! Something wrong happen</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log(error);
    });
}

function winner() {
  Ballot.methods
    .winnerName()
    .call()
    .then(function (value) {
      alert("Congratulations! The winner is " + value.name);
    });
}

function summaryVotes() {
  Ballot.methods
    .summaryOfVotes()
    .call()
    .then(function (value) {
      console.log("value="+value);
      var temp = [".votes1", ".votes2", ".votes3"];
      var i = 0;
      value.forEach(function (val) {
        $(temp[i]).html(`<p>${val.voteCount}</p>`);
        i++;
      });
      console.log("here");
      $("#exampleModal").modal("show");
    });
}

function resetVote() {
  Ballot.methods
    .resetVoters()
    .send({
      from: userAccount,
    })
    .on("receipt", function (receipt) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>You successfully reset voting</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log("success");
    })
    .on("error", function (error) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>Sorry! Its unsuccessfull to reset voting</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
      console.log(error);
    });
}

window.addEventListener("load", async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      const accounts = await ethereum.enable();
      // Acccounts now exposed
      userAccount = accounts[0];
      web3.eth.getBalance(userAccount).then(function (val) {
        userAccountBalance = web3.utils.fromWei(val, "ether");
        startApp();
      });
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    userAccount = web3.eth.accounts[0];
    web3.eth.getBalance(userAccount).then(function (val) {
      userAccountBalance = web3.utils.fromWei(val, "ether");
      startApp();
    });
  }
  // Non-dapp browsers...
  else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
});

ethereum.on("accountsChanged", (accounts) => {
  window.location.reload();
});

ethereum.on("chainChanged", (chainId) => {
  window.location.reload();
});

$("#vote").click(function (params) {
  var radios = document.getElementsByName("flexRadioDefault");
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      vote(radios[i].value);
      break;
    }
  }
});

$("#summary").click(function () {
  summaryVotes();
});

$("#result").click(function () {
  winner();
});

function candidateList() {

  var div = document.getElementById(newCandidates);
  console.log("div="+div);
  div.innerHTML = '';

  for(var i = 0; i < candidates.length; i++) {
    div.innerHTML += '<div><input class="form-check-input mt-3" type="radio" name="flexRadioDefault" value="' +i+ ' "></input>' + candidates[i] + '</div>';
  }

}

function getCandidateList() {
  return candidates;
}

function registerCandidate() {
  
  var fname = document.getElementById(fname).value;

  candidates.push(fname);

  console.log("candidate added successfully");
}

function userDetails(){
  console.log("uacc=",userAccount);
  console.log("vacc=",userAccountBalance);

  document.getElementById("vAccountvalue").innerHTML = `${userAccount}`;

  document.getElementById("voterEtherValue").innerHTML = `${userAccountBalance} Ether `;
}

//for login home page
$("#submit").click(function () {
  let value = $("#loginId").val();
  let temp = "0x8E055F357ac8785e8E47D471e866bf2885Adfbd9";     //admin account
  if (value.toLowerCase() == temp.toLowerCase()) {
    window.location.href = "./Admin.html";
  } else if (value.toLowerCase() == userAccount.toLowerCase()) {
    window.location.href = "./Voter.html";
  }
});

if (window.location.href == "Voter.html") {
  if (JSON.parse(sessionStorage.getItem("endVote"))) {
    $(".votingSection").hide();
    $(".resultSection").show();
    winner();
  }
}


$("#endVote").click(function (val) {
  sessionStorage.setItem("endVote", true);
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-success alert-dismissible" role="alert">`,
    `   <div>You have successfully stopped the election.</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
});

$("#reset").click(function (val) {
  resetVote();
});

