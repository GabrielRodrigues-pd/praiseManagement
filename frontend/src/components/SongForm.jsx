import React from 'react';
import { X, Save } from 'lucide-react';

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

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background-color: white;
          width: 90%;
          max-width: 500px;
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--color-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h2 {
          font-size: 1.25rem;
          color: var(--color-secondary);
        }

        .close-btn {
          color: var(--color-text-muted);
        }

        .close-btn:hover {
          color: var(--color-secondary);
        }

        .song-form {
          padding: 1.5rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .form-group.full {
          grid-column: span 2;
        }

        .form-group label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-secondary);
          margin-bottom: 6px;
        }

        .form-group input, .form-group select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--color-border);
          border-radius: 8px;
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color 0.2s ease;
        }

        .form-group input:focus, .form-group select:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(187, 2, 24, 0.05);
        }

        .form-footer {
          margin-top: 2rem;
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
        }

        .cancel-btn {
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }

        .submit-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--color-accent);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          box-shadow: 0 4px 14px 0 rgba(187, 2, 24, 0.3);
        }

        .submit-btn:hover {
          background-color: #a00215;
        }
      `}</style>
    </div>
  );
};

export default SongForm;
