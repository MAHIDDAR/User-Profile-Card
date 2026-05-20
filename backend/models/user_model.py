from backend.database.db import get_db_connection


def get_all_users():

    connection = get_db_connection()

    users = connection.execute(

        "SELECT * FROM users"

    ).fetchall()

    connection.close()

    return [dict(user) for user in users]


def get_user_by_id(user_id):

    connection = get_db_connection()

    user = connection.execute(

        "SELECT * FROM users WHERE id = ?",

        (user_id,)

    ).fetchone()

    connection.close()

    if user:

        return dict(user)

    return None


def add_user(user_data):

    connection = get_db_connection()

    cursor = connection.cursor()


    cursor.execute("""

        INSERT INTO users

        (name, email, role, bio, company, website)

        VALUES (?, ?, ?, ?, ?, ?)

    """, (

        user_data["name"],

        user_data["email"],

        user_data["role"],

        user_data["bio"],

        user_data["company"],

        user_data["website"]

    ))


    connection.commit()

    new_user_id = cursor.lastrowid

    connection.close()

    return get_user_by_id(new_user_id)


def update_user(user_id, updated_data):

    connection = get_db_connection()


    connection.execute("""

        UPDATE users

        SET

            name = ?,

            email = ?,

            role = ?,

            bio = ?,

            company = ?,

            website = ?

        WHERE id = ?

    """, (

        updated_data["name"],

        updated_data["email"],

        updated_data["role"],

        updated_data["bio"],

        updated_data["company"],

        updated_data["website"],

        user_id

    ))


    connection.commit()

    connection.close()

    return get_user_by_id(user_id)


def delete_user(user_id):

    connection = get_db_connection()

    connection.execute(

        "DELETE FROM users WHERE id = ?",

        (user_id,)

    )

    connection.commit()

    connection.close()

    return True