import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarTypes from "../pages/CarTypes";
import CarsList from "../pages/CarsList";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import SlidingAuth from "../pages/SignIn";
import BecomeDriverForm from "../components/UI/BecomeDriverForm";
import CarListing from "../pages/CarTypes";
import CarForm from "../pages/CarForm";
import CarCard from "../pages/carcards";
import Userdash from "../pages/userdashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/DriverForm" element={<BecomeDriverForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/user" element={<Userdash />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Signin" element={<SlidingAuth />} />
      <Route path="/carslist" element={<CarsList />} />
      <Route path="/carform" element={<CarForm />} />
      <Route path="/carcards" element={<CarCard />} />
      <Route path="*" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/" element={<CarListing />} />
      <Route path="/cars/:id" element={<CarDetails />} /> */}
      
    </Routes>
  );
};

export default Routers;
