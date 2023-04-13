import React from 'react'

const Geradorjogo = (props) => {
    const numberDesign = 'p-5 me-2 md-2 mt-5 mb-5 border rounded-circle'
    const numberBg = {
        backgroundColor: '#00b784',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '20px'
    }

    return (

        <div className='d-flex flex-wrap justify-content-center align-items-center'>
            <div className={numberDesign} style={numberBg}>{props.numero1}</div>
            <div className={numberDesign} style={numberBg}>{props.numero2}</div>
            <div className={numberDesign} style={numberBg}>{props.numero3}</div>
            <div className={numberDesign} style={numberBg}>{props.numero4}</div>
            <div className={numberDesign} style={numberBg}>{props.numero5}</div>
            <div className={numberDesign} style={numberBg}>{props.numero6}</div>
        </div>
    )
}

export default Geradorjogo