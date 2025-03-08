import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import TermsAndConditions from "../pages/Documents/TermsAndConditions";
import Categories from "../pages/Categories";
import Home from "../pages/Home";

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default RoutesApp;