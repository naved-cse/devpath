import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import RoadmapList from "./pages/RoadmapList";
import RoadmapDetail from "./pages/RoadmapDetail";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className=" flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                </>
              }
            />
            <Route path="/roadmaps" element={<RoadmapList />} />
            <Route path="/roadmap/:id" element={<RoadmapDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
