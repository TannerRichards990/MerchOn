import { checkError, client } from './client';

export async function createMerchantRow(email, type, business_info) {
  const response = await client.from('merchon').insert({ email, type, business_info });
  return checkError(response);
}
export async function createShopperRow(email, type,) {
  const response = await client.from('merchon').insert({ email, type });
  return checkError(response);
}