import axios from 'axios';

export const fetchPost = async (address: string, body: any) => {
  const response = await axios.post(address, body);
  return response.data;
};