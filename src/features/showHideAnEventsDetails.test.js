import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

  test("An event's details are collapsed by default.", ({
    given,
    when,
    then,
  }) => {
    given("the user is on the main page", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
    });

    when("an event is displayed", () => {});

    then("the event details will be collapsed", () => {
      expect(AppWrapper.find(".description")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details.", ({
    given,
    when,
    then,
  }) => {
    given("the user can see the list of events", async () => {
      AppWrapper = await mount(<App />);
    });

    when(
      "the user clicks on an individual event's 'more details' button",
      () => {
        AppWrapper.update();
        AppWrapper.find(".show-details").at(0).simulate("click");
      }
    );

    then("the event details will be expanded", () => {
      expect(AppWrapper.find(".description")).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details.", ({
    given,
    when,
    then,
  }) => {
    given("the user has clicked on an event to expand details", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find(".show-details").at(0).simulate("click");
      expect(AppWrapper.find(".description")).toHaveLength(1);
    });

    when("the user clicks on 'fewer details' button", () => {
      AppWrapper.find(".hide-details").at(0).simulate("click");
    });

    then("the event details will be collapsed", () => {
      expect(AppWrapper.find(".description")).toHaveLength(0);
    });
  });
});
