import Home from "./components/Home";
import Singin from "./components/Singin";
import Singup from "./components/Singup";
import Perfil from "./components/Perfil";
import ErrorNotFound from "./components/ErrorNotFound";

export const routes = [
    {
        path: '', name: 'home', component: Home 
    },
    {
        path: '/singin', name: 'singin', component: Singin, 
    },
    {
        path: '/singup', name: 'singup', component: Singup 
    },
    {      
        path: '/perfil/:username/', name: 'perfil', component: Perfil
    },
    {
        path: '*', name: 'error', component: ErrorNotFound
    }
];
