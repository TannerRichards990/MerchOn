import { checkError, client } from './client';

export async function createMerchantRow(email, type, business_info) {
  const response = await client.from('merchon').insert({ email, type, business_info });
  return checkError(response);
}
export async function createShopperRow(email, type,) {
  const response = await client.from('merchon').insert({ email, type });
  return checkError(response);
}

// adds new item to store (productName, price, availability, description, and image)
export async function addItem(items) {
  const response = await client.from('merchon').insert(items);
  return checkError(response);
}

// only gets business column
export async function getBusinesses() {
  const resp = await client.from('merchon').select('*').eq('type', 'merchant');
  return checkError(resp);
}

export async function getBusinessDetail(id) {
  const resp = await client.from('merchon').select('*').match({ id }).single();
  return checkError(resp);
}