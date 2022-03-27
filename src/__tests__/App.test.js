import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";
import { extractLocations, getEvents } from "../api";
import { mockData } from "../mock-data";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test("render NumberOfEvents", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

//Integration tests

describe("<App /> integration", () => {
  test('App passes "events" state as prop to EventList', async () => {
    const AppWrapper = await mount(<App />);
    const AppEventsState = AppWrapper.state("events");
    AppWrapper.update();
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', async () => {
    const AppWrapper = await mount(<App />);
    const AppLocationState = AppWrapper.state("locations");
    AppWrapper.update();
    expect(AppLocationState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationState
    );
    AppWrapper.unmount();
  });

  test("get list of events matching the city selected by the user", async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state("suggestions");
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state("events")).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get a list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find(".suggestions li");
    await suggestionItems.at(suggestionItems.length - 1).simulate("click");
    const allEvents = await getEvents();
    expect(AppWrapper.state("events")).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test("pass the number of events state", () => {
    const AppWrapper = mount(<App />);
    const AppNumberOfEventsState = AppWrapper.state("numberOfEvents");
    expect(AppNumberOfEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().numberOfEvents).toEqual(32);
    AppWrapper.unmount();
  });

  test("update the state of number of events when input changes", async () => {
    let AppWrapper = mount(<App />);
    const NumberOfEventsInput =
      AppWrapper.find(NumberOfEvents).find(".numberOfEvents");
    const newNumberOfEvents = { target: { value: 1 } };
    NumberOfEventsInput.at(0).simulate("change", newNumberOfEvents);
    expect(AppWrapper.state("numberOfEvents")).toBe(1);
    AppWrapper.unmount();
  });

  test("update the number of events when the input changes", async () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsInput =
      AppWrapper.find(NumberOfEvents).find(".numberOfEvents");
    const newNumberOfEvents = { target: { value: 1 } };
    await NumberOfEventsInput.at(0).simulate("change", newNumberOfEvents);
    expect(AppWrapper.state("events")).toHaveLength(1);
    AppWrapper.unmount();
  });
});
