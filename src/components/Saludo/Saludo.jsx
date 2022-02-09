import './Saludo.css'

const Saludo = ({ nombre, edad, apellido }) => {

    return (
        <>
            {
                apellido ? 
                (
                    <>
                        <div className='body-container'>
                            <h1>Hola mi nombre es {nombre} {apellido}</h1>
                            <p>Tengo {edad} años.</p>
                            <p>El año que viene tendré {edad+1} años.</p>
                        </div>
                    </>
                ) : 'Cargando....'
            }
        </>
    )
}

export default Saludo