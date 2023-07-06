import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ProductViewComponent from "../components/product/view";
import HomeComponent from "../components/Home";
import ProductListComponent from "../components/product/list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/h",
        element: <HomeComponent />
      },
      {
        path: "/products",
        element: <ProductListComponent />
      },
      {
        // path: "/products/:productId",
        path: "/",
        element: <ProductViewComponent />,
      }
    ],
  },
]);

export default router;
