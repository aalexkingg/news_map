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
    Could also be a slide out sidebar
    Basic country info too

Might have to change geojson to json?

Global database will need to be maintained. News_scrape will need to running near constantly to keep it real time. While the news map will be constantly fetching from database, updating results list and updating heatmap.
Heatmap should be based on how much attention stories are getting, not how important, this can either be purely based on number of news stories, or (if possible) readership 

Database stories should be removed from database after 1 week?


## TODO
- Flask
- Plotly
- Dash
- JS
- World map
- Heat map for high relative news coverage

