import React, { Component } from "react";
import Annouc from "../components/Annouc/Annouc";
import NavBar from "../components/NavBar/NavBar";

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
