from flask import Blueprint, jsonify, request

from backend.models.user_model import (
    get_all_users,
    get_user_by_id,
    add_user,
    update_user,
    delete_user
)

from backend.utils.helpers import validate_user_data


user_routes = Blueprint('user_routes', __name__)


@user_routes.route('/users', methods=['GET'])
def fetch_users():

    return jsonify(get_all_users())


@user_routes.route('/users/<int:user_id>', methods=['GET'])
def fetch_single_user(user_id):

    user = get_user_by_id(user_id)

    if user:
        return jsonify(user)

    return jsonify({
        "error": "User not found"
    }), 404


@user_routes.route('/users', methods=['POST'])
def create_user():

    data = request.get_json()

    if not validate_user_data(data):

        return jsonify({
            "error": "Invalid user data"
        }), 400

    new_user = {
        "id": len(get_all_users()) + 1,
        "name": data["name"],
        "email": data["email"],
        "role": data["role"],
        "bio": data["bio"],
        "company": data["company"],
        "website": data["website"]
    }

    add_user(new_user)

    return jsonify(new_user), 201


@user_routes.route('/users/<int:user_id>', methods=['PUT'])
def edit_user(user_id):

    data = request.get_json()

    updated_user = update_user(user_id, data)

    if updated_user:
        return jsonify(updated_user)

    return jsonify({
        "error": "User not found"
    }), 404


@user_routes.route('/users/<int:user_id>', methods=['DELETE'])
def remove_user(user_id):

    deleted = delete_user(user_id)

    if deleted:
        return jsonify({
            "message": "User deleted successfully"
        })

    return jsonify({
        "error": "User not found"
    }), 404