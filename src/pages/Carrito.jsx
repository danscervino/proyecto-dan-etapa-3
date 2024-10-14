import useTitulo from "../hooks/useTitulo"
import ListadoCarrito from "../components/ListadoCarrito"

const Carrito = () => {

  useTitulo('Carrito')

  return (
    <div className="main">
        <header className="section-cards__header">
        <h1>Productos en el Carrito</h1>
      </header>
      <ListadoCarrito />
    </div>
  )
}

export default Carrito