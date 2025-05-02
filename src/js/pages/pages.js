import {Home} from "./Home";
import ForYourPleasure from "./forYourPleasure";
import {OurCoffee} from "./ourCoffee";

export const pages = [
    {
        path: '/',
        component: <Home/>
    },
    {
        path: '/pleasure',
        component: <ForYourPleasure/>
    },
    {
        path: '/about',
        component: <OurCoffee/>
    }
]