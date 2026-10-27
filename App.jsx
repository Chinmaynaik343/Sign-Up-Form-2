
import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = password.length >= 8;
  const confirmPasswordValid =
    confirmPassword.length > 0 && confirmPassword === password;

  const showEmailError = (touched.email || submitted) && !emailValid;
  const showPasswordError =
    (touched.password || submitted) && !passwordValid;
  const showConfirmPasswordError =
    (touched.confirmPassword || submitted) && !confirmPasswordValid;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (emailValid && passwordValid && confirmPasswordValid) {
      alert("Form submitted successfully");
    } else {
      alert("Can't submit the form");
    }
  };

  return (
    <main className="page">
      <section className="signup-card">
        <h1>Sign Up</h1>
        <p className="subtitle">Create your account</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email"
              value={email}
              className={
                (touched.email || submitted)
                  ? emailValid
                    ? "valid"
                    : "invalid"
                  : ""
              }
              onChange={(event) => setEmail(event.target.value)}
              onBlur={() =>
                setTouched((prev) => ({ ...prev, email: true }))
              }
            />
            {showEmailError && (
              <p className="error-message">
                Please enter a valid email address.
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              className={
                (touched.password || submitted)
                  ? passwordValid
                    ? "valid"
                    : "invalid"
                  : ""
              }
              onChange={(event) => setPassword(event.target.value)}
              onBlur={() =>
                setTouched((prev) => ({ ...prev, password: true }))
              }
            />
            {showPasswordError && (
              <p className="error-message">
                Password must be at least 8 characters long.
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              className={
                (touched.confirmPassword || submitted)
                  ? confirmPasswordValid
                    ? "valid"
                    : "invalid"
                  : ""
              }
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              onBlur={() =>
                setTouched((prev) => ({
                  ...prev,
                  confirmPassword: true,
                }))
              }
            />
            {showConfirmPasswordError && (
              <p className="error-message">
                Passwords do not match.
              </p>
            )}
          </div>

          <button type="submit">Create Account</button>
        </form>
      </section>
    </main>
  );
}

export default App;
