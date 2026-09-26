import {
  X,
  Heart,
  Bookmark,
  ArrowUpRight,
} from "lucide-react";

function Lightbox({
  image,
  onClose,
  liked,
  saved,
  onLike,
  onSave,
}) {
  if (!image) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <div
        className="lightbox-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close preview"
        >
          <X size={22} />
        </button>

        <div className="lightbox-image">
          <img src={image.image} alt={image.title} />
        </div>

        <div className="lightbox-info">
          <div>
            <span>{image.category}</span>
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </div>

          <div className="lightbox-actions">
            <button
              className={liked ? "active" : ""}
              onClick={() => onLike(image.id)}
            >
              <Heart
                size={19}
                fill={liked ? "currentColor" : "none"}
              />
              {liked ? "Liked" : "Like"}
            </button>

            <button
              className={saved ? "active" : ""}
              onClick={() => onSave(image.id)}
            >
              <Bookmark
                size={19}
                fill={saved ? "currentColor" : "none"}
              />
              {saved ? "Saved" : "Save"}
            </button>

            <button>
              <ArrowUpRight size={19} />
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;