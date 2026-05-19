# validate required user fields

def validate_user_data(data):

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

            return False

    return True