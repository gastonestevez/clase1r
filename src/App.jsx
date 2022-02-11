// import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar"
// import Saludo from './components/Saludo/Saludo'
import Contador from "./components/Contador/Contador"
import { Component } from "react"
import Resultados from "./components/Resultados/Resultados"

class App extends Component {
    menuItems = ["Home", "Marketplace", "Cart", "Login", "Register"]

    constructor(props) {
        super(props)
        this.state = {
            items: [],
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

    render() {
        return (
            <>
                <Navbar items={this.menuItems} />
                <Contador
                    valorInicial={25}
                    handleSubmitNumber={(contador) =>
                        this.handleSubmitNumber(contador)
                    }
                />

                {!!this.state.items.length && (
                    <Resultados items={this.state.items} />
                )}
            </>
        )
    }
}

export default App
