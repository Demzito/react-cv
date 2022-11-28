import React, { Component } from "react";
import ProgressBar from "./ProgressBar.js";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.8 },
      { id: 2, value: "Css", xp: 2 },
      { id: 3, value: "Php", xp: 0.9 },
      { id: 4, value: "C", xp: 0.6 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.5 },
      { id: 2, value: "Bootstrap", xp: 2 },
      { id: 3, value: "Sass", xp: 1.8 },
      { id: 4, value: "Express", xp: 1 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />

        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
