import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ProductViewComponent from './components/product/ProductView';
import HomeComponent from './components/Home';
import ProductListComponent from './components/product/ProductList';
import ProductEditComponent from './components/product/ProductEdit';
import OrganizationsComponent from './components/Organizations';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeComponent />,
      },
      {
        path: '/organizations',
        element: <OrganizationsComponent />,
      },
      {
        path: '/allproducts',
        element: <ProductListComponent />,
      },
      {
        path: 'product',
        element: <ProductViewComponent />,
      },
      {
        path: 'product/edit',
        element: <ProductEditComponent />,
      },
    ],
  },
]);

export default router;
