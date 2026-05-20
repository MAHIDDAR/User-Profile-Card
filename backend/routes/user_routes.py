from flask import Blueprint, jsonify, request

from backend.models.user_model import (

    get_all_users,
    get_user_by_id,
    add_user,
    update_user,
    delete_user

)


user_routes = Blueprint("user_routes", __name__)


@user_routes.route("/users", methods=["GET"])
def fetch_users():

    users = get_all_users()

    return jsonify(users), 200


@user_routes.route("/users/<int:user_id>", methods=["GET"])
def fetch_single_user(user_id):

    user = get_user_by_id(user_id)

    if not user:

        return jsonify({

            "error": "User not found"

        }), 404

    return jsonify(user), 200


@user_routes.route("/users", methods=["POST"])
def create_user():

    data = request.json


    required_fields = [

        "name",
        "email",
        "role",
        "bio",
        "company",
        "website"

    ]


    for field in required_fields:

        if field not in data or not data[field]:

            return jsonify({

                "error": f"{field} is required"

            }), 400


    new_user = add_user(data)

    return jsonify(new_user), 201


@user_routes.route("/users/<int:user_id>", methods=["PUT"])
def edit_user(user_id):

    data = request.json


    existing_user = get_user_by_id(user_id)

    if not existing_user:

        return jsonify({

            "error": "User not found"

        }), 404


    updated_user = update_user(user_id, data)

    return jsonify(updated_user), 200


@user_routes.route("/users/<int:user_id>", methods=["DELETE"])
def remove_user(user_id):

    existing_user = get_user_by_id(user_id)

    if not existing_user:

        return jsonify({

            "error": "User not found"

        }), 404


    delete_user(user_id)

    return jsonify({

        "message": "User deleted successfully"

    }), 200