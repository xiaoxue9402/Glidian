async function fetchJson(...args) {
  const resp = await fetch(...args);
  return resp.json();
}

export function listGroups() {
  return fetchJson("/groups");
}
