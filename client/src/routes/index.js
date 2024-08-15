import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPassword from "../pages/CheckPassword";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import AuthLayout from "../layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path : 'register',
                element: <AuthLayout>
                    <RegisterPage/>
                </AuthLayout> 
            },
            {
                path: 'email',
                element: <AuthLayout> <CheckEmailPage/> </AuthLayout>
            },
            {
                path: 'password',
                element: <AuthLayout> <CheckPassword/>  </AuthLayout>
            },
            {
                path: "",
                element: <Home/>,
                children:[
                    {
                        path: ":userId",
                        element: <MessagePage/>
                    }
                ]
            },
            


        ]
    }
])

export default router;