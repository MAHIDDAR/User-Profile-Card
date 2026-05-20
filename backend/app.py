from flask import Flask
from flask_cors import CORS

from backend.routes.user_routes import user_routes
from backend.database.db import create_users_table


app = Flask(__name__)

CORS(app)


create_users_table()


app.register_blueprint(user_routes)


@app.route("/")
def home():

    return {

        "message": "User Management Backend Running"

    }


if __name__ == "__main__":

    app.run(debug=True)