import React from 'react';
import { LayoutDashboard, Music, Settings, LogOut, PlusSquare } from 'lucide-react';
import './Sidebar.css';

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
    </aside>
  );
};

export default Sidebar;
