import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Home from './components/Home';
import About from './components/About';
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
import Gallery from './components/Gallery';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function HomePage() {
    return (
        <>
            <Home />
            <About />
            <Services />
            <Gallery />
        </>
    );
}

function App() {
    return (
        <Router>
            <ErrorBoundary>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/services" component={ServicesPage} />
                        <Route path="/gallery" component={GalleryPage} />
                        <Route path="/contact" component={ContactPage} />
                    </Switch>
                    <Footer />
                </div>
            </ErrorBoundary>
        </Router>
    );
}

export default App; 