from flask import Blueprint, request, jsonify, render_template
import sqlite3

bp = Blueprint('main', __name__)

def get_db_connection():
    conn = sqlite3.connect('data/countries.db')
    conn.row_factory = sqlite3.Row
    return conn

@bp.route('/')
def index():
    return render_template('index2.html')

@bp.route('/country-info', methods=['GET'])
def country_info():
    country_name = request.args.get('name')
    conn = get_db_connection()
    country = conn.execute('SELECT * FROM countries WHERE name = ?', (country_name,)).fetchone()
    conn.close()
    if country is None:
        return jsonify({'error': 'Country not found'}), 404
    return jsonify(dict(country))

