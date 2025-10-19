import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AdminDashboard from "../pages/AdminDashboard";
import NotFound from "../pages/NotFound";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Contact from "../components/common/Contact";
import About from "../components/common/About";

const AppRoutes = () => {
    return (
        <>
            <Header />

            <Routes>
                {/* 🏠 Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/conatct" element={<Contact />} />
                <Route path="/about" element={<About />} />


                {/* 🔐 Auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* 🛠️ Admin */}
                <Route path="/admin" element={<AdminDashboard />} />

                {/* ❌ 404 Page */}
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    );
};

export default AppRoutes;
