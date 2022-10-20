import { client } from './client';

export function getUser() {
  return client.auth.currentUser;
}

export async function authUserSignUp(email, password) {
  let response = await client.auth.signUp({ email, password });
  return response.user;
}

export async function authUser(email, password) {
  let resp = await client.auth.signIn({ email, password });
  return resp.user;
}
  
export async function signOut() {
  await client.auth.signOut();
}