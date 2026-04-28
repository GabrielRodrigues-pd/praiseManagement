import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import SongLibrary from "./components/SongLibrary";
import SongForm from "./components/SongForm";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSongCreated = () => {
    setIsModalOpen(false);
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/biblioteca"
              element={<SongLibrary onAddSong={() => setIsModalOpen(true)} refreshKey={refreshKey} />}
            />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>

        {isModalOpen && <SongForm onClose={() => setIsModalOpen(false)} onSongCreated={handleSongCreated} />}
      </div>
    </Router>
  );
}

export default App;
