import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AIFeatures from "./pages/AIFeatures";
import Resources from "./pages/Resources";
import SuccessStories from "./pages/SuccessStories";
import BlogPost from "./components/BlogPost";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-features" element={<AIFeatures />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<BlogPost />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/solutions" element={<PlaceholderPage title="Solutions" />} />
          <Route path="/industries" element={<PlaceholderPage title="Industries" />} />
          <Route path="/resources" element={<PlaceholderPage title="Resources & Blog" />} />
          <Route path="/success-stories" element={<PlaceholderPage title="Success Stories" />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
