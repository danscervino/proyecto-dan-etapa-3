import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../context/ProductosContext'

const TablaFila = ( { producto }) => {

  const { setProductoAEditar, eliminarProducto } = useContext(ProductosContext)
  
  //console.log(producto)
  const handleEditar = (producto) => {
    console.log('Producto a editar...', producto.id)
    setProductoAEditar(producto)
  }

   //console.log(producto)
   const handleBorrar = (producto) => {
    console.log('Producto a borrar...', producto.id)
    eliminarProducto(producto.id)
  }
  
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button onClick={() => handleEditar(producto)}>Editar</button>
        <button onClick={() => handleBorrar(producto)}>Borrar</button>
      </td>
    </tr>
  )
}

export default TablaFila