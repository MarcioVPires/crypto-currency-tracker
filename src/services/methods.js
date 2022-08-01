import api from "@/services/api";
import { setList } from "@/utils/storageHandler";

const get = async (url) => {
  const { data } = await api.get(url);
  setList(data);
  //   console.log(data);
  return data;
};

const getDateTimeValue = async (date, coin) => {
  const to = Math.floor(new Date(date).getTime() / 1000);
  const from = to - 3600;

  const response = await api.get("/search-coins-date-time", {
    params: {
      coin,
      from,
      to,
    },
  });

  console.log(response.data[1]);

  return response.data[1];
};

export { get, getDateTimeValue };
