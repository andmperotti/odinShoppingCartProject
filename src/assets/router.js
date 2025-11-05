import { createBrowserRouter } from "react-router";
import { StyledHomePage } from "../components/HomePage";
import { StyledCartPage } from "../components/CartPage";
import { StyledShopPage } from "../components/ShopPage";
import { StyledNavbar } from "../components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    Component: StyledNavbar,
    errorElement: StyledNavbar,
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
]);

export { router };
