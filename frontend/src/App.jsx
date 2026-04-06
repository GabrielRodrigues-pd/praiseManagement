import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import SongLibrary from './components/SongLibrary';
import SongForm from './components/SongForm';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'library':
        return <SongLibrary onAddSong={() => setIsModalOpen(true)} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        {renderContent()}
      </main>

      {isModalOpen && (
        <SongForm onClose={() => setIsModalOpen(false)} />
      )}

      <style>{`
        .app-container {
          display: flex;
          min-height: 100vh;
        }

        .main-content {
          flex: 1;
          margin-left: var(--sidebar-width);
          min-height: 100vh;
          background-color: var(--color-neutral);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default App;
