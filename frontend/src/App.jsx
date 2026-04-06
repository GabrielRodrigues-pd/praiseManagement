import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import SongLibrary from "./components/SongLibrary";
import SongForm from "./components/SongForm";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "biblioteca":
        return <SongLibrary onAddSong={() => setIsModalOpen(true)} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">{renderContent()}</main>

      {isModalOpen && <SongForm onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
