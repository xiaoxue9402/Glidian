import React from "react";
import "./GroupSelect.css";

/**
 * @typedef GroupSelectProps
 * @prop {(string) => void} onChange - function to call when the value of this element changes, passed the selected group id
 * @prop {Array<GroupInfo>} [groups=[]] - list of groups to display
 */

export default function GroupSelect(/** @type {GroupSelectProps} */ props) {
  const { groups = [], onChange } = props;

  return (
    <select
      className="GroupSelect"
      onChange={(event) => onChange(event.target.value)}
      defaultValue=""
    >
      <option value="" disabled>
        Select a group to display
      </option>
      {groups.map((group) => (
        <option key={group.id} value={group.id}>
          {group.name}
        </option>
      ))}
    </select>
  );
}
