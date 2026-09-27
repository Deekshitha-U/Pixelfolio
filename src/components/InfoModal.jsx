import { X } from "lucide-react";

function InfoModal({ title, text, onClose }) {
  if (!title) return null;

  return (
    <div className="info-overlay" onClick={onClose}>
      <div
        className="info-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close">
          <X size={21} />
        </button>

        <p className="eyebrow">Pixelfolio</p>

        <h2>{title}</h2>

        <p>{text}</p>
      </div>
    </div>
  );
}

export default InfoModal;