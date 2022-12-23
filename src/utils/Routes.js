import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home'
import Root from '../components/Root'
import Shop from '../components/Shop'
import ErrorPage from '../components/ErrorPage'
import About from '../components/About'
import Cart from '../components/Cart'
import { dataLoader } from "../LoaderData/dataLoader";
const router=createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        loader:dataLoader,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: 'shop',
                element: <Shop/>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: 'about',
                element: <About/>
            }
        ]
    }
]);
export default router;