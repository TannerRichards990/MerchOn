import { checkError, client } from './client';

export async function createRow(email, type) {
  const response = await client.from('merchon').insert({ email, type });
  return checkError(response);
}
export async function createShopperRow(email, type) {
  const response = await client.from('merchon').insert({ email, type });
  return checkError(response);
}

export async function addItem(productName, price, availability, description) {
  const response = await client.from('merchon').insert({ productName, price, availability, description });
  return checkError(response);
  
// only gets business column
export async function getBusinesses() {
  const resp = await client.from('merchon').select('*').eq('type', 'merchant');
  return checkError(resp);
}