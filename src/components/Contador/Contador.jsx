import { Component } from "react"

class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: this.props.valorInicial,
            loggedIn: false,
        }
    }

    componentDidMount(){
        console.log('COMPONENT DID MOUNT!!')
    }

    handleRestar() {
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    handleSumar() {
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    handleReset() {
        this.setState({
            contador: 50,
        })
    }

    handleLogin() {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={() => this.handleRestar()}>
                        Restar 1
                    </button>
                    <button onClick={() => this.handleSumar()}>Sumar 1</button>
                    <button onClick={() => this.handleReset()}>
                        Reiniciar contador
                    </button>

                    <button
                        onClick={() => this.handleLogin()}
                        disabled={this.state.loggedIn}
                    >
                        Login
                    </button>
                    
                    <button
                        onClick={() => this.handleLogin()}
                        disabled={!this.state.loggedIn}
                    >
                        Logout
                    </button>

                    <p>Resultado: {this.state.contador}</p>

                    <button onClick={() => this.props.handleSubmitNumber(this.state.contador)}>
                        Registrar numero
                    </button>
                </div>
            </>
        )
    }
}

export default Contador
