import "./product-card.css"

type Product = {
    imagen: string;
    href: string;
    titulo: string;
    precio: number;
    desc: string;
    id: number;
}

export const crearProductCard = (product: Product) => {
    
    // crear elementos de la tarjeta
    const card = document.createElement("div");
    const img = document.createElement("img");
    const titulo = document.createElement("a");
    const precio = document.createElement("p");
    const desc = document.createElement("p");

    // asignacion de clases
    card.classList.add("product-card");
    img.classList.add("product-card__img");

    titulo.classList.add("product-card__titulo");

    precio.classList.add("product-card__precio")
    desc.classList.add("product-card__desc");

    // insertar contenidos dentro de los elementos
    img.src = product.imagen;

    titulo.href = `/product/${product.id}`
    titulo.textContent = product.titulo;
    titulo.dataset.link = "";

    precio.textContent = `$${product.precio}`

    desc.textContent = product.desc 

    // emparentar elementos
    card.append(img,titulo,precio,desc)

    return card
}