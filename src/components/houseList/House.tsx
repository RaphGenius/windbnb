import { useEffect, useState } from "react";
import getData from "../../utils/getData";
import { HouseType } from "../../types";
import Title from "./components/Title";
import HouseList from "./components/HouseList";

function House() {
  const [houses, setHouses] = useState<HouseType[]>([]);

  const fetchData = async () => {
    const data = await getData();
    setHouses(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center ">
        <Title title="Stay in finland" />
        <span>12+stay</span>
      </div>
      <div>
        <HouseList houses={houses} />
      </div>
    </div>
  );
}

export default House;
