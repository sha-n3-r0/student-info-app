export async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error(`API failed with status ${res.status}`);
  }

  return res.json();
}
