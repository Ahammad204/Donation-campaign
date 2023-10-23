import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CategoryDetails from './../Pages/category/CategoryDetails';
import App from "../Pages/Statistics/Statistics";



const MyOwnRouter = createBrowserRouter([

    {

        path:"/",
        element:<RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[

            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch('/donation.json')

            },{
                path:"/donation",
                element:<Donation></Donation>

            },{
                path:"/statistics",
                element:<Statistics></Statistics>
            },{
                path:"/categoryDetails/:id",
                element:<CategoryDetails></CategoryDetails>,
               
            },{
                path:"/App",
                element: <App></App>
            }
        ]


    }

])

export default MyOwnRouter;