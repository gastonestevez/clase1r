import React, { Component } from "react"

export default class Resultados extends Component {

    componentDidMount(){
        console.log('LOS RESULTADOS ESTAN EN PANTALLA')
    }

    render() {
        return (
            <>
                <h4>Listado de numeros favoritos...</h4>
                <ul>
                    {this.props.items.map((item) => {
                        return <li> {item} </li>
                    })}
                </ul>
            </>
        )
    }
}
