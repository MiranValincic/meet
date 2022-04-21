# meet
FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
 User story: as a user, I should be able to toggle event’s details so I choose if want to see the details or not of each event 
Scenario 1: An event element is collapsed by default. 
Given the main page is open 
When a user search for a city and the events are loaded
Then the event details will be collapsed
 Scenario 2: User can expand an event to see its details.
 Given the list of events has been loaded
When the user click on it
 Then the details will be displayed
 Scenario 3: User can collapse an event to hide its details.
 Given the „Show details“ button for an event has been clicked and the details are expended
When the user clicks on an expanded event
 Then the details will collapse and the event card will get back to it’s original state
 FEATURE 3: SPECIFY NUMBER OF EVENTS 
User story: as a user, I should be able to specify how many events I want to see, so that I can manage how many events I want to see 
Scenario 1: When user hasn’t specified a number, 32 is the default number.
 Given a user has chosen the city they want to see events for 
When the user doesn’t specify a number of events they want to view
Then 32 events will be displayed
 Scenario 2: User can change the number of events they want to see.
 Given a user has chosen the city they want to see events for
When they click the dropdown
 Then they will be able to choose the number of events they can see at once
FEATURE 4: USE THE APP WHEN OFFLINE
 User story:as a user, I should be able to use the app offline, so that I can check events even when not connected.
 Scenario 1: Show cached data when there’s no internet connection.
 Given a user has used the app before
 When they access the website offline
 Then the previous data will still be available to them
 Scenario 2: Show error when user changes the settings (city, time range).
 Given the user is offline 
When  the user tries to change the information shown
Then they will get an error message
FEATURE 5: DATA VISUALIZATION
 User story: As a user, I should be able to see charts showing dates of events so that I can quickly find events in the time range that interest me. 
 Scenario 1: Show a chart with the number of upcoming events in each city.
 Given a user has chosen a city
 When the list of events is shown
 Then on top of the list a chart that visualizes the type of upcoming events will be shown
