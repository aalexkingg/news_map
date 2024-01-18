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

"""
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
"""


@app.before_first_request
def startup():
    print("init")


@app.route('/points', methods=['GET'])
def get_all_points():
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
    print(jsonify(open(ASSETS_DIR + r"\data\countries.json").readlines()))
    return jsonify(open(ASSETS_DIR + r"\data\countries.json").readlines())


@app.route('/')
def main():
    countries = ASSETS_DIR + r"\data\countries.json"
    data = [x.strip("\n") for x in open(countries).readlines()]
    return render_template('index.html', points=data)


if __name__ == "__main__":
    app.debug = True
    app.run()
