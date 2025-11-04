import { createBrowserRouter } from "react-router";
import { StyledHomePage } from "../components/HomePage";
import { StyledCartPage } from "../components/CartPage";
import { StyledShopPage } from "../components/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: StyledHomePage,
    errorElement: StyledHomePage,
  },
  {
    path: "/shop",
    Component: StyledShopPage,
  },
  {
    path: "/cart",
    Component: StyledCartPage,
  },
]);

export { router };
