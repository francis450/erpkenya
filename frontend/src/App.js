import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Placeholder components for other pages
const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-grow container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground">This page is under construction for the MVP.</p>
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<PlaceholderPage title="Solutions" />} />
          <Route path="/industries" element={<PlaceholderPage title="Industries" />} />
          <Route path="/resources" element={<PlaceholderPage title="Resources & Blog" />} />
          <Route path="/success-stories" element={<PlaceholderPage title="Success Stories" />} />
        </Routes>
    </div>
  );
}

export default App;
