from flask import Blueprint, render_template, Flask

bp = Blueprint('main', __name__)


@bp.route('/')
def index():
    return render_template('index.html')


def create_app():
    app = Flask(__name__)

    with app.app_context():
        from . import main
        app.register_blueprint(main.bp)

    return app
