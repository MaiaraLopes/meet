Feature: Specify number of events

  Scenario: The app should display 32 events by default.
    Given the user is on the main page
    When the user hasn't specified the number of events to display
    Then 32 events should be displayed by default

  Scenario: When the user types a number into the textbox, the number of events displayed should match the input number.
    Given the user is on the main page
    When the user types a number into the number of events textbox
    Then the number of events displayed should match the number input by the user
