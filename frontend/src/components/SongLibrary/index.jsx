import React, { useEffect, useState } from "react";
import { Search, Filter, Plus, Edit2, Trash2, Music } from "lucide-react";
import "./SongLibrary.css";
import { getSongs } from "../../services/api";

const SongLibrary = ({ onAddSong }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  async function fetchSongs() {
    const songsApi = await getSongs();
    setSongs(songsApi);
  }
  console.log(songs);

  const mockSongs = [
    {
      id: 1,
      musica: "Eu sou teu Pai",
      tom: "C",
      bpm: 70,
      artista: "Valesca Mayssa",
      editora: "Default",
    },
    {
      id: 2,
      musica: "A casa",
      tom: "F",
      bpm: 70,
      artista: "Rosa Freitas",
      editora: "Casa Nova",
    },
    {
      id: 3,
      musica: "Vitorioso És",
      tom: "G",
      bpm: 80,
      artista: "Gabriel Guedes",
      editora: "MK Music",
    },
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
                        <button className="action-btn delete" title="Excluir">
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
