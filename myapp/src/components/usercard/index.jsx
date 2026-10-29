import style from "./usercard.module.css";
import { FaMale, FaFemale } from "react-icons/fa";
console.log(style);
const UserCard = (props) => {
  const { user } = props;

  return (
    <div className={style.usercard}>
      <div className={style.usercard_glare} />
      <div className={style.usercard_content}>
        <img
          className={style.usercard_image}
          src={user.image}
          alt={user.name}
        />
        <div className={style.usercard_info}>
          <p className={`${style.usercard_name} ${style.text}`}>{user.name}</p>
          <p className={style.usercard_email}>{user.email}</p>
          <span className={style.usercard_gender}>
            {user.gender === "male" ? <FaMale /> : <FaFemale />}
            {user.gender}
          </span>
          <p className={style.usercard_location}>
            <span>{user.address.city}</span>
            <span className={style.usercard_divider}>|</span>
            <span>{user.address.state}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
