import { crearHeader } from "./components/header/header";
import { home } from "./views/home";


// CONVIENE MUCHISIMO AÑADIR UN LOADER! 

// tipo para cada funcion de ruta (Una funcion que devuelve un HTMLELement)
type RouteFn = () => HTMLElement | Promise<HTMLElement> 

// objeto de rutas
const routes: Record<string, RouteFn> = {
    "/home": home
}

// funcion encargada de la navegacion
const navigate = (event: MouseEvent) => {
    
    // almacenar el target del evento
    const target = event.target as HTMLAnchorElement;
    // verificar si existe o tiene .href
    if (!target || !target.href) return;

    event.preventDefault();
    window.history.pushState({},"",target.href);

}

const handleLocation = async() => {
    // obtener la ruta de la barra URL
    const path = window.location.pathname;
    // obtener la funcion correspondiente de la ruta
    const routeFunction = routes[path] || routes["/home"];

    // obtener el contenedor principal del index.html
    const app = document.getElementById("app")!;


    app.innerHTML = "";
    app.appendChild(crearHeader());
    app.appendChild( await routeFunction() );
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