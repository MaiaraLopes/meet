import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });
  test("render an event", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("event details are collapsed by default", () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("render more details button", () => {
    expect(EventWrapper.find(".show-details")).toHaveLength(1);
  });

  test("show details when more details button is clicked", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".show-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
    expect(EventWrapper.find(".description")).toHaveLength(1);
  });

  test("event component has details/description", () => {
    expect(EventWrapper.find(".more-details")).toHaveLength(1);
  });

  test("show event location", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("show event summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("show event time", () => {
    expect(EventWrapper.find(".time")).toHaveLength(1);
  });

  test("hide details when fewer details button is clicked", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".hide-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
    expect(EventWrapper.find(".description")).toHaveLength(0);
  });
});
