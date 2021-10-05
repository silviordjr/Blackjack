import React from "react";
import styled from "styled-components";
import cartaVerso from '../image/cartaVerso.jpg'
import mesa from '../image/mesa.jpg'

const MainContainerJogo = styled.div`
    background-image: url(${mesa});
    /* background-color: #006600; */
    border: 20px solid #74270c;
   /* width: 100vw; */
    height: 94vh;
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
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;

`

const Placar = styled.div`
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 3;
    grid-column-end: 6;

    background-color: #74270c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 5vw;

    @media(max-width: 800px){
        grid-column-start: 2;
        margin-left: 4vw;
        h1{
            font-size: 20px;
        }
        p{
            font-size: 8px;
        }
        }
`


const ContainerCartasUsuario = styled.div`
   
    height: 220px;
    grid-row-start: 3;
    grid-row-end: 4 ;
    

    @media(max-width: 800px){
            height: 100px;
            margin: 0;
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
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3 ;

    @media(max-width: 800px){
            display: flex;
            grid-column-start: 1;
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
                <Placar>
                    <h3>Placar</h3>
                    <p>Jogador {this.props.vitoriasJogador} X {this.props.vitoriasComputador} Computador</p>
                </Placar>
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