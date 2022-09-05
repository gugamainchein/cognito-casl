import { Auth } from "aws-amplify";

const BASE_URL = process.env.API_ENDPOINT + "users";

type HeaderObjects = {
  "Content-Type": string;
  Authorization?: string;
};

const headers: HeaderObjects = {
  "Content-Type": "application/json",
};

async function getJwtToken() {
  return `Bearer ${(await Auth.currentSession())
    .getAccessToken()
    .getJwtToken()}`;
}

export async function fetchUsers() {
  headers.Authorization = await getJwtToken();
  const response = await fetch(BASE_URL, { headers });
  return await response.json();
}

export async function removeUser(id: number) {
  headers.Authorization = await getJwtToken();
  const response = await fetch(`${BASE_URL}/${id}`, {
    headers,
    method: "DELETE",
  });

  return await response.json();
}

export async function updateUser(id: number) {
  headers.Authorization = await getJwtToken();
  const response = await fetch(`${BASE_URL}/${id}`, {
    headers,
    method: "PATCH",
    body: JSON.stringify({
      status: "closed",
    }),
  });

  return await response.json();
}

export async function createUser(title: string) {
  headers.Authorization = await getJwtToken();
  const response = await fetch(BASE_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      title,
      status: "open",
    }),
  });

  return await response.json();
}
