import requests


API_URL = "https://jsonplaceholder.typicode.com/users"


local_users = []


def get_all_users():

    response = requests.get(API_URL)

    api_users = response.json()


    formatted_users = []

    for user in api_users:

        formatted_users.append({

            "id": user["id"],

            "name": user["name"],

            "email": user["email"],

            "role": "Developer",

            "bio": f"{user['name']} is working on modern web technologies.",

            "company": user["company"]["name"],

            "website": user["website"]
        })


    formatted_users.extend(local_users)

    return formatted_users


def get_user_by_id(user_id):

    users = get_all_users()

    for user in users:

        if user["id"] == user_id:

            return user

    return None


def add_user(new_user):

    local_users.append(new_user)

    return new_user


def update_user(user_id, updated_data):

    for user in local_users:

        if user["id"] == user_id:

            user.update(updated_data)

            return user

    return None


def delete_user(user_id):

    for user in local_users:

        if user["id"] == user_id:

            local_users.remove(user)

            return True

    return False