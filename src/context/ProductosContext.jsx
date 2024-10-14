import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

// ! CREANDO CONTEXTO
// ! 1. Creamos el contexto
const ProductosContext = createContext();

// ! 2. Armamos el provider
const ProductosProvider = ({ children }) => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS;
    const [productos, setProductos] = useState(null);
    const [productoAEditar, setProductoAEditar] = useState(null);

    useEffect(() => {
        getAllProductos();
    }, []);

    const getAllProductos = async () => {
        try {
            const prods = await helperPeticionesHttp(url, {});
            setProductos(prods || []); // Aseguramos que prods.productos exista
        } catch (error) {
            console.error("[getAllProductos]", error);
        }
    };

    const crearProductoContext = async (nuevoProducto) => {
        try {
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevoProducto),
            };

            const newProducto = await helperPeticionesHttp(url, options);
            setProductos((prevProductos) => [...(prevProductos || []), newProducto]); // Aseguramos que productos no sea null
        } catch (error) {
            console.error("[crearProductoContext]", error);
        }
    };

    const actualizarProductoContext = async (productoEditado) => {
        try {
            const options = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productoEditado),
            };

            const urlEdicion = `${url}/${productoEditado.id}`; // Aseguramos que la URL esté correctamente formada
            const editedProduct = await helperPeticionesHttp(urlEdicion, options);

            setProductos((prevProductos) =>
                (prevProductos || []).map((producto) =>
                    producto.id === editedProduct.id ? editedProduct : producto
                )
            );
        } catch (error) {
            console.error("[actualizarProductoContext]", error);
        }
    };

    const eliminarProducto = async (id) => {
        try {
            const urlDelete = `${url}/${id}`; // Aseguramos que la URL esté correctamente formada

            const options = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            };

            const deletedProduct = await helperPeticionesHttp(urlDelete, options);

            setProductos((prevProductos) =>
                (prevProductos || []).filter(
                    (producto) => producto.id !== id //el dato real a comparar es el de la respuesta deletedProduct.id
                )
            );
        } catch (error) {
            console.error("[eliminarProducto]", error);
        }
    };

    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        productoAEditar,
        setProductoAEditar,
        eliminarProducto,
    };

    return (
        <ProductosContext.Provider value={data}>
            {children}
        </ProductosContext.Provider>
    );
};

// ! 3. Exportamos el contexto y provider
export { ProductosProvider };
export default ProductosContext;
