import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ProductViewComponent from "../components/product/view";
import HomeComponent from "../components/Home";
import ProductListComponent from "../components/product/list";
import ProductEditComponent from "../components/product/edit";
import OrganizationsComponent from "../components/Organizations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeComponent />
      },
      {
        path: "/organizations",
        element: <OrganizationsComponent />
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
        path: "product/:id/edit",
        element: <ProductEditComponent />,
      }
    ],
  },
]);

export default router;
