import React, { useState } from 'react';
import { Search, Filter, Plus, Edit2, Trash2 } from 'lucide-react';

const SongLibrary = ({ onAddSong }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockSongs = [
    { id: 1, musica: 'Eu sou teu Pai', tom: 'C', bpm: 70, artista: 'Valesca Mayssa', editora: 'Default' },
    { id: 2, musica: 'A casa', tom: 'F', bpm: 70, artista: 'Rosa Freitas', editora: 'Casa Nova' },
    { id: 3, musica: 'Vitorioso És', tom: 'G', bpm: 80, artista: 'Gabriel Guedes', editora: 'MK Music' },
  ];

  return (
    <div className="library">
      <header className="library-header">
        <div className="header-info">
          <h1>Biblioteca de Músicas</h1>
          <p>Gerencie todo o seu repertório musical.</p>
        </div>
        <button className="primary-btn" onClick={onAddSong}>
          <Plus size={18} />
          <span>Adicionar Música</span>
        </button>
      </header>

      <div className="library-controls">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Buscar por música, artista ou tom..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="secondary-btn">
          <Filter size={18} />
          <span>Filtros</span>
        </button>
      </div>

      <div className="table-card">
        <table className="song-table">
          <thead>
            <tr>
              <th>Música</th>
              <th>Artista</th>
              <th>Tom</th>
              <th>BPM</th>
              <th>Editora</th>
              <th className="actions-header">Ações</th>
            </tr>
          </thead>
          <tbody>
            {mockSongs.map((song) => (
              <tr key={song.id}>
                <td>
                  <div className="song-title-cell">
                    <MusicIcon color={song.id % 2 === 0 ? '#bb0218' : '#1e293b'} />
                    <span className="song-name">{song.musica}</span>
                  </div>
                </td>
                <td className="artist-cell">{song.artista}</td>
                <td>
                  <span className="key-badge">{song.tom}</span>
                </td>
                <td className="bpm-cell">{song.bpm}</td>
                <td className="editora-cell">{song.editora}</td>
                <td className="actions-cell">
                  <div className="action-buttons">
                    <button className="action-btn edit" title="Editar">
                      <Edit2 size={16} />
                    </button>
                    <button className="action-btn delete" title="Excluir">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .library {
          padding: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .library-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .header-info h1 {
          font-size: 2rem;
          color: var(--color-secondary);
          margin-bottom: 8px;
        }

        .header-info p {
          color: var(--color-text-muted);
        }

        .primary-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--color-accent);
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          box-shadow: 0 4px 14px 0 rgba(187, 2, 24, 0.39);
        }

        .primary-btn:hover {
          background-color: #a00215;
          transform: translateY(-2px);
        }

        .library-controls {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .search-bar {
          flex: 1;
          display: flex;
          align-items: center;
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0 1rem;
          transition: border-color 0.2s ease;
        }

        .search-bar:focus-within {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 4px rgba(187, 2, 24, 0.05);
        }

        .search-bar input {
          width: 100%;
          padding: 0.875rem 0.5rem;
          border: none;
          outline: none;
          font-family: inherit;
          font-size: 1rem;
        }

        .search-icon {
          color: var(--color-text-muted);
        }

        .secondary-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--color-white);
          color: var(--color-secondary);
          border: 1px solid var(--color-border);
          padding: 0 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 500;
        }

        .table-card {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
        }

        .song-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .song-table th {
          background-color: #fcfcfd;
          padding: 1rem 1.5rem;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          color: var(--color-text-muted);
          border-bottom: 1px solid var(--color-border);
        }

        .song-table td {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.95rem;
        }

        .song-table tr:hover {
          background-color: #fbfbfb;
        }

        .song-title-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .song-name {
          font-weight: 600;
          color: var(--color-secondary);
        }

        .key-badge {
          background-color: rgba(187, 2, 24, 0.05);
          color: var(--color-accent);
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.875rem;
        }

        .actions-cell {
          width: 100px;
        }

        .action-buttons {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          color: var(--color-text-muted);
          background-color: #f8fafc;
        }

        .action-btn:hover {
          color: var(--color-secondary);
          background-color: #edf2f7;
        }

        .action-btn.edit:hover {
          color: #3b82f6;
          background-color: #eff6ff;
        }

        .action-btn.delete:hover {
          color: var(--color-accent);
          background-color: rgba(187, 2, 24, 0.05);
        }
      `}</style>
    </div>
  );
};

const MusicIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

export default SongLibrary;
