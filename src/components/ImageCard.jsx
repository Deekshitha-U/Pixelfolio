import {
  Heart,
  Bookmark,
  MessageCircle,
} from "lucide-react";

function ImageCard({
  image,
  liked,
  saved,
  onLike,
  onSave,
  onComment,
  onOpen,
}) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen(image);
    }
  };

  return (
    <article className="image-card">
      <div
        className="image-button"
        role="button"
        tabIndex={0}
        onClick={() => onOpen(image)}
        onKeyDown={handleKeyDown}
      >
        <img src={image.image} alt={image.title} loading="lazy" />

        <div className="image-gradient"></div>

        <div className="image-info">
          <div className="image-title-area">
            <h3>{image.title}</h3>
            <p>{image.category}</p>
          </div>

          <div className="card-actions">
            <button
              className={`card-action ${liked ? "liked" : ""}`}
              onClick={(event) => {
                event.stopPropagation();
                onLike(image.id);
              }}
              aria-label={`Like ${image.title}`}
            >
              <Heart
                size={19}
                fill={liked ? "currentColor" : "none"}
              />
            </button>

            <button
              className={`card-action ${saved ? "saved" : ""}`}
              onClick={(event) => {
                event.stopPropagation();
                onSave(image.id);
              }}
              aria-label={`Save ${image.title}`}
            >
              <Bookmark
                size={19}
                fill={saved ? "currentColor" : "none"}
              />
            </button>

            <button
              className="card-action"
              onClick={(event) => {
                event.stopPropagation();
                onComment(image);
              }}
              aria-label={`Comment on ${image.title}`}
            >
              <MessageCircle size={19} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ImageCard;