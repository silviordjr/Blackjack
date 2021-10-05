import React from "react";
import react from "react";
import styled from "styled-components";
import mesa from '../image/mesa.jpg'


const MainContainerInicio = styled.div`
    background-image: url(${mesa});
    border: 20px solid #74270c;
    height: 94vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        @media(max-width: 800px){
            font-size: 16px;
        }
        color: #74270c;
    }
`

const BotaoComecar = styled.div`
    height: 8vh;
    width: 16vw;
    background-color: #74270c;
    border-color: #74270c;
    font-size: 24px;
    text-align: center;
    padding-top: 4vh;
    margin-top: 24vh;

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
            width: 40vw;
        }
`

class Inicio extends React.Component {
    render() {
        return(
            <MainContainerInicio>
                <h1>Seja bem-vindo ao Blackjack! <br/> Clique em iniciar para começar uma nova partida!</h1>
                <BotaoComecar onClick={this.props.onClickComecar} >Começar</BotaoComecar>
            </MainContainerInicio>
        )
    }
}

export default Inicio