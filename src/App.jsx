import "./styles.css";
import { Sidebar } from "./components";
import { Routes, Route } from 'react-router';
import { Home, Projects, Services, Contact } from "./pages";

function App() {
  return (
    <main className="main">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
