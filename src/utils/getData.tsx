import axios from "axios";
import { HouseType } from "../types";

const BASE_URL = "http://localhost:3000/stays";

const getData = async () => {
  const { data } = await axios.get<HouseType[]>(BASE_URL);
  const newdata = data.map((dat) => {
    const id = crypto.randomUUID();
    return { ...dat, id };
  });

  return newdata;
};

export default getData;
