/** @format */

import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

//Feature 2: Specify number of events

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.prop("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".number-of-events").prop("value")).toBe(
      numberOfEvents
    );
  });
  test("change number of events when input changes", () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(32);
  });
});
