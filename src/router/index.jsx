import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Nuevo from "../components/Nuevo";
import Editar from "../components/Editar";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/Nuevo",
        element: <Nuevo/>
    },
    {
        path: "/Dashboard",
        element: <Dashboard/>
    },
    {
        path: "/Editar",
        element: <Editar/>
    },

])