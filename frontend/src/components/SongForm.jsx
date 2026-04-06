import React from 'react';
import { X, Save } from 'lucide-react';
import './SongForm.css';

const SongForm = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <header className="modal-header">
          <h2>Adicionar Nova Música</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </header>

        <form className="song-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            <div className="form-group full">
              <label>Nome da Música</label>
              <input type="text" placeholder="Ex: Sou Casa" required />
            </div>
            
            <div className="form-group full">
              <label>Artista / Banda</label>
              <input type="text" placeholder="Ex: Elizeu Alves" required />
            </div>

            <div className="form-group">
              <label>Tom (Key)</label>
              <select>
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
              <input type="number" placeholder="70" />
            </div>

            <div className="form-group full">
              <label>Editora (Opcional)</label>
              <input type="text" placeholder="Ex: MK Music" />
            </div>
          </div>

          <footer className="form-footer">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="submit-btn" onClick={onClose}>
              <Save size={18} />
              <span>Salvar Música</span>
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};


export default SongForm;
