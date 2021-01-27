async function fetchJson(...args) {
  const resp = await fetch(...args);
  return resp.json();
}

// eslint-disable-next-line no-unused-vars
function postJson(url, body) {
  return fetchJson(url, {
    body,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function listGroups() {
  return fetchJson("/groups");
}
