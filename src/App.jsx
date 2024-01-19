import "leaflet/dist/leaflet.css";
import {StrictMode} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "/src/index.module.scss";
import Footer from "/src/components/Footer/Footer";
import Header from "/src/components/Header/Header";
import {AuthenticationContextProvider} from "/src/contexts/AuthenticationContext";
import {MealContextProvider} from "/src/contexts/MealContext";
import AdministrationBasePage from "/src/pages/Administration/BasePage";
import AdministrationHomePage from "/src/pages/Administration/HomePage";
import AdministrationLogoutPage from "/src/pages/Administration/LogoutPage";
import ContactPage from "/src/pages/ContactPage";
import HomePage from "/src/pages/HomePage";
import LoginPage from "/src/pages/LoginPage";
import MenusPage from "/src/pages/MenusPage";
import NotFoundPage from "/src/pages/NotFoundPage";
import PresentationPage from "/src/pages/PresentationPage";
import SitemapPage from "/src/pages/SitemapPage";

export default function App() {
    return (
        <StrictMode>
            <BrowserRouter>
                <AuthenticationContextProvider>
                    <MealContextProvider>
                        <Header />

                        <main>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/presentation" element={<PresentationPage />} />
                                <Route path="/menus" element={<MenusPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/sitemap" element={<SitemapPage />} />
                                <Route path="/administration" element={<AdministrationBasePage />}>
                                    <Route path="/administration" element={<AdministrationHomePage />} />
                                    <Route path="/administration/logout" element={<AdministrationLogoutPage />} />
                                </Route>
                                <Route path="/administration/login" element={<LoginPage />} />
                                <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                        </main>

                        <Footer />
                    </MealContextProvider>
                </AuthenticationContextProvider>
            </BrowserRouter>
        </StrictMode>
    );
}