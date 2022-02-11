const Navbar = ({ items }) => {
    const renderItem = (nombre) => <li key={nombre} >{nombre}</li>

    return (
        <>
            <ul>{items.map((item) => renderItem(item))}</ul>
        </>
    )
}

export default Navbar
