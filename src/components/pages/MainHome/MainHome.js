import React from "react";
import styled from "styled-components";
import astroDevs from "../../../astro_laranja.png";

const ContainerHome = styled.div`
  padding-top: 100px;
  max-width: 1300px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
  .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .col-2 {
    flex-basis: 50%;
    min-width: 300px;
  }

  .col-2 img {
    padding: 50px 0;
    margin-left: 50px;
  }

  .astro-word {
    color: #ff9f43;
  }
`;

export default class MainHome extends React.Component {
  render() {
    return (
      <ContainerHome>
        <div className="row">
          <div className="col-2">
            <h1>
              Venha comprar sua nave no
              <span className="astro-word">
                <strong> AstroComerce!</strong>
              </span>
            </h1>
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
        </div>
      </ContainerHome>
    );
  }
}
