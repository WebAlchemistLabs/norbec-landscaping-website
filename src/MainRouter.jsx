// src/MainRouter.jsx
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Contact from "./components/Contact";

/**
 * Centralized application routing
 * All pages render inside <Layout /> using <Outlet />
 */

export default function MainRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
      </Route>
    </Routes>
  );
}
