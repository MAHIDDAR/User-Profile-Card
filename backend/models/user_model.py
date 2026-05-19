from backend.database.mock_data import users


def get_all_users():

    return users


def get_user_by_id(user_id):

    for user in users:

        if user["id"] == user_id:

            return user

    return None


def add_user(new_user):

    users.append(new_user)

    return new_user