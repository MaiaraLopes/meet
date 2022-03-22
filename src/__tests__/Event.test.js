import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventDetails;
  beforeAll(() => {
    EventDetails = shallow(<Event event={mockData[1]} />);
  });
  test("render an event", () => {
    expect(EventDetails.find(".event")).toHaveLength(1);
  });

  test("event details are collapsed by default", () => {
    expect(EventDetails.state("collapsed")).toBe(true);
  });

  test("render more details button", () => {
    expect(EventDetails.find(".show-details")).toHaveLength(1);
  });

  test("show details when more details button is clicked", () => {
    EventDetails.setState({
      collapsed: true,
    });
    EventDetails.find(".show-details").simulate("click");
    expect(EventDetails.state("collapsed")).toBe(false);
  });

  test("show event location", () => {
    expect(EventDetails.find(".location")).toHaveLength(1);
  });

  test("show event summary", () => {
    expect(EventDetails.find(".summary")).toHaveLength(1);
  });

  test("show event time", () => {
    expect(EventDetails.find(".time")).toHaveLength(1);
  });

  test("hide details when fewer details button is clicked", () => {
    EventDetails.setState({
      collapsed: false,
    });
    EventDetails.find(".hide-details").simulate("click");
    expect(EventDetails.state("collapsed")).toBe(true);
  });
});
