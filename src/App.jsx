import {StrictMode} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./index.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AdministrationPage from "./pages/AdministrationPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import PresentationPage from "./pages/PresentationPage";

export default function App() {
    return (
        <StrictMode>
            <BrowserRouter>
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/presentation" element={<PresentationPage />} />
                        <Route path="/menu" element={<MenuPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/administration" element={<AdministrationPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>

                <Footer />
            </BrowserRouter>
        </StrictMode>
    );
}