import "./product-card-cart.css"

type Product = {
    imagen: string;
    href: string;
    titulo: string;
    precio: number;
    desc: string;
    id: number;
}

// los productos aca estan hardcodeados por falta de BD

export const crearProductCardCart = (product: Product) => {
    
    // crear elementos de la tarjeta
    const card = document.createElement("div");
    const img = document.createElement("img");

    const detailContainer = document.createElement("div")
    const titulo = document.createElement("a");
    const desc = document.createElement("p");
    
    const optionsContainer = document.createElement("div");
    const precio = document.createElement("p");
    const borrar = document.createElement("button");

    const quantityChooser = document.createElement("div")
    const plusButton = document.createElement("button");
    const minusButton = document.createElement("button");
    let quantity = 1;
    const quantityContainer = document.createElement("p")

    plusButton.textContent = "+"
    minusButton.textContent = "-"
    quantityContainer.textContent = `${quantity}`

    // funcionamiento de los botones de cantidad
    plusButton.addEventListener("click", () => {
        quantity++
        quantityContainer.textContent = `${quantity}`
    })

    minusButton.addEventListener("click", () => {
        if (quantity > 0){
            quantity--
            quantityContainer.textContent = `${quantity}`
        } 
    })

    // asignacion de clases
    card.classList.add("product-card-cart");
    img.classList.add("product-card-cart__img");

    detailContainer.classList.add("product-card-cart__details")
    titulo.classList.add("product-card-cart__details__titulo");
    desc.classList.add("product-card-cart__details__desc");

    optionsContainer.classList.add("product-card-cart__options")
    precio.classList.add("product-card-cart__options__precio")
    borrar.classList.add("product-card-cart__options__borrar")

    quantityChooser.classList.add("product-card-cart__options__quantity-chooser")
    plusButton.classList.add("product-card-cart__options__quantity-chooser__btn")
    minusButton.classList.add("product-card-cart__options__quantity-chooser__btn")
    quantityContainer.classList.add("product-card-cart__options__quantity-chooser__quantity")

    // insertar contenidos dentro de los elementos
    img.src = product.imagen;

    titulo.href = `/product/${product.id}`
    titulo.textContent = product.titulo;
    titulo.dataset.link = "";

    precio.textContent = `$${product.precio}`

    desc.textContent = product.desc 

    // emparentar elementos

    quantityChooser.append(plusButton,quantityContainer,minusButton);
    optionsContainer.append(borrar,precio,quantityChooser);

    detailContainer.append(titulo,desc);

    card.append(img,detailContainer,optionsContainer)

    return card
}