import React from "react";
import { Music, Mic2, Disc, PlayCircle } from "lucide-react";
import "./Dashboard.css";

const Dashboard = () => {
  const stats = [
    { label: "Todas as Músicas", value: "42", icon: <Music />, color: "blue" },
    { label: "Artistas", value: "18", icon: <Mic2 />, color: "indigo" },
    { label: "Editoras", value: "7", icon: <Disc />, color: "teal" },
    {
      label: "Sugestão da Semana",
      value: "Fogo",
      icon: <PlayCircle />,
      color: "red",
    },
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Bem-vindo ao Praise Manager</h1>
        <p>Acompanhe e organize o seu repertório principal.</p>
      </header>

      <section className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className={`stat-icon-wrapper ${stat.color}`}>{stat.icon}</div>
            <div className="stat-info">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="dashboard-content">
        <div className="main-card">
          <h2>Atividade Recente</h2>
          <div className="empty-state">
            <Music size={48} className="empty-icon" />
            <p>Nenhuma atividade recente registrada ainda.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
