import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./home";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import Layout from "../components/layout";
import ItemPage from "./item";
import AddItemPage from "./addItem";
import { checkIfLoggedIn } from "../helpers/auth-helpers";
import Contact from "./contact";
import HeatMap from "../components/map/heat-map";

function App() {
  const isLoggedIn = checkIfLoggedIn();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Layout />
            </ThemeProvider>
          }
        >
          <Route index element={<Home />} />

          <Route path="*" element={<Navigate to="/" />} />
          <Route path="item/:id" element={<ItemPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="heatmap" element={<HeatMap />} />
          <Route
            path="add/item"
            element={isLoggedIn ? <AddItemPage /> : <Navigate to="/" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
