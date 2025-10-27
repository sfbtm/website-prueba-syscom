import { crearProductCardCart } from "../components/product-card-cart/product-card-cart";
import { getProducts } from "../services/get-products";

import "../styles/cart.css"

export const cart = async() => {
    const main = document.createElement("main")

    const titulo = document.createElement("h1");

    titulo.textContent = "Tu Carrito"

    const productContainer = document.createElement("div");

     // traer los productos de la BD (un .json hardcodeado en este caso)
        try{
            const productosArray = await getProducts();
    
            productosArray.forEach(producto => {
                const productCard = crearProductCardCart(producto);
                productContainer.append(productCard);
            })
        } catch(error){
            console.error(`No se pudieron traer los elementos. status: ${error}`)
            const aviso = document.createElement("p");
            aviso.textContent = "Fallo al cargar!";
            productContainer.append(aviso);
        }
    
        // asignar clases
        productContainer.classList.add("cart__product-container")
        titulo.classList.add("cart__titulo")


        main.append(titulo,productContainer)
    return main
}