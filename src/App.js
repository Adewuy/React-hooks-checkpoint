import React, { Component } from "react";
import "./App.css";
import imgSrc from "./image/dayo.jpg";
class App extends Component {
  state = {
    person: {
      fullName: "Adedayo Adewuyi",
      bio: "Web3 and React developer.",
      imgSrc: imgSrc,
      profession: "Software Developer",
    },
    show: false,
    intervalId: null,
    timeSinceMount: 0,
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handleToggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.handleToggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
