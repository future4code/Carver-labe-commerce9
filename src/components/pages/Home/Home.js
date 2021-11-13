import React, { Component } from "react";
import Annouc from "../Annouc/Annouc";
import NavBar from "../NavBar/NavBar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Annouc />
        <NavBar />
      </div>
    );
  }
}
