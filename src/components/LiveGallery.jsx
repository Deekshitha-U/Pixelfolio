import { ArrowUpRight } from "lucide-react";

function LiveGallery({ images, onOpen }) {
  const movingImages = [...images, ...images];

  return (
    <section className="live-gallery">
      <div className="live-heading">
        <div>
          <p className="eyebrow">Keep exploring</p>
          <h2>A little more inspiration.</h2>
        </div>

        <p>
          New perspectives are always waiting around the
          corner.
        </p>
      </div>

      <div className="moving-window">
        <div className="moving-track">
          {movingImages.map((image, index) => (
            <button
              className="moving-card"
              key={`${image.id}-${index}`}
              onClick={() => onOpen(image)}
            >
              <img
                src={image.image}
                alt={image.title}
                loading="lazy"
              />

              <div className="moving-overlay">
                <span>{image.title}</span>
                <ArrowUpRight size={17} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LiveGallery;