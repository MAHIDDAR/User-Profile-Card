import sqlite3


DATABASE_NAME = "backend/users.db"


def get_db_connection():

    connection = sqlite3.connect(DATABASE_NAME)

    connection.row_factory = sqlite3.Row

    return connection


def create_users_table():

    connection = get_db_connection()

    cursor = connection.cursor()


    cursor.execute("""

        CREATE TABLE IF NOT EXISTS users (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            name TEXT NOT NULL,

            email TEXT NOT NULL,

            role TEXT NOT NULL,

            bio TEXT NOT NULL,

            company TEXT NOT NULL,

            website TEXT NOT NULL

        )

    """)


    connection.commit()

    connection.close()