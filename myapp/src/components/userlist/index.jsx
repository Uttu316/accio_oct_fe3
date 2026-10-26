import { USERS } from "../../data/users";
import UserCard from "../usercard";
import "./userlist.css";

const UserList = () => {
  return (
    <section className="userlist_stage">
      <h2 className="userlist_heading">Trending Users</h2>
      <div className="userlist_grid">
        {USERS.map((item, index) => (
          <UserCard key={item.id} user={item} />
        ))}
      </div>
    </section>
  );
};
export default UserList;
