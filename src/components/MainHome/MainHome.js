import React from "react";
import styled from "styled-components";
import astroDevs from "../../astro_laranja.png"



const ContainerHome = styled.div`
  padding-top: 100px;
`

export default class MainHome extends React.Component {
  render(){
    return(
  <ContainerHome>
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
    <img src={astroDevs} alt="astro-dev" />
  </div>
</ContainerHome>
    )
  }
}