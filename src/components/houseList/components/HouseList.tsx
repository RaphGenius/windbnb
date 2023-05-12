import { HouseType } from "../../../types";
import HouseCard from "./HouseCard";

type Props = {
  houses: HouseType[] | undefined;
};

function HouseList({ houses }: Props) {
  if (!houses) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center gap-8">
      {houses.map((house) => (
        <article key={house.id}>
          <HouseCard house={house} />
        </article>
      ))}
    </div>
  );
}

export default HouseList;
