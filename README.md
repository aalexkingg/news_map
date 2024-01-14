# news_map
A python web-application that displays an interactive world map, and allows users to see current news topics about the region/country specified

requirements:
    python
    nodeJS

geojson from https://github.com/datasets/geo-countries/blob/master/data/countries.geojson

will need to branch off ironguard/news for news of each country

Using flask as backend (may need to be changed to django if too complex/bad performance)

Backend:
    Database
    Fetch news stories using ironguard/news
    MAYBE: Fetching other data (economic, political etc)

Using Typescript as front end:
    Load world map using json data
    Interactivity
    Display data to see of country, with selected highlighting
    Possibly have to open in new tab if getting too crowded
    Have summary tab displayed, but below have "show details" option which opens new tab

Might have to change geojson to json?

## TODO
- Flask
- Plotly
- Dash
- JS
- World map
- Heat map for high relative news coverage

