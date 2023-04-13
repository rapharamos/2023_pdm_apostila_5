import React from 'react'
import Logo from './Logo'
import Geradorjogo from './Geradorjogo'
import Botao from './Botao'

class Megasena extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            numerosGerados: []
        };
        this.gerarNumeros = this.gerarNumeros.bind(this);
    }

    randNum() {
        let numeros = []
        while (numeros.length <6) {
            let numero = Math.floor(Math.random() * 60) +1
            if (!numeros.includes(numero)) {
                numeros.push(numero.toString().padStart(2,'0'));
            }
        }
        return numeros;
    }

    gerarNumeros() {
        console.log('aaa')
        let numerosGerados = this.randNum();
        this.setState({ numerosGerados });
    }

    render(){
        return (
            <div className='container border rounded mt-3'>
                
                <div className='card m-3'>
                    <Logo></Logo>
                    <Geradorjogo numero1={this.state.numerosGerados[0] ?? '00'}
                        numero2={this.state.numerosGerados[1] ?? '00'}
                        numero3={this.state.numerosGerados[2] ?? '00'}
                        numero4={this.state.numerosGerados[3] ?? '00'}
                        numero5={this.state.numerosGerados[4] ?? '00'}
                        numero6={this.state.numerosGerados[5] ?? '00'}
                    ></Geradorjogo>
                    <Botao botao="GERAR JOGO" funcao={this.gerarNumeros}></Botao>
                </div>
    
            </div>
        )
    }
}

export default Megasena