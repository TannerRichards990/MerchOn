import { createClient } from '@supabase/supabase-js';
import { checkError, client } from './client';

export async function createRow(email, type) {
  const response = await client.from('merchon').insert({ email, type });
  return checkError(response);
}
export async function createShopperRow(email, type) {
  const response = await client.from('merchon').insert({ email, type });
  return checkError(response);
}