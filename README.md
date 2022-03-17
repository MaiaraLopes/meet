
# Meet
In this project, users will be able to see events happening in cities around the world and will be able to choose specific cities of their choice.


## Built with
React
## Stories and Scenarios
As a user I should be able to filter events by city so that I can see the list of events that take place in that city

•	Scenario 1: when user hasn’t searched for a city, show upcoming events from all cities.

o	Given user hasn’t searched for any city

o	When the user opens the app

o	Then the user should see a list of all upcoming events

•	Scenario 2: user should see a list of suggestions when they search for a city.

o	Given the main page is open

o	When user starts typing in the city textbox

o	Then the user should see a list of cities (suggestions) that match what they’ve typed

•	Scenario 3: user can select a city from the suggested list.

o	Given the user was typing “berlin” in the city textbox and the list of suggested cities is showing

o	When the user selects a city (e.g., “Berlin, Germany”) from the list

o	Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city


As a user I should be able to expand an event to see its details and then collapse it after I get the information I want.

• Scenario 1: An event element is collapsed by default

o Given a user is signed in

o When in the main page

o Then the event element is collapsed

• Scenario 2: User can expand an event to see its details

o Given the user wants details of an event

o When they click the “Show Details” button

o Then the event’s details will show

• Scenario 3: User can collapse an event to hide its details

o Given the user no longer needs the details

o When the user clicks the “Hide Details” button

o Then the details will be collapsed


As a user I should be able to choose a specified number of events instead of the default 32.

• Scenario 1: When user hasn’t specified a number, 32 is the default number

o Given the user hasn’t specified a number

o When the page loads

o Then the default 32 events will show

• Scenario 2: User can change the number of events they want to see

o Given the user wants to see a different number of events

o When they choose the number they want

o Then their specified number of events will show


As a user I should be able to access cached data if my device is offline, but not change any of the settings.

• Scenario 1: Show cached data when there’s no internet connection

o Given there is no internet connection

o When the user tries to access data

o Then cached data will be shown

• Scenario 2: Show error when user changes the settings (city, time range)

o Given the user is offline

o When they try to change the settings

o Then an error will be shown


As a user I should be able to see a chart with the number of events in each city

• Scenario 1: Show a chart with the number of upcoming events in each city

o Given the user is signed in

o When there is no specific city selected

o Show a chart with the number of upcoming events in each city

