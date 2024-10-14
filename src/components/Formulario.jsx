import React, { useContext, useEffect, useState } from "react";
import ProductosContext from "../context/ProductosContext";
import './Formulario.scss';

const Formulario = () => {
  const formInit = {
    id: null,
    nombre: "",
    precio: "",
    stock: "",
    marca: "",
    categoria: "",
    detalles: "",
    foto: "",
    envio: false,
  };

  const [form, setForm] = useState(formInit);

  const {
    crearProductoContext,
    actualizarProductoContext,
    productoAEditar,
    setProductoAEditar,
  } = useContext(ProductosContext);

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInit);
  }, [productoAEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.id === null) {
        await crearProductoContext(form);
      } else {
        await actualizarProductoContext(form);
      }
      handleReset();
    } catch (error) {
      console.error("[handleSubmit]", error);
    }
  };

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target;

    if(e.target.files){
      //Manejo los archivos subidos en el input
      console.log("Archivos", JSON.stringify(e.target.files))
    }

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleReset = () => {
    setForm(formInit);
    setProductoAEditar(null);
  };

  if(!productoAEditar) return(<></>)

  return (
    <>
      <section className="section-form">
        <h3>Agregar/Editar Producto</h3>
        <form onSubmit={handleSubmit}>
          <table className="form-table">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="lbl-nombre">Nombre</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="nombre"
                    id="lbl-nombre"
                    value={form.nombre}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lbl-precio">Precio</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="precio"
                    id="lbl-precio"
                    value={form.precio}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lbl-stock">Stock</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="stock"
                    id="lbl-stock"
                    value={form.stock}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lbl-marca">Marca</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="marca"
                    id="lbl-marca"
                    value={form.marca}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lbl-categoria">Categoría</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="categoria"
                    id="lbl-categoria"
                    value={form.categoria}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lbl-detalles">Detalles</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="detalles"
                    id="lbl-detalles"
                    value={form.detalles}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lbl-foto">Foto</label>
                </td>
                <td>
                  
                  <input 
                    type="file" 
                    id="avatar" 
                    name="avatar" 
                    defaultValue={form.foto}
                    accept="image/png, image/jpeg" 
                    onChange={handleChange}/>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lbl-envio">Envío</label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="envio"
                    id="lbl-envio"
                    checked={form.envio}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="form-buttons">
                  <button type="submit">Guardar</button>
                  <button type="reset" onClick={handleReset}>
                    Limpiar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
    </>
  );
};

export default Formulario;
