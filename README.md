<!-- @format -->

# meet

FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS <br>
User story: as a user, I should be able to toggle event’s details so I choose if want to see the details or not of each event <br>
Scenario 1: An event element is collapsed by default. <br>
Given the main page is open <br>
When a user search for a city and the events are loaded<br>
Then the event details will be collapsed<br>
Scenario 2: User can expand an event to see its details.<br>
Given the list of events has been loaded<br>
When the user click on it<br>
Then the details will be displayed<br>
Scenario 3: User can collapse an event to hide its details.<br>
Given the „Show details“ button for an event has been clicked and the details are expended<br>
When the user clicks on an expanded event<br>
Then the details will collapse and the event card will get back to it’s original state<br>
FEATURE 3: SPECIFY NUMBER OF EVENTS <br>
User story: as a user, I should be able to specify how many events I want to see, so that I can manage how many events I want to see <br>
Scenario 1: When user hasn’t specified a number, 32 is the default number.<br>
Given a user has chosen the city they want to see events for <br>
When the user doesn’t specify a number of events they want to view<br>
Then 32 events will be displayed<br>
Scenario 2: User can change the number of events they want to see.<br>
Given a user has chosen the city they want to see events for<br>
When they click the dropdown<br>
Then they will be able to choose the number of events they can see at once<br>
FEATURE 4: USE THE APP WHEN OFFLINE<br>
User story:as a user, I should be able to use the app offline, so that I can check events even when not connected.<br>
Scenario 1: Show cached data when there’s no internet connection.<br>
Given a user has used the app before<br>
When they access the website offline<br>
Then the previous data will still be available to them<br>
Scenario 2: Show error when user changes the settings (city, time range).<br>
Given the user is offline <br>
When the user tries to change the information shown<br>
Then they will get an error message<br>
FEATURE 5: DATA VISUALIZATION<br>
User story: As a user, I should be able to see charts showing dates of events so that I can quickly find events in the time range that interest me. <br>
Scenario 1: Show a chart with the number of upcoming events in each city.<br>
Given a user has chosen a city<br>
When the list of events is shown<br>
Then on top of the list a chart that visualizes the type of upcoming events will be shown<br>
