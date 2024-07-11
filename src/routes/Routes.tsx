import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import Login from "@/pages/login";
import Home from "@/pages/home";
import Protected from "./protected";

const Routes: React.FC = () => (
  <RouterRoutes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={
        <Protected>
          <Home />
        </Protected>
      }
    />
  </RouterRoutes>
);

export default Routes;
