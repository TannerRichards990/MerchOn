import { checkError, client } from './client';

export async function createMerchantRow(email, type, business_info, business_image_name) {
  const response = await client.from('merchon').insert({ email, type, business_info, business_image_name });
  console.log(response);
  return checkError(response);
}
export async function createShopperRow(email, type,) {
  const response = await client.from('merchon').insert({ email, type });
  return checkError(response);
}

// adds new item to store (productName, price, availability, description, and image)
export async function addItem(item_name, item_price, item_availability, item_description, business_id) {
  const response = await client.from('business_items').insert({ item_name, item_price, item_availability, item_description, business_id });
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

export async function getShopItems(business_id) {
  const resp = await client.from('business_items').select('*').eq('business_id', business_id);
  return checkError(resp);
}

// const shopImageFile = event.target.files[0];
export async function uploadImage(shopImage) {
  const response = await client.storage.from('merchon-buckets').upload(`/business_images/${shopImage.name}`);
  return checkError(response);
}

// export async function fetchImage()