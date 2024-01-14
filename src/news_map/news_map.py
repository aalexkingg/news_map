import os
from pymongo import MongoClient
from pathlib import Path
import json
import pandas as pd
from urllib.request import urlopen
from plotly import (
    express as px,
    utils
)
from flask import (
    Flask,
    render_template,
    jsonify
)


app = Flask(__name__)
client = MongoClient()

"""
db = client.geojson_flask
addresses = db.addresses_collection
addresses.insert_once({
    'type': 'Point',
    'coordinates': [41.2934, 17.1938]
})
"""

# set directories (templates, assets, etc)
ASSETS_DIR = os.path.join(Path(__file__).parent.parent.parent, "assets")

countries = json.load(urlopen('https://github.com/plotly/datasets/raw/master/geojson-counties-fips.json'))

print(countries["features"][0])

fig = px.choropleth(
    data_frame=None,
    geojson=countries,
    scope='world',
    labels={'properties.NAME': 'Name'}
)
fig.update_traces(marker_line_width=1)
fig.show()

@app.before_first_request
def startup():
    # add geojson data to db for easier processing
    data = ASSETS_DIR + r"\data\countries.geojson"
    print("start")


@app.route('/points', methods=['GET'])
def get_all_points():
    points = []
    """
    for address in addresses.find({'type': 'Point'}):
        points.append({
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': address['coordinates']
            }
        })
    return jsonify(points)
    """


@app.route('/')
def main():
    data = ASSETS_DIR + r"\data\countries.geojson"

    return


if __name__ == "__main__":
    app.debug = True
    app.run()
