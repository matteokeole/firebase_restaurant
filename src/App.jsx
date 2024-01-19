import {StrictMode} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "/src/index.module.scss";
import Footer from "/src/components/Footer/Footer";
import Header from "/src/components/Header/Header";
import {AuthenticationContextProvider} from "/src/contexts/AuthenticationContext";
import AdministrationHomePage from "/src/pages/Administration/HomePage";
import AdministrationLogoutPage from "/src/pages/Administration/LogoutPage";
import AdministrationPage from "/src/pages/Administration/Page";
import ContactPage from "/src/pages/ContactPage";
import HomePage from "/src/pages/HomePage";
import LoginPage from "/src/pages/LoginPage";
import MenuPage from "/src/pages/MenuPage";
import NotFoundPage from "/src/pages/NotFoundPage";
import PresentationPage from "/src/pages/PresentationPage";

export default function App() {
    return (
        <StrictMode>
            <BrowserRouter>
                <AuthenticationContextProvider>
                    <Header />

                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/presentation" element={<PresentationPage />} />
                            <Route path="/menu" element={<MenuPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/administration" element={<AdministrationPage />}>
                                <Route path="/administration" element={<AdministrationHomePage />} />
                                <Route path="/administration/logout" element={<AdministrationLogoutPage />} />
                            </Route>
                            <Route path="/administration/login" element={<LoginPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </main>

                    <Footer />
                </AuthenticationContextProvider>
            </BrowserRouter>
        </StrictMode>
    );
}