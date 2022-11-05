// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Social {

    address public creator; //Creator of the contract
    mapping(address => bool) public entitiesSocial; //Mapping of entities and their existence credibility based on social actions

    //Store information about the creator of the Smart Contract on constructor
    constructor() {
        creator = msg.sender;
    }

    //Add a new entity to the social credibility contract. So far only the creator can add new checks.
    function addEntity(address addr, bool pass) public {
        require(msg.sender == creator); //Make sure the adder is the creator of the contract
        entitiesSocial[addr] = pass; //Set the social credibility of a specific entity
    }
}
