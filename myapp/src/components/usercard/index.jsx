import "./usercard.css";

const UserCard = (props) => {
  const { user } = props;

  return (
    <div className="usercard">
      <div className="usercard_glare" />
      <div className="usercard_content">
        <img className="usercard_image" src={user.image} alt={user.name} />
        <div className="usercard_info">
          <p className="usercard_name">{user.name}</p>
          <p className="usercard_email">{user.email}</p>
          <span className="usercard_gender">{user.gender}</span>
          <p className="usercard_location">
            <span>{user.address.city}</span>
            <span className="usercard_divider">|</span>
            <span>{user.address.state}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
