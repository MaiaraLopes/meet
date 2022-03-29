import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

  test("The app should display 32 events by default.", ({
    given,
    when,
    then,
  }) => {
    given("the user is on the main page", async () => {
      AppWrapper = await mount(<App />);
    });

    when("the user hasn't specified the number of events to display", () => {
      AppWrapper.update();
    });

    then("32 events should be displayed by default", () => {
      expect(AppWrapper.find(".event")).toHaveLength(2);
    });
  });

  test("When the user types a number into the textbox, the number of events displayed should match the input number.", ({
    given,
    when,
    then,
  }) => {
    given("the user is on the main page", async () => {
      AppWrapper = await mount(<App />);
    });

    when("the user types a number into the number of events textbox", () => {
      AppWrapper.update();
      const newNumberOfEvents = { target: { value: 1 } };
      AppWrapper.find(".numberOfEvents").simulate("change", newNumberOfEvents);
    });

    then(
      "the number of events displayed should match the number input by the user",
      () => {
        AppWrapper.update();
        expect(AppWrapper.find(".event")).toHaveLength(1);
      }
    );
  });
});
