import flask.app
from flask import Flask, render_template, jsonify
import os
from pymongo import MongoClient
from pathlib import Path
import json
import plotly.express as px
import pandas as pd

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

data = ASSETS_DIR + r"\data\countries.geojson"
countries = json.load(open(data))

print(countries["features"][0])

fig = px.choropleth(data_frame=None, geojson=countries)
fig.show()

@flask.app.setupmethod
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
    return render_template('index.html')


if __name__ == "__main__":
    app.debug = True
    app.run()
