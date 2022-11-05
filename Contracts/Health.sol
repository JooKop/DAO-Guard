// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Health {

    address public creator; //Creator of the contract
    mapping(address => bool) public entitiesHealth; //Mapping of entities and their credibility based on health

    //Store information about the creator of the Smart Contract on constructor
    constructor() {
        creator = msg.sender;
    }

    //Add a new entity to the health credibility contract. So far only the creator can add new checks.
    function addEntity(address addr, bool pass) public {
        require(msg.sender == creator); //Make sure the adder is the creator of the contract
        entitiesHealth[addr] = pass; //Set the health credibility of a specific entity
    }
}
