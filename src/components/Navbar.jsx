import { useState } from "react";

import {
  Search,
  LogIn,
  Menu,
  X,
  Compass,
  Flame,
  Layers3,
  Heart,
  Bookmark,
} from "lucide-react";

function Navbar({
  onLogin,
  onSearch,
  onExplore,
  onTrending,
  onCategories,
  onLiked,
  onSaved,
  collectionMode,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* ================= BRAND ================= */}

        <button
          className="brand"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

            closeMenu();
          }}
        >
          <span className="brand-mark">
            <span></span>
            <span></span>
          </span>

          <span>Pixelfolio</span>
        </button>

        {/* ================= NAV LINKS ================= */}

        <nav
          className={`nav-links ${
            mobileOpen ? "show" : ""
          }`}
        >
          <button
            onClick={() => {
              onExplore();
              closeMenu();
            }}
          >
            <Compass size={16} />
            Explore
          </button>

          <button
            onClick={() => {
              onTrending();
              closeMenu();
            }}
          >
            <Flame size={16} />
            Trending
          </button>

          <button
            onClick={() => {
              onCategories();
              closeMenu();
            }}
          >
            <Layers3 size={16} />
            Categories
          </button>
        </nav>

        {/* ================= ACTIONS ================= */}

        <div className="nav-actions">

          {/* Search */}

          <button
            className="nav-search-button"
            onClick={onSearch}
          >
            <Search size={18} />
            <span>Search</span>
          </button>

          {/* Like */}

          <button
            className={`nav-icon-button ${
              collectionMode === "liked"
                ? "selected"
                : ""
            }`}
            onClick={onLiked}
            aria-label="Liked images"
            title="Liked images"
          >
            <Heart size={19} />
          </button>

          {/* Save */}

          <button
            className={`nav-icon-button ${
              collectionMode === "saved"
                ? "selected"
                : ""
            }`}
            onClick={onSaved}
            aria-label="Saved images"
            title="Saved images"
          >
            <Bookmark size={19} />
          </button>

          {/* Login */}

          <button
            className="login-button"
            onClick={onLogin}
          >
            <LogIn size={17} />
            <span>Login</span>
          </button>

          {/* Mobile Menu */}

          <button
            className="mobile-menu"
            onClick={() =>
              setMobileOpen((value) => !value)
            }
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;