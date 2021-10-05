import React from 'react'
import styled from 'styled-components'
import mesa from '../image/mesa.jpg'

const MainContainerJogo = styled.div`
    background-image: url(${mesa});
    border: 20px solid #74270c;
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

const ContainerCartasComputador = styled.div`
    height: 220px;
    grid-row-start: 1;
    grid-row-end: 2 ;

    @media(max-width: 800px){
            height: 100px;
        }
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
        margin-right: 2vw;
        margin-left: 3vw;

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

    @media(max-width: 800px){
            font-size: 8px;
            height:40px;
            width: 15vw;
        }
`

const ContainerBotoes = styled.div`
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3 ;


    @media(max-width: 800px){
            display: flex;
            grid-column-start: 1;
            grid-column-end: 6;
        }
    
`

const TextoVencedor = styled.div`
    background-color: #74270c;
    font-size: 24px;

    @media(max-width: 800px){
            font-size: 12px;
            width: 30vw;
        }
`

class Final extends React.Component {
    renderizaVencedor = () => {
        if (this.props.pontuacaoJogador > 21){
            return(
                <TextoVencedor>
                    Computador Venceu! Jogador estourou o limite de 21 pontos!
                </TextoVencedor>
            )
        } else if (this.props.pontuacaoComputador > 21){
            return(
                <TextoVencedor>
                    Jogador venceu! Computador estourou o limite de 21 pontos!
                </TextoVencedor>
            )
        } else {
            if (this.props.pontuacaoJogador > this.props.pontuacaoComputador){
                return(
                    <TextoVencedor>
                        Jogador com {this.props.pontuacaoJogador} pontos venceu a partida contra {this.props.pontuacaoComputador} pontos do computador.
                    </TextoVencedor>
                )
            } else if(this.props.pontuacaoJogador < this.props.pontuacaoComputador){
                return(
                    <TextoVencedor>
                        Computador com {this.props.pontuacaoComputador} pontos venceu a partida contra {this.props.pontuacaoJogador} pontos do jogador.
                    </TextoVencedor>
                )
            }else{
                return(
                    <TextoVencedor>
                        Empate! Jogador {this.props.pontuacaoJogador} X {this.props.pontuacaoComputador} Computador.
                    </TextoVencedor>
                )
            }
        }
    }
    render(){
        const cartasAtivasUsuario = this.props.cartasUsuario.map((carta) => {
            return(
                <ContainerCartasUsuario>
                    <ImagemDasCartas src={carta.image} />
                </ContainerCartasUsuario>
            )
        })

        const cartasAtivasComputador = this.props.cartasComputador.map((carta) => {
            return(
                <ContainerCartasComputador>
                    <ImagemDasCartas src={carta.image} />
                </ContainerCartasComputador>
            )
        })
        return(
            <MainContainerJogo>
                {cartasAtivasComputador}
                <Placar>
                    <h3>Placar</h3>
                    <p>Jogador {this.props.vitoriasJogador} X {this.props.vitoriasComputador} Computador</p>
                </Placar>
                <ContainerBotoes>
                    {this.renderizaVencedor()}
                    <BotoesJogo onClick={this.props.onClickComecar} >Nova Partida</BotoesJogo>
                </ContainerBotoes>
                {cartasAtivasUsuario}
            </MainContainerJogo>
        )
    }
}


export default Final