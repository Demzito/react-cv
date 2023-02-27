import React, { Component } from "react";

class Project extends Component {
  state = {
    showInfo: false,
    selectedPicture: 0,
    btnPrevious: false,
    btnNext: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  handleBtnPrevious = () => {
    let selectedPicture = this.state.selectedPicture;
    if (selectedPicture <= 0) {
      selectedPicture = this.props.item.picture.length - 1;
    } else {
      selectedPicture = selectedPicture - 1;
    }

    this.setState({
      btnPrevious: !this.state.btnPrevious,
      selectedPicture: selectedPicture,
    });
  };

  handleBtnNext = () => {
    let selectedPicture = this.state.selectedPicture;
    if (selectedPicture < this.props.item.picture.length - 1) {
      selectedPicture = selectedPicture + 1;
    } else {
      selectedPicture = 0;
    }
    this.setState({
      btnNext: !this.state.btnNext,
      selectedPicture: selectedPicture,
    });
  };

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;
    let { selectedPicture } = this.state;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture[0]} alt="" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Code Source
                  </a>
                </div>
              </div>

              <p className="text">{info}</p>

              <img
                src={picture[selectedPicture]}
                alt=""
              />

              <div className="nav-carousel">
                <div
                  className="arrow button-previous"
                  onClick={this.handleBtnPrevious}
                >
                  <i className="fa-solid fa-arrow-left fa-3x"></i>
                </div>
                <div className="arrow button-next" onClick={this.handleBtnNext}>
                  <i className="fa-solid fa-arrow-right fa-3x"></i>
                </div>
              </div>

              <div className="button return" onClick={this.handleInfo}>
                Retourner sur la page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
