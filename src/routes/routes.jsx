import Login from "../pages/Login";
import Admin from "../pages/Admin";

const routes = [
  {
    path: "/",
    element: <Admin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
