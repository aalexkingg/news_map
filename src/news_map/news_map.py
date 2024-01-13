from flask import Flask

app = Flask(__name__)

# set directories (templates, assets, etc)


@app.route('/')
def main():
    return 'Hello World'

if __name__ == "__main__":
    app.run()
