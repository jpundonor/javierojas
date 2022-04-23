import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Main } from "../components/views/main/Main";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
