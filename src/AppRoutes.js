import Home from "./views/home/Home";
import MainLayoutRoute from "./views/layouts/main/MainLayoutRoute";

const AppRoutes = [
    { Layout: MainLayoutRoute, path: '/', Component: Home, exact: true }
]

export default AppRoutes;