import { checkError, client } from './client';

export async function createMerchantRow(email, type, business_info, business_image_name) {
  const response = await client.from('merchon').insert({ email, type, business_info, business_image_name });
  return checkError(response);
}

export async function createShopperRow(email, type,) {
  const response = await client.from('merchon').insert({ email, type });
  return checkError(response);
}

export async function addItem(item_name, item_price, item_availability, item_description, business_id) {
  const response = await client.from('business_items').insert({ item_name, item_price, item_availability, item_description, business_id });
  return checkError(response);
}

export async function getBusinesses() {
  const resp = await client.from('merchon').select('*').eq('type', 'merchant');
  return checkError(resp);
}

export async function getBusinessDetail(id) {
  const resp = await client.from('merchon').select('*').match({ id }).single();
  return checkError(resp);
}

export async function getShopItems(business_id) {
  const resp = await client.from('business_items').select('*').eq('business_id', business_id);
  return checkError(resp);
}

export async function uploadImage(shopImage) {
  const response = await client.storage.from('merchon-buckets').upload(`/business_images/${shopImage.name}`, shopImage);
  return checkError(response);
}

export async function updateBusinessImageName(id, business_image_name) {
  const response = await client.from('merchon').update({ business_image_name }).eq('id', id).single();
  return checkError(response);
}

export async function fetchImage(business_image_name) {
  const response = await client.storage.from('merchon-buckets').getPublicUrl(`business_images/${encodeURIComponent(business_image_name)}`);
  return checkError(response);
}

export async function fetchImageName(id) {
  const response = await client.from('merchon').select('business_image_name').match({ id }).single();
  return checkError(response);
}

export async function updateBusinessInfo(business_info, id) {
  const response = await client.from('merchon').select('*').match({ id }).update(business_info).single();
  return checkError(response);
}

export async function getProfile(id) {
  const resp = await client.from('merchon').select('*').match({ id }).single();
  return checkError(resp);
}

export async function changeMerchantRow(id, business_info) {
  const resp = await client.from('merchon').update({ business_info }).match({ id }).single();
  return checkError(resp);
}

export async function grabID(email) {
  const resp = await client.from('merchon').select('*').match({ email }).single();
  return checkError(resp);
}
