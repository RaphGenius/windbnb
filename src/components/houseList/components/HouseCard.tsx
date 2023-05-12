import React from "react";

import SuperHost from "./SuperHost";
import HouseCardType from "./HouseCardType";
import { HouseType } from "../../../types";
import Note from "./Note";

type Props = {
  house: HouseType;
};

function HouseCard({ house }: Props) {
  return (
    <div key={house.id} className="w-full max-w-md  flex flex-col">
      <div className="w-full max-h-72">
        <img
          className="  h-full w-full object-cover rounded-lg  "
          src={house.photo}
          alt={house.title}
        />
      </div>

      <div className="mt-4">
        {/* block de 3 */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            {house.superHost && <SuperHost />}
            <HouseCardType typeOfHouse={house.type} />
          </div>
          <div>{<Note note={house.rating} />}</div>
        </div>
        <p className="text-mainBlack font-bold font-montserratFont ">
          {house.title}{" "}
        </p>
      </div>
    </div>
  );
}

export default HouseCard;
