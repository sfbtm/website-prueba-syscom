import { crearProductCard } from "../components/product-card/product-card";
import { getProducts } from "../services/get-products";
import "../styles/home.css"

export const home = async() => {
    const main = document.createElement("main");

    // banner que acompaña el titulo (titulo sobre banner)
    const banner = document.createElement("div");
    const titulo = document.createElement("h1");

    const subTitulo = document.createElement("h2");

    // contenedor donde van almacenados las cards de productos
    const productContainer = document.createElement("div");

    // asignar clases
    main.classList.add("main__home");
    banner.classList.add("home__banner")
    titulo.classList.add("home__titulo");
    subTitulo.classList.add("home__subtitulo");
    productContainer.classList.add("home__container")

    // traer los productos de la BD (un .json hardcodeado en este caso)
    try{
        const productosArray = await getProducts();

        productosArray.forEach(producto => {
            const productCard = crearProductCard(producto);
            productContainer.append(productCard);
        })
    } catch(error){
        console.error(`No se pudieron traer los elementos. status: ${error}`)
        const aviso = document.createElement("p");
        aviso.textContent = "Fallo al cargar!";
        productContainer.append(aviso);
    }


    titulo.textContent = "Explora nuestros productos";

    subTitulo.textContent = "Productos en tendencia";

    // emparentar elementos
    banner.append(titulo);
    main.append(banner,subTitulo,productContainer)

    return main
}


