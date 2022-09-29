import React, { Component } from "react";
import { Container, Divider, Switch } from "@mui/material";

class About extends Component {
  state = {
    checked: true,
    heading: "About Brazilian Jiu Jitsu",
  };

  toggleSwitch = () => {
    const newVal = !this.state.checked;
    if (newVal) {
      return this.setState({
        heading: "About Brazilian Jiu Jitsu",
        checked: newVal,
      });
    }
    return this.setState({
      heading: "About BJJ",
      checked: newVal,
    });
  };

  render() {
    return (
      <div className="text-gray">
        <Container maxWidth="sm">
          <h1 style={{ textAlign: "center" }}>{this.state.heading}</h1>
          <p>
          BJJ, also called "the gentle art," exists as an evolvolution of Judo, paying more attention to what finishes the fight once it has been brought to the ground. Following a public lesson by a travelling Japanese judoka, Mitsuyo Maeda, in 1917, a family of brothers with the surname "Gracie" devleoped those technicques into "Gracie JiuJitsu" and began to popularize the sport in Brazil. A son (Rorion) of one of those brothers (Helio) moved to the United States in 1978, and co-founded the Ultimate Fighting Championship in 1993. Today, almost 30 years later, JiuJitsu gyms span the planet Earth and thousands of people are practicing and enjoying the gentle art every day.  

          </p>
          <Divider />
          <p>
            If you'd like you can toggle the phrase "Brazilian Jiu Jitsu" for the easier "BJJ" 
          </p>
          <Switch
            checked={this.state.checked}
            color="primary"
            onChange={this.toggleSwitch}
          />
        </Container>
      </div>
    );
  }
}

export default About;
