import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ErrorPage from "./Components/Error/error-page";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Layout from "./Components/Layout";
import LayoutChristmas from "./Components/LayoutChristmas";
import LayoutAdmin from "./Components/LayoutAdmin";

import Banner from "./Components/Banner/Banner.jsx";
import BannerChristmas from "./Components/BannerChristmas/BannerChristmas.jsx";
// lazy
const MainPage = lazy(() => import("./Components/MainPageFolder/MainPage"));
const Products = lazy(() => import("./Components/ProductFolder/Products"));
const AboutUs = lazy(() => import("./Components/AboutUsFolder/AboutUs"));
const Shopping = lazy(() => import("./Components/Shopping/Shopping"));
const Login = lazy(() => import("./Components/LoginFolder/Login"));
const Register = lazy(() => import("./Components/Register/Register"));
const ShipAddress = lazy(() => import("./Components/ShipAddress/ShipAddress"));
const ProductDetails = lazy(() =>
  import("./Components/ProductDetails/ProductDetails")
);
const TypeProduct = lazy(() => import("./Components/TypeProduct/TypeProduct"));
const TypeProductDetail = lazy(() =>
  import("./Components/TypeProductDetail/TypeProductDetail")
);
const Search = lazy(() => import("./Components/Search/Search"));
const Account = lazy(() => import("./Components/Account/Account"));
const Home = lazy(() => import("./Components/Admin/Home/Home"));
const UserList = lazy(() => import("./Components/Admin/UserList/UserList"));
const User = lazy(() => import("./Components/Admin/User/User"));
const NewUser = lazy(() => import("./Components/Admin/NewUser/NewUser"));
const ProductList = lazy(() =>
  import("./Components/Admin/ProductList/ProductList")
);
const Product = lazy(() => import("./Components/Admin/Product/Product"));
const Orders = lazy(() => import("./Components/Admin/Orders/Orders"));
const OrderDetailAdmin = lazy(() =>
  import("./Components/Admin/OrderDetailAdmin/OrderDetailAdmin")
);
const NewProduct = lazy(() =>
  import("./Components/Admin/NewProduct/NewProduct")
);
const TypeProductList = lazy(() =>
  import("./Components/Admin/TypeProductList/TypeProductList")
);
const TypeProductEdit = lazy(() =>
  import("./Components/Admin/TypeProductEdit/TypeProductEdit")
);
const NewTypeProduct = lazy(() =>
  import("./Components/Admin/NewTypeProduct/NewTypeProduct")
);
const OrderDetail = lazy(() => import("./Components/OrderDetail/OrderDetail"));


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: (
                    <LayoutChristmas>
                        {/* <Banner /> */}
                        <BannerChristmas />
                        <MainPage />
                    </LayoutChristmas>
                ),
            },
            {
                path: "MainPage",
                element: (
                    <Layout>
                        <MainPage />
                    </Layout>
                ),
            },

            {
                path: "Products",
                element: (
                    <Layout>
                        <Products />
                    </Layout>
                ),
            },
            {
                path: "AboutUs",
                element: (
                    <Layout>
                        <AboutUs />
                    </Layout>
                ),
            },
            {
                path: "ShoppingCart",
                element: (
                    <Layout>
                        <Shopping />
                    </Layout>
                ),
            },

            {
                path: "Login",
                element: (
                    <Layout>
                        <Login />
                    </Layout>
                ),
            },
            {
                path: "Register",
                element: (
                    <Layout>
                        <Register />
                    </Layout>
                ),
            },
            {
                path: "ShipAddress",
                element: (
                    <Layout>
                        <ShipAddress />
                    </Layout>
                ),
            },

            {
                path: "Account",
                element: (
                    <Layout>
                        <Account />
                    </Layout>
                ),
            },
            {
                path: "Products/:productID",
                element: (
                    <Layout>
                        <ProductDetails />
                    </Layout>
                ),
            },
            {
                path: "Products/Type/:typeID",
                element: (
                    <Layout>
                        <TypeProduct />
                    </Layout>
                ),
            },
            {
                path: "Products/TypeDetail/:typedetailID",
                element: (
                    <Layout>
                        <TypeProductDetail />
                    </Layout>
                ),
            },

            {
                path: "OrderDetail/:orderID",
                element: (
                    <Layout>
                        <OrderDetail />
                    </Layout>
                ),
            },
            {
                path: "Search",
                element: (
                    <Layout>
                        <Search />
                    </Layout>
                ),
            },
            // ==========================================================================================
            // =======================================ADMIN ROUTES=======================================
            // ==========================================================================================
            {
                path: "admin",
                element: (
                    <LayoutAdmin>
                        <Home />
                    </LayoutAdmin>
                ),
            },
            {
                path: "admin/Users",
                element: (
                    <LayoutAdmin>
                        <UserList />
                    </LayoutAdmin>
                ),
            },
            {
                path: "admin/User/:userId",
                element: (
                    <LayoutAdmin>
                        <User />
                    </LayoutAdmin>
                ),
            },
            {
                path: "admin/NewUser",
                element: (
                    <LayoutAdmin>
                        <NewUser />
                    </LayoutAdmin>
                ),
            },
            {
                path: "admin/Orders",
                element: (
                    <LayoutAdmin>
                        <Orders />
                    </LayoutAdmin>
                ),
            },
            {
                path: "admin/Orders/:orderId",
                element: (
                    <LayoutAdmin>
                        <OrderDetailAdmin />
                    </LayoutAdmin>
                ),
            },
            {
                path: "admin/TypeProducts",
                element: (
                    <LayoutAdmin>
                        <TypeProductList />
                    </LayoutAdmin>
                ),
            },
            {
                path: "admin/TypeProduct/:typeProductId",
                element: (
                    <LayoutAdmin>
                        <TypeProductEdit />
                    </LayoutAdmin>
                ),
            },
            {
                path: "admin/NewTypeProduct",
                element: (
                    <LayoutAdmin>
                        <NewTypeProduct />
                    </LayoutAdmin>
                ),
            },
            {
                path: "admin/Products/:typeProductId",
                element: (
                    <LayoutAdmin>
                        <ProductList />
                    </LayoutAdmin>
                ),
            },
            {
                path: "admin/Product/:productId",
                element: (
                    <LayoutAdmin>
                        <Product />
                    </LayoutAdmin>
                ),
            },
            {
                path: "admin/NewProduct/:typeProductId",
                element: (
                    <LayoutAdmin>
                        <NewProduct />
                    </LayoutAdmin>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
