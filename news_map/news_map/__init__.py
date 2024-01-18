import os
from pathlib import Path
import json
ASSETS_DIR = os.path.join(Path(__file__).parent.parent.parent, "assets")

countries = ASSETS_DIR + r"\data\countries.json"
data = open(countries).readlines()

#print(json.dumps(data))
