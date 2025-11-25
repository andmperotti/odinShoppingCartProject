import { createBrowserRouter } from "react-router";
import { HomePage, StyledHomePage } from "../components/Homepage.jsx";
import { CartPage, StyledCartPage } from "../components/Cartpage.jsx";
import { ShopPage, StyledShopPage } from "../components/Shoppage.jsx";
import { App, StyledApp } from "../components/App.jsx";

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
