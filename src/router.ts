import { crearFooter } from "./components/footer/footer";
import { crearHeader } from "./components/header/header";
import { aboutUs } from "./views/about-us";
import { cart } from "./views/cart";
import { home } from "./views/home";
import { product } from "./views/product";
import { profile } from "./views/profile";


// CONVIENE MUCHISIMO AÑADIR UN LOADER! 

// tipo para cada funcion de ruta (Una fucion asincronica, que devuelve un elemento HTML o una promesa)
type RouteFn = () => HTMLElement | Promise<HTMLElement> 

// objeto de rutas
const routes: Record<string, RouteFn> = {
    "/home": home,
    "/about-us": aboutUs,
    "/cart": cart,
    "/profile": profile,
}

// funcion encargada de la navegacion
const navigate = (event: MouseEvent) => {
    event.preventDefault();
    console.log(event.target)
    // almacenar el target del evento
    const target = event.target as HTMLAnchorElement;
    // verificar si existe o tiene .href
    if (!target || !target.href) return;
    window.history.pushState({},"",target.href);
    handleLocation()
}

// funcion encargada de renderizar la pagina entorno a la barra URL
const handleLocation = async() => {
    // obtener la ruta de la barra URL
    const path = window.location.pathname;

    
    // obtener el contenedor principal del index.html
    const app = document.getElementById("app")!;

    // Encargado de manera que producto carga en la vista producto
    const productMatch = path.match(/^\/product\/(\d+)$/);

    if (productMatch){
        const id = Number(productMatch[1]);
        const view = await product(id);
        app.innerHTML = "";
        app.appendChild(crearHeader());
        app.append(view);
        app.appendChild(crearFooter())
        return;
    }
    
    
    // obtener la funcion correspondiente de la ruta
    const routeFunction = routes[path] || routes["/home"];
    
    app.innerHTML = "";
    app.appendChild(crearHeader());
    app.appendChild( await routeFunction() );
    app.appendChild(crearFooter())
}

// funcion que inicializa el enrutador y se pone en main.ts
export const initRouter = () => {

    window.onpopstate = handleLocation;

    document.addEventListener("click", e => {
        const link = (e.target as Element).closest("a[data-link]")
        
        if (link){
            navigate(e);
        }
    })

    handleLocation()
}