
# Meet
In this project, users will be able to see events happening in cities around the world and will be able to choose specific cities of their choice.


## Built with
React
## Stories and Scenarios
FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

•	Scenario 1: An event element is collapsed by default

o	Given a user is signed in

o	When in the main page

o	Then the event element is collapsed

•	Scenario 2: User can expand an event to see its details

o	Given the user wants details of an even

o	When they click the event button

o	Then the event’s details will show

•	Scenario 3: User can collapse an event to hide its details

o	Given the user no longer needs the details

o	When the user clicks a button

o	Then the details will be collapsed

FEATURE 3: SPECIFY NUMBER OF EVENTS

•	Scenario 1: When user hasn’t specified a number, 32 is the default number

o	Given the user hasn’t specified a number

o	When the page loads

o	Then the default 32 events will show

•	Scenario 2: User can change the number of events they want to see

o	Given the user wants to see a different number of events

o	When they choose the number they want


o	Then their specified number of events will show
FEATURE 4: USE THE APP WHEN OFFLINE

•	Scenario 1: Show cached data when there’s no internet connection

o	Given there is no internet connection

o	When the user tries to access data

o	Then cached data will be shown

•	Scenario 2: Show error when user changes the settings (city, time range)

o	Given the user is offline

o	When they try to change the settings

o	Then an error will be shown

FEATURE 5: DATA VISUALIZATION

•	Scenario 1: Show a chart with the number of upcoming events in each city

o	Given the user is signed in

o	When there is no specific city selected

o	Show a chart with the number of upcoming events in each city

