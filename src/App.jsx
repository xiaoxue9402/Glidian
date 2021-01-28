import { useEffect, useState } from "react";

import * as api from "./api";
import GroupSelect from "./GroupSelect";
import UsersList from "./UsersList";
import "./App.css";

export default function App() {
  const [groups, setGroups] = useState([]);
  const [val, setVal] = useState(1)
  const [users, setUsers] = useState([])

  useEffect(() => {
    api.listGroups().then(setGroups);
  }, []);

  useEffect(() => {
    api.listGroup(val).then(setUsers)
  }, [val])

  const onChange = (val) => {
    setVal(val)
  }

  return (
    <div className="App">
      <GroupSelect
        groups={groups}
        onChange={(val) => onChange(val)}
      />
      <UsersList users={users}/>
    </div>
  );
}
