import { useContext } from 'react'

import './Inicio.scss'
import useTitulo from '../hooks/useTitulo'
import Card from '../components/Card'
import ProductosContext from '../context/ProductosContext'

const Inicio = () => {

  const { productos } = useContext(ProductosContext)

  //console.log(productos)

  useTitulo('Inicio')
  
  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>Artículos de escalada y trabajo en altura</h1>
          <p className='subtitulo'>Se encontraron estos productos</p>
        </header>
      
      
        <div className="cards-container" id="contenedor-cards">

          {
            productos && productos?.map((producto) => (
              <Card key={producto.id} producto={producto} />
            ))
          }
          
          
        </div>

      </section> 
    </main>
  )
}

export default Inicio