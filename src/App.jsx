import { useEffect, useState } from "react";

import * as api from "./api";
import GroupSelect from "./GroupSelect";
import UsersList from "./UsersList";
import "./App.css";

export default function App() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    api.listGroups().then(setGroups);
  }, []);

  return (
    <div className="App">
      <GroupSelect
        groups={groups}
        onChange={(val) => console.log(`new value: ${val}`)}
      />
      <UsersList />
    </div>
  );
}
