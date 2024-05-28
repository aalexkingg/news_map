from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Database connection
def get_db_connection():
    conn = sqlite3.connect('countries.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/country-info', methods=['GET'])
def country_info():
    country_name = request.args.get('name')
    conn = get_db_connection()
    country = conn.execute('SELECT * FROM countries WHERE name = ?', (country_name,)).fetchone()
    conn.close()
    if country is None:
        return jsonify({'error': 'Country not found'}), 404
    return jsonify(dict(country))

@app.route('/heatmap-data', methods=['GET'])
def heatmap_data():
    conn = get_db_connection()
    countries = conn.execute('SELECT name, count FROM countries').fetchall()
    conn.close()
    return jsonify([dict(country) for country in countries])

if __name__ == '__main__':
    app.run(debug=True)
