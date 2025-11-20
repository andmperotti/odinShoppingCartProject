import { createBrowserRouter } from "react-router";
import { HomePage, StyledHomePage } from "../components/HomePage";
import { CartPage, StyledCartPage } from "../components/CartPage";
import { ShopPage, StyledShopPage } from "../components/ShopPage";
import { App, StyledApp } from "../components/App";

const routes = [
  {
    path: "/",
    Component: StyledApp,
    children: [
      { index: true, Component: StyledHomePage },
      {
        path: "shop",
        Component: StyledShopPage,
      },
      {
        path: "cart",
        Component: StyledCartPage,
      },
    ],
  },
];
const router = createBrowserRouter(routes);

export { router, routes };
