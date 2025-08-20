import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import BooksProvider from "./context/BookContext";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AddBookPage from "./pages/AddBookPage.jsx";
import EditBookPage from "./pages/EditBookPage.jsx";
import BookDetail from "./components/BookDetails.jsx";


function App() {
    return (
        <AuthProvider>
            <BooksProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/add-book" element={<AddBookPage />} />
                        <Route path="/edit-book/:id" element={<EditBookPage />} />
                        <Route path="/book/:id" element={<BookDetail />} />
                    </Routes>
                </Router>
            </BooksProvider>
        </AuthProvider>
    );
}

export default App;
