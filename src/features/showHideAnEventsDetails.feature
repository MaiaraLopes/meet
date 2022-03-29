Feature: SHOW/HIDE AN EVENT’S DETAILS

  Scenario: An event's details are collapsed by default.
    Given the user is on the main page
    When an event is displayed
    Then the event details will be collapsed

  Scenario: User can expand an event to see its details.
    Given the user can see the list of events
    When the user clicks on an individual event's 'more details' button
    Then the event details will be expanded

  Scenario: User can collapse an event to hide its details.
    Given the user has clicked on an event to expand details
    When the user clicks on 'fewer details' button
    Then the event details will be collapsed