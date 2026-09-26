import {
  useEffect,
  useMemo,
  useState,
} from "react";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ImageCard from "./ImageCard";
import Lightbox from "./Lightbox";
import Comments from "./Comments";

function Gallery({
  images,
  searchRef,
  trendingMode,
  collectionMode,
  onTrendingReset,
  onShowEverything,
  liked,
  saved,
  onLike,
  onSave,
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [selectedImage, setSelectedImage] = useState(null);
  const [commentImage, setCommentImage] = useState(null);

  /* Reset category when trending is selected */
  useEffect(() => {
    if (trendingMode) {
      setCategory("All");
    }
  }, [trendingMode]);

  /* Reset local filters whenever we leave a collection */
  useEffect(() => {
    if (collectionMode === "all") {
      setSearch("");
      setCategory("All");
    }
  }, [collectionMode]);

  /* Filter images */
  const filteredImages = useMemo(() => {
    let result = [...images];

    /* Trending */
    if (trendingMode) {
      result.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.id - a.id;
      });
    }

    /* Liked */
    if (collectionMode === "liked") {
      result = result.filter((image) =>
        liked.includes(image.id)
      );
    }

    /* Saved */
    if (collectionMode === "saved") {
      result = result.filter((image) =>
        saved.includes(image.id)
      );
    }

    /* Category */
    if (category !== "All") {
      result = result.filter(
        (image) => image.category === category
      );
    }

    /* Search */
    if (search.trim() !== "") {
      const term = search.toLowerCase();

      result = result.filter((image) =>
        `${image.title} ${image.description} ${image.category}`
          .toLowerCase()
          .includes(term)
      );
    }

    return result;
  }, [
    images,
    search,
    category,
    trendingMode,
    collectionMode,
    liked,
    saved,
  ]);

  /* Category click */
  const handleCategory = (value) => {
    setCategory(value);

    if (onTrendingReset) {
      onTrendingReset();
    }
  };

  /* IMPORTANT: Show everything */
  const handleShowEverything = () => {
    // Reset Gallery's own filters
    setSearch("");
    setCategory("All");

    // Tell App to leave liked/saved mode
    if (onShowEverything) {
      onShowEverything();
    }
  };

  return (
    <section
      className="gallery-section"
      id="gallery"
    >
      {/* Heading */}
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            {collectionMode === "liked"
              ? "Your likes"
              : collectionMode === "saved"
              ? "Your saved collection"
              : trendingMode
              ? "Trending now"
              : "Curated visuals"}
          </p>

          <h2>
            {collectionMode === "liked"
              ? "Images you love"
              : collectionMode === "saved"
              ? "Images you saved"
              : trendingMode
              ? "What people are discovering"
              : "Find something worth saving"}
          </h2>
        </div>

        {search && (
          <button
            className="clear-filter"
            onClick={handleShowEverything}
          >
            Clear search
          </button>
        )}
      </div>

      {/* Search */}
      <SearchBar
        value={search}
        onChange={setSearch}
        searchRef={searchRef}
      />

      {/* Categories */}
      <CategoryFilter
        selected={category}
        onChange={handleCategory}
      />

      {/* Images */}
      {filteredImages.length > 0 ? (
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              liked={liked.includes(image.id)}
              saved={saved.includes(image.id)}
              onLike={onLike}
              onSave={onSave}
              onComment={setCommentImage}
              onOpen={setSelectedImage}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No visuals found</h3>

          <p>
            {collectionMode === "liked"
              ? "You haven't liked any images yet."
              : collectionMode === "saved"
              ? "You haven't saved any images yet."
              : "Try another search term or choose a different category."}
          </p>

          <button
            type="button"
            onClick={handleShowEverything}
          >
            Show everything
          </button>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        liked={
          selectedImage
            ? liked.includes(selectedImage.id)
            : false
        }
        saved={
          selectedImage
            ? saved.includes(selectedImage.id)
            : false
        }
        onLike={onLike}
        onSave={onSave}
      />

      {/* Comments */}
      <Comments
        image={commentImage}
        onClose={() => setCommentImage(null)}
      />
    </section>
  );
}

export default Gallery;