import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents, checkToken, getAccessToken } from "./api";
import "./nprogress.css";
import { OfflineAlert } from "./Alert";
import WelcomeScreen from "./WelcomeScreen";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: "all",
    showWelcomeScreen: undefined,
    isOnline: true,
  };

  async componentDidMount() {
    this.mounted = true;
    window.addEventListener("offline", (e) => {
      this.setState({ isOnline: false });
    });
    window.addEventListener("online", (e) => {
      this.setState({ isOnline: true });
    });
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid =
      !window.location.href.startsWith("http://localhost") &&
      !(accessToken && !navigator.onLine) &&
      (await checkToken(accessToken)).error
        ? false
        : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      { numberOfEvents },
      this.updateEvents(this.state.selectedLocation, numberOfEvents)
    );
  };

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events.slice(0, eventCount)
          : events
              .filter((event) => event.location === location)
              .slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount,
          selectedLocation: location,
        });
      }
    });
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

    return (
      <div className="App">
        <div>
          {!this.state.isOnline && (
            <OfflineAlert
              text={
                "You are offline. An updated list will be loaded when you are back online."
              }
            />
          )}
        </div>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          updateNumberOfEvents={(number) => {
            this.updateNumberOfEvents(number);
          }}
        />
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
