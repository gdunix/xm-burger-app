import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import Login from "@/pages/login";
import Ingredients from "@/pages/ingredients";
import Protected from "./protected";

const Routes: React.FC = () => (
  <RouterRoutes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={
        <Protected>
          <Ingredients />
        </Protected>
      }
    />
  </RouterRoutes>
);

export default Routes;
