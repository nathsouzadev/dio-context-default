import Home from '../pages/Home';
import Profile from '../pages/Profile';

export const BASIC_ROUTER_CONFIG = [
    {
        path: '/',
        exact: true,
        component: Home,
    }, 
    {
        path: '/perfil',
        exact: true,
        component: Profile,
    }
]
