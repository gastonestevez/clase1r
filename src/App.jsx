import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Saludo from './components/Saludo/Saludo'

function App() {
  const menuItems = ['Home', 'Marketplace', 'Cart', 'Login']

  return (
    <>
      <Navbar items={menuItems} />
      <Saludo nombre={'Pepe'} edad={32} apellido={'Gomez'} />
      <Footer />
    </>
  )
}

export default App;
