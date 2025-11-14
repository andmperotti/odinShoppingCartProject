import { createBrowserRouter } from "react-router";
import { StyledHomePage } from "../components/HomePage";
import { StyledCartPage } from "../components/CartPage";
import { StyledShopPage } from "../components/ShopPage";
import { StyledNavBar } from "../components/NavBar";

const routes = [
  {
    path: "/",
    Component: StyledNavBar,
    errorElement: StyledNavBar,
    children: [
      { index: true, Component: StyledHomePage },
      {
        path: "/shop",
        Component: StyledShopPage,
      },
      {
        path: "/cart",
        Component: StyledCartPage,
      },
    ],
  },
];
const router = createBrowserRouter(routes);

export { router, routes };
