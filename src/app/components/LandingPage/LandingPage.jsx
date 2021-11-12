import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title } from "react-head";
import FaUserSecret from "react-icons/lib/fa/user-secret";
import githubLogo from "../../../assets/images/github-logo.svg";
import kanbanLogo from "../../../assets/images/kanban-logo.svg";
import background1920 from "../../../assets/images/postits-1920.jpg";
import background1366 from "../../../assets/images/postits-1366.jpg";
import "./LandingPage.scss";

class LandingPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  enterAsGuest = () => {
    this.props.dispatch({ type: "ENTER_AS_GUEST" });
  };

  render = () => (
    <div className="landing-page">
      <Title>Sign in | Kanban</Title>
      <div className="landing-page-background">
        <img
          srcSet={`${background1920} 1920w, ${background1366} 1366w`}
          src={background1920}
          alt="background"
        />
      </div>
      <div className="landing-page-info-wrapper">
        <div className="landing-page-info">
          <div className="landing-page-heading">
            <img
              src={kanbanLogo}
              alt="Kanban logo"
              className="landing-page-logo"
            />
            &nbsp;
            <h1>Kanban</h1>
          </div>
          <p className="landing-page-description">
            An open source kanban application fork from {" "}
            <a
              href="https://github.com/markusenglund/react-kanban"
              target="_blank"
              rel="noopener noreferrer"
            >
              markusenglund/react-kanban
            </a>.
            Check out the
            source code on{" "}
            <a
              href="https://github.com/ten-ltw/kanban.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
          </p>
          <div className="signin-buttons">
            <div>
              <a href="/auth/github" className="signin-button github-button">
                <img
                  className="github-logo"
                  src={githubLogo}
                  alt="github logo"
                />
                &nbsp;Sign in with Github
              </a>
            </div>
            <div className="guest-button-wrapper">
              <button
                onClick={this.enterAsGuest}
                className="signin-button guest-button"
              >
                <FaUserSecret className="logo-icon" /> &nbsp;Enter as guest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(LandingPage);
