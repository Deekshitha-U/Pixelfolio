import { useRef, useState } from "react";

import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import LiveGallery from "./components/LiveGallery";
import Footer from "./components/Footer";
import InfoModal from "./components/InfoModel";
import Lightbox from "./components/Lightbox";

import images from "./data/images";

function App() {
  const searchRef = useRef(null);

  const [showLogin, setShowLogin] = useState(false);
  const [trendingMode, setTrendingMode] = useState(false);

  const [previewImage, setPreviewImage] = useState(null);

  // Controls:
  // all    = normal gallery
  // liked  = liked images
  // saved  = saved images
  const [collectionMode, setCollectionMode] = useState("all");

  const [liked, setLiked] = useState([]);
  const [saved, setSaved] = useState([]);

  const [infoModal, setInfoModal] = useState({
    title: "",
    text: "",
  });

  /* ---------------- SEARCH ---------------- */

  const focusSearch = () => {
    document
      .getElementById("gallery")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    setTimeout(() => {
      searchRef.current?.focus();
    }, 500);
  };

  /* ---------------- EXPLORE ---------------- */

  const exploreGallery = () => {
    setTrendingMode(false);
    setCollectionMode("all");

    document
      .getElementById("gallery")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  /* ---------------- TRENDING ---------------- */

  const showTrending = () => {
    setTrendingMode(true);
    setCollectionMode("all");

    document
      .getElementById("gallery")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  /* ---------------- CATEGORIES ---------------- */

  const showCategories = () => {
    document
      .getElementById("categories")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };

  /* ---------------- LIKED ---------------- */

  const showLiked = () => {
    setTrendingMode(false);
    setCollectionMode("liked");

    document
      .getElementById("gallery")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  /* ---------------- SAVED ---------------- */

  const showSaved = () => {
    setTrendingMode(false);
    setCollectionMode("saved");

    document
      .getElementById("gallery")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  /* ---------------- SHOW EVERYTHING ---------------- */

 const showEverything = () => {
  setTrendingMode(false);
  setCollectionMode("all");

  document
    .getElementById("gallery")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};
  /* ---------------- LIKE ---------------- */

  const toggleLike = (id) => {
    setLiked((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  /* ---------------- SAVE ---------------- */

  const toggleSave = (id) => {
    setSaved((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  /* ---------------- INFO MODAL ---------------- */

  const openInfo = (title, text) => {
    setInfoModal({
      title,
      text,
    });
  };

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}

      <Navbar
        onLogin={() => setShowLogin(true)}
        onSearch={focusSearch}
        onExplore={exploreGallery}
        onTrending={showTrending}
        onCategories={showCategories}
        onLiked={showLiked}
        onSaved={showSaved}
        collectionMode={collectionMode}
      />

      {/* ================= MAIN ================= */}

      <main>
        {/* ================= HERO ================= */}

        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">
              Visual inspiration
            </p>

            <h1>
              See the world
              <br />
              <em>differently.</em>
            </h1>

            <p className="hero-description">
              Discover photographs, places, ideas and visual
              stories collected in one thoughtful space.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={exploreGallery}
              >
                Explore gallery
              </button>

              <button
                className="secondary-button"
                onClick={showTrending}
              >
                Discover trending
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image hero-image-one">
              <img
                src={images[0].image}
                alt={images[0].title}
              />
            </div>

            <div className="hero-image hero-image-two">
              <img
                src={images[7].image}
                alt={images[7].title}
              />
            </div>

            <div className="hero-floating-card">
              <span>Featured</span>
              <strong>Visual stories</strong>
            </div>
          </div>
        </section>

        {/* ================= GALLERY ================= */}

        <Gallery
          images={images}
          searchRef={searchRef}
          trendingMode={trendingMode}
          collectionMode={collectionMode}
          onTrendingReset={() => setTrendingMode(false)}
          onShowEverything={showEverything}
          liked={liked}
          saved={saved}
          onLike={toggleLike}
          onSave={toggleSave}
        />

        {/* ================= LIVE GALLERY ================= */}

        <LiveGallery
          images={images}
          onOpen={(image) => setPreviewImage(image)}
        />
      </main>

      {/* ================= FOOTER ================= */}

      <Footer onInfo={openInfo} />

      {/* ================= LOGIN ================= */}

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
        />
      )}

      {/* ================= INFO MODAL ================= */}

      {infoModal.title && (
        <InfoModal
          title={infoModal.title}
          text={infoModal.text}
          onClose={() =>
            setInfoModal({
              title: "",
              text: "",
            })
          }
        />
      )}

      {/* ================= LIGHTBOX ================= */}

      <Lightbox
        image={previewImage}
        liked={
          previewImage
            ? liked.includes(previewImage.id)
            : false
        }
        saved={
          previewImage
            ? saved.includes(previewImage.id)
            : false
        }
        onLike={toggleLike}
        onSave={toggleSave}
        onClose={() => setPreviewImage(null)}
      />
    </div>
  );
}

export default App;