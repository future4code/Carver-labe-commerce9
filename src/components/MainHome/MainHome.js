import React from "react";
import styled from "styled-components";
import imgAstro from "../../assets/atro.png"


export default class MainHome extends React.Component {
  render(){
    return(
  <div className="row">
  <div className="col-1">
    <h1>AstroComerce</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
      varius molestie nulla a molestie. Morbi ac lacus fringilla,
      scelerisque magna vel, molestie turpis. Etiam sed dictum lacus, eu
      hendrerit mauris. Duis efficitur scelerisque orci nec blandit. Sed
      dolor magna, condimentum in dolor ac, porttitor facilisis diam.
    </p>
  </div>

  <div className="col-2">
    <img src={imgAstro} alt="astro-dev" />
  </div>
</div>
    )
  }
}