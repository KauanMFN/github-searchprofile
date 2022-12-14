import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { App } from "./App";
import { Home } from "./pages/Home";
import { ProfileView } from "./pages/ProfileView";
import { Search } from "./pages/Search";

import "../index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="users/:id" element={<Search />} />
                    <Route path="/" element={<ProfileView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
