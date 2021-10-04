import React from "react";
import styled from "styled-components";
import cartaVerso from '../image/cartaVerso.jpg'

const MainContainerJogo = styled.div`
    background-color: #006600;
    border: 20px solid #74270c;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: 1fr 100px 1fr;
    align-items: center;
`

const ImagemDasCartas = styled.img`
    height: 200px;
    width: auto;
    margin-bottom: 0;
    margin-left: 5vw;

    @media(max-width: 800px){
            height: 75px;
            width: auto;
        }
`

const ImagemDasCartasVerso = styled.img`
    height: 200px;
    width: auto;
    margin-top: 0vh;
    margin-left: 5vw;
    margin-bottom: 0;

    @media(max-width: 800px){
            height: 75px;
            width: auto;
        }
`

const ContainerCartasComputador = styled.div`
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;

`


const ContainerCartasUsuario = styled.div`
   
    height: 220px;
    grid-row-start: 3;
    grid-row-end: 4 ;

    @media(max-width: 800px){
            height: 100px;
        }
    
`
const BotoesJogo = styled.button`
    background-color: #74270c;
    border-color: #74270c;
    text-align: center;
    :hover{
        cursor: pointer;
        background-color: #5d1f0a;
        border-color: #5d1f0a;
    }

    :active{
        background-color: maroon;
        border-color: maroon;
    }
`

const ContainerBotoes = styled.div`
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3 ;

    @media(max-width: 800px){
            display: flex;
            grid-column-start: 2;
            grid-column-end: 2;
        }
    
`

class Jogo extends React.Component {
    render(){
        const cartasAtivasUsuario = this.props.cartasUsuario.map((carta) => {
            return(
                <ContainerCartasUsuario>
                    <ImagemDasCartas src={carta.image} />
                </ContainerCartasUsuario>
            )
        })
        return(
            <MainContainerJogo>
                <ContainerCartasComputador>
                    <ImagemDasCartasVerso src={cartaVerso} />
                    <ImagemDasCartasVerso src={cartaVerso} />
                </ContainerCartasComputador>
                <ContainerBotoes>
                    <BotoesJogo onClick={this.props.onClickComprar} >Comprar Nova Carta</BotoesJogo>
                    <BotoesJogo onClick={this.props.onClickEncerrarJogada}>Encerrar Jogada</BotoesJogo>
                </ContainerBotoes>
                {cartasAtivasUsuario}
            </MainContainerJogo>
        )
    }
}

export default Jogo