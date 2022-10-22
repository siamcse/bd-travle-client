import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/hotels')
            },
            {
                path:'/booking/:id',
                element: <Booking/>,
                loader: ({params}) => fetch(`http://localhost:5000/booking/${params.id}`)
            }
        ]
    }
])