import './UserDetailsCard.css';

function UserDetailsCard({ user }) {

  return (

    <div className="details-card">

      <h3>User API Details</h3>

      <div className="details">

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>Company:</strong> {user.company.name}
        </p>

        <p>
          <strong>Website:</strong> {user.website}
        </p>

        <p>
          <strong>City:</strong> {user.address.city}
        </p>

      </div>

    </div>
  );
}

export default UserDetailsCard;