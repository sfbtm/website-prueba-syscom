import { crearProductCard } from "../components/product-card/product-card";
import { getProducts } from "../services/get-products"

import "../styles/product.css"

export const product = async(id: number) => {

    // crear los elementos
    const main = document.createElement("main");

    // contenedor donde va el producto principal a mostrar
    const productContainer = document.createElement("div");

    
    const productImg = document.createElement("img");

    const detailContainer = document.createElement("div");
    const titulo = document.createElement("h1");
    const precio = document.createElement("p");
    const desc = document.createElement("p");

    const comprar = document.createElement("button");
    comprar.textContent = "Comprar"

    // contenedor donde van los productos relacionados
    const relatedContainer = document.createElement("div");
    const relatedTitulo = document.createElement("h2");
    
    const cardContainer = document.createElement("div");

    relatedTitulo.textContent = "Productos relacionados"

    // traer la informacion de los productos y meter su informacion en el DOM
    try {
        const productosArray = await getProducts();
        productosArray.forEach(producto => {
            if (producto.id == id){
                // darle el src a la imagen
                productImg.src = producto.imagen;
                titulo.textContent = producto.titulo;
                precio.textContent = `$${producto.precio}`;
                desc.textContent = producto.desc
            } else {
                const relatedCard = crearProductCard(producto);
                cardContainer.append(relatedCard);
            }
        })
    } catch {
        console.error("Los productos no llegaron!")
    }

    //emparentar elementos
    productContainer.append(productImg,detailContainer);
    detailContainer.append(titulo,precio,desc,comprar);

    relatedContainer.append(relatedTitulo,cardContainer)

    main.append(productContainer,relatedContainer)

    // asignar clases
    main.classList.add("main__product");
    productContainer.classList.add("product-container");

    productImg.classList.add("product-container__img");
    detailContainer.classList.add("product-container__details");
    
    titulo.classList.add("product-container__details__title");
    precio.classList.add("product-container__details__price");
    desc.classList.add("product-container__details__desc");
    comprar.classList.add("product-container__details__buy-btn");

    // quizá pueda hacerlo un componente, por si escala
    relatedContainer.classList.add("related-container");
    relatedTitulo.classList.add("related-container__title")
    cardContainer.classList.add("related-container__container")



    return main

}