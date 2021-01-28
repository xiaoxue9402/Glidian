/****************************************************************************************
 * CREATE YOUR USER INTERFACE HERE
 ****************************************************************************************/

import "./UsersList.css";

export default function UsersList({ users }) {
  const renderUsers = () => {
    return users.map((user) => {
      return <div>{user.name}</div>;
    });
  };
  return <>{renderUsers()}</>;
}
