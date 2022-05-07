<!-- @format -->

Meet <br>
<br>
Purpose <br>
<br>
To build a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events. <br>


![alt text](meet.png)
<br>


Main View:<br>
On the main page users can search for events from different cities, specify a number of events they want the app to display and view visualization of the search data.<br>

Key Features<br>
The app uses OAuth2 authentication flow to allow the user to login.<br>
Users can install the app on their desktop or add it to their mobile home screen.<br>
The app is usable when offline.<br>
Users can filter events by city and specify the number of events shown on screen.<br>
A details button is clickable that will reveal additional info about an event.<br>
A Piechart and a Scatterplot visualize data about the displayed events.<br>
User Stories<br>
Feature 1: Filter Events by City<br>
User Story<br>
As a user I should be able to filter the events by city so that I can see the list of events that take place in that city<br>
<br>
Scenarios<br>
Scenario 1: When a user has not searched for a city, show upcoming events from all cities.<br>
<br>
Given a user has not searched for a city,<br>
When the user opens the app,<br>
Then the user should see all upcoming events from all cities.<br>
Scenario 2: A user should see a list of suggestions when they search for a city.<br>
<br>
Given a user wants to see all upcoming events in a specific city,<br>
When the user starts typing in the search bar,<br>
Then the user should see a list of suggestions of cities.<br>
Scenario 3: A user can select a city from the suggested list.<br>
<br>
Given a user types the name of a city in the input field,<br>
When the list of suggestions appears,<br>
Then the user can select that city for detailed view of events.<br>
Feature 2: Show/hide an event's details<br>
User Story:<br>
As a user, I should be able to show or hide an event's details so that I can see what an event is all about or hide that information.<br>
<br>
Scenarios<br>
Scenario 1: An event element is collapsed by default<br>
<br>
Given the app is loaded<br>
When the list of events is displayed<br>
Then the event elements are collapsed by default<br>
Scenario 2: A user can expand an event to see its details<br>
<br>
Given the event element is collapsed by default<br>
When the user clicks on the "Show Details" button for an event<br>
Then the event element will be expanded to show the event details<br>
Scenario 3: A user can collapse an event to hide its details<br>
<br>
Given the event element has been expanded to show details<br>
When the user clicks on the "Hide Details" button for an event<br>
Then the event element will collapse to hide its details<br>
Feature 3: Specify number of events<br>
User Story:<br>
As a user, I should be able to specify the number of events, so that I can see just how many events are going on in my city of choice.<br>
<br>
Scenarios
Scenario 1: When a user has not specified a number of events, 32 is the default number<br>
<br>
Given the user has loaded the app<br>
When the user has not specified a number of events<br>
Then the default number of events is 32<br>
Scenario 2: A user can change the number of events they want to see<br>
<br>
Given the user has loaded the app<br>
When the user changed the number of events they want to see<br>
Then the app renders the specified number of events<br>
Feature 4: The app is available when offline<br>
User Story:<br>
As a user, I want to use the app when offline, so that I can see a list of events when when I do not have an internet connection<br>
<br>
Scenarios<br>
Scenario 1: Show cached data when there is no internet connection<br>
<br>
Given the user is offline<br>
When the user opens the app<br>
Then the cached data is displayed<br>
Scenario 2: Show an alert when a user is offline<br>
<br>
Given the user is offline<br>
When the user opens the app<br>
Then an alert will show to notify the user about the missing internet connection<br>
Feature 5: Data visualization<br>
User Story:<br>
As a user, I want to be able to see a chart showing the number of upcoming events by city, so that I can get a better idea about how many events are taking place in that city<br>
<br>
Scenarios<br>
Scenario 1: Show a chart with the number of upcoming events in each city<br>
<br>
Given the main page is rendered<br>
When the event list is loaded<br>
Then the user should see a chart visualizing data about upcoming events<br>
Built with<br>
HTML/CSS<br>
JavaScript<br>
React<br>
Jest<br>
Cucumber<br>
Puppeteer<br>
Recharts<br>
