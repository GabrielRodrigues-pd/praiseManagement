import React from 'react';
import { LayoutDashboard, Music, Settings, LogOut, PlusSquare } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'library', label: 'Biblioteca', icon: <Music size={20} /> },
  ];

  const bottomItems = [
    { id: 'settings', label: 'Configurações', icon: <Settings size={20} /> },
    { id: 'logout', label: 'Sair', icon: <LogOut size={20} /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <Music className="logo-icon" size={24} />
          <span>Praise Manager</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-group">
          <span className="nav-label">Menu Principal</span>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="sidebar-footer">
        {bottomItems.map((item) => (
          <button key={item.id} className="nav-item">
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.label}</span>
          </button>
        ))}
      </div>

      <style>{`
        .sidebar {
          width: var(--sidebar-width);
          height: 100vh;
          background-color: var(--color-secondary);
          color: white;
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 100;
        }

        .sidebar-header {
          padding: 2rem 1.5rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: -0.5px;
        }

        .logo-icon {
          color: var(--color-accent);
        }

        .sidebar-nav {
          flex: 1;
          padding: 0 1rem;
        }

        .nav-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nav-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          margin-left: 0.5rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          width: 100%;
          text-align: left;
        }

        .nav-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
        }

        .nav-item.active {
          background-color: var(--color-accent);
          color: white;
          box-shadow: 0 4px 14px 0 rgba(187, 2, 24, 0.39);
        }

        .sidebar-footer {
          padding: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
