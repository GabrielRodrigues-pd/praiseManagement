import React, { useEffect, useState } from "react";
import { Search, Filter, Plus, Edit2, Trash2, Music } from "lucide-react";
import "./SongLibrary.css";
import { getSongs, deleteSong } from "../../services/api";

const SongLibrary = ({ onAddSong, refreshKey }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, [refreshKey]);

  async function fetchSongs() {
    const songsApi = await getSongs();
    setSongs(songsApi);
  }

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta música?")) {
      try {
        await deleteSong(id);
        fetchSongs();
      } catch (error) {
        console.error("Error deleting song:", error);
      }
    }
  };

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

      {/* Campo de Busca */}
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
            {Array.isArray(songs)
              ? songs.map((song) => (
                  <tr key={song.id}>
                    <td>
                      <div className="song-title-cell">
                        <Music
                          color={song.id % 2 === 0 ? "#bb0218" : "#1e293b"}
                        />
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
                        <button className="action-btn delete" title="Excluir" onClick={() => handleDelete(song.id)}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// const MusicIcon = ({ color }) => (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke={color}
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M9 18V5l12-2v13" />
//     <circle cx="6" cy="18" r="3" />
//     <circle cx="18" cy="16" r="3" />
//   </svg>
// );

export default SongLibrary;
