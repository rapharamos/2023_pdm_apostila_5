import React from 'react'

const Botao = (props) => {
    return (
    <div className='btn btn-outline-success m-5' onClick={props.funcao}>
        {props.botao}
    </div>
    )
}

export default Botao