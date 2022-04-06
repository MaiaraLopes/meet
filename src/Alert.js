import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      top: this.top,
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
    this.top = "20px";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
    this.top = "50px";
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "orange";
    this.top = "80px";
  }
}

export { InfoAlert, ErrorAlert, OfflineAlert };
