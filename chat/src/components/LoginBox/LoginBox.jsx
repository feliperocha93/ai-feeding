import { useRef } from "react";
import "./LoginBox.css";

export default function LoginBox({ login }) {
  const emailInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailInputRef.current.value.trim()) {
      login(emailInputRef.current.value);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome to the chat</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              ref={emailInputRef}
              className="login-input"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="login-subtitle">
          Put your email to start chatting
        </p>
      </div>
    </div>
  );
}
