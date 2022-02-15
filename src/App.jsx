// import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar"
// import Saludo from './components/Saludo/Saludo'
import Contador from "./components/Contador/Contador"
import { Component } from "react"
import Resultados from "./components/Resultados/Resultados"
import Clock from "./components/Clock/Clock"

class App extends Component {
    menuItems = ["Home", "Marketplace", "Cart", "Login", "Register"]

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            toggleClock: false,
        }
    }

    handleSubmitNumber = (contador) => {
        const existeNumero = this.state.items.some((item) => item === contador)
        if (!existeNumero) {
            this.setState({
                items: [...this.state.items, contador],
            })
        }
    }

    toggleClock(){
        this.setState({
            toggleClock: !this.state.toggleClock
        })
    }

    render() {
        return (
            <>
                {/* <Navbar items={this.menuItems} />
                <Contador
                    valorInicial={25}
                    handleSubmitNumber={(contador) =>
                        this.handleSubmitNumber(contador)
                    }
                />

                {!!this.state.items.length && (
                    <Resultados items={this.state.items} />
                )} */}
                <button onClick={() => this.toggleClock()}>
                    {!this.state.toggleClock ? 'Turn ON' : 'Turn OFF'}
                </button>
                {
                    this.state.toggleClock && (
                        <Clock />
                    )
                }

            </>
        )
    }
}

export default App
