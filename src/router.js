import { createBrowserRouter } from "react-router";
import { HomePage, StyledHomePage } from "./components/HomePage.jsx";
import { CartPage, StyledCartPage } from "./components/CartPage.jsx";
import { ShopPage, StyledShopPage } from "./components/ShopPage.jsx";
import { App, StyledApp } from "./components/App.jsx";

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
