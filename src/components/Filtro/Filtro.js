import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default class Filtro extends React.Component{
    render() {
     return(
            <Container>
                <h3>Filtros</h3>
                <label className="BotoesFiltros">
                 <p>Valor Mínimo:</p>
                 <input type="number" placeholder=""></input>
                </label>
                <label className="BotoesFiltros">
                 <p>Valor Máximo:</p>
                 <input type="number" placeholder=""></input>
                </label>
                <label className="BotoesFiltros">
                <p>Busca por nome:</p>
                 <input type="text" placeholder=""></input>
                </label>
            </Container>
        )
    }
}