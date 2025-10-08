import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";


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
                Component: Apps
            }
        ]
    }
])