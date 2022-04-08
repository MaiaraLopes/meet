import React from "react";
import "./WelcomeScreen.css";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <h1> Welcome to the Meet App</h1>
      <h4>
        Log in to see upcoming events around the world for full-stack
        developers.
      </h4>
      <div className="button_cont" align="center">
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
              alt="Google sign in"
            />
          </div>
          <button
            onClick={() => {
              props.getAccessToken();
            }}
            rel="nofollow noopener"
            className="btn-text"
          >
            Sign in with Google
          </button>
        </div>
      </div>
      <a
        href="https://maiaralopes.github.io/meet/privacy.html"
        rel="nofollow noopener"
      >
        Privacy Policy
      </a>

      <p>
        Open source
        <a
          href="https://github.com/MaiaraLopes/meet"
          target="_blank"
          rel="noreferrer"
        >
          code
        </a>
      </p>
    </div>
  ) : null;
}

export default WelcomeScreen;
