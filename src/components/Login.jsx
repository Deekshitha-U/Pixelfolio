import { useState } from "react";
import {
  X,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

function Login({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      return;
    }

    alert(`Welcome back, ${email}!`);
    onClose();
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div
        className="login-card"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="login-close"
          onClick={onClose}
          aria-label="Close login"
        >
          <X size={21} />
        </button>

        <div className="login-brand">
          <span className="brand-mark">
            <span></span>
            <span></span>
          </span>

          <span>Pixelfolio</span>
        </div>

        <p className="eyebrow">Welcome back</p>

        <h2>Enter your creative space.</h2>

        <p className="login-description">
          Save inspiration, follow visual stories and build
          your personal collection.
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />
          </label>

          <label>
            Password

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((value) => !value)
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </label>

          <button className="login-submit" type="submit">
            Continue
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="login-footer">
          New here? Create your visual collection after
          signing in.
        </p>
      </div>
    </div>
  );
}

export default Login;