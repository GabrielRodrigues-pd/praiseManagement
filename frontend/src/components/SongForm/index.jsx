import React, { useState } from "react";
import { X, Save } from "lucide-react";
import { createSong } from "../../services/api";
import "./SongForm.css";

const SongForm = ({ onClose, onSongCreated }) => {
  const [formData, setFormData] = useState({
    musica: "",
    artista: "",
    tom: "C",
    bpm: "",
    editora: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const songData = {
        musica: formData.musica,
        artista: formData.artista,
        tom: formData.tom,
        bpm: formData.bpm ? parseInt(formData.bpm) : 70,
        editora: formData.editora || "Default",
      };
      await createSong(songData);
      if (onSongCreated) {
        onSongCreated();
      }
    } catch (error) {
      console.error("Error creating song:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <header className="modal-header">
          <h2>Adicionar Nova Música</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </header>

        <form className="song-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group full">
              <label>Nome da Música</label>
              <input
                type="text"
                name="musica"
                placeholder="Ex: Sou Casa"
                value={formData.musica}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full">
              <label>Artista / Banda</label>
              <input
                type="text"
                name="artista"
                placeholder="Ex: Elizeu Alves"
                value={formData.artista}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Tom (Key)</label>
              <select name="tom" value={formData.tom} onChange={handleChange}>
                <option value="C">C</option>
                <option value="G">G</option>
                <option value="D">D</option>
                <option value="A">A</option>
                <option value="E">E</option>
                <option value="B">B</option>
                <option value="F">F</option>
              </select>
            </div>

            <div className="form-group">
              <label>BPM</label>
              <input
                type="number"
                name="bpm"
                placeholder="70"
                value={formData.bpm}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full">
              <label>Editora (Opcional)</label>
              <input
                type="text"
                name="editora"
                placeholder="Ex: MK Music"
                value={formData.editora}
                onChange={handleChange}
              />
            </div>
          </div>

          <footer className="form-footer">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="submit-btn" disabled={loading}>
              <Save size={18} />
              <span>{loading ? "Salvando..." : "Salvar Música"}</span>
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default SongForm;
