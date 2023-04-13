import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Megasena from './Megasena'

const App = () => { 
    
    // randNum() {
    //     let numeros = []
    //     while (numeros.length <6) {
    //         let numero = Math.floor(Math.random() * 60) +1
    //         if (!numeros.includes(numero)) {
    //             numeros.push(numero);
    //         }
    //     }
    //     return numeros;
    // }
    
    return (
            <Megasena></Megasena>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)