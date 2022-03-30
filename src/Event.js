import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">
        <h3 className="summary">{event.summary}</h3>
        <div className="more-details">
          {collapsed ? null : (
            <p className="description">{event.description}</p>
          )}
        </div>
        <p className="time">
          {event.start.dateTime} Timezone: {event.start.timeZone}
        </p>
        <p className="location">@ {event.location}</p>
        <button
          className={`${collapsed ? "show" : "hide"}-details`}
          onClick={this.handleClick}
        >
          {collapsed ? "More Details" : "Fewer Details"}
        </button>
      </div>
    );
  }
}

export default Event;
