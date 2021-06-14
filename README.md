# Assignment 2: Champions dashboard

### Description:

Create an application where users can view/search list of champions on home page and provide actions on displayed result to add/remove
champions into user’s watch list. A watch list page should display selected champions with full details.
Application should interact with an API in order to provide list and search champions.

### API Details:

Login to https://pandascore.co to get your access token for using API.
Endpoint - https://api.pandascore.co/lol/champions?page[number]=2&page[size]=10&token=<your token> to get the list of champions.
Endpoint - https://api.pandascore.co/lol/champions?search[name]=<search keyword>&token=<your token> to search for a champion.
Endpoint - https://api.pandascore.co/lol/champions/<id>?token=<your token> to get a particular champion's details

### App details: 

1. A home page where user can view default list of champions in grid with pagination

2. Home page should also provide an autocomplete search box to find a matching list of champions.

3. The results grid column should be sortable asc/desc (without API call).

4. Provide action buttons in each row of the grid to add/remove champions to user’s watch list.

5. Display summary/count of added champions into watch list icon on the home page. (Can be on page left or top panel).

6. On click of the champion name, users can view the details of a champion `(modal/popup screen).

7. Users can navigate to the watch list page on the click of the home page’s watch list icon, where he/she can view all
   selected champions with details one by one with image (may use card).

8. Users should also be able to remove champions from the watch list page.
