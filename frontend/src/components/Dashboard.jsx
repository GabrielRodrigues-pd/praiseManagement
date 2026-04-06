import React from 'react';
import { Music, Mic2, Disc, PlayCircle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Todas as Músicas', value: '42', icon: <Music />, color: 'blue' },
    { label: 'Artistas', value: '18', icon: <Mic2 />, color: 'indigo' },
    { label: 'Editoras', value: '7', icon: <Disc />, color: 'teal' },
    { label: 'Sugestão da Semana', value: 'Fogo', icon: <PlayCircle />, color: 'red' },
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
            <div className={`stat-icon-wrapper ${stat.color}`}>
              {stat.icon}
            </div>
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

      <style>{`
        .dashboard {
          padding: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-header {
          margin-bottom: 2.5rem;
        }

        .dashboard-header h1 {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--color-secondary);
          letter-spacing: -0.5px;
          margin-bottom: 0.5rem;
        }

        .dashboard-header p {
          color: var(--color-text-muted);
          font-size: 1.1rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .stat-card {
          background-color: var(--color-white);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          gap: 1.25rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .stat-icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-neutral);
          color: var(--color-secondary);
        }

        .stat-icon-wrapper.red {
          background-color: rgba(187, 2, 24, 0.1);
          color: var(--color-accent);
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-secondary);
        }

        .main-card {
          background-color: var(--color-white);
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          min-height: 300px;
        }

        .main-card h2 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 200px;
          color: var(--color-text-muted);
          gap: 1rem;
        }

        .empty-icon {
          opacity: 0.2;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
