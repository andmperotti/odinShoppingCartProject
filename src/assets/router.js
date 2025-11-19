import { createBrowserRouter } from "react-router";
import { HomePage, StyledHomePage } from "../components/HomePage";
import { CartPage, StyledCartPage } from "../components/CartPage";
import { ShopPage, StyledShopPage } from "../components/ShopPage";
import { NavBar, StyledNavBar } from "../components/NavBar";
import { App, StyledApp } from "../components/App";

const routes = [
  {
    path: "/",
    Component: StyledApp,
    errorElement: StyledApp,
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
