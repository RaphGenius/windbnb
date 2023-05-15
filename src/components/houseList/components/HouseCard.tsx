import SuperHost from "./SuperHost";
import HouseCardType from "./HouseCardType";
import { HouseType } from "../../../types";
import Note from "./Note";

type Props = {
  house: HouseType;
};

function HouseCard({ house }: Props) {
  return (
    <div
      key={house.id}
      className="w-full group cursor-pointer duration-300  hover:shadow-xl hover:shadow-mainBlack/10     max-w-xl h-[300px] flex flex-col rounded-lg"
    >
      <div className="w-full h-full rounded-lg   overflow-hidden ">
        <img
          className="  w-full group-hover:scale-110 duration-700 will-change-transform  object-cover rounded-lg  "
          src={house.photo}
          alt={house.title}
        />
      </div>

      <div className="mt-4 p-2">
        {/* block de 3 */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            {house.superHost && <SuperHost />}
            <HouseCardType typeOfHouse={house.type} />
          </div>
          <div>{<Note note={house.rating} />}</div>
        </div>
        <p className="text-mainBlack font-bold font-montserratFont truncate relative   ">
          {house.title}{" "}
        </p>
      </div>
    </div>
  );
}

export default HouseCard;
