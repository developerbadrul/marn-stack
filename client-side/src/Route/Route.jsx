import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddOperator from "../pages/AddOperator/AddOperator";
import OperatorList from "../pages/OperatorList/OperatorList";

 const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:"/add-operator",
                element: <AddOperator></AddOperator>
            },
            {
                path:"/operator-list",
                element: <OperatorList></OperatorList>
            },
        ]
    }
])

export default router