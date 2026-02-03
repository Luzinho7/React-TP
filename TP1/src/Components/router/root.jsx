import { createBrowserRouter } from "react-router-dom";
import MentionsLegales from "../pages/MentionsLegales";
import DetailsPokemon from "../pages/DetailsPokemon";
import Home from "../pages/Home";
import ErrorPage from "../pages/404.jsx";
import App from "../../App.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
    {
    path: "/",
    element: <Home />
  },
  {
    path: "/mentions-legales",
    element: <MentionsLegales />
  },
  {
    path: "/details-pokemon/:id",
    element: <DetailsPokemon />
    }
   ]
}
]);

export default Router;