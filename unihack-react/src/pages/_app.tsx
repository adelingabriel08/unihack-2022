import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./home";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import Layout from "../components/layout";

function App() {
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
