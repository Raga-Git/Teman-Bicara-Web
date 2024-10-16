import { createBrowserRouter } from "react-router-dom";

import NavBarView from "./navBarView";
import HomePageView from "../../view/Homepage/HomePageView";
import ArtikelPage from "../../view/Artikel/ArtikelPage";
import QuizPage from "../../view/Quiz/QuizPage";
import AboutPage from "../../view/About/AboutPage";
import LoginPage from "../../view/login/loginPage";
export const router = createBrowserRouter([
    {      
        path: "/",
        element: <NavBarView />,
        children: [
            {
                path: "/",
                element: <HomePageView />
            },
            {
                path: "/Artikel",
                element: <ArtikelPage />
            },
            {
                path: "/Quiz",
                element: <QuizPage />
            },
            {
                path: "/About",
                element: <AboutPage />
            },

        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);