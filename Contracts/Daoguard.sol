// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Daoguard {

    address public creator; //Creator of the contract
    mapping(address => bool) public entitiesHealth; 
    mapping(address => bool) public entitiesEducation; 
    mapping(address => bool) public entitiesSocial; 
    
    //Store information about the creator of the Smart Contract on constructor
    constructor() {
        creator = msg.sender;
    }

    modifier restricted() {
        require(msg.sender == creator);
        _;
    }

    function addHealthEntity(address addr, bool pass) public restricted {
        entitiesHealth[addr] = pass; //Set the health credibility of a specific entity
    }

    function addEducationEntity(address addr, bool pass) public restricted {
        entitiesEducation[addr] = pass; //Set the education credibility of a specific entity
    }

    function addSocialEntity(address addr, bool pass) public restricted {
        entitiesSocial[addr] = pass; //Set the social credibility of a specific entity
    }
}
