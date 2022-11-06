import React from "react";
import daoguard from "./daoguard";
import people from "./people";
import "./App.css";
import "./App.css";

class App extends React.Component {
  state = {
    selectedHealth: "health.svg",
    selectedEducation: "education.svg",
    selectedSocial: "social.svg",
    chosenPerson: 0,
    loading: true,
    init: true,
  };

  getStats = async (id) => {
    this.setState({
      selectedHealth: "health.svg",
      selectedEducation: "education.svg",
      selectedSocial: "social.svg",
      loading: true,
    });
    console.log(this.state.selectedHealth);
    await new Promise((r) => setTimeout(r, 500));
    const healthValidity = await daoguard.methods
      .entitiesHealth(people[id].address)
      .call();
    this.setState({
      selectedHealth: healthValidity ? "health-ok.svg" : "health-ko.svg",
    });
    await new Promise((r) => setTimeout(r, 500));
    const educationValidity = await daoguard.methods
      .entitiesEducation(people[id].address)
      .call();
    this.setState({
      selectedEducation: educationValidity
        ? "education-ok.svg"
        : "education-ko.svg",
    });
    await new Promise((r) => setTimeout(r, 500));
    const socialValidity = await daoguard.methods
      .entitiesSocial(people[id].address)
      .call();
    this.setState({
      selectedSocial: socialValidity ? "social-ok.svg" : "social-ko.svg",
    });
    this.setState({
      loading: false,
    });
  };

  choosePerson = async (id) => {
    this.setState({
      chosenPerson: id,
      init: false,
    });
  };

  render() {
    return (
      <div className="page">
        <div className="navBar">
          <div className="logo">
            <img className="logo" src="daoguard-logo.png" />
          </div>
          <div className="peopleList">
            {people.map((person, index) => (
              <div
                onClick={() => {
                  this.choosePerson(index);
                  this.getStats(index);
                }}
                key={index}
                className="personBox"
              >
                <div className="personContainer">
                  <div className="avatarPic">
                    <img className="avatar" src={"avatar/" + index + ".svg"} />
                  </div>
                  <div className="personInfo">
                    <div>
                      <p className="personName">{person.name}</p>
                      <p className="personAddr">{person.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {this.state.init ? (
          <div className="content">
            <p className="proofOfLife">PROOF OF LIFE</p>
            <p className="choosePerson">PLEASE CHOOSE A PERSON</p>
            <img
              style={{
                filter: "grayscale(100%)",
                width: "170px",
                height: "170px",
              }}
              src="avatar-big/0.png"
            />
          </div>
        ) : (
          <div className="content">
            <p className="proofOfLife">PROOF OF LIFE</p>
            <img
              className="bigavatar"
              src={"avatar-big/" + this.state.chosenPerson + ".png"}
            />
            <p className="contentName">
              {people[this.state.chosenPerson].name}
            </p>
            <p className="contentId">
              ID: {people[this.state.chosenPerson].address}
            </p>
            <p className="contentPlanet">
              PLANET <strong>{people[this.state.chosenPerson].planet}</strong>
            </p>
            <img
              className="planetImg"
              src={people[this.state.chosenPerson].planet + ".svg"}
            />
            <p className="contentProof">
              <strong>PROOF OF LIFE</strong>
              {this.state.loading ? " LOADING..." : ""}
            </p>
            <div className="checks">
              <img src={this.state.selectedHealth} />
              <img src={this.state.selectedEducation} />
              <img src={this.state.selectedSocial} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
