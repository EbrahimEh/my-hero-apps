import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import BookDetails from "../Pages/AppDetails/AppDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Installation from "../Pages/Installation/Installation";


export const router = createBrowserRouter([

    {
        path: '/',
        Component: Root,
        
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('/trending.json'),
                Component: Home
                
            },
            {
                path: '/apps',
                loader: () => fetch('/all-apps.json'),
                Component: Apps
            },
            {
                path: '/appDetails/:id',
                loader: () => fetch('/all-apps.json'),
                Component: BookDetails
            },
            {
                path: '/installation',
                loader: () => fetch('/all-apps.json'),
                Component: Installation

            },
            
        ]
    }
])