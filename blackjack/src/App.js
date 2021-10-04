import React from 'react';
import axios from 'axios';
import Inicio from './components/Inicio';
import GlobalStyle from './theme/GlobalStyle';
import Jogo from './components/Jogo';
import Final from './components/Final';
import { ThemeConsumer } from 'styled-components';

class App extends React.Component {
  state = {
    baralho: [],
    cartasUsuario: [],
    cartasComputador: [],
    telaDeInicio: true,
    pontuacaoJogador: "",
    pontuacaoComputador:"",
    final: false,
  }

  componentDidMount = () => {
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((res) => {

      this.setState({baralho: res.data})
    })
    .catch((err) => {
      alert(err.data)
    })
  }

  onClickComecar = () => {

    this.setState({final: false})
    this.setState({telaDeInicio: false})

    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.baralho.deck_id}/draw/?count=2`)
    .then((res) => {
      this.setState({cartasUsuario: res.data.cards}, () => this.atualizaValorJogador())
    })
    .catch((err) => {
      console.log(err.data)
    })

    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.baralho.deck_id}/draw/?count=2`)
    .then((res) => {
      this.setState({cartasComputador: res.data.cards}, () => this.atualizaValorComputadorInicio())
    })
    .catch((err) => {
      console.log(err.data)
    })
  }

  atualizaValorJogador = () => {
    console.log(this.state.cartasUsuario)
    let listaPontuacaoJogador = this.state.cartasUsuario.map((carta) => {
      let valor
      if ((carta.value === "QUEEN") || (carta.value === "KING") || (carta.value === "ACE") || (carta.value === "JACK")){
        valor = 11
      } else {
        valor = Number(carta.value)
      }

      return valor
    })

    let pontosJogador = 0

    for(let valor of listaPontuacaoJogador){
      pontosJogador = pontosJogador + valor
    }

    this.setState({pontuacaoJogador: pontosJogador}, () => {
      if (this.state.pontuacaoJogador > 21){
        this.encerrarPartida()
      }
    })
  }

  onClickComprar = () => {

    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.baralho.deck_id}/draw/?count=1`)
    .then((res) => {
      let novaListaDeCartasUsuario = [... this.state.cartasUsuario, res.data.cards[0]]
      this.setState({cartasUsuario: novaListaDeCartasUsuario}, () => this.atualizaValorJogador())
    })

  }

  computadorCompraCarta = () => {

    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.baralho.deck_id}/draw/?count=1`)
    .then((res) => {
      let novaListaCartasComputador = [...this.state.cartasComputador, res.data.cards[0]]
      this.setState({cartasComputador: novaListaCartasComputador}, () => this.atualizaValorComputador())
      alert("O computador comprou mais uma carta.")
    })
    .catch((err) => {
      console.log(err.data)
    })

  }

  encerrarPartida = () => {
    this.setState({final: true})
  }

  atualizaValorComputador = () => {
    let listaPontuacaoComputador = this.state.cartasComputador.map((carta) => {
      let valor
      if ((carta.value === "QUEEN") || (carta.value === "KING") || (carta.value === "ACE") || (carta.value === "JACK")){
        valor = 11
      } else {
        valor = Number(carta.value)
      }

      return valor
    })

    let pontosComputador = 0

    for(let valor of listaPontuacaoComputador){
      pontosComputador = pontosComputador + valor
    }

    this.setState({pontuacaoComputador: pontosComputador}, () => this.onClickEncerrarJogada())
  }

  atualizaValorComputadorInicio = () => {
    let listaPontuacaoComputador = this.state.cartasComputador.map((carta) => {
      let valor
      if ((carta.value === "QUEEN") || (carta.value === "KING") || (carta.value === "ACE") || (carta.value === "JACK")){
        valor = 11
      } else {
        valor = Number(carta.value)
      }

      return valor
    })

    let pontosComputador = 0

    for(let valor of listaPontuacaoComputador){
      pontosComputador = pontosComputador + valor
    }

    this.setState({pontuacaoComputador: pontosComputador})
  }

  onClickEncerrarJogada = () => {

    if(Number(this.state.pontuacaoComputador) < Number(this.state.pontuacaoJogador)){
      this.computadorCompraCarta()
    }else{
      this.encerrarPartida()
    }
  }
  render() {
    return (
      <div>
        <GlobalStyle/>
        {this.state.final ||
        (this.state.telaDeInicio ? 
          (<Inicio onClickComecar={this.onClickComecar} baralho={this.state.baralho} />)
          :
          (<Jogo cartasUsuario={this.state.cartasUsuario} onClickComprar={this.onClickComprar} onClickEncerrarJogada={this.onClickEncerrarJogada} />))
        }
        {this.state.final &&
        (<Final onClickComecar={this.onClickComecar} cartasUsuario={this.state.cartasUsuario} cartasComputador={this.state.cartasComputador} pontuacaoJogador={this.state.pontuacaoJogador} pontuacaoComputador={this.state.pontuacaoComputador} />)
        }
      </div>
    );
  }

}

export default App;
