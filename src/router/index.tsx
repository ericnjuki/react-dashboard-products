import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ProductViewComponent from "../components/product/view";
import HomeComponent from "../components/Home";
import ProductListComponent from "../components/product/list";
import ProductEditComponent from "../components/product/edit";

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
        path: "product/:id",
        element: <ProductViewComponent />,
      },
      {
        // path: "/products/:productId",
        path: "product/1/edit",
        element: <ProductEditComponent />,
      }
    ],
  },
]);

export default router;
