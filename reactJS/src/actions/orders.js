import axios from 'axios';

export const getDiscount = async () => {
  const res = await axios.get("http://localhost:3001/order/discount");
  return res.data;
};
