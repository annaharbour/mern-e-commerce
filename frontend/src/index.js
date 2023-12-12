import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {HelmetProvider} from 'react-helmet-async'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Provider } from "react-redux";
import store from "./store";
import "./assets/bootstrap.custom.css";
import "./assets/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PrivateRoute from "./components/PrivateRoute";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminRoute from "./components/AdminRoute";
import OrderListScreen from "./screens/admin/OrderListScreen";
import ProductListScreen from "./screens/admin/ProductListScreen";
import ProductEditScreen from "./screens/admin/ProductEditScreen";
import UserListScreen from "./screens/admin/UserListScreen";
import UserEditScreen from "./screens/admin/UserEditScreen";

const router = (
	<Router>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index={true} path="/" element={<HomeScreen />} />
				<Route path="/search/:keyword" element={<HomeScreen />} />
				<Route path="/page/:pageNumber" element={<HomeScreen />} />
				<Route
					path="/search/:keyword/page/:pageNumber"
					element={<HomeScreen />}
				/>
				<Route path="/product/:id" element={<ProductScreen />} />
				<Route path="/cart" element={<CartScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/register" element={<RegisterScreen />} />
				<Route path="" element={<PrivateRoute />}>
					<Route path="/shipping" element={<ShippingScreen />} />
					<Route path="/payment" element={<PaymentScreen />} />
					<Route path="/placeorder" element={<PlaceOrderScreen />} />
					<Route path="/order/:id" element={<OrderScreen />} />
					<Route path="/profile" element={<ProfileScreen />} />
				</Route>
				<Route path="" element={<AdminRoute />}>
					<Route path="/admin/orderList" element={<OrderListScreen />} />
					<Route path="/admin/productList" element={<ProductListScreen />} />
					<Route
						path="/admin/productList/:pageNumber"
						element={<ProductListScreen />}
					/>

					<Route
						path="/admin/product/:id/edit"
						element={<ProductEditScreen />}
					/>
					<Route path="/admin/userList" element={<UserListScreen />} />
					<Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
				</Route>
			</Route>
		</Routes>
	</Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<PayPalScriptProvider deferLoading={true}>{router}</PayPalScriptProvider>
			</Provider>
		</HelmetProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
