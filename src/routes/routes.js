import { createBrowserRouter } from "react-router-dom";
import AllHotel from "../components/AllHotel/AllHotel";
import Booking from "../components/Booking/Booking";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://bd-travel-server-siamcse.vercel.app/hotels')
            },
            {
                path: '/booking/:id',
                element: <Booking />,
                loader: ({ params }) => fetch(`https://bd-travel-server-siamcse.vercel.app/booking/${params.id}`)
            },
            {
                path: '/allhotel',
                element: <PrivateRoutes><AllHotel></AllHotel></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])